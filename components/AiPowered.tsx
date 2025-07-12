"use client";

import React, { useState } from "react";

// Type definition for feature items
interface FeatureItem {
  title: string;
  description: string;
}

// FeatureCard component
const FeatureCard = ({ title, description }: FeatureItem) => (
  <div
    className="
      group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
      rounded-2xl p-8 text-center h-[260px] overflow-hidden 
      transition-transform duration-300 ease-in-out hover:scale-105
    "
  >
    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors duration-300">
      {title}
    </h3>
    <p
      className="
        absolute bottom-6 left-6 right-6 text-sm text-gray-300 
        opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-300 ease-in-out
      "
    >
      {description}
    </p>
  </div>
);

// Main Component
export default function AiPowered() {
  const [activeTab, setActiveTab] = useState("brm");
  const [activeBottomTab, setActiveBottomTab] = useState("rmg");

  const brmFeatures: FeatureItem[] = [
    {
      title: "AI-Driven Personalized Buyer Communication",
      description:
        "Enables hyper-personalized, emotion-aware, and language-adapted communication with each buyer, improving trust and conversion rates.",
    },
    {
      title: "Production Management System",
      description:
        "Streamlines lead acquisition and automates nurturing workflows to boost sample-to-order conversion, reducing manual follow-ups and errors.",
    },
    {
      title: "Automated Lead Qualification & Nurturing",
      description:
        "Analyzes buyer sentiment and engagement data to predict risks and opportunities, empowering proactive decision-making and higher buyer satisfaction.",
    },
  ];

  const stychxFeatures: FeatureItem[] = [
    {
      title: "Get a free website in less than 15 minutes",
      description:
        "",
    },
    {
      title: "Website Maintenance",
      description:
        "StychX handles all technical maintenance behind the scenes, ensuring your site stays fast, secure, & always on-line without extra cost.",
    },
    {
      title: "AI based SEO Optimization Assistance",
      description:
        "",
    },
  ];

  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center py-16 sm:py-24"
      style={{ backgroundImage: "url('/bg/bg2.png')" }}
    >
      {/* <div className="absolute inset-0 bg-black/30"></div> */}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            fabricXai's AI-Powered Solutions
          </h1>
          <p className="text-lg text-gray-300">
            Comprehensive tools designed specifically for the RGM manufacturing industry.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 bg-gray-900/70 backdrop-blur-sm p-2 rounded-full max-w-md mx-auto mb-12">
          <button
            onClick={() => setActiveTab("brm")}
            className={`w-full px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
              activeTab === "brm"
                ? "bg-white text-gray-900"
                : "bg-transparent text-white hover:bg-gray-700"
            }`}
          >
            Buyer Relationship Management (BRM)
          </button>
          <button
            onClick={() => setActiveTab("pi")}
            className={`w-full px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
              activeTab === "pi"
                ? "bg-white text-gray-900"
                : "bg-transparent text-white hover:bg-gray-700"
            }`}
          >
            Production Intelligence
          </button>
        </div>

        {/* Features Grid - BRM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {brmFeatures.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-gray-300 mr-4">
            Exclusive Offer! Free Production Intelligence for You
          </p>
          <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
            Learn More
          </button>
          <button className="bg-transparent border-2 border-gray-500 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto">
            Be an early bird
          </button>
        </div>

        {/* --- Bottom Section: stychX --- */}
        <div className="mt-24 pt-16 border-t border-gray-700">
          {/* Toggle for bottom tab */}
          <div className="flex justify-center items-center gap-4 bg-gray-900/70 backdrop-blur-sm p-2 rounded-full max-w-xs mx-auto mb-12">
            <button
              onClick={() => setActiveBottomTab("rmg")}
              className={`w-full px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeBottomTab === "rmg"
                  ? "bg-white text-gray-900"
                  : "bg-transparent text-white hover:bg-gray-700"
              }`}
            >
              For RMG
            </button>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white tracking-wider">stychX</h2>
          </div>

          {/* stychX Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stychxFeatures.map((feature, idx) => (
              <FeatureCard
                key={idx}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-gray-500 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto">
              Be an early bird
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
