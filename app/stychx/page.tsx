"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestDemoForm from "@/components/RequestDemoForm";
import EarlyBirdForm from "@/components/EarlyBirdForm";
import MobileChatButton from "@/components/MobileChatButton";
import { Globe, Shield, Zap, Users, BarChart3, Clock, TrendingUp, MessageSquare, Eye, AlertTriangle, ArrowRight } from "lucide-react";

export default function StychxPage() {
  // Remove unused state variables
  // const [activeTab, setActiveTab] = useState("overview");

  const challenges = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Limited Online Presence",
      description: "Many garment manufacturers remain invisible to potential buyers worldwide despite producing quality products."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Traditional Website Issues",
      description: "Costly development, ongoing maintenance, and technical expertise requirements."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Downtime & Poor Maintenance",
      description: "Outdated sites, frequent downtime, and reactive maintenance erode buyer confidence."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Lack of Analytics",
      description: "No data-driven insights to optimize online presence and improve user experience."
    }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Easy Online Catalogue Setup",
      description: "Simple creation of professional websites with product galleries and company information."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI-Driven Site Maintenance",
      description: "Continuous monitoring and automatic fixing of common issues without human intervention."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Uptime & Reliability",
      description: "Round-the-clock monitoring ensures websites stay live and functional at all times."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI-Powered Sales Assistant",
      description: "Intelligent chatbot that engages visitors and answers buyer questions 24/7."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Integrated Analytics",
      description: "Data-driven insights to optimize online presence and improve conversion rates."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Self-Healing Mechanisms",
      description: "Automatic detection and repair of broken links, bugs, and layout issues."
    }
  ];



  const workflowSteps = [
    {
      step: "01",
      title: "Setup Your Catalogue",
      description: "Upload product photos, descriptions, and company information to create your digital showroom."
    },
    {
      step: "02",
      title: "AI Site Generation",
      description: "StychX automatically builds a professional website optimized for garment businesses."
    },
    {
      step: "03",
      title: "24/7 AI Monitoring",
      description: "AI agents continuously monitor site health, performance, and security around the clock."
    },
    {
      step: "04",
      title: "Automatic Maintenance",
      description: "Self-healing mechanisms fix common issues and keep your site updated automatically."
    },
    {
      step: "05",
      title: "AI Sales Assistant",
      description: "Intelligent chatbot engages visitors and answers buyer questions in real-time."
    },
    {
      step: "06",
      title: "Analytics & Insights",
      description: "Data-driven reports help optimize your online presence and grow your business."
    }
  ];

  const solutions = [
    {
      title: "Accessible Digital Presence",
      description: "No technical skills needed to create a professional website that impresses international buyers."
    },
    {
      title: "Automated 24/7 Maintenance",
      description: "AI agents keep your site live, secure, and updated while you focus on production and sales."
    },
    {
      title: "Enhanced Buyer Engagement",
      description: "AI sales assistant acts as a tireless marketing agent available 24/7 to engage visitors."
    },
    {
      title: "Data-Driven Growth",
      description: "Continuous feedback and analytics help optimize your online marketing strategies."
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
              AI-Powered Digital Presence for Garment Industry
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-6">
              StychX{" "}
              <span className="relative inline-block">
                Platform
                <img
                  src="/icons/highlighter.svg"
                  alt="Highlighter"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#a8b0b7] max-w-4xl mx-auto mb-8">
              Transform your garment business with an AI-powered website builder that creates, maintains, 
              and optimizes your digital presence 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open("https://webx.fabricxai.com", "_blank")}
              >
                Get Free Website
              </Button>
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
          
          {/* Hero Website Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-[#2a2d30] to-[#34383b] rounded-xl overflow-hidden">
                <img
                  src="/dashboards/stychx.png"
                  alt="StychX Platform Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-12 h-12 text-[#f2f827]" />
                    </div>
                    <p className="text-[#a8b0b7] text-lg">StychX Website Preview</p>
                    <p className="text-sm text-[#6b7280] mt-2">Professional garment catalogue with AI-powered features</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              The Digital Presence{" "}
              <span className="text-[#f2f827]">Challenge</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Many small and medium garment manufacturers in Bangladesh lack a strong online presence, 
              remaining invisible to potential buyers worldwide despite producing quality products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-red-500/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(239,68,68,0.22),_rgba(239,68,68,0))]
                `}
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500 group-hover:scale-110 transition-transform duration-300">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{challenge.title}</h3>
                <p className="text-[#a8b0b7] text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Importance of Digital Presence Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Why Digital Presence{" "}
              <span className="text-[#f2f827]">Matters</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              A robust digital presence is crucial for reaching international buyers and building credibility in today&apos;s market.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl space-y-6">
              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4 group-hover:text-[#f2f827] transition-colors duration-300">Digital Showroom</h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  An official website acts as a digital showroom where companies can present their catalogue, 
                  company story, and credentials to international buyers.
                </p>
              </div>

              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4 group-hover:text-[#f2f827] transition-colors duration-300">Direct Buyer Connection</h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  Showcasing product designs and capabilities online allows suppliers to attract international 
                  fashion labels and buyers seeking new partnerships.
                </p>
              </div>

              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4 group-hover:text-[#f2f827] transition-colors duration-300">Data & Analytics</h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  Website analytics provide invaluable feedback on visitor behavior, helping optimize 
                  online presence and improve user experience.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* StychX Solution Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Introducing{" "}
              <span className="text-[#f2f827]">StychX</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              A next-generation AI-powered website builder tailored for garment businesses that eliminates 
              the headaches of ongoing maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
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
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#a8b0b7] text-sm group-hover:text-white transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* How StychX Solves the Problem Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              How StychX{" "}
              <span className="text-[#f2f827]">Solves the Problem</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              StychX addresses the core challenges of digital presence for garment manufacturers in multiple ways.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-3 group-hover:text-[#f2f827] transition-colors duration-300">{solution.title}</h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">{solution.description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>



      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              How StychX{" "}
              <span className="text-[#f2f827]">Works</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              A seamless 6-step process that transforms your garment business from offline to AI-powered digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b] relative"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#f2f827] rounded-full flex items-center justify-center text-[#13191d] font-bold text-lg">
                  {step.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-[#a8b0b7] text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Real-World{" "}
              <span className="text-[#f2f827]">Impact</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              See how StychX transforms garment businesses from invisible suppliers to global digital brands.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl space-y-8">
              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827] group-hover:text-[#f2f827] transition-colors duration-300">Before StychX</h3>
                </div>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  Garment businesses operate &ldquo;in the shadows,&rdquo; known only through intermediaries, 
                  missing opportunities to showcase products directly to buyers.
                </p>
              </div>

              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827] group-hover:text-[#f2f827] transition-colors duration-300">With StychX</h3>
                </div>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  Professional digital presence with AI-powered maintenance, 24/7 sales assistance, 
                  and data-driven optimization for continuous growth.
                </p>
              </div>

              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827] group-hover:text-[#f2f827] transition-colors duration-300">The Result</h3>
                </div>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  Garment businesses can focus on production while StychX ensures their online window 
                  to the world is always shining and never shuts.
                </p>
              </div>

              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827] group-hover:text-[#f2f827] transition-colors duration-300">Future Impact</h3>
                </div>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  Bangladesh&apos;s RMG sector can stitch a new success story in the digital age, 
                  connecting quality products with buyers worldwide like never before.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="text-[#f2f827]">Digital Presence?</span>
          </h2>
          <p className="text-xl text-[#a8b0b7] mb-8">
            Join the digital revolution and showcase your garment business to the world with 
            AI-powered website creation and maintenance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Free Website
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>Request StychX Demo</DialogTitle>
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

          <div className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]">
            <p className="text-[#a8b0b7] text-sm">
              <strong className="text-[#f2f827]">No technical skills needed.</strong> No upfront commitment. 
              Get your professional website in less than 15 minutes.
            </p>
          </div>
        </div>
      </section>

      <MobileChatButton />
    </main>
  );
} 