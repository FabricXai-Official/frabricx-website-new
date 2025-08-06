"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestDemoForm from "@/components/RequestDemoForm";
import EarlyBirdForm from "@/components/EarlyBirdForm";
import MobileChatButton from "@/components/MobileChatButton";
import BackToHome from "@/components/BackToHome";
import { 
  Check, 
  ArrowRight, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Globe, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap, 
  Factory, 
  Target, 
  Smartphone, 
  Brain, 
  Database, 
  ChartBar,
  Lightbulb,
  Eye,
  Puzzle,
  Rocket,
  Heart,
  Star
} from "lucide-react";

export default function HistoryPage() {
  const [activeSection, setActiveSection] = useState("vision");

  const timelineEvents = [
    {
      year: "Early 2024",
      title: "The Discovery",
      description: "Founder identifies digital gaps in Bangladesh's booming RMG industry",
      icon: <Eye className="w-6 h-6" />,
      details: "Bangladesh's RMG industry was booming with $38.5 billion in exports (83% of total exports), yet most factories lagged in digital transformation."
    },
    {
      year: "Early 2024 - Mid 2024",
      title: "Pain Point Analysis",
      description: "Three major challenges identified in the industry",
      icon: <Target className="w-6 h-6" />,
      details: "Lack of digital presence, fragmented manual operations, and poor buyer communication were holding the industry back."
    },
    {
      year: "Mid 2024 - End of 2024",
      title: "Vision Development",
      description: "The GarmentsOS concept takes shape",
      icon: <Lightbulb className="w-6 h-6" />,
      details: "Realization that no single tool could solve interconnected problems - needed a unified platform approach."
    },
    {
      year: "Early 2025 - Mid 2025",
      title: "Four Pillars Built",
      description: "Core modules developed: MARBIM, BRM Intelligence, Production Intelligence, StychX",
      icon: <Puzzle className="w-6 h-6" />,
      details: "Each module addressed specific pain points while working towards integration."
    },
    {
      year: "Mid 2025 - End of 2025",
      title: "GarmentsOS Integration",
      description: "Unified platform launched with seamless module integration",
      icon: <Rocket className="w-6 h-6" />,
      details: "All modules integrated into one cohesive operating system for garment businesses."
    },
    {
      year: "Early 2026 - End of 2026",
      title: "Module Development",
      description: "Development of additional modules for GarmentsOS",
      icon: <Zap className="w-6 h-6" />,
      details: "Expanding the platform with additional specialized modules to cover all aspects of garment manufacturing."
    },
    {
      year: "2027",
      title: "International Expansion",
      description: "Expanding to international markets",
      icon: <Globe className="w-6 h-6" />,
      details: "Taking GarmentsOS to global markets, helping garment manufacturers worldwide transform their operations."
    }
  ];

  const painPoints = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Lack of Digital Presence",
      description: "Few garment manufacturers had professional websites or online visibility, relying on old-school B2B channels.",
      impact: "Lost opportunities in global market and credibility gaps in $38+ billion sector"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Fragmented Manual Operations",
      description: "Day-to-day operations managed through spreadsheets, paper trails, and siloed systems.",
      impact: "Inefficient, error-prone processes driving up costs and quality issues"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Poor Buyer Communication",
      description: "Slow and clunky communication with international buyers, leading to delays and trust erosion.",
      impact: "Orders shifting to competitors with better communication systems"
    }
  ];

  const fourPillars = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "MARBIM",
      subtitle: "AI-Driven Assistant & Knowledge Engine",
      description: "The 'brain' of the system, capable of conversing in both English and Bangla, trained on garment manufacturing know-how.",
      features: [
        "Multilingual AI assistant (English & Bangla)",
        "Custom Bangla large language model",
        "Automated routine tasks",
        "Instant knowledge retrieval"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "BRM Intelligence",
      subtitle: "Buyer Relationship Management",
      description: "Smart CRM that strengthens and automates buyer communications with hyper-personalized, multilingual interactions.",
      features: [
        "AI-powered email automation",
        "Sentiment analysis",
        "Multilingual communication",
        "Proactive relationship nurturing"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Production Intelligence",
      subtitle: "Smart Production Management",
      description: "Real-time visibility into production processes with data-driven decision-making and predictive insights.",
      features: [
        "Live production tracking",
        "Predictive analytics",
        "Resource optimization",
        "Bottleneck prevention"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "StychX",
      subtitle: "Digital Presence Platform",
      description: "Simple but powerful web platform to get every factory online with professional websites in under 15 minutes.",
      features: [
        "15-minute website creation",
        "AI-based SEO optimization",
        "24/7 global visibility",
        "Automatic maintenance"
      ]
    }
  ];

  const visionElements = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Industry-First Approach",
      description: "Built specifically for the RMG industry's unique challenges and workflows"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Intelligence",
      description: "Leveraging artificial intelligence to automate and optimize every process"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Connectivity",
      description: "Enabling factories to connect with international buyers seamlessly"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Future-Proof Technology",
      description: "Designed to evolve with the industry and technological advancements"
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
              Our Journey to Revolutionize the RMG Industry
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-6">
              The History of{" "}
              <span className="relative inline-block">
                FabricXAI
                <img
                  src="/icons/highlighter.svg"
                  alt="Highlighter"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#a8b0b7] max-w-4xl mx-auto mb-8">
              From identifying industry gaps to building the world's first GarmentsOS - 
              discover how our vision transformed into a comprehensive AI-powered platform.
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
          
          {/* Hero Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20 shadow-2xl">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="/dashboards/manual-process.png"
                  alt="Our Journey Timeline - From vision to reality - the evolution of GarmentsOS"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Our{" "}
              <span className="text-[#f2f827]">Journey</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              From a single insight to a comprehensive platform - follow our evolution 
              from identifying industry problems to building the solution.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#f2f827]/30 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`
                      group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                      rounded-2xl p-6 overflow-hidden 
                      transition-all duration-300 ease-in-out transform hover:scale-105
                      hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                    `}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#f2f827]/10 rounded-lg flex items-center justify-center text-[#f2f827] group-hover:scale-110 transition-transform duration-300">
                          {event.icon}
                        </div>
                        <div>
                          <div className="text-[#f2f827] font-bold text-lg">{event.year}</div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-[#f2f827] transition-colors duration-300">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-[#a8b0b7] mb-3 group-hover:text-white transition-colors duration-300">
                        {event.description}
                      </p>
                      <p className="text-sm text-[#6b7280] group-hover:text-[#a8b0b7] transition-colors duration-300">
                        {event.details}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex items-center justify-center w-8 h-8 bg-[#f2f827] rounded-full z-10 relative">
                    <div className="w-4 h-4 bg-[#13191D] rounded-full"></div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Seeing the{" "}
              <span className="text-[#f2f827]">Gaps</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              In the mid-2010s, Bangladesh's RMG industry was booming with $38.5 billion in exports, 
              yet most factories lagged in digital transformation. We identified three critical pain points.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <div className="w-16 h-16 bg-[#f2f827]/10 rounded-lg flex items-center justify-center mb-4 text-[#f2f827] group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-[#a8b0b7] mb-4 group-hover:text-white transition-colors duration-300">
                  {point.description}
                </p>
                <div className="bg-[#f2f827]/10 rounded-lg p-3">
                  <p className="text-sm text-[#f2f827] font-medium">
                    Impact: {point.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-[#f2f827]" />
              </div>
              <blockquote className="text-2xl font-medium text-white mb-4 italic">
                "Watching these challenges hold back our factories year after year made it clear: 
                we needed a new approach. I knew a simple app wouldn't cut it – our industry needed 
                a whole new operating system to truly change."
              </blockquote>
              <p className="text-[#a8b0b7]">— fabricXai Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Building the{" "}
              <span className="text-[#f2f827]">Foundations</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Four foundational modules were crafted, each addressing a critical need in the garment industry. 
              These became the pillars of what would eventually become GarmentsOS.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {fourPillars.map((pillar, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#f2f827]/10 rounded-lg flex items-center justify-center text-[#f2f827] group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-[#f2f827] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-[#f2f827] font-medium">{pillar.subtitle}</p>
                  </div>
                </div>
                <p className="text-[#a8b0b7] mb-4 group-hover:text-white transition-colors duration-300">
                  {pillar.description}
                </p>
                <div className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#f2f827]" />
                      <span className="text-sm text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GarmentsOS Integration Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              One Platform,{" "}
              <span className="text-[#f2f827]">One Vision</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              The birth of GarmentsOS - a unified ecosystem where all intelligence and data flows together, 
              creating a central operating system for garment businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#f2f827] mb-6">
                The Integration Breakthrough
              </h3>
              <p className="text-[#a8b0b7] mb-6">
                By integrating all modules into one ecosystem, GarmentsOS became far more powerful than the sum of its parts. 
                Buyer inquiries captured by StychX could flow directly into BRM Intelligence for follow-up. 
                Production schedules from Production Intelligence could inform MARBIM to update buyers proactively.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f2f827] rounded-full"></div>
                  <span className="text-white">Single login and unified dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f2f827] rounded-full"></div>
                  <span className="text-white">Seamless data flow between modules</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f2f827] rounded-full"></div>
                  <span className="text-white">API-based integrations with existing systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f2f827] rounded-full"></div>
                  <span className="text-white">End-to-end visibility across operations</span>
                </div>
              </div>
            </div>
            <div className="bg-[#1a2025] rounded-xl p-6 border border-[#f2f827]/20">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/dashboards/garmentsos.png"
                  alt="GarmentsOS - The world's first operating system designed specifically for garment businesses"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Towards a{" "}
              <span className="text-[#f2f827]">Smarter Future</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Our mission is driven by a simple conviction: the garment sector deserves better tools, 
              better insights, and better connectivity to the global market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {visionElements.map((element, index) => (
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
                  {element.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">
                  {element.title}
                </h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  {element.description}
                </p>
              </div>
            ))}
          </div>

          {/* Final Quote */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-[#f2f827]" />
              </div>
              <blockquote className="text-xl font-medium text-white mb-4 italic">
                "FabricXAI began as a response to pain points, but it has evolved into a movement for progress. 
                The GarmentsOS vision was born from the belief that our garment industry can leap ahead, 
                and we wake up every day driven to make that vision a reality."
              </blockquote>
              <p className="text-[#a8b0b7]">— The FabricXAI Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
            Join the{" "}
            <span className="text-[#f2f827]">Revolution</span>
          </h2>
          <p className="text-xl text-[#a8b0b7] mb-8">
            Be part of the digital transformation that's reshaping the garment industry. 
            Experience the power of GarmentsOS today.
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
      </section>

      <BackToHome />
      <MobileChatButton />
    </main>
  );
} 
