# fabricXai RAG Chatbot System

This document explains how to set up and use the AI-powered chatbot with RAG (Retrieval-Augmented Generation) functionality for the fabricXai website.

## Overview

The enhanced chatbot system includes:

1. **Knowledge Base Service** (`lib/knowledge-base.ts`) - Handles document processing and vector storage
2. **AI Agent** (`lib/ai-agent.ts`) - Manages OpenAI integration and response generation
3. **Enhanced LiveChat Component** (`components/EnhancedLiveChat.tsx`) - UI component with RAG integration

## Features

- **RAG-powered responses** using OpenAI GPT-4 and LangChain
- **Knowledge base** with comprehensive fabricXai information
- **Source citations** showing where information comes from
- **Confidence scoring** for response accuracy
- **Conversation history** for context-aware responses
- **Fallback responses** when AI is unavailable

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
```

### 3. OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and add it to your `.env.local` file

### 4. Replace Chatbot Component

To use the enhanced chatbot, replace the import in your pages:

```typescript
// Replace this:
import LiveChat from "@/components/LiveChat";

// With this:
import EnhancedLiveChat from "@/components/EnhancedLiveChat";
```

And update the component usage:

```typescript
// Replace this:
<LiveChat />

// With this:
<EnhancedLiveChat />
```

## Knowledge Base Content

The system comes with pre-loaded fabricXai information including:

- Platform overview and features
- BRM Intelligence details
- Production Intelligence capabilities
- Pricing plans
- Benefits and use cases
- Technology stack
- Implementation process

## Adding Custom Content

### Adding Text Content

```typescript
import { FabricXaiKnowledgeBase } from '@/lib/knowledge-base';

const knowledgeBase = new FabricXaiKnowledgeBase({
  openaiApiKey: 'your-api-key'
});

await knowledgeBase.loadDocuments([
  {
    type: 'text',
    content: 'Your custom content here...',
    metadata: {
      title: 'Custom Document',
      category: 'custom',
      version: '1.0'
    }
  }
]);
```

### Adding PDF Content

```typescript
// For PDF files, you'll need to convert them to Buffer first
const pdfBuffer = fs.readFileSync('path/to/your/document.pdf');

await knowledgeBase.loadDocuments([
  {
    type: 'pdf',
    content: pdfBuffer,
    metadata: {
      title: 'PDF Document',
      category: 'documentation',
      version: '1.0'
    }
  }
]);
```

## Usage Examples

### Basic Questions the AI Can Answer

- "What is fabricXai?"
- "Tell me about BRM Intelligence"
- "How does Production Intelligence work?"
- "What languages does the chatbot support?"
- "What are the pricing plans?"
- "What are the benefits for garment exporters?"
- "How does the implementation process work?"
- "What technology does fabricXai use?"

### Advanced Features

1. **Source Citations**: When the AI provides information, it shows the source documents
2. **Confidence Scoring**: Each response includes a confidence percentage
3. **Context Awareness**: The AI remembers conversation history for better responses
4. **Fallback Mode**: Works even without OpenAI API key (limited functionality)

## Configuration Options

### AI Agent Configuration

```typescript
const agent = new FabricXaiAIAgent({
  openaiApiKey: 'your-api-key',
  modelName: 'gpt-4', // or 'gpt-3.5-turbo'
  temperature: 0.7, // 0.0 to 1.0
  maxTokens: 1000
}, knowledgeBase);
```

### Knowledge Base Configuration

```typescript
const knowledgeBase = new FabricXaiKnowledgeBase({
  openaiApiKey: 'your-api-key',
  modelName: 'text-embedding-ada-002',
  chunkSize: 1000, // Text chunk size for processing
  chunkOverlap: 200 // Overlap between chunks
});
```

## Troubleshooting

### Common Issues

1. **"OpenAI API key not configured"**
   - Check your `.env.local` file
   - Ensure the API key is valid
   - Restart your development server

2. **"Failed to initialize AI agent"**
   - Check your internet connection
   - Verify OpenAI API key permissions
   - Check browser console for detailed errors

3. **Slow responses**
   - Consider using GPT-3.5-turbo instead of GPT-4
   - Reduce maxTokens setting
   - Optimize knowledge base chunk size

### Performance Optimization

1. **Reduce API calls**: Use quick responses for common queries
2. **Optimize chunks**: Adjust chunkSize and chunkOverlap
3. **Cache responses**: Implement response caching for repeated questions
4. **Use fallback**: Graceful degradation when AI is unavailable

## Security Considerations

1. **API Key Security**: Never expose API keys in client-side code
2. **Rate Limiting**: Implement rate limiting for API calls
3. **Input Validation**: Sanitize user inputs
4. **Error Handling**: Don't expose sensitive information in error messages

## Cost Management

1. **Monitor Usage**: Track OpenAI API usage
2. **Optimize Queries**: Use efficient prompts
3. **Cache Responses**: Store common responses
4. **Fallback Mode**: Provide basic responses without API calls

## Future Enhancements

1. **Vector Database**: Replace in-memory storage with persistent vector DB
2. **Multi-language Support**: Add support for multiple languages
3. **File Upload**: Allow users to upload their own documents
4. **Analytics**: Track user interactions and improve responses
5. **Custom Training**: Fine-tune models on fabricXai-specific data

## Support

For technical support or questions about the RAG system:

1. Check the browser console for error messages
2. Verify your OpenAI API key and permissions
3. Ensure all dependencies are properly installed
4. Check the network tab for API call failures

## License

This RAG system is part of the fabricXai website project and follows the same licensing terms. 