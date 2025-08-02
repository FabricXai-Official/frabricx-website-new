"use client";

import React, { useState, useEffect } from 'react';
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

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % heroContent.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleSlideChange = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const currentContent = heroContent[currentSlide];

  // Function to render buttons based on current slide
  const renderButtons = () => {
    const slideId = currentContent.id;
    
    switch (slideId) {
      case "generic": // Welcome to fabricXai
        return (
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/what-is-fabricxai">
              <Button outline className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] px-8 py-3 text-lg font-semibold">
                Learn More
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <div>
                  <Button className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626] border-none px-8 py-3 text-lg font-semibold">
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
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/what-is-fabricxai">
              <Button outline className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] px-8 py-3 text-lg font-semibold">
                Learn More
              </Button>
            </Link>
            <Link href="/invest-in-fabricxai">
              <Button className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626] border-none px-8 py-3 text-lg font-semibold">
                Invest In fabricXai
              </Button>
            </Link>
          </div>
        );
      
      case "buying-houses": // For Buying Houses
      case "manufacturers": // For Garment Manufacturers
        return (
          <div className="flex flex-col md:flex-row gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <div>
                  <Button className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626] border-none px-8 py-3 text-lg font-semibold">
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
            <Link href="/what-is-fabricxai">
              <Button outline className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] px-8 py-3 text-lg font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        );
      
      default:
        return (
          <div className="flex flex-col md:flex-row gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <div>
                  <Button className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626] border-none px-8 py-3 text-lg font-semibold">
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
            <Link href="/what-is-fabricxai">
              <Button outline className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] px-8 py-3 text-lg font-semibold">
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
        <div className="bg-transparent border-none shadow-none flex flex-col items-start justify-center h-full px-12 md:px-24">
          <div className="flex flex-col w-full md:max-w-2xl gap-8">
            
            {/* Audience Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#f2f827]/20 border border-[#f2f827]/30 rounded-full w-fit">
              <span className="text-[#f2f827] text-sm font-semibold">
                {currentContent.audience}
              </span>
            </div>

            {/* Sliding Title and Subtitle */}
            <div className="text-white w-full relative">
              <div className="overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="flex">
                    {heroContent.map((content, index) => (
                      <div 
                        key={content.id}
                        className="w-full flex-shrink-0"
                        style={{ width: '100%' }}
                      >
                        <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl leading-tight">
                          {content.title.split(' ').map((word, wordIndex) => (
                            <span 
                              key={wordIndex}
                              className={`inline-block transition-all duration-700 delay-${wordIndex * 100} ${
                                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                              }`}
                            >
                              {word}{' '}
                            </span>
                          ))}
                        </h1>
                        <p className="text-lg md:text-xl mt-6 text-[#a8b0b7] leading-relaxed">
                          {content.subtitle}
                        </p>
                        <p className="text-sm md:text-base mt-4 text-[#6b7280] leading-relaxed">
                          {content.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {renderButtons()}

            {/* Slide Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {heroContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#f2f827] scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-1 mt-4">
              <div 
                className="bg-[#f2f827] h-1 rounded-full transition-all duration-500 ease-linear"
                style={{ width: `${((currentSlide + 1) / heroContent.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => handleSlideChange((currentSlide - 1 + heroContent.length) % heroContent.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => handleSlideChange((currentSlide + 1) % heroContent.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
