import { NextRequest, NextResponse } from 'next/server';
import { FabricXaiKnowledgeBase, defaultFabricXaiContent } from '@/lib/knowledge-base';
import { FabricXaiAIAgent, ChatMessage } from '@/lib/ai-agent';

// Initialize knowledge base and AI agent (in production, you'd want to cache these)
let knowledgeBase: FabricXaiKnowledgeBase | null = null;
let aiAgent: FabricXaiAIAgent | null = null;

async function initializeAI() {
  if (knowledgeBase && aiAgent) {
    return { knowledgeBase, aiAgent };
  }

  const openaiApiKey = process.env.OPENAI_API_KEY;
  
  if (!openaiApiKey) {
    throw new Error('OpenAI API key not configured');
  }

  knowledgeBase = new FabricXaiKnowledgeBase({
    openaiApiKey,
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  // Load default content
  await knowledgeBase.loadDocuments(defaultFabricXaiContent);
  
  aiAgent = new FabricXaiAIAgent({
    openaiApiKey,
    modelName: 'gpt-4',
    temperature: 0.7,
    maxTokens: 1000,
  }, knowledgeBase);

  return { knowledgeBase, aiAgent };
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Initialize AI if not already done
    const { aiAgent: agent } = await initializeAI();

    // Generate response
    const response = await agent.generateResponse(message, conversationHistory);

    return NextResponse.json({
      success: true,
      data: response
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : 'Internal server error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Health check endpoint
    const { knowledgeBase: kb } = await initializeAI();
    
    return NextResponse.json({
      success: true,
      status: 'ready',
      knowledgeBaseInitialized: kb.isInitialized()
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false,
        status: 'error',
        error: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    );
  }
} 