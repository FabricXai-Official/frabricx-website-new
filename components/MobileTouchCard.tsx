"use client";

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MobileTouchCardProps {
  children: React.ReactNode;
  className?: string;
  expandedContent?: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  showExpandIndicator?: boolean;
  ariaLabel?: string;
}

export default function MobileTouchCard({
  children,
  className,
  expandedContent,
  isExpanded: controlledExpanded,
  onToggle,
  showExpandIndicator = true,
  ariaLabel
}: MobileTouchCardProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Determine if we're using controlled or uncontrolled state
  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;
  
  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);
  
  const handleToggle = () => {
    if (isControlled) {
      onToggle?.(!expanded);
    } else {
      setInternalExpanded(!internalExpanded);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 ease-in-out",
        "hover:scale-105 hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]",
        "focus-within:ring-2 focus-within:ring-[#f2f827] focus-within:ring-opacity-50",
        "cursor-pointer select-none",
        className
      )}
      onClick={isTouchDevice ? handleToggle : undefined}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel}
      aria-expanded={expanded}
      aria-pressed={expanded}
    >
      {/* Main content */}
      <div className="relative">
        {children}
        
        {/* Expand indicator for touch devices */}
        {isTouchDevice && showExpandIndicator && expandedContent && (
          <div className="absolute top-2 right-2 transition-transform duration-300">
            <svg
              className={cn(
                "w-5 h-5 text-[#f2f827] transition-transform duration-300",
                expanded && "rotate-180"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        )}
      </div>
      
      {/* Expanded content with smooth animation */}
      {expandedContent && (
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            expanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="pt-2 border-t border-yellow-400/20">
            {expandedContent}
          </div>
        </div>
      )}
      
      {/* Touch feedback overlay */}
      {isTouchDevice && (
        <div className="absolute inset-0 bg-white/5 opacity-0 active:opacity-100 transition-opacity duration-150 pointer-events-none rounded-2xl" />
      )}
    </div>
  );
} 