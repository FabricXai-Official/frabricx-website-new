const OpenAI = require('openai');
const { Document } = require('langchain/document');
const { RecursiveCharacterTextSplitter } = require('langchain/text_splitter');
const { MemoryVectorStore } = require('langchain/vectorstores/memory');
const { OpenAIEmbeddings } = require('@langchain/openai');

// Global variables to cache the knowledge base and AI agent
let knowledgeBase = null;
let aiAgent = null;

// Default fabricXai knowledge base content
const defaultFabricXaiContent = [
  {
    type: 'text',
    content: `
# fabricXai Platform Overview

fabricXai is an end-to-end AI-powered platform designed specifically for garment exporters, buying houses, and apparel brands. Our platform revolutionizes RMG operations through intelligent automation and data-driven insights.

## Core Solutions

### BRM Intelligence (Buyer Relationship Management)
- AI-powered buyer lead generation and scoring
- Multilingual chatbot supporting 40+ languages
- LinkedIn monitoring and automated outreach
- CRM integration with social platforms
- Real-time buyer sentiment analysis
- Automated nurturing sequences

### Production Intelligence
- Real-time production tracking and monitoring
- Supply chain optimization and management
- Quality control automation
- Inventory management and forecasting
- Performance analytics and reporting
- IoT integration for smart factories

## Key Features

### Multilingual Support
- 40+ languages including Bangla, Spanish, French, Chinese
- Voice and text input capabilities
- Real-time translation and communication
- Cultural context awareness

### AI-Powered Lead Generation
- Automated buyer discovery from LinkedIn and other platforms
- AI scoring and prioritization of leads
- Personalized outreach strategies
- Conversion tracking and optimization

### Real-Time Analytics
- Production performance metrics
- Supply chain visibility
- Quality control dashboards
- Predictive analytics for demand forecasting

### Integration Capabilities
- ERP system integration
- CRM platform connectivity
- Accounting software compatibility
- API-based custom integrations

## Technology Stack

### AI & Machine Learning
- OpenAI GPT models for natural language processing
- Custom AI models for RMG-specific tasks
- Machine learning for predictive analytics
- Computer vision for quality control

### Cloud Infrastructure
- Scalable cloud architecture
- Real-time data processing
- Secure data storage and transmission
- High availability and reliability

### Security & Compliance
- Enterprise-grade encryption
- GDPR compliance
- SOC 2 Type II certification
- Regular security audits

## Benefits

### For Garment Exporters
- 60% reduction in lead generation time
- 40% increase in buyer conversion rates
- 30% improvement in production efficiency
- 50% reduction in communication barriers

### For Buying Houses
- Automated buyer matching
- Streamlined communication workflows
- Real-time order tracking
- Enhanced client relationship management

### For Apparel Brands
- Transparent supply chain visibility
- Quality assurance automation
- Faster time-to-market
- Cost optimization through data insights

## Pricing Plans

### Early Bird Program
- Free Production Intelligence during beta
- 60% discount for first 6 months
- Comprehensive training included
- Early access to new features

### Professional Plan
- Full access to BRM & Production Intelligence
- Standard support
- Monthly subscription model
- Scalable pricing based on usage

### Enterprise Plan
- Custom solutions for large operations
- Dedicated support team
- Advanced analytics and reporting
- Custom integrations and APIs

## Implementation Process

### Phase 1: Assessment & Planning
- Current system analysis
- Customization requirements
- Integration planning
- Training schedule development

### Phase 2: Setup & Configuration
- Platform installation and configuration
- Data migration and integration
- Custom workflow setup
- User training and onboarding

### Phase 3: Launch & Optimization
- Go-live support
- Performance monitoring
- Continuous optimization
- Regular updates and improvements

## Support & Training

### Comprehensive Training
- User interface training
- Workflow optimization
- Best practices guidance
- Ongoing support and consultation

### Technical Support
- 24/7 technical assistance
- Regular system updates
- Performance monitoring
- Custom development services

## Success Stories

### Case Study 1: Large Garment Exporter
- 45% increase in buyer inquiries
- 35% reduction in response time
- 25% improvement in order conversion
- ROI achieved within 6 months

### Case Study 2: Buying House
- Automated 80% of lead generation
- 50% reduction in manual work
- Improved client satisfaction scores
- Expanded market reach by 60%

## Future Roadmap

### Q2 2024
- Advanced AI models for better accuracy
- Enhanced mobile application
- Additional language support
- Advanced analytics dashboard

### Q3 2024
- Blockchain integration for transparency
- Advanced predictive analytics
- IoT device integration
- Custom AI model training

### Q4 2024
- Global expansion features
- Advanced automation workflows
- Machine learning optimization
- Enterprise-grade security enhancements
    `,
    metadata: {
      title: 'fabricXai Platform Overview',
      category: 'platform',
      version: '1.0'
    }
  },
  {
    type: 'text',
    content: `
# BRM Intelligence Features

## Buyer Lead Generation
- Automated discovery of potential buyers from LinkedIn and other professional networks
- AI-powered scoring system to prioritize high-value prospects
- Real-time monitoring of buyer activities and interests
- Personalized outreach strategies based on buyer behavior

## Multilingual Communication
- Support for 40+ languages including Bangla, Spanish, French, Chinese, Arabic, Hindi
- Real-time translation capabilities
- Voice-to-text and text-to-voice conversion
- Cultural context awareness for better communication

## CRM Integration
- Seamless integration with existing CRM systems
- Automated contact management and follow-up
- Lead tracking and conversion analytics
- Email and social media integration

## LinkedIn Monitoring
- Real-time monitoring of target buyer profiles
- Automated engagement with relevant content
- Lead scoring based on LinkedIn activity
- Connection request automation with personalized messages

## Sentiment Analysis
- AI-powered analysis of buyer communications
- Early warning system for potential issues
- Automated response suggestions
- Relationship health monitoring

## Automated Nurturing
- Personalized email sequences
- Social media engagement automation
- Follow-up scheduling and reminders
- Content recommendation based on buyer interests
    `,
    metadata: {
      title: 'BRM Intelligence Features',
      category: 'brm',
      version: '1.0'
    }
  },
  {
    type: 'text',
    content: `
# Production Intelligence Features

## Real-Time Monitoring
- Live production line tracking
- Real-time performance metrics
- Automated alert system for issues
- Dashboard with key performance indicators

## Supply Chain Management
- End-to-end supply chain visibility
- Inventory tracking and forecasting
- Supplier performance monitoring
- Automated reorder point calculations

## Quality Control
- Automated quality inspection using computer vision
- Defect detection and classification
- Quality metrics tracking and reporting
- Corrective action recommendations

## Performance Analytics
- Production efficiency analysis
- Cost optimization insights
- Capacity planning tools
- Predictive maintenance scheduling

## IoT Integration
- Smart sensor integration
- Equipment monitoring and diagnostics
- Environmental monitoring
- Energy consumption optimization

## Reporting & Insights
- Customizable reports and dashboards
- Trend analysis and forecasting
- Comparative performance analysis
- Executive summary generation
    `,
    metadata: {
      title: 'Production Intelligence Features',
      category: 'production',
      version: '1.0'
    }
  }
];

class FabricXaiKnowledgeBase {
  constructor(config) {
    this.vectorStore = null;
    this.config = {
      modelName: 'text-embedding-ada-002',
      chunkSize: 1000,
      chunkOverlap: 200,
      ...config
    };
    
    this.embeddings = new OpenAIEmbeddings({
      openAIApiKey: this.config.openaiApiKey,
      modelName: this.config.modelName,
    });
  }

  async loadDocuments(sources) {
    const documents = [];
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: this.config.chunkSize,
      chunkOverlap: this.config.chunkOverlap,
    });

    for (const source of sources) {
      // Create document directly from content
      const doc = new Document({
        pageContent: source.content,
        metadata: {
          ...source.metadata,
          sourceType: source.type,
          timestamp: new Date().toISOString(),
        }
      });
      
      documents.push(doc);
    }

    // Split documents into chunks
    const splitDocs = await textSplitter.splitDocuments(documents);
    
    // Create vector store
    this.vectorStore = await MemoryVectorStore.fromDocuments(
      splitDocs,
      this.embeddings
    );

    return splitDocs.length;
  }

  async search(query, k = 5) {
    if (!this.vectorStore) {
      throw new Error('Knowledge base not initialized. Please load documents first.');
    }

    const results = await this.vectorStore.similaritySearch(query, k);
    return results;
  }

  isInitialized() {
    return this.vectorStore !== null;
  }
}

class FabricXaiAIAgent {
  constructor(config, knowledgeBaseInstance) {
    this.config = {
      modelName: 'gpt-4',
      temperature: 0.7,
      maxTokens: 1000,
      ...config
    };
    
    this.openai = new OpenAI({
      apiKey: this.config.openaiApiKey,
    });
    
    this.knowledgeBase = knowledgeBaseInstance;
  }

  async generateResponse(userQuery, conversationHistory = []) {
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
        model: this.config.modelName,
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

  calculateConfidence(docs) {
    if (docs.length === 0) return 0;
    
    // Simple confidence calculation based on number and quality of relevant docs
    const baseConfidence = Math.min(docs.length / 5, 1) * 0.8;
    const qualityBonus = docs.length > 2 ? 0.2 : 0;
    
    return Math.min(baseConfidence + qualityBonus, 1);
  }

  async generateQuickResponse(query) {
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

  isReady() {
    return this.knowledgeBase.isInitialized();
  }
}

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

module.exports = async function (context, req) {
  context.log('AI Chat function processed a request.');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    context.res = {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
    return;
  }

  // Handle GET request for health check
  if (req.method === 'GET') {
    try {
      const { knowledgeBase: kb } = await initializeAI();
      
      context.res = {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({
          success: true,
          status: 'ready',
          knowledgeBaseInitialized: kb.isInitialized()
        })
      };
    } catch (error) {
      context.res = {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({
          success: false,
          status: 'error',
          error: error.message
        })
      };
    }
    return;
  }

  // Handle POST request for chat
  if (req.method === 'POST') {
    try {
      const { message, conversationHistory = [] } = req.body;

      if (!message || typeof message !== 'string') {
        context.res = {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          },
          body: JSON.stringify({
            error: 'Message is required and must be a string'
          })
        };
        return;
      }

      // Initialize AI if not already done
      const { aiAgent: agent } = await initializeAI();

      // Generate response
      const response = await agent.generateResponse(message, conversationHistory);

      context.res = {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({
          success: true,
          data: response
        })
      };

    } catch (error) {
      context.log.error('Chat API error:', error);
      
      context.res = {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({
          error: 'Failed to generate response',
          details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
        })
      };
    }
  } else {
    // Handle other methods
    context.res = {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        error: 'Method not allowed'
      })
    };
  }
};