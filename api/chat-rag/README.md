# Chat RAG Azure Function

POST this function with JSON body:

```
{ "message": "What is FabricXai?", "history": [{"role":"user","content":"..."}] }
```

Env vars (choose one stack):

OpenAI (non-Azure):
- OPENAI_API_KEY
- OPENAI_CHAT_MODEL (optional, default gpt-4o-mini)
- OPENAI_EMBEDDING_MODEL (optional, default text-embedding-3-small)

Azure OpenAI:
- AZURE_OPENAI_ENDPOINT (e.g., https://your-resource.openai.azure.com)
- AZURE_OPENAI_API_KEY
- AZURE_OPENAI_API_VERSION (optional, default 2024-10-21)
- AZURE_OPENAI_CHAT_DEPLOYMENT (e.g., gpt-4o-mini)
- AZURE_OPENAI_EMBEDDING_DEPLOYMENT (e.g., text-embedding-3-large or ada-002)

Common:
- RAG_TOP_K (optional, default 5)

The function reads `lib/knowlegde.md` from repo root and builds embeddings in-memory.

