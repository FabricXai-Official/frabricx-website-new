"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import MobileGestureHandler from './MobileGestureHandler';

interface MobileNavigationProps {
  sections: Array<{
    id: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  currentSection: string;
  onSectionChange: (sectionId: string) => void;
  className?: string;
}

export default function MobileNavigation({
  sections,
  currentSection,
  onSectionChange,
  className
}: MobileNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Find current section index
  useEffect(() => {
    const index = sections.findIndex(section => section.id === currentSection);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [currentSection, sections]);

  // Auto-hide navigation after inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const resetTimeout = () => {
      clearTimeout(timeout);
      setIsVisible(true);
      timeout = setTimeout(() => setIsVisible(false), 3000);
    };

    resetTimeout();
    
    const handleTouchStart = () => resetTimeout();
    const handleScroll = () => resetTimeout();
    
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timeout);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSwipeLeft = () => {
    const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
    onSectionChange(sections[nextIndex].id);
  };

  const handleSwipeRight = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    onSectionChange(sections[prevIndex].id);
  };

  const handleSwipeUp = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwipeDown = () => {
    // Scroll to bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Navigation Bar */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 bg-[#13191D]/95 backdrop-blur-md border-t border-[#34383B] transition-transform duration-300",
          isVisible ? "translate-y-0" : "translate-y-full",
          className
        )}
      >
        <MobileGestureHandler
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
          onSwipeUp={handleSwipeUp}
          onSwipeDown={handleSwipeDown}
          className="p-4"
        >
          {/* Section Indicators */}
          <div className="flex justify-center items-center gap-2 mb-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-[#f2f827] scale-125"
                    : "bg-[#6B7280] hover:bg-[#9CA3AF]"
                )}
                aria-label={`Go to ${section.label}`}
              />
            ))}
          </div>

          {/* Current Section Display */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {sections[currentIndex].icon && (
                <div className="text-[#f2f827]">
                  {sections[currentIndex].icon}
                </div>
              )}
              <div>
                <h3 className="text-white font-semibold text-sm">
                  {sections[currentIndex].label}
                </h3>
                <p className="text-[#9CA3AF] text-xs">
                  {currentIndex + 1} of {sections.length}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSwipeRight}
                disabled={currentIndex === 0}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  currentIndex === 0
                    ? "text-[#6B7280] cursor-not-allowed"
                    : "text-[#f2f827] hover:bg-[#f2f827]/10 active:bg-[#f2f827]/20"
                )}
                aria-label="Previous section"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleSwipeLeft}
                disabled={currentIndex === sections.length - 1}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  currentIndex === sections.length - 1
                    ? "text-[#6B7280] cursor-not-allowed"
                    : "text-[#f2f827] hover:bg-[#f2f827]/10 active:bg-[#f2f827]/20"
                )}
                aria-label="Next section"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Swipe Instructions */}
          <div className="mt-3 text-center">
            <p className="text-[#9CA3AF] text-xs">
              Swipe left/right to navigate • Swipe up/down to scroll
            </p>
          </div>
        </MobileGestureHandler>
      </div>

      {/* Floating Action Button for Navigation Toggle */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 z-50 w-12 h-12 bg-[#f2f827] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
        aria-label={isVisible ? "Hide navigation" : "Show navigation"}
      >
        <svg
          className={cn(
            "w-6 h-6 text-[#13191D] transition-transform duration-300",
            isVisible && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </>
  );
} 