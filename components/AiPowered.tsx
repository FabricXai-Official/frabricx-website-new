"use client";

import React, { useState } from "react";

// Type definition for feature items
interface FeatureItem {
  title: string;
  description: string;
}

// FeatureCard component - Individual card with hover effects
const FeatureCard = ({ title, description }: FeatureItem) => (
  <div
    className={`
      group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
      rounded-2xl text-center overflow-hidden 
      transition-all duration-300 ease-in-out transform hover:scale-105
      h-[180px] hover:h-[320px] w-full max-w-xs mx-auto
      hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
    `}
  >
    <div className="w-full h-full px-6 py-4 relative">
      {/* Title */}
      <h3
        className="text-xl md:text-2xl font-bold text-[#F2F827] whitespace-pre-line
          transition-all duration-300 
          absolute inset-0 flex items-center justify-center text-center 
          group-hover:static group-hover:mb-4"
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-base md:text-lg text-white opacity-0 translate-y-4 
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 ease-in-out whitespace-pre-line"
      >
        {description}
      </p>
    </div>
  </div>
);




// Main Component
export default function AiPowered() {
  const [activeTab, setActiveTab] = useState("brm");
  const [activeBottomTab, setActiveBottomTab] = useState("rmg");

  const brmFeatures: FeatureItem[] = [
    {
      title: "AI-Driven \nPersonalized Buyer \nCommunication",
      description:
        "Enables hyper-personalized, emotion-aware, and language-adapted communication with each buyer, improving trust and conversion rates.",
    },
    {
      title: "Production \nManagement \nSystem",
      description:
        "Streamlines lead acquisition and automates nurturing workflows to boost sample-to-order conversion, reducing manual follow-ups and errors.",
    },
    {
      title: "Automated Lead \nQualification & \nNurturing",
      description:
        "Analyzes buyer sentiment and engagement data to predict risks and opportunities, empowering proactive decision-making and higher buyer satisfaction.",
    },
  ];

  const piFeatures: FeatureItem[] = [
    {
      title: "Order Management System",
      description:
        "Centralizes all orders from Tech Pack to PP sample approval status with real-time tracking, predictive delay alerts, and automated workflow updates — empowering faster, error-free fulfillment.",
    },
    {
      title: "Inventory Management System (Coming Soon)",
      description:
        "Optimizes raw material and finished goods inventory with real-time visibility, \nAI-powered demand forecasting, and automated stock alerts to reduce waste and avoid shortages.",
    },
    {
      title: "Production Management System (Coming Soon)",
      description:
        "Streamlines production from line planning to shipment with real-time floor visibility, \nAI-driven bottleneck alerts, and data-backed efficiency optimization.",
    },
  ];

  const stychxFeatures: FeatureItem[] = [
    {
      title: "Get a free website in \nless than 15 minutes",
      description: "StychX guides you step-by-step to create a beautiful, conversion-ready website instantly. Just add your factory or buying house details, and you're live!",
    },
    {
      title: "Website \nMaintenance",
      description:
        "StychX handles all technical maintenance behind the scenes, ensuring your site stays fast, secure, & always on-line without extra cost.",
    },
    {
      title: "AI based SEO \nOptimization \nAssistance",
      description: "Our AI engine recommends keywords, optimizes product pages, and ensures your website ranks higher to attract international buyers effortlessly.",
    },
  ];

  const featuresToDisplay = activeTab === "brm" ? brmFeatures : piFeatures;

  const renderFeatureCards = (features: FeatureItem[]) => (
    <div className="w-full mb-12 px-16">
      <div className="flex flex-col md:flex-row justify-center items-start gap-2">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="flex-1"
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="relative w-full bg-no-repeat bg-cover bg-center py-16 sm:py-24"
      style={{ backgroundImage: "url('/bg/bg2.png')" }}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-mono text-white mb-4">
            fabricXai's AI-Powered Solutions
          </h1>
          <p className="text-lg text-[#a8b0b7]">
            Comprehensive tools designed specifically for the RGM manufacturing industry.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 p-2 rounded-full max-w-fit mx-auto mb-12">
          <button
            onClick={() => setActiveTab("brm")}
            className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full border border-white whitespace-nowrap transition-colors duration-300 ${
              activeTab === "brm"
                ? "bg-white text-gray-900"
                : "bg-transparent text-white hover:bg-white/30"
            }`}
          >
            Buyer Relationship Management (BRM)
          </button>
          <button
            onClick={() => setActiveTab("pi")}
            className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full border border-white whitespace-nowrap transition-colors duration-300 ${
              activeTab === "pi"
                ? "bg-white text-gray-900"
                : "bg-transparent text-white hover:bg-white/30"
            }`}
          >
            Production Intelligence
          </button>
        </div>

        {/* Features Section */}
        {renderFeatureCards(featuresToDisplay)}

        {/* Call to Action */}
        <div className="flex flex-col justify-center items-center gap-4 text-center mb-12">
          <div className="text-sm text-gray-300 leading-snug font-medium">
            Exclusive Offer! <span className="text-[#F2F827]">Free</span>
            <br />
            Production Intelligence for You
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xs sm:max-w-none">
            <button className="bg-[#F2F827] text-black font-bold py-3 px-6 w-full sm:w-48 rounded-md hover:bg-yellow-300 transition duration-300">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-gray-500 text-white font-bold py-3 px-6 w-full sm:w-48 rounded-md hover:bg-gray-700 hover:border-gray-400 transition duration-300">
              Be an early bird
            </button>
          </div>
        </div>

        {/* --- Bottom Section: stychX --- */}
        <div className="mt-24 pt-16 border-t border-gray-700">
          {/* Toggle for bottom tab */}
          <div className="flex justify-center items-center gap-4 bg-gray-900/70 backdrop-blur-sm p-2 rounded-full max-w-xs mx-auto mb-12">
            <button
              onClick={() => setActiveBottomTab("rmg")}
              className={`w-full px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeBottomTab === "rmg"
                  ? "bg-[#a8b0b7] text-gray-900"
                  : "bg-transparent text-white hover:bg-gray-700"
              }`}
            >
              For RMG
            </button>
          </div>

          <div className="text-center mb-12">
            <img
              src="/icons/stychx.svg"
              alt="stychX Logo"
              className="mx-auto w-40 h-auto"
            />
          </div>

          {/* stychX Cards Section */}
          {renderFeatureCards(stychxFeatures)}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-[#F2F827] text-black font-bold py-3 px-6 w-full sm:w-48 rounded-md hover:bg-yellow-300 transition duration-300">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-gray-500 text-white font-bold py-3 px-6 w-full sm:w-48 rounded-md hover:bg-gray-700 hover:border-gray-400 transition duration-300">
              Be an early bird
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}