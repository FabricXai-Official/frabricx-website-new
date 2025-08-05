export interface KnowledgeBaseConfig {
  openaiApiKey: string;
  chunkSize: number;
  chunkOverlap: number;
}

export interface Document {
  content: string;
  metadata?: Record<string, any>;
}

export class FabricXaiKnowledgeBase {
  private config: KnowledgeBaseConfig;
  private documents: Document[] = [];
  private initialized: boolean = false;

  constructor(config: KnowledgeBaseConfig) {
    this.config = config;
  }

  async loadDocuments(documents: Document[]): Promise<void> {
    this.documents = documents;
    this.initialized = true;
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  async search(query: string): Promise<Document[]> {
    // Basic implementation - in production, this would use vector search
    return this.documents.filter(doc => 
      doc.content.toLowerCase().includes(query.toLowerCase())
    );
  }
}

export const defaultFabricXaiContent: Document[] = [
  {
    content: "FabricX AI is an innovative AI-powered platform that helps businesses streamline their operations and improve efficiency.",
    metadata: { source: "company_overview" }
  },
  {
    content: "Our platform offers advanced features including intelligent automation, data analysis, and predictive insights.",
    metadata: { source: "features" }
  }
]; 