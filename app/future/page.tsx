"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestDemoForm from "@/components/RequestDemoForm";
import EarlyBirdForm from "@/components/EarlyBirdForm";
import MobileChatButton from "@/components/MobileChatButton";
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
  Lightbulb,
  Eye,
  Puzzle,
  Rocket,
  Heart,
  Star,
  Network,
  BarChart4,
  RefreshCw,
  Cpu
} from "lucide-react";

export default function FuturePage() {
  const [activeSection, setActiveSection] = useState("overview");

  const timelinePhases = [
    {
      phase: "Then",
      title: "Traditional Manual Processes",
      description: "Paper-based workflows, human-dependent processes, and siloed information",
      icon: <Clock className="w-6 h-6" />,
      features: [
        "Clipboards and telephone orders",
        "Manual data collection",
        "Paper-based planning",
        "Fragmented operations"
      ]
    },
    {
      phase: "Now",
      title: "Early Digital Adoption",
      description: "Basic ERPs and initial steps toward digitization",
      icon: <RefreshCw className="w-6 h-6" />,
      features: [
        "Basic ERP systems",
        "Email communication",
        "Digital spreadsheets",
        "Limited automation"
      ]
    },
    {
      phase: "Next",
      title: "AI-Driven Future",
      description: "Fully networked, intelligent, and connected operations",
      icon: <Rocket className="w-6 h-6" />,
      features: [
        "AI-powered decision making",
        "Real-time collaboration",
        "Predictive analytics",
        "End-to-end visibility"
      ]
    }
  ];

  const oldVsNew = [
    {
      old: {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Communication",
        description: "Back-and-forth emails, phone calls, faxed orders"
      },
      new: {
        icon: <Zap className="w-8 h-8" />,
        title: "Real-time Collaboration",
        description: "Instant messaging, automated alerts, digital workflows"
      }
    },
    {
      old: {
        icon: <Database className="w-8 h-8" />,
        title: "Data Management",
        description: "Piles of paper tech packs, manual spreadsheets"
      },
      new: {
        icon: <Brain className="w-8 h-8" />,
        title: "AI-Powered Insights",
        description: "Digital tech packs, predictive analytics, automated reporting"
      }
    },
    {
      old: {
        icon: <Clock className="w-8 h-8" />,
        title: "Planning",
        description: "Guessing lead times, reactive management"
      },
      new: {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Predictive Planning",
        description: "AI-forecasted timelines, proactive optimization"
      }
    }
  ];

  const fabricXaiModules = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "BRM Intelligence",
      subtitle: "Buyer Relationship Management",
      description: "AI-powered buyer relationship management with centralized, intelligent view of all interactions.",
      features: [
        "Historical order pattern analysis",
        "Demand forecasting",
        "Automated tech pack parsing",
        "Instant cost and lead time estimation"
      ]
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Production Intelligence",
      subtitle: "Smart Factory Floor",
      description: "IoT sensors, real-time tracking, and AI analytics to optimize manufacturing end-to-end.",
      features: [
        "Live production dashboards",
        "Predictive maintenance",
        "Dynamic schedule adjustment",
        "Quality control automation"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Workforce Optimization",
      subtitle: "Empowering Human Capital",
      description: "Smart tools for managing and upskilling factory staff with AI-driven scheduling.",
      features: [
        "AI-driven shift planning",
        "Digital SOPs and training",
        "AR guidance for complex tasks",
        "Productivity analytics"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "StychX",
      subtitle: "Digital Presence Platform",
      description: "Dynamic digital storefront and collaboration space for global visibility.",
      features: [
        "24/7 global digital presence",
        "Virtual factory tours",
        "Rich product showcases",
        "B2B communication tools"
      ]
    }
  ];

  const globalImpact = [
    {
      country: "Bangladesh",
      icon: "🇧🇩",
      description: "World's second-largest apparel exporter embracing automation and smart factories",
      initiatives: [
        "Government digital upskilling programs",
        "BGMEA technology adoption support",
        "AI and robotic integration",
        "Super vendor development"
      ]
    },
    {
      country: "Vietnam",
      icon: "🇻🇳",
      description: "$40+ billion export industry targeting sustainable digital transformation by 2030",
      initiatives: [
        "VITAS 2030 digital goals",
        "State-of-the-art equipment investment",
        "Green production standards",
        "International partnership pilots"
      ]
    },
    {
      country: "India",
      icon: "🇮🇳",
      description: "Vast textile industry exploring Industry 4.0 and AI-based market analytics",
      initiatives: [
        "Industry 4.0 implementation",
        "Textile park technology upgrades",
        "Automation in factories",
        "Value chain innovation"
      ]
    }
  ];

  const futureVision = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Smart Factories",
      description: "Decisions based on data and predictive insight, not guesswork"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Empowered Workers",
      description: "Augmented human skills, freed from drudgery for higher-value work"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Connected Supply Chain",
      description: "True partnership between brands and manufacturers with real-time visibility"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Sustainable Growth",
      description: "Eliminating waste and friction for a more sustainable, profitable industry"
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
              The Future of Garments with fabricXai
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-6">
              The Future of{" "}
              <span className="relative inline-block">
                Garments
                <img
                  src="/icons/highlighter.svg"
                  alt="Highlighter"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#a8b0b7] max-w-4xl mx-auto mb-8">
              From resistance to reinvention - discover how the garment industry is evolving 
              from manual processes to AI-powered intelligence, and how fabricXai is leading the charge.
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
                   src="/dashboards/the-future.png"
                   alt="Industry Evolution Timeline - From Traditional Manual Processes to AI-Driven Future"
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
               Industry{" "}
               <span className="text-[#f2f827]">Evolution</span>
             </h2>
             <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
               The garment industry's evolution from traditional manual processes to AI-powered intelligence - 
               a journey that's reshaping the future of manufacturing.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {timelinePhases.map((phase, index) => (
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
                  <div className="w-12 h-12 bg-[#f2f827]/10 rounded-lg flex items-center justify-center text-[#f2f827] group-hover:scale-110 transition-transform duration-300">
                    {phase.icon}
                  </div>
                  <div>
                    <div className="text-[#f2f827] font-bold text-lg">{phase.phase}</div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#f2f827] transition-colors duration-300">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#a8b0b7] mb-4 group-hover:text-white transition-colors duration-300">
                  {phase.description}
                </p>
                <div className="space-y-2">
                  {phase.features.map((feature, featureIndex) => (
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

      {/* Old vs New Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              The New{" "}
              <span className="text-[#f2f827]">Imperative</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Why change now? The convergence of evolving demands, post-COVID pressures, and sustainability requirements 
              has created an urgent need for digital transformation.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {oldVsNew.map((comparison, index) => (
              <div
                key={index}
                className="space-y-4 lg:space-y-0"
              >
                {/* Mobile Progress Indicator */}
                <div className="lg:hidden flex items-center justify-center mb-4">
                  <div className="flex items-center gap-2 bg-[#1a2025] px-4 py-2 rounded-full border border-[#f2f827]/30">
                    <span className="text-[#f2f827] text-sm font-medium">Evolution {index + 1}/3</span>
                    <ArrowRight className="w-4 h-4 text-[#f2f827]" />
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                {/* Old Way */}
                <div className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-red-400/30 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                `}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform duration-300">
                      {comparison.old.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                        {comparison.old.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                    {comparison.old.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="relative group">
                    <button 
                      onClick={() => {
                        // Smooth scroll to the relevant solution section
                        const solutionSections = ['brm-intelligence', 'production-intelligence', 'production-intelligence'];
                        const targetSection = document.getElementById(solutionSections[index]);
                        if (targetSection) {
                          targetSection.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                          });
                        } else {
                          // Fallback: navigate to solution page
                          const routes = ['/brm-intelligence', '/production-intelligence', '/production-intelligence'];
                          window.location.href = routes[index];
                        }
                      }}
                      className="w-12 h-12 bg-[#f2f827]/10 rounded-full flex items-center justify-center border border-[#f2f827]/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f2f827]/20 animate-pulse cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f2f827]/50 active:scale-95"
                      title={`Explore ${comparison.new.title} solution`}
                    >
                      <ArrowRight className="w-6 h-6 text-[#f2f827] transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#1a2025] text-[#f2f827] text-xs px-2 py-1 rounded whitespace-nowrap border border-[#f2f827]/30">
                        Explore Solution
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Way */}
                <div className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-[#f2f827]/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#f2f827]/10 rounded-lg flex items-center justify-center text-[#f2f827] group-hover:scale-110 transition-transform duration-300">
                      {comparison.new.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#f2f827] transition-colors duration-300">
                        {comparison.new.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                    {comparison.new.description}
                  </p>
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-[#f2f827]" />
              </div>
              <blockquote className="text-xl font-medium text-white mb-4 italic">
                "In today’s apparel industry, digital transformation is not a luxury — it’s a necessity for survival. Without embracing data and automation, factories will struggle to meet the demands for speed, transparency, and traceability."
              </blockquote>
              <p className="text-[#a8b0b7]">—  Mostafiz Uddin, Managing Director, Denim Expert Ltd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* fabricXai Platform Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              fabricXai: The{" "}
              <span className="text-[#f2f827]">Next-Generation</span> Platform
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              A unified ecosystem of AI-powered solutions designed from the ground up to modernize 
              garment factories and buying houses for the new era.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {fabricXaiModules.map((module, index) => (
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
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-[#f2f827] transition-colors duration-300">
                      {module.title}
                    </h3>
                    <p className="text-[#f2f827] font-medium">{module.subtitle}</p>
                  </div>
                </div>
                <p className="text-[#a8b0b7] mb-4 group-hover:text-white transition-colors duration-300">
                  {module.description}
                </p>
                <div className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
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

          {/* Ecosystem Integration */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-12 h-12 text-[#f2f827]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f2f827] mb-4">
                Integrated Ecosystem
              </h3>
              <p className="text-[#a8b0b7] mb-6">
                All four components work together as the fabricXai ecosystem, creating a data-driven loop 
                where every part of the operation informs the other.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f2f827]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-6 h-6 text-[#f2f827]" />
                  </div>
                  <p className="text-sm text-[#a8b0b7]">Reduced Lead Times</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f2f827]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-[#f2f827]" />
                  </div>
                  <p className="text-sm text-[#a8b0b7]">Higher Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f2f827]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-[#f2f827]" />
                  </div>
                  <p className="text-sm text-[#a8b0b7]">Less Waste</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f2f827]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <BarChart4 className="w-6 h-6 text-[#f2f827]" />
                  </div>
                  <p className="text-sm text-[#a8b0b7]">Energy Efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              A Global{" "}
              <span className="text-[#f2f827]">Digital Awakening</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              The drive toward digital transformation is a global movement. Countries that embrace it 
              will shape the future of the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {globalImpact.map((country, index) => (
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
                  <div className="text-4xl">{country.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#f2f827] transition-colors duration-300">
                      {country.country}
                    </h3>
                  </div>
                </div>
                <p className="text-[#a8b0b7] mb-4 group-hover:text-white transition-colors duration-300">
                  {country.description}
                </p>
                <div className="space-y-2">
                  {country.initiatives.map((initiative, initiativeIndex) => (
                    <div key={initiativeIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#f2f827]" />
                      <span className="text-sm text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                        {initiative}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Revitalizing the{" "}
              <span className="text-[#f2f827]">Garment Sector</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              fabricXai's mission is to revitalize the garment sector – not by displacing its people and heritage, 
              but by infusing it with new intelligence, efficiency, and connectivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {futureVision.map((vision, index) => (
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
                  {vision.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">
                  {vision.title}
                </h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  {vision.description}
                </p>
              </div>
            ))}
          </div>

          {/* Final Quote */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#f2f827]" />
              </div>
              <blockquote className="text-xl font-medium text-white mb-4 italic">
                "We built fabricXai with a single mission — to empower garment businesses of all sizes with the tools they need to thrive in the digital era. Our system connects people, processes, and data into one intelligent platform so that owners and managers can focus on what matters most: quality, speed, and growth."
              </blockquote>
              <p className="text-[#a8b0b7]">— The fabricXai Mission</p>
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
            Let's weave the future together.
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

      <MobileChatButton />
    </main>
  );
} 