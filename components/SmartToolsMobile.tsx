"use client";

import React from 'react';
import Image from 'next/image';
import MobileTouchCard from './MobileTouchCard';

const tools = [
  {
    title: "AI-Powered Buyer Management",
    description: "Intelligent CRM system that learns from your buyer interactions, automates follow-ups, and predicts buyer needs using advanced AI algorithms.",
    icon: "/icons/bot.svg",
    features: [
      "Automated buyer communication",
      "Predictive analytics",
      "Multilingual support",
      "Smart lead scoring"
    ]
  },
  {
    title: "Production Intelligence",
    description: "Real-time production monitoring with AI-driven insights to optimize efficiency, reduce delays, and improve quality control across your entire manufacturing process.",
    icon: "/icons/chart.svg",
    features: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Quality control automation",
      "Performance analytics"
    ]
  },
  {
    title: "Smart Inventory Management",
    description: "AI-powered inventory tracking that predicts demand, optimizes stock levels, and prevents overstocking or stockouts with intelligent forecasting.",
    icon: "/icons/growth.svg",
    features: [
      "Demand forecasting",
      "Automated reordering",
      "Stock optimization",
      "Supplier management"
    ]
  },
  {
    title: "Digital Transformation",
    description: "Complete digital transformation solution that modernizes your entire garment business operations with cutting-edge AI technology.",
    icon: "/icons/30-round.svg",
    features: [
      "Process automation",
      "Data integration",
      "Cloud infrastructure",
      "Legacy system migration"
    ]
  }
];

export default function SmartToolsMobile() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-white mb-4">
            Smart Tools for{" "}
            <span className="text-[#f2f827]">Modern RMG</span>
          </h2>
          <p className="text-lg text-[#a8b0b7] max-w-3xl mx-auto">
            AI-powered solutions designed specifically for the Ready-Made Garments industry
          </p>
        </div>

        {/* Mobile-Optimized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <MobileTouchCard
              key={index}
              ariaLabel={`Learn more about ${tool.title}`}
              expandedContent={
                <div className="space-y-3">
                  <h4 className="text-[#f2f827] font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-white">
                        <svg className="w-4 h-4 text-[#f2f827] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              }
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#34383b] rounded-full flex items-center justify-center mb-4">
                  <Image
                    src={tool.icon}
                    alt={`${tool.title} Icon`}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-[#f2f827] mb-3">
                  {tool.title}
                </h3>
                
                {/* Description (visible on mobile, hidden on desktop until hover) */}
                <p className="text-sm text-[#d1d5db] md:hidden">
                  {tool.description}
                </p>
                
                {/* Desktop-only description (hidden on mobile) */}
                <p className="text-sm text-[#d1d5db] hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tool.description}
                </p>
              </div>
            </MobileTouchCard>
          ))}
        </div>

        {/* Mobile Call-to-Action */}
        <div className="mt-12 text-center">
          <p className="text-[#a8b0b7] text-sm mb-4">
            💡 <strong>Mobile Tip:</strong> Tap any card to see detailed features
          </p>
          <button className="bg-[#f2f827] text-[#13191D] px-8 py-3 rounded-xl font-semibold hover:bg-[#e0e626] transition-colors duration-300 active:scale-95">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
} 