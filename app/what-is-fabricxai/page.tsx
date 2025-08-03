"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestDemoForm from "@/components/RequestDemoForm";
import EarlyBirdForm from "@/components/EarlyBirdForm";
import MobileChatButton from "@/components/MobileChatButton";
import { Check, ArrowRight, Users, MessageSquare, BarChart3, Globe, Clock, TrendingUp, Shield, Zap, Factory, Target, Smartphone, Brain, Database } from "lucide-react";

export default function WhatIsFabricXaiPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const coreModules = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead & Buyer Management",
      description: "AI-powered CRM system tailored for garment industry with multilingual communication and intelligent lead generation."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Order & Production Management",
      description: "End-to-end order tracking from inquiry to delivery with real-time production monitoring and automated alerts."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Inventory & Supply Chain",
      description: "Integrated tracking of raw materials and inventory with just-in-time procurement management."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Workforce Management",
      description: "Digital HR management for production floors with attendance, productivity tracking, and compliance monitoring."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Financial & Compliance",
      description: "Comprehensive accounting and compliance tracking for factory certifications and sustainability metrics."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights with customizable dashboards for production efficiency and business intelligence."
    }
  ];

  const aiServices = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Garments AI Assistant",
      description: "Interactive digital assistant that answers queries in natural language and helps with system navigation."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Production Intelligence",
      description: "AI-powered analytics for production optimization, delay prediction, and efficiency forecasting."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "BRM Intelligence",
      description: "Automated buyer relationship management with sentiment analysis and proactive communication."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "MARBIM",
      description: "Specialized AI module for merchandising and business intelligence management."
    }
  ];

  const benefits = [
    {
      icon: "🚀",
      title: "Improved Efficiency",
      description: "Automation of routine tasks and better production planning reduce costs and improve profit margins."
    },
    {
      icon: "⚡",
      title: "Faster Response Times",
      description: "Real-time tracking and AI alerts enable immediate issue resolution and better decision-making."
    },
    {
      icon: "🤝",
      title: "Enhanced Buyer Satisfaction",
      description: "Automated communications and professional systems build trust and increase repeat orders."
    },
    {
      icon: "📊",
      title: "Data-Driven Strategy",
      description: "Comprehensive analytics enable strategic improvements and trend identification across operations."
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description: "Multilingual support and international compliance help reach buyers worldwide."
    },
    {
      icon: "🔄",
      title: "Scalable Operations",
      description: "Cloud-based platform grows with your business without proportional increase in manpower."
    }
  ];

  const targetMarkets = [
    {
      title: "Export-Oriented Garment Manufacturers",
      description: "4,000+ factories in Bangladesh alone, ranging from small units to large conglomerates producing billions in garments annually.",
      icon: "🏭"
    },
    {
      title: "Buying Houses & Sourcing Agents",
      description: "1,000+ buying houses in Bangladesh managing multiple factories and ensuring proper order execution for foreign buyers.",
      icon: "🏢"
    },
    {
      title: "Regional Expansion",
      description: "Vietnam, India, Pakistan, Sri Lanka, and other RMG-heavy countries with similar operational needs and digital adoption gaps.",
      icon: "🌏"
    }
  ];

  const industryStats = [
    {
      number: "$42.6B",
      label: "Bangladesh Garment Exports (2021-22)",
      description: "Second-largest apparel exporter globally"
    },
    {
      number: "4,000+",
      label: "Export Garment Factories",
      description: "Operating across Bangladesh"
    },
    {
      number: "4.4M",
      label: "Workers Employed",
      description: "Mostly women in the RMG sector"
    },
    {
      number: "80-85%",
      label: "Export Earnings",
      description: "RMG contribution to Bangladesh exports"
    },
    {
      number: "14-16%",
      label: "GDP Contribution",
      description: "RMG sector's economic impact"
    },
    {
      number: "$100B",
      label: "Target by 2030",
      description: "Bangladesh's ambitious export goal"
    }
  ];

  return (
    <main className="min-h-screen bg-[#13191D] text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-20 md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2529] to-[#13191d] opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-[#f2f827]/10 border border-[#f2f827]/30 rounded-full text-[#f2f827] text-sm font-medium mb-6">
              AI-Powered Digital Transformation for RMG Industry
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-6">
              What is{" "}
              <span className="relative inline-block">
                fabricXai?
                <img
                  src="/icons/highlighter.svg"
                  alt="Highlighter"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#a8b0b7] max-w-4xl mx-auto mb-8">
              fabricXai is a comprehensive AI-driven software platform designed specifically for the Ready-Made Garments (RMG) industry. 
              We bring automation and intelligence to an industry that has traditionally relied on manual processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-4">
                    Get Free Demo
                  </Button>
                </DialogTrigger>
                <DialogContent showCloseButton={false}>
                  <DialogHeader>
                    <VisuallyHidden>
                      <DialogTitle>Request Demo</DialogTitle>
                    </VisuallyHidden>
                  </DialogHeader>
                  <RequestDemoForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button outline size="lg" className="text-lg px-8 py-4">
                    Early Bird Access
                  </Button>
                </DialogTrigger>
                <DialogContent showCloseButton={false}>
                  <DialogHeader>
                    <VisuallyHidden>
                      <DialogTitle>Early Bird Registration</DialogTitle>
                    </VisuallyHidden>
                  </DialogHeader>
                  <EarlyBirdForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Hero Platform Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-[#1a2025] rounded-2xl p-6 border border-[#f2f827]/20 shadow-2xl">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/dashboards/Dashboard.png"
                  alt="FabricXAI Platform Dashboard - Integrated AI-powered management system for garment businesses"
                  className="w-full h-auto max-h-[600px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              The RMG Industry{" "}
              <span className="text-[#f2f827]">Opportunity</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              The Ready-Made Garments industry is one of the largest and most vital industries in Asia, 
              yet it remains largely untapped by modern digital technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industryStats.map((stat, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <div className="text-3xl font-bold text-[#f2f827] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#f2f827] transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-[#a8b0b7] text-sm group-hover:text-white transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Digital Transformation Need */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#f2f827] mb-6">
                  The Digital Transformation Gap
                </h3>
                <p className="text-[#a8b0b7] mb-6">
                  Despite its massive scale, the RMG sector has been slow to adopt modern digital technologies. 
                  Studies show that Bangladesh&apos;s textile-apparel industry has a digital maturity level of only 1.91 on a 5-point scale.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#f2f827] rounded-full"></div>
                    <span className="text-white">Most factories still use Excel spreadsheets and manual processes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#f2f827] rounded-full"></div>
                    <span className="text-white">Limited real-time visibility into operations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#f2f827] rounded-full"></div>
                    <span className="text-white">Inefficient communication between departments and buyers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#f2f827] rounded-full"></div>
                    <span className="text-white">Lack of data-driven decision making</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a2025] rounded-xl p-6 border border-[#f2f827]/20">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/dashboards/industry4o.png"
                    alt="Industry 4.0 Ready - The industry is ready for digital transformation with government support and growing buyer demands for transparency"
                    className="w-full h-auto max-h-[300px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Comprehensive{" "}
              <span className="text-[#f2f827]">Platform</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              fabricXai combines elements of CRM, ERP, and AI analytics specifically adapted to the workflows 
              of textile/garment manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreModules.map((module, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <div className="w-12 h-12 bg-[#f2f827]/10 rounded-lg flex items-center justify-center mb-4 text-[#f2f827] group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">
                  {module.title}
                </h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  {module.description}
                </p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              AI-Powered{" "}
              <span className="text-[#f2f827]">Intelligence</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Our standout feature is the layer of AI-driven services that add intelligence and automation 
              to every aspect of garment business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <div className="w-12 h-12 bg-[#f2f827]/10 rounded-lg flex items-center justify-center mb-4 text-[#f2f827] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Target Markets Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Target{" "}
              <span className="text-[#f2f827]">Markets</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              fabricXai serves the entire garment manufacturing ecosystem across Asia, 
              with an initial focus on Bangladesh and regional expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {targetMarkets.map((market, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {market.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">
                  {market.title}
                </h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  {market.description}
                </p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Transform Your{" "}
              <span className="text-[#f2f827]">Business</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              By using fabricXai, garment companies can expect measurable improvements in efficiency, 
              cost savings, and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
            Ready to{" "}
            <span className="text-[#f2f827]">Transform</span> Your Operations?
          </h2>
          <p className="text-xl text-[#a8b0b7] mb-8">
            Join the digital revolution in the RMG industry. fabricXai is here to help you 
            modernize your operations and stay ahead of the competition.
          </p>
          
          <div className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b] mb-8">
            <p className="text-[#a8b0b7] text-sm">
              <strong className="text-[#f2f827]">No tech skills needed.</strong> No upfront commitment. 
              See the future of garment operations today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Free Demo
                </Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <VisuallyHidden>
                    <DialogTitle>Request Demo</DialogTitle>
                  </VisuallyHidden>
                </DialogHeader>
                <RequestDemoForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button outline size="lg" className="text-lg px-8 py-4">
                  Early Bird Access
                </Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <VisuallyHidden>
                    <DialogTitle>Early Bird Registration</DialogTitle>
                  </VisuallyHidden>
                </DialogHeader>
                <EarlyBirdForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <MobileChatButton />
    </main>
  );
} 