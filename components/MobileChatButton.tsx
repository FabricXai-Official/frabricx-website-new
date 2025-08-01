"use client";

import React, { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import LiveChat from './LiveChat';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MobileChatButtonProps {
  className?: string;
}

export default function MobileChatButton({ className }: MobileChatButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasHapticSupport, setHasHapticSupport] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect touch device and haptic support
  useEffect(() => {
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      
      // Check for haptic feedback support
      const hasHaptic = 'vibrate' in navigator;
      setHasHapticSupport(hasHaptic);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Hide/show button based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide button when scrolling down, show when scrolling up
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

  const handleTouchStart = () => {
    if (isTouchDevice) {
      setIsPressed(true);
      
      // Haptic feedback
      if (hasHapticSupport) {
        navigator.vibrate(10);
      }
    }
  };

  const handleTouchEnd = () => {
    if (isTouchDevice) {
      setIsPressed(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      
      // Haptic feedback for keyboard users on touch devices
      if (isTouchDevice && hasHapticSupport) {
        navigator.vibrate(10);
      }
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    
    // Haptic feedback when opening
    if (open && isTouchDevice && hasHapticSupport) {
      navigator.vibrate(20);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            // Base styles
            "fixed z-50 rounded-full flex items-center justify-center transition-all duration-300 chatbot-button",
            // Responsive sizing
            "h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18", // Better touch targets
            // Responsive positioning
            "bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8",
            // Background and colors - Enhanced gradient
            "bg-gradient-to-br from-[#f2f827] via-[#e0e626] to-[#d4d91f]",
            "hover:from-[#e0e626] hover:via-[#d4d91f] hover:to-[#c8cd1a]",
            // Transform effects
            "hover:scale-110 active:scale-95",
            // Enhanced shadow effects
            "shadow-lg hover:shadow-2xl active:shadow-md",
            "shadow-[#f2f827]/20 hover:shadow-[#f2f827]/30",
            // Focus states
            "focus:outline-none focus:ring-4 focus:ring-[#f2f827]/50 focus:ring-offset-2 focus:ring-offset-[#13191D]",
            // Touch-specific styles
            isTouchDevice && "touch-manipulation",
            // Pressed state for touch devices
            isPressed && "scale-95 shadow-md",
            // Border for better definition
            "border-2 border-[#f2f827]/30 hover:border-[#f2f827]/50",
            // Enhanced animations
            "chatbot-float chatbot-glow",
            // Visibility transition
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
            // Open state
            isOpen && "scale-110 shadow-2xl",
            className
          )}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={() => !isTouchDevice && setIsPressed(true)}
          onMouseUp={() => !isTouchDevice && setIsPressed(false)}
          onMouseLeave={() => !isTouchDevice && setIsPressed(false)}
          onKeyDown={handleKeyDown}
          aria-label="Open AI chat assistant"
          aria-describedby="chat-button-description"
          role="button"
          tabIndex={0}
        >
          {/* Chat Icon */}
          <Image
            src="/icons/MARBIM.svg"
            alt="MARBIM Chat Assistant"
            width={32}
            height={32}
            className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 transition-transform duration-200 drop-shadow-lg"
            priority
          />
          
          {/* Enhanced pulse animation for attention */}
          <div className="absolute inset-0 rounded-full bg-[#f2f827] animate-ping opacity-30" />
          <div className="absolute inset-0 rounded-full bg-[#f2f827] animate-pulse opacity-10" />
          
          {/* Notification indicator */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#6B7280] hover:bg-[#9CA3AF] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-white/20 hover:scale-110">
            <span className="text-white text-xs font-bold tracking-wide">AI</span>
          </div>
          
          {/* Status indicator */}
          <div className={cn(
            "absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white transition-all duration-300",
            isOpen ? "bg-green-400" : "bg-[#f2f827]"
          )} />
        </button>
      </PopoverTrigger>
      
      <PopoverContent 
        className={cn(
          "p-0 bg-[#13191D] border border-[#34383B] shadow-2xl",
          // Responsive sizing
          "w-[calc(100vw-2rem)] sm:w-96 lg:w-[420px]",
          // Responsive positioning
          "bottom-20 right-4 sm:bottom-24 sm:right-6 lg:bottom-28 lg:right-8",
          // Mobile-specific styles
          isTouchDevice && "touch-manipulation",
          // Enhanced animations
          "animate-in slide-in-from-bottom-4 duration-300"
        )}
        side="top"
        align="end"
        sideOffset={8}
        collisionPadding={16}
      >
        <LiveChat className="w-full h-[450px] sm:h-[500px] lg:h-[550px]" />
      </PopoverContent>
      
      {/* Screen reader description */}
      <div id="chat-button-description" className="sr-only">
        Tap to open AI chat assistant. Get instant help with your questions about fabricXai&apos;s AI-powered solutions.
      </div>
      
      {/* Keyboard navigation hint for screen readers */}
      <div className="sr-only">
        Press Enter or Space to open the chat assistant. Use Tab to navigate through options once opened.
      </div>
    </Popover>
  );
} 