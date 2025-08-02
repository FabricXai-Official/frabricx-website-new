"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import EnhancedLiveChat from "./EnhancedLiveChat";
import { MessageSquare } from "lucide-react";

/**
 * Example component showing how to integrate the enhanced chatbot
 * with RAG functionality into any page
 */
export default function ExampleIntegration() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#f2f827] text-[#13191d] p-4 rounded-full shadow-lg hover:bg-[#e0e626] transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f2f827]/50"
            aria-label="Open AI Assistant"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        </DialogTrigger>
        
        <DialogContent 
          showCloseButton={false} 
          className="w-[95vw] h-[80vh] max-w-2xl p-0 border-0 bg-transparent"
        >
          <VisuallyHidden>
            <h2>fabricXai AI Assistant</h2>
          </VisuallyHidden>
          
          <div className="w-full h-full rounded-2xl overflow-hidden border border-[#34383b] bg-[#13191d] shadow-2xl">
            <EnhancedLiveChat />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/**
 * Alternative integration for pages that already have the MobileChatButton
 * Replace the existing MobileChatButton with this enhanced version
 */
export function EnhancedMobileChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll-based visibility (same as original MobileChatButton)
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    
    // Haptic feedback on mobile
    if (open && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <button
            className={`relative h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 bg-[#f2f827] rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f2f827]/50 ${
              isOpen ? 'ring-2 ring-white/20' : ''
            }`}
            aria-label="Chat with fabricXai AI Assistant"
          >
            <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#13191d] mx-auto" />
            
            {/* Status indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#13191d] animate-pulse"></div>
          </button>
        </DialogTrigger>
        
        <DialogContent 
          showCloseButton={false} 
          className="w-[calc(100vw-2rem)] sm:w-96 lg:w-[420px] h-[600px] sm:h-[700px] p-0 border-0 bg-transparent"
        >
          <VisuallyHidden>
            <h2>fabricXai AI Assistant - Ask me anything about our services, features, and solutions</h2>
          </VisuallyHidden>
          
          <div className="w-full h-full rounded-2xl overflow-hidden border border-[#34383b] bg-[#13191d] shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200">
            <EnhancedLiveChat />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 