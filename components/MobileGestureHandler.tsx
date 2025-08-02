"use client";

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MobileGestureHandlerProps {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onTap?: () => void;
  onLongPress?: () => void;
  className?: string;
  swipeThreshold?: number;
  longPressDelay?: number;
  disabled?: boolean;
}

export default function MobileGestureHandler({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onTap,
  onLongPress,
  className,
  swipeThreshold = 50,
  longPressDelay = 500,
  disabled = false
}: MobileGestureHandlerProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (disabled || !isTouchDevice) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current?.getBoundingClientRect();
    
    if (rect) {
      setStartPos({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      });
      setCurrentPos({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      });
    }
    
    setIsPressed(true);
    
    // Start long press timer
    if (onLongPress) {
      const timer = setTimeout(() => {
        onLongPress();
      }, longPressDelay);
      setLongPressTimer(timer);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (disabled || !isTouchDevice || !isPressed) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current?.getBoundingClientRect();
    
    if (rect) {
      setCurrentPos({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      });
    }
    
    // Cancel long press if user moves finger
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  const handleTouchEnd = (_e: React.TouchEvent) => {
    if (disabled || !isTouchDevice) return;
    
    setIsPressed(false);
    
    // Cancel long press timer
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
    
    // Calculate swipe distance
    const deltaX = currentPos.x - startPos.x;
    const deltaY = currentPos.y - startPos.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Only trigger swipe if distance is above threshold
    if (distance > swipeThreshold) {
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);
      
      // Determine swipe direction
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      } else {
        // Vertical swipe
        if (deltaY > 0 && onSwipeDown) {
          onSwipeDown();
        } else if (deltaY < 0 && onSwipeUp) {
          onSwipeUp();
        }
      }
    } else if (distance < 10 && onTap) {
      // Small movement indicates tap
      onTap();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled || isTouchDevice) return;
    
    const rect = containerRef.current?.getBoundingClientRect();
    
    if (rect) {
      setStartPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setCurrentPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    
    setIsPressed(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || isTouchDevice || !isPressed) return;
    
    const rect = containerRef.current?.getBoundingClientRect();
    
    if (rect) {
      setCurrentPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseUp = (_e: React.MouseEvent) => {
    if (disabled || isTouchDevice) return;
    
    setIsPressed(false);
    
    // Calculate swipe distance
    const deltaX = currentPos.x - startPos.x;
    const deltaY = currentPos.y - startPos.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Only trigger swipe if distance is above threshold
    if (distance > swipeThreshold) {
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);
      
      // Determine swipe direction
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      } else {
        // Vertical swipe
        if (deltaY > 0 && onSwipeDown) {
          onSwipeDown();
        } else if (deltaY < 0 && onSwipeUp) {
          onSwipeUp();
        }
      }
    } else if (distance < 10 && onTap) {
      // Small movement indicates tap
      onTap();
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative select-none",
        isPressed && "cursor-grabbing",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsPressed(false)}
    >
      {children}
      
      {/* Visual feedback for touch interactions */}
      {isTouchDevice && isPressed && (
        <div className="absolute inset-0 bg-white/10 rounded-lg pointer-events-none" />
      )}
    </div>
  );
} 