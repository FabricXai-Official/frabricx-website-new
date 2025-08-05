"use client";

import React, { useState } from "react";
import { Check, Play, Pause, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { Button } from "flowbite-react";
import RequestDemoForm from "./RequestDemoForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MobileTouchCard from "./MobileTouchCard";

export default function SeeInActionMobile() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const featureCards = [
    {
      title: "Save Time",
      description: "Automate critical workflows and focus on strategic growth.",
      icon: "/icons/time.svg",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Win More Buyers",
      description: "Personalized, AI-powered communication to build trust.",
      icon: "/icons/meet.svg",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Boost Profitability",
      description: "Real-time insights to cut costs and improve margins.",
      icon: "/icons/growth.svg",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "Optimize Operations",
      description: "Gain real-time visibility to streamline processes and reduce waste.",
      icon: "/icons/30-round.svg",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
  ];

  const bulletPoints = [
    "No tech skills needed.",
    "No upfront commitment.",
    "See the future of garments operations today.",
  ];

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-24 py-8 sm:py-16 bg-gradient-to-b from-[#13191D] to-[#1a2025]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-mono text-white mb-4 relative">
            See fabricXai in{" "}
            <span className="relative inline-block">
              Action
              <img
                src="/icons/highlighter2.svg"
                alt="Highlighter"
                className="absolute -bottom-2 left-0 w-full h-auto"
              />
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#a8b0b7] max-w-3xl mx-auto leading-relaxed">
            Discover how you can streamline operations, build stronger buyer
            relationships & scale confidently all in one platform.
          </p>
        </div>

        {/* Mobile-Optimized Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Feature Cards Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left">
              Key Benefits
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {featureCards.map((card, index) => (
                <MobileTouchCard
                  key={index}
                  className={`${card.bgColor} ${card.borderColor} hover:scale-105 transition-all duration-300`}
                  ariaLabel={`Learn more about ${card.title}`}
                  expandedContent={
                    <div className="mt-3 pt-3 border-t border-current/20">
                      <p className="text-xs text-[#a8b0b7] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  }
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    {/* Enhanced Icon */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                      <Image
                        src={card.icon}
                        alt={`${card.title} icon`}
                        width={24}
                        height={24}
                        className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert"
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-bold text-[#f2f827] text-sm sm:text-base lg:text-lg">
                      {card.title}
                    </h3>
                    
                    {/* Description (hidden on mobile, shown on desktop) */}
                    <p className="text-xs text-[#a8b0b7] hidden sm:block leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </MobileTouchCard>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left">
              Watch Demo
            </h2>
            
            {/* Enhanced Video Container */}
            <div className="relative group">
              {/* Video Placeholder */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-[#1a2025] to-[#2d3748] rounded-2xl overflow-hidden border border-[#34383B] shadow-2xl">
                
                {/* Video Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f2f827]/10 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handleVideoToggle}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f2f827] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group-hover:scale-110"
                    aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-[#13191D]" />
                    ) : (
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#13191D] ml-1" />
                    )}
                  </button>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={handleMuteToggle}
                    className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Video Status */}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-semibold">
                    LIVE
                  </span>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    fabricXai Platform Demo
                  </h3>
                  <p className="text-[#a8b0b7] text-xs">
                    3:45 min • HD Quality
                  </p>
                </div>
              </div>

              {/* Video Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                <div 
                  className="h-full bg-[#f2f827] transition-all duration-300"
                  style={{ width: isVideoPlaying ? '45%' : '0%' }}
                />
              </div>
            </div>

            {/* Demo Button */}
            <Dialog>
              <DialogTrigger asChild>
                <div>
                  <Button className="w-full bg-gradient-to-r from-[#f2f827] to-[#e0e626] text-[#13191D] hover:from-[#e0e626] hover:to-[#d4d91f] border-none py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Your Free Demo
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent showCloseButton={false} className="max-w-md mx-auto">
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

            {/* Enhanced Bullet Points */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white text-center lg:text-left">
                Why Choose fabricXai?
              </h3>
              <div className="space-y-2">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-[#1a2025]/50 rounded-lg border border-[#34383B]/50 hover:border-[#f2f827]/30 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#f2f827] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#13191D]" />
                    </div>
                    <p className="text-[#a8b0b7] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Call-to-Action */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-[#a8b0b7] text-sm mb-4">
            💡 <strong>Mobile Tip:</strong> Tap any card to see detailed benefits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button outline className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D]">
              Learn More
            </Button>
            <Button className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 