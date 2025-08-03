"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestDemoForm from "./RequestDemoForm";
import { Button } from "flowbite-react";
import EarlyBirdForm from "./EarlyBirdForm";
import Link from "next/link";
import MobileGestureHandler from "./MobileGestureHandler";

const heroContent = [
  {
    id: "generic",
    title: "The Future of Garment Industry is Here",
    subtitle: "Experience the power of AI-driven solutions that transform how the Ready-Made Garments industry operates.",
    audience: "Welcome to fabricXai",
    description: "Discover how artificial intelligence is reshaping the garment industry with innovative tools and intelligent automation."
  },
  {
    id: "buying-houses",
    title: "Revolutionize RMG Business with AI-Driven Intelligence",
    subtitle: "fabricXai delivers cutting-edge Buyer Relationship Management & Production Intelligence tailored for the RMG industry.",
    audience: "For Buying Houses",
    description: "Streamline buyer relationships, automate communications, and boost sales with AI-powered insights."
  },
  {
    id: "manufacturers", 
    title: "Transform Garment Manufacturing with Smart Production Intelligence",
    subtitle: "Optimize production efficiency, reduce costs, and improve quality control with real-time AI monitoring.",
    audience: "For Garment Manufacturers",
    description: "Monitor production in real-time, predict maintenance needs, and ensure consistent quality across all operations."
  },
  {
    id: "investors",
    title: "Invest in the Future of AI-Powered Garment Industry",
    subtitle: "Join the digital transformation revolution in the Ready-Made Garments sector with cutting-edge technology.",
    audience: "For Investors",
    description: "Be part of the next big thing in garment industry digitization with proven AI solutions and growing market demand."
  }
];

export default function HeroMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Auto-advance slides (paused on touch)
  useEffect(() => {
    if (!isTouchDevice) {
      autoPlayRef.current = setInterval(() => {
        if (!isTransitioning) {
          setCurrentSlide((prev) => (prev + 1) % heroContent.length);
        }
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isTouchDevice, isTransitioning]);

  const handleSlideChange = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleSwipeLeft = () => {
    handleSlideChange((currentSlide + 1) % heroContent.length);
  };

  const handleSwipeRight = () => {
    handleSlideChange((currentSlide - 1 + heroContent.length) % heroContent.length);
  };

  const currentContent = heroContent[currentSlide];

  // Function to render buttons based on current slide
  const renderButtons = () => {
    const slideId = currentContent.id;
    
    switch (slideId) {
      case "generic": // Welcome to fabricXai
        return (
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link href="/what-is-fabricxai" className="w-full sm:w-auto">
              <Button outline className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] px-6 md:px-8 py-3 text-base md:text-lg font-semibold w-full">
                Learn More
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <div>
                  <Button className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626] border-none px-6 md:px-8 py-3 text-base md:text-lg font-semibold w-full sm:w-auto">
                    Get a Demo
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <VisuallyHidden>
                    <DialogTitle>Request Demo</DialogTitle>
                  </VisuallyHidden>
                </DialogHeader>
                <div>
                  <RequestDemoForm />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        );
      
      case "investors": // For Investors
        return (
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link href="/what-is-fabricxai" className="w-full sm:w-auto">
              <Button outline className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] px-6 md:px-8 py-3 text-base md:text-lg font-semibold w-full">
                Learn More
              </Button>
            </Link>
            <Link href="/invest-in-fabricxai" className="w-full sm:w-auto">
              <Button className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626] border-none px-6 md:px-8 py-3 text-base md:text-lg font-semibold w-full">
                Invest In fabricXai
              </Button>
            </Link>
          </div>
        );
      
      case "buying-houses": // For Buying Houses
      case "manufacturers": // For Garment Manufacturers
        return (
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <div>
                  <Button className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626] border-none px-6 md:px-8 py-3 text-base md:text-lg font-semibold w-full sm:w-auto">
                    Be an Early Bird
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <VisuallyHidden>
                    <DialogTitle>Early Bird Registration</DialogTitle>
                  </VisuallyHidden>
                </DialogHeader>
                <div>
                  <EarlyBirdForm />
                </div>
              </DialogContent>
            </Dialog>
            <Link href="/what-is-fabricxai" className="w-full sm:w-auto">
              <Button outline className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] px-6 md:px-8 py-3 text-base md:text-lg font-semibold w-full">
                Learn More
              </Button>
            </Link>
          </div>
        );
      
      default:
        return (
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <div>
                  <Button className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626] border-none px-6 md:px-8 py-3 text-base md:text-lg font-semibold w-full sm:w-auto">
                    Get a Demo
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <VisuallyHidden>
                    <DialogTitle>Request Demo</DialogTitle>
                  </VisuallyHidden>
                </DialogHeader>
                <div>
                  <RequestDemoForm />
                </div>
              </DialogContent>
            </Dialog>
            <Link href="/what-is-fabricxai" className="w-full sm:w-auto">
              <Button outline className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] px-6 md:px-8 py-3 text-base md:text-lg font-semibold w-full">
                Learn More
              </Button>
            </Link>
          </div>
        );
    }
  };

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="w-full h-full bg-[url(/bg/ai-and-garments-RGM-representative-image.png)] bg-cover bg-center">
        <div className="bg-transparent border-none shadow-none flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-24">
          <div className="flex flex-col w-full md:max-w-2xl gap-6 md:gap-8">
            
            {/* Audience Badge */}
            <div className="hero-badge inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-[#f2f827]/20 border border-[#f2f827]/30 rounded-full w-fit">
              <span className="text-[#f2f827] text-xs md:text-sm font-semibold">
                {currentContent.audience}
              </span>
            </div>

            {/* Sliding Content */}
            <MobileGestureHandler
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
              onTap={() => handleSlideChange((currentSlide + 1) % heroContent.length)}
              className="w-full touch-manipulation"
            >
              <div className="text-white w-full relative">
                <div className="overflow-hidden rounded-lg">
                  <div 
                    className="transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    <div className="flex">
                      {heroContent.map((content, index) => (
                        <div 
                          key={content.id}
                          className="w-full flex-shrink-0 px-2 md:px-4"
                          style={{ width: '100%' }}
                        >
                          {/* Mobile-optimized title with better word spacing */}
                          <h1 className="hero-title font-mono text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold tracking-wide">
                            {content.title.split(' ').map((word, wordIndex) => (
                              <span 
                                key={wordIndex}
                                className={`inline-block transition-all duration-700 ${
                                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ 
                                  transitionDelay: `${wordIndex * 30}ms`,
                                  wordBreak: word.length > 10 ? 'break-word' : 'normal',
                                  marginRight: '0.3em'
                                }}
                              >
                                {word}
                              </span>
                            ))}
                          </h1>
                          
                          {/* Mobile-optimized subtitle */}
                          <p className="hero-subtitle text-sm xs:text-base sm:text-lg md:text-xl mt-3 sm:mt-4 md:mt-6 text-[#a8b0b7] leading-relaxed font-medium tracking-wide">
                            {content.subtitle}
                          </p>
                          
                          {/* Mobile-optimized description */}
                          <p className="hero-description text-xs xs:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 text-[#6b7280] leading-relaxed tracking-wide">
                            {content.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Mobile touch indicator */}
                <div className="absolute bottom-2 right-2 md:hidden">
                  <div className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </MobileGestureHandler>

            {/* Action Buttons */}
            {renderButtons()}

            {/* Circular Slide Indicators */}
            <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
              {heroContent.map((content, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`group relative transition-all duration-300 ${
                    index === currentSlide 
                      ? 'scale-110' 
                      : 'hover:scale-105'
                  }`}
                  aria-label={`Go to ${content.audience} slide`}
                >
                  {/* Circular indicator dot */}
                  <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#f2f827] shadow-lg shadow-[#f2f827]/30' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`} />
                </button>
              ))}
            </div>

            {/* Minimalist Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-0.5 mt-4 md:mt-4">
              <div 
                className="bg-[#f2f827] h-0.5 rounded-full transition-all duration-500 ease-linear"
                style={{ width: `${((currentSlide + 1) / heroContent.length) * 100}%` }}
              />
            </div>

            {/* Mobile Swipe Hint */}
            {isTouchDevice && (
              <div className="text-center mt-4">
                <p className="text-white/70 text-xs">
                  💡 <strong>Swipe left/right</strong> to explore different audiences
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows (hidden on mobile) */}
      <button
        onClick={() => handleSlideChange((currentSlide - 1 + heroContent.length) % heroContent.length)}
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => handleSlideChange((currentSlide + 1) % heroContent.length)}
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
} 