import OpenAI from 'openai';
import { FabricXaiKnowledgeBase } from './knowledge-base';

export interface AIAgentConfig {
  openaiApiKey: string;
  modelName?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIResponse {
  answer: string;
  sources: Array<{
    title: string;
    category: string;
    content: string;
    score: number;
  }>;
  confidence: number;
}

export class FabricXaiAIAgent {
  private openai: OpenAI;
  private knowledgeBase: FabricXaiKnowledgeBase;
  private config: AIAgentConfig;

  constructor(config: AIAgentConfig, knowledgeBase: FabricXaiKnowledgeBase) {
    this.config = {
      modelName: 'gpt-4',
      temperature: 0.7,
      maxTokens: 1000,
      ...config
    };
    
    this.openai = new OpenAI({
      apiKey: this.config.openaiApiKey,
    });
    
    this.knowledgeBase = knowledgeBase;
  }

  /**
   * Generate a response using RAG (Retrieval-Augmented Generation)
   */
  async generateResponse(
    userQuery: string,
    conversationHistory: ChatMessage[] = []
  ): Promise<AIResponse> {
    try {
      // Search for relevant documents
      const relevantDocs = await this.knowledgeBase.search(userQuery, 5);
      
      if (relevantDocs.length === 0) {
        return {
          answer: "I don't have specific information about that topic in my knowledge base. Could you please rephrase your question or ask about fabricXai's features, pricing, or services?",
          sources: [],
          confidence: 0.1
        };
      }

      // Prepare context from relevant documents
      const context = relevantDocs.map(doc => {
        const content = doc.pageContent;
        const metadata = doc.metadata;
        return `Source: ${metadata.title || 'Unknown'}\nCategory: ${metadata.category || 'General'}\nContent: ${content}\n---\n`;
      }).join('\n');

      // Create system prompt
      const systemPrompt = `You are a helpful AI assistant for fabricXai, an AI-powered platform for garment exporters, buying houses, and apparel brands. 

Your role is to provide accurate, helpful information about fabricXai's services, features, pricing, and capabilities based on the provided knowledge base.

Guidelines:
1. Always base your answers on the provided context from the knowledge base
2. Be conversational and friendly while maintaining professionalism
3. If you don't have information about something, say so clearly
4. Focus on fabricXai's solutions: BRM Intelligence and Production Intelligence
5. Mention specific benefits and features when relevant
6. Encourage users to book a demo or contact sales when appropriate
7. Keep responses concise but informative
8. Use bullet points or formatting when helpful

Current conversation context:
${conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')}

Knowledge base context:
${context}

Please provide a helpful response to the user's question.`;

      // Generate response using OpenAI
      const completion = await this.openai.chat.completions.create({
        model: this.config.modelName!,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userQuery }
        ],
        temperature: this.config.temperature,
        max_tokens: this.config.maxTokens,
      });

      const answer = completion.choices[0]?.message?.content || 'I apologize, but I was unable to generate a response. Please try again.';

      // Calculate confidence based on document relevance
      const confidence = this.calculateConfidence(relevantDocs);

      // Prepare sources for response
      const sources = relevantDocs.map(doc => ({
        title: doc.metadata.title || 'Unknown',
        category: doc.metadata.category || 'General',
        content: doc.pageContent.substring(0, 200) + '...',
        score: doc.metadata.score || 0.8
      }));

      return {
        answer,
        sources,
        confidence
      };

    } catch (error) {
      console.error('Error generating AI response:', error);
      return {
        answer: "I'm experiencing technical difficulties right now. Please try again in a moment, or contact our support team for immediate assistance.",
        sources: [],
        confidence: 0
      };
    }
  }

  /**
   * Calculate confidence score based on document relevance
   */
  private calculateConfidence(docs: any[]): number {
    if (docs.length === 0) return 0;
    
    // Simple confidence calculation based on number and quality of relevant docs
    const baseConfidence = Math.min(docs.length / 5, 1) * 0.8;
    const qualityBonus = docs.length > 2 ? 0.2 : 0;
    
    return Math.min(baseConfidence + qualityBonus, 1);
  }

  /**
   * Generate a quick response for simple queries
   */
  async generateQuickResponse(query: string): Promise<string> {
    const commonQueries = {
      'hello': "Hello! I'm your fabricXai Assistant. How can I help you today?",
      'hi': "Hi there! Welcome to fabricXai. What would you like to know about our AI-powered RMG solutions?",
      'help': "I'm here to help! You can ask me about:\n• fabricXai's features and services\n• Pricing and plans\n• BRM Intelligence\n• Production Intelligence\n• How to get started\n\nWhat would you like to know?",
      'demo': "Great! I'd be happy to help you book a demo. Our team will show you exactly how fabricXai can transform your RMG operations. Would you like me to connect you with our demo booking system?",
      'pricing': "fabricXai offers flexible pricing:\n\n🚀 Early Bird: Free Production Intelligence during beta\n💼 Professional: Full access to both solutions\n🏢 Enterprise: Custom solutions\n\nWould you like to discuss pricing options?",
      'contact': "I'd be happy to connect you with our sales team! They can provide personalized guidance and answer all your questions about fabricXai. Should I help you get in touch?",
      'features': "fabricXai offers two powerful solutions:\n\n🤖 BRM Intelligence: AI-powered buyer management with multilingual support\n⚙️ Production Intelligence: Real-time production tracking and optimization\n\nWhich would you like to learn more about?"
    };

    const lowerQuery = query.toLowerCase();
    
    for (const [key, response] of Object.entries(commonQueries)) {
      if (lowerQuery.includes(key)) {
        return response;
      }
    }

    // If no quick match, use RAG
    const aiResponse = await this.generateResponse(query);
    return aiResponse.answer;
  }

  /**
   * Check if the knowledge base is ready
   */
  isReady(): boolean {
    return this.knowledgeBase.isInitialized();
  }
} 