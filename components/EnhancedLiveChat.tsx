import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestDemoForm from "./RequestDemoForm";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { Send, Minimize2, Maximize2, FileText } from "lucide-react";
interface ChatMessage {
  id: string;
  message: string;
  sentTime: string;
  sender: "user" | "assistant";
  type: "text" | "options" | "quick-actions" | "sources";
  options?: QuickAction[];
  sources?: Array<{
    title: string;
    category: string;
    content: string;
    score: number;
  }>;
  confidence?: number;
}

interface AIChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: "demo" | "contact" | "sales" | "owner" | "info" | "pricing" | "learn-more" | "features" | "brm" | "production";
}

const EnhancedLiveChat = ({ className }: { className?: string }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      message: "Hello! I'm your fabricXai Assistant. I'm here to help you discover how AI can revolutionize your RMG operations. What would you like to know?",
      sentTime: "just now",
      sender: "assistant",
      type: "text",
    },
    {
      id: "2",
      message: "Choose an option below to get started:",
      sentTime: "just now",
      sender: "assistant",
      type: "options",
      options: [
        {
          id: "demo",
          title: "Book a Demo",
          description: "See fabricXai in action",
          icon: "🎯",
          action: "demo"
        },
        {
          id: "learn-more",
          title: "Learn More",
          description: "Ask me anything about fabricXai",
          icon: "🤖",
          action: "learn-more"
        },
        {
          id: "features",
          title: "Features",
          description: "Explore our solutions",
          icon: "⚡",
          action: "features"
        },
        {
          id: "pricing",
          title: "Pricing",
          description: "View our plans",
          icon: "💰",
          action: "pricing"
        }
      ]
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<AIChatMessage[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);



  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mobile when chat opens
  useEffect(() => {
    if (isTouchDevice && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isTouchDevice]);

  const handleQuickAction = async (action: QuickAction) => {
    // Add user selection message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: `I'd like to ${action.title.toLowerCase()}`,
      sentTime: "just now",
      sender: "user",
      type: "text",
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate typing
    setIsTyping(true);

    setTimeout(async () => {
      setIsTyping(false);
      
      let response: ChatMessage;
      
      switch (action.action) {
        case "demo":
          response = {
            id: (Date.now() + 1).toString(),
            message: "Great choice! Let me help you book a personalized demo. Our team will show you exactly how fabricXai can transform your RMG operations.",
            sentTime: "just now",
            sender: "assistant",
            type: "text",
          };
          setShowDemoForm(true);
          break;
          
        case "learn-more":
          response = {
            id: (Date.now() + 1).toString(),
            message: "Perfect! I'm your AI-powered knowledge assistant. You can ask me anything about fabricXai's features, services, pricing, or how our solutions work. What would you like to know?\n\nTry asking questions like:\n• What is BRM Intelligence?\n• How does Production Intelligence work?\n• What languages does the chatbot support?\n• Tell me about pricing plans\n• What are the benefits for garment exporters?",
            sentTime: "just now",
            sender: "assistant",
            type: "text",
          };
          break;
          
        case "features":
          response = {
            id: (Date.now() + 1).toString(),
            message: "fabricXai offers two powerful AI solutions:\n\n🤖 **BRM Intelligence**: AI-powered buyer relationship management with multilingual communication\n\n⚙️ **Production Intelligence**: Real-time production tracking and optimization\n\nBoth solutions are designed specifically for the RMG industry. Which would you like to learn more about?",
            sentTime: "just now",
            sender: "assistant",
            type: "text",
          };
          break;
          
        case "pricing":
          response = {
            id: (Date.now() + 1).toString(),
            message: "We offer flexible pricing plans:\n\n🚀 **Early Bird**: Free Production Intelligence during beta\n\n💼 **Professional**: Full access to both BRM & Production Intelligence\n\n🏢 **Enterprise**: Custom solutions for large operations\n\nWould you like to discuss pricing options with our sales team?",
            sentTime: "just now",
            sender: "assistant",
            type: "text",
          };
          break;
          
        case "brm":
          response = {
            id: (Date.now() + 1).toString(),
            message: "**BRM Intelligence** is our AI-powered buyer relationship management solution:\n\n• Automated buyer lead generation from LinkedIn\n• Multilingual chatbot supporting 40+ languages\n• Real-time buyer sentiment analysis\n• CRM integration and automated nurturing\n• AI-powered lead scoring and prioritization\n\nWould you like to know more about any specific feature?",
            sentTime: "just now",
            sender: "assistant",
            type: "text",
          };
          break;
          
        case "production":
          response = {
            id: (Date.now() + 1).toString(),
            message: "**Production Intelligence** provides real-time production tracking and optimization:\n\n• Live production line monitoring\n• Supply chain management and visibility\n• Quality control automation with computer vision\n• Performance analytics and reporting\n• IoT integration for smart factories\n\nWould you like to learn more about any specific aspect?",
            sentTime: "just now",
            sender: "assistant",
            type: "text",
          };
          break;
          
        default:
          response = {
            id: (Date.now() + 1).toString(),
            message: "I'm here to help! What specific information are you looking for about fabricXai?",
            sentTime: "just now",
            sender: "assistant",
            type: "text",
          };
      }

      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message,
      sentTime: "just now",
      sender: "user",
      type: "text",
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Add to conversation history for AI context
    const aiUserMessage: AIChatMessage = { role: 'user', content: message };
    setConversationHistory(prev => [...prev, aiUserMessage]);

    try {
      // Call Azure Function directly
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversationHistory
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success && data.data) {
        const assistantResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          message: data.data.answer,
          sentTime: "just now",
          sender: "assistant",
          type: data.data.sources && data.data.sources.length > 0 ? "sources" : "text",
          sources: data.data.sources,
          confidence: data.data.confidence,
        };

        // Add AI response to conversation history
        const aiAssistantMessage: AIChatMessage = { role: 'assistant', content: data.data.answer };
        setConversationHistory(prev => [...prev, aiAssistantMessage]);

        setMessages(prev => [...prev, assistantResponse]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Error generating response:', error);
      
      const errorResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: "I'm experiencing technical difficulties right now. Please try again in a moment, or contact our support team for immediate assistance.",
        sentTime: "just now",
        sender: "assistant",
        type: "text",
      };

      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className={cn("h-full flex flex-col bg-[#13191d] text-white", className)}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a2025] to-[#242a30] p-3 sm:p-4 border-b border-[#34383b] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f2f827] rounded-full flex items-center justify-center">
            <Image
              src="/icons/MARBIM.svg"
              alt="fabricXai Assistant"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm sm:text-base">fabricXai Assistant</h3>
            <p className="text-xs text-[#a8b0b7]">
              AI-powered RMG solutions
            </p>
          </div>
        </div>
        
        {/* Mobile-friendly controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 sm:p-2 text-[#a8b0b7] hover:text-white transition-colors rounded-lg hover:bg-[#242a30] focus:outline-none focus:ring-2 focus:ring-[#f2f827]/50"
            aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Messages - Hidden when minimized */}
      {!isMinimized && (
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-[#34383b] scrollbar-track-transparent">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] sm:max-w-[80%] ${msg.sender === "user" ? "bg-[#f2f827] text-[#13191d]" : "bg-[#242a30] text-white"} rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm`}>
                {msg.type === "text" && (
                  <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed">{msg.message}</div>
                )}
                
                {msg.type === "sources" && (
                  <div className="space-y-3">
                    <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed">{msg.message}</div>
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-3 p-3 bg-[#1a2025] rounded-lg border border-[#34383b]">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-[#f2f827]" />
                          <span className="text-xs font-medium text-[#f2f827]">Sources</span>
                          {msg.confidence && (
                            <span className="text-xs text-[#a8b0b7]">
                              (Confidence: {Math.round(msg.confidence * 100)}%)
                            </span>
                          )}
                        </div>
                        <div className="space-y-2">
                          {msg.sources.slice(0, 3).map((source, index) => (
                            <div key={index} className="text-xs">
                              <div className="font-medium text-[#a8b0b7]">{source.title}</div>
                              <div className="text-[#6b7280]">{source.content}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {msg.type === "options" && msg.options && (
                  <div className="space-y-3">
                    <div className="text-sm mb-3">{msg.message}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {msg.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleQuickAction(option)}
                          className="bg-[#1a2025] hover:bg-[#2a2d30] border border-[#34383b] rounded-xl p-3 text-left transition-all duration-200 hover:border-[#f2f827]/50 active:scale-95 touch-manipulation min-h-[60px] sm:min-h-[70px]"
                        >
                          <div className="text-xl sm:text-2xl mb-1">{option.icon}</div>
                          <div className="font-medium text-sm">{option.title}</div>
                          <div className="text-xs text-[#a8b0b7]">{option.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#242a30] text-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#a8b0b7] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#a8b0b7] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-[#a8b0b7] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                  <span className="text-sm text-[#a8b0b7]">
                    AI is thinking...
                  </span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input - Hidden when minimized */}
      {!isMinimized && (
        <div className="p-3 sm:p-4 border-t border-[#34383b] bg-[#1a2025]">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about fabricXai..."
              className="flex-1 bg-[#13191d] border border-[#34383b] text-white placeholder-[#6b7280] rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 focus:outline-none focus:border-[#f2f827] focus:ring-2 focus:ring-[#f2f827]/20 transition-colors min-h-[44px] text-sm sm:text-base"
              onKeyPress={handleKeyPress}
              aria-label="Type your message"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
              className="bg-[#f2f827] text-[#13191d] px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl hover:bg-[#e0e626] active:scale-95 transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#f2f827]/50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          {/* AI Status and Mobile tip */}
          <div className="mt-2 text-center">
            <p className="text-[#f2f827] text-xs">
              🤖 <strong>AI Assistant Ready:</strong> Ask me anything about fabricXai&apos;s features, pricing, or services
            </p>
          </div>
        </div>
      )}

      {/* Forms */}
      <Dialog open={showDemoForm} onOpenChange={setShowDemoForm}>
        <DialogContent showCloseButton={false} className="w-[95vw] max-w-md sm:max-w-lg">
          <DialogHeader>
            <VisuallyHidden>
              <DialogTitle>Book Demo</DialogTitle>
            </VisuallyHidden>
          </DialogHeader>
          <div>
            <RequestDemoForm />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent showCloseButton={false} className="w-[95vw] max-w-md sm:max-w-lg">
          <DialogHeader>
            <VisuallyHidden>
              <DialogTitle>Contact Sales</DialogTitle>
            </VisuallyHidden>
          </DialogHeader>
          <div>
            <ContactForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EnhancedLiveChat; 