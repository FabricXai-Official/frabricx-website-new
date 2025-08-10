const fs = require('fs');
const path = require('path');


// Simple in-memory cache for embeddings during function lifetime
let cached = {
  fileMtimeMs: null,
  chunks: [],
  embeddings: [],
};

/**
 * Split text into overlapping chunks
 */
function chunkText(text, chunkSize = 1000, overlap = 200) {
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    const chunk = text.slice(start, end);
    chunks.push(chunk);
    if (end === text.length) break;
    start = end - overlap;
  }
  return chunks;
}

async function ensureEmbeddingsLoaded(context) {
  const kbPathCandidates = [
    path.join(__dirname, 'knowledge.md'),
    path.join(__dirname, '..', '..', 'lib', 'knowlegde.md'),
    path.join(process.cwd(), 'lib', 'knowlegde.md'),
  ];

  let kbPath = null;
  for (const p of kbPathCandidates) {
    if (fs.existsSync(p)) { kbPath = p; break; }
  }

  if (!kbPath) {
    context.log('Knowledge file not found');
    return { chunks: [], embeddings: [] };
  }

  const stat = fs.statSync(kbPath);
  if (cached.fileMtimeMs === stat.mtimeMs && cached.chunks.length && cached.embeddings.length) {
    return cached;
  }

  const raw = fs.readFileSync(kbPath, 'utf8');
  const chunks = chunkText(raw, 1200, 200);

  const useAzure = !!process.env.AZURE_OPENAI_ENDPOINT;
  
  // Initialize client for either Azure OpenAI or OpenAI
  let embedder;
  if (useAzure) {
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2024-10-21';
    const embeddingDeployment = process.env.AZURE_OPENAI_EMBEDDING_DEPLOYMENT;
    if (!endpoint || !apiKey || !embeddingDeployment) {
      throw new Error('Missing Azure OpenAI env: AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, AZURE_OPENAI_EMBEDDING_DEPLOYMENT');
    }
    const { OpenAIClient, AzureKeyCredential } = await import('@azure/openai');
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey), { apiVersion });
    embedder = async (inputs) => {
      const res = await client.getEmbeddings(embeddingDeployment, inputs);
      // Azure returns { data: [{ embedding }] }
      return res.data.map(d => d.embedding);
    };
  } else {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }
    const { default: OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    embedder = async (inputs) => {
      const res = await client.embeddings.create({
        model: process.env.OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small',
        input: inputs,
      });
      return res.data.map(d => d.embedding);
    };
  }

  // Create embeddings in small batches to avoid large payloads
  const embeddings = [];
  const batchSize = 20;
  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize);
    const batchEmbeds = await embedder(batch);
    embeddings.push(...batchEmbeds);
  }

  cached = { fileMtimeMs: stat.mtimeMs, chunks, embeddings };
  return cached;
}

function cosineSimilarity(a, b) {
  let dot = 0, aMag = 0, bMag = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    aMag += a[i] * a[i];
    bMag += b[i] * b[i];
  }
  return dot / (Math.sqrt(aMag) * Math.sqrt(bMag) + 1e-8);
}

function topKSimilar(queryEmbedding, embeddings, k = 5) {
  const sims = embeddings.map((emb, idx) => ({ idx, score: cosineSimilarity(queryEmbedding, emb) }));
  sims.sort((a, b) => b.score - a.score);
  return sims.slice(0, k);
}

module.exports = async function (context, req) {
  context.log('chat-rag function invoked');

  // CORS preflight
  if (req.method === 'OPTIONS') {
    context.res = {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    };
    return;
  }

  try {
    const { message, history } = (req.body || {});
    if (!message || typeof message !== 'string') {
      context.res = {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: { error: 'Field "message" is required' }
      };
      return;
    }

    // Load KB and embeddings
    const { chunks, embeddings } = await ensureEmbeddingsLoaded(context);

    // If KB unavailable, fallback to guardrail response
    if (!chunks.length) {
      context.res = {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: {
          success: true,
          data: {
            role: 'assistant',
            content: 'Our knowledge base is initializing. Please try again shortly or ask about FabricXai offerings.',
            timestamp: new Date().toISOString()
          }
        }
      };
      return;
    }

    // Embed the query
    const useAzure = !!process.env.AZURE_OPENAI_ENDPOINT;
    let queryEmbedding;
    if (useAzure) {
      const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
      const apiKey = process.env.AZURE_OPENAI_API_KEY;
      const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2024-10-21';
      const embeddingDeployment = process.env.AZURE_OPENAI_EMBEDDING_DEPLOYMENT;
      const { OpenAIClient, AzureKeyCredential } = await import('@azure/openai');
      const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey), { apiVersion });
      const qres = await client.getEmbeddings(embeddingDeployment, [message]);
      queryEmbedding = qres.data[0].embedding;
    } else {
      const apiKey = process.env.OPENAI_API_KEY;
      const { default: OpenAI } = await import('openai');
      const client = new OpenAI({ apiKey });
      const q = await client.embeddings.create({
        model: process.env.OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small',
        input: message
      });
      queryEmbedding = q.data[0].embedding;
    }

    // Retrieve top chunks
    const topK = topKSimilar(queryEmbedding, embeddings, Number(process.env.RAG_TOP_K || 5));
    const contextText = topK.map(({ idx, score }, rank) => `[[Doc ${rank + 1} score=${score.toFixed(3)}]]\n${chunks[idx]}`).join('\n\n');

    // Build system prompt to keep bot exclusive to FabricXai
    const systemPrompt = `You are FabricXai's exclusive AI assistant. Only answer using the provided company context. If the answer isn't in context, say you don't have enough information and offer to connect to sales (joinbeta@fabricxai.com). Keep answers concise and helpful.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Context:\n${contextText}\n\nUser question: ${message}` }
    ];

    if (Array.isArray(history)) {
      // Optionally include brief history last 2 items for continuity (user/assistant pairs)
      const trimmed = history.slice(-4).map(m => ({ role: m.role, content: m.content })).filter(m => m.role === 'user' || m.role === 'assistant');
      messages.splice(1, 0, ...trimmed);
    }

    const temperature = Number(process.env.OPENAI_TEMPERATURE || 0.2);
    let answer = 'Sorry, I could not generate a response.';
    if (useAzure) {
      const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
      const apiKey = process.env.AZURE_OPENAI_API_KEY;
      const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2024-10-21';
      const chatDeployment = process.env.AZURE_OPENAI_CHAT_DEPLOYMENT;
      if (!chatDeployment) {
        throw new Error('AZURE_OPENAI_CHAT_DEPLOYMENT not set');
      }
      const { OpenAIClient, AzureKeyCredential } = await import('@azure/openai');
      const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey), { apiVersion });
      const resp = await client.getChatCompletions(chatDeployment, messages, { temperature });
      answer = resp.choices?.[0]?.message?.content || answer;
    } else {
      const apiKey = process.env.OPENAI_API_KEY;
      const { default: OpenAI } = await import('openai');
      const client = new OpenAI({ apiKey });
      const model = process.env.OPENAI_CHAT_MODEL || 'gpt-4o-mini';
      const completion = await client.chat.completions.create({ model, temperature, messages });
      answer = completion.choices?.[0]?.message?.content || answer;
    }

    context.res = {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: {
        success: true,
        data: {
          role: 'assistant',
          content: answer,
          sources: topK.map(({ idx, score }) => ({ index: idx, score })),
          timestamp: new Date().toISOString(),
        }
      }
    };
  } catch (err) {
    context.log.error('chat-rag error', err);
    context.res = {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: {
        error: 'Failed to generate response',
        details: process.env.NODE_ENV === 'development' ? (err.message || String(err)) : undefined
      }
    };
  }
};


