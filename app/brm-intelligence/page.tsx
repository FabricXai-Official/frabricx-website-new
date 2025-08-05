"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestDemoForm from "@/components/RequestDemoForm";
import EarlyBirdForm from "@/components/EarlyBirdForm";
import MobileChatButton from "@/components/MobileChatButton";
import { Users, MessageSquare, BarChart3, Globe, Clock, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BRMIntelligencePage() {
  // Remove unused state variables
  // const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pipeline Management",
      description: "Track every buyer from initial inquiry to repeat orders with AI-powered insights."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual Communication",
      description: "Break language barriers with AI-powered translation and localization."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Updates",
      description: "Automated production and shipment updates keep buyers informed 24/7."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Personalized Experiences",
      description: "AI learns each buyer&apos;s preferences for tailored communication."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "End-to-End Visibility",
      description: "Complete transparency from inquiry to delivery across all departments."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Forecasting",
      description: "Predict delays and suggest solutions before issues arise."
    }
  ];



  const workflowSteps = [
    {
      step: "01",
      title: "Inquiry Capture",
      description: "AI automatically captures and translates buyer inquiries from any channel."
    },
    {
      step: "02",
      title: "Smart Profiling",
      description: "Creates comprehensive buyer profiles with preferences and history."
    },
    {
      step: "03",
      title: "Automated Response",
      description: "AI drafts culturally appropriate responses in the buyer's language."
    },
    {
      step: "04",
      title: "Order Management",
      description: "Seamlessly converts quotes to orders with integrated production tracking."
    },
    {
      step: "05",
      title: "Real-Time Updates",
      description: "Automatic milestone notifications keep buyers informed throughout production."
    },
    {
      step: "06",
      title: "Feedback Loop",
      description: "Solicits and analyzes buyer feedback to continuously improve service."
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
              AI-Powered Buyer Relationship Management
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-6">
              BRM{" "}
              <span className="relative inline-block">
                Intelligence
                <img
                  src="/icons/highlighter.svg"
                  alt="Highlighter"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#a8b0b7] max-w-4xl mx-auto mb-8">
              Transform buyer relationships from a pain point into your strongest competitive advantage with AI-powered communication and insights.
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
                    <DialogTitle>Request BRM Intelligence Demo</DialogTitle>
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
          
          {/* Hero Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-[#2a2d30] to-[#34383b] rounded-xl overflow-hidden">
                <img
                  src="/dashboards/BRMI.png"
                  alt="BRM Intelligence Dashboard"
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
                      <BarChart3 className="w-12 h-12 text-[#f2f827]" />
                    </div>
                    <p className="text-[#a8b0b7] text-lg">BRM Intelligence Dashboard Preview</p>
                    <p className="text-sm text-[#6b7280] mt-2">Real-time buyer pipeline, automated communications, and AI insights</p>
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
              The RMG Buyer Management{" "}
              <span className="text-[#f2f827]">Challenge</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              In the fast-paced Ready-Made Garment industry, managing buyer relationships is critical yet often overlooked.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl space-y-6">
              <div className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]">
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4">Traditional Pain Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#a8b0b7]">Disjointed emails and spreadsheets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#a8b0b7]">Time zone and language barriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#a8b0b7]">Reactive rather than proactive communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#a8b0b7]">Lost opportunities and buyer frustration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]">
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4">Modern Buyer Expectations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#a8b0b7]">Proactive communication and real-time updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#a8b0b7]">Multilingual support and cultural sensitivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#a8b0b7]">Transparent supply chain visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#a8b0b7]">Reliable partnership beyond just low prices</span>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* What is BRM Intelligence Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              What is{" "}
              <span className="text-[#f2f827]">BRM Intelligence?</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              A next-generation, intelligent CRM specifically designed for the RMG sector that transforms buyer management from a pain point into a competitive advantage.
            </p>
          </div>

                      <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                  <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">{feature.description}</p>
                </div>
              ))}
            </div>


        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              How BRM Intelligence{" "}
              <span className="text-[#f2f827]">Works</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              From initial inquiry to final delivery, see how AI transforms every step of the buyer relationship journey.
            </p>
          </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className={`
                    group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                    rounded-2xl p-6 overflow-hidden 
                    transition-all duration-300 ease-in-out transform hover:scale-105
                    hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                  `}
                >
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#f2f827] rounded-full flex items-center justify-center text-[#13191d] font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">{step.title}</h3>
                    <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>


        </div>
      </section>

      {/* Real-World Scenario Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              A Day in the Life with{" "}
              <span className="text-[#f2f827]">BRM Intelligence</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Follow Asma, a Senior Merchandiser, as she experiences the transformation of buyer management.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl space-y-8">
              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827]">Morning - Centralized Pipeline Check</h3>
                </div>
                <p className="text-[#a8b0b7]">
                  Asma opens her BRM Intelligence dashboard and instantly sees all active buyer engagements, 
                  including a new high-priority French inquiry that&apos;s already been translated and flagged.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827]">Midday - Automated Multilingual Outreach</h3>
                </div>
                <p className="text-[#a8b0b7]">
                  AI drafts a professional French response to the inquiry. Asma reviews it with side-by-side 
                  translation, makes adjustments, and sends it within minutes.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827]">Afternoon - Smart Follow-ups</h3>
                </div>
                <p className="text-[#a8b0b7]">
                  BRM Intelligence alerts Asma about buyers needing attention and suggests personalized 
                  outreach strategies to re-engage dormant accounts.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827]">Evening - Analytics & Insights</h3>
                </div>
                <p className="text-[#a8b0b7]">
                  Asma reviews the &ldquo;Buyer Happiness Index&rdquo; and prepares for strategic relationship-building 
                  calls armed with AI-generated insights and data.
                </p>
              </motion.div>
            </div>


          </div>
        </div>
      </section>



      {/* Competitive Differentiation Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Competitive{" "}
              <span className="text-[#f2f827]">Differentiation</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Why BRM Intelligence represents a compelling innovation for investors and stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4">🏭 Large Market, Untapped Digitalization</h3>
                <p className="text-[#a8b0b7]">
                  Bangladesh alone exported $38.5 billion in garments in 2024, yet the industry&apos;s B2B relationship 
                  management remains largely manual and inefficient.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4">🤖 AI + Domain Expertise = High Barrier to Entry</h3>
                <p className="text-[#a8b0b7]">
                  FabricXAI combines deep RMG industry knowledge with cutting-edge AI capabilities, creating 
                  specialized solutions that generic software cannot match.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4">⏩ Driving Value Chain Transformation</h3>
                <p className="text-[#a8b0b7]">
                  Enables suppliers to move from competing on price to competing on service quality and reliability, 
                  unlocking better margins and sustainable growth.
                </p>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4">📊 Data Network Effects</h3>
                <p className="text-[#a8b0b7]">
                  As adoption grows, FabricXAI can aggregate unique industry data for benchmarking insights 
                  and predictive market analytics.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4">🌐 Industry 4.0 Alignment</h3>
                <p className="text-[#a8b0b7]">
                  Meets growing global brand demands for digital transparency and real-time order tracking, 
                  future-proofing factories for tomorrow&apos;s standards.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-4">🚀 Platform Expansion Potential</h3>
                <p className="text-[#a8b0b7]">
                  BRM Intelligence serves as the foundation for broader digital integration, including quality 
                  control and supply chain optimization solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="text-[#f2f827]">Buyer Relationships?</span>
          </h2>
          <p className="text-xl text-[#a8b0b7] mb-8">
            Join the future of RMG buyer management with AI-powered intelligence that drives growth and builds lasting partnerships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Free Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>Request BRM Intelligence Demo</DialogTitle>
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

          <motion.div
            className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="text-[#a8b0b7] text-sm">
              <strong className="text-[#f2f827]">No tech skills needed.</strong> No upfront commitment. 
              See the future of RMG buyer management today.
            </p>
          </motion.div>
        </div>
      </section>

      <MobileChatButton />
    </main>
  );
} 