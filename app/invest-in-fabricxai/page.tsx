"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestDemoForm from "@/components/RequestDemoForm";
import EarlyBirdForm from "@/components/EarlyBirdForm";
import MobileChatButton from "@/components/MobileChatButton";
import { TrendingUp, Users, Globe, BarChart3, Target, Zap, Shield, Brain, Factory, Clock, Award, TrendingDown, Users as UsersIcon, Building2, Network, Rocket } from "lucide-react";

export default function InvestInFabricXaiPage() {
  // Remove unused state variables
  // const [activeTab, setActiveTab] = useState("overview");

  const marketSize = [
    {
      title: "Global Apparel Manufacturing",
      value: "$100B+",
      description: "Annual garment exports across Asia",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Bangladesh RMG Exports",
      value: "$47B",
      description: "2023 exports with 4,500+ factories",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Target Market (SAM)",
      value: "2,000+",
      description: "Top 20% of factories and buying houses",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Serviceable Market",
      value: "10,000+",
      description: "Potential customers across South Asia",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const tractionMetrics = [
    {
      metric: "Pilot Conversion Rate",
      value: "100%",
      description: "All pilot customers converting to paid clients",
      trend: "up",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: "Planning Efficiency",
      value: "30%",
      description: "Faster planning cycles for pilot users",
      trend: "up",
      icon: <Clock className="w-6 h-6" />
    },
    {
      metric: "Error Reduction",
      value: "50%",
      description: "Fewer order errors with AI-driven checks",
      trend: "down",
      icon: <TrendingDown className="w-6 h-6" />
    },
    {
      metric: "User Engagement",
      value: "80%",
      description: "Active users logging in 3+ times per week",
      trend: "up",
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      metric: "Buyer Retention",
      value: "3x",
      description: "Improved buyer retention rates",
      trend: "up",
      icon: <Award className="w-6 h-6" />
    },
    {
      metric: "Pipeline Growth",
      value: "2x",
      description: "Sales pipeline doubled in 3 months",
      trend: "up",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const financialProjections = [
    {
      year: "2024",
      phase: "Pilot & Validation",
      customers: "10-15",
      revenue: "$50K",
      focus: "Product validation and pilot success"
    },
    {
      year: "2025",
      phase: "Market Entry",
      customers: "100",
      revenue: "$1.2M",
      focus: "Bangladesh market penetration"
    },
    {
      year: "2026",
      phase: "Scale & Expand",
      customers: "500",
      revenue: "$6M",
      focus: "Regional expansion and product enhancement"
    },
    {
      year: "2027",
      phase: "Market Leadership",
      customers: "1,000+",
      revenue: "$15M",
      focus: "Platform ecosystem and data monetization"
    },
    {
      year: "2028",
      phase: "Global Expansion",
      customers: "2,000+",
      revenue: "$30M+",
      focus: "International markets and strategic partnerships"
    }
  ];

  const competitiveAdvantages = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-First Platform",
      description: "First-mover advantage in AI-powered RMG management with specialized algorithms for garment workflows."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero Churn Rate",
      description: "100% pilot conversion rate with no customer churn, demonstrating strong product-market fit."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Industry Network",
      description: "Deep connections with BGMEA, factory owners, and buying houses providing strong go-to-market advantage."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Proven ROI",
      description: "30% efficiency gains and 50% error reduction validated by pilot customers with measurable business impact."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Local Expertise",
      description: "Team with deep RMG domain knowledge and understanding of local market constraints and opportunities."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Cloud-native platform designed for rapid scaling across multiple markets and customer segments."
    }
  ];

  const businessModel = [
    {
      title: "SaaS Subscriptions",
      description: "Tiered pricing model with Basic, Professional, and Enterprise plans",
      pricing: "$500-$2,000/month per factory",
      revenue: "Primary revenue stream"
    },
    {
      title: "Implementation Services",
      description: "Onboarding, training, and customization services",
      pricing: "50-100% of first-year subscription",
      revenue: "One-time revenue + stickiness"
    },
    {
      title: "Expansion Revenue",
      description: "Module upgrades and user expansion within existing accounts",
      pricing: "20-30% annual expansion",
      revenue: "Negative net churn driver"
    },
    {
      title: "Platform Services",
      description: "Future data monetization and marketplace fees",
      pricing: "Transaction-based revenue",
      revenue: "Long-term growth driver"
    }
  ];

  const useOfFunds = [
    {
      category: "Product Development",
      percentage: "40%",
      description: "AI features, scalability, and platform enhancements",
      amount: "$400K"
    },
    {
      category: "Market Expansion",
      percentage: "35%",
      description: "Sales team, marketing, and regional expansion",
      amount: "$350K"
    },
    {
      category: "Customer Success",
      percentage: "15%",
      description: "Implementation team and customer support",
      amount: "$150K"
    },
    {
      category: "Operations",
      percentage: "10%",
      description: "Infrastructure, legal, and administrative costs",
      amount: "$100K"
    }
  ];

  const marketTimeline = [
    {
      phase: "Phase 1: Bangladesh",
      timeline: "2024-2025",
      target: "100 factories",
      focus: "Market validation and reference customers"
    },
    {
      phase: "Phase 2: Regional",
      timeline: "2025-2026",
      target: "500 factories",
      focus: "Vietnam, India, and other Asian markets"
    },
    {
      phase: "Phase 3: Platform",
      timeline: "2026-2027",
      target: "1,000+ factories",
      focus: "Data platform and ecosystem development"
    },
    {
      phase: "Phase 4: Global",
      timeline: "2027+",
      target: "2,000+ factories",
      focus: "International expansion and strategic partnerships"
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
              For Angel & VC Investors
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-6">
              Invest in{" "}
              <span className="relative inline-block">
                FabricXAI
                <img
                  src="/icons/highlighter.svg"
                  alt="Highlighter"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#a8b0b7] max-w-4xl mx-auto mb-6">
              Building the AI-powered &ldquo;operating system&rdquo; for the $100B+ Asian garment manufacturing industry
            </p>
            <p className="text-lg text-[#a8b0b7] max-w-3xl mx-auto mb-8">
              We are on a mission to digitize the ready-made garments (RMG) sector, starting with Bangladesh – 
              the world&apos;s second-largest apparel exporter with $47B in annual exports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-4">
                    Request Investor Deck
                  </Button>
                </DialogTrigger>
                <DialogContent showCloseButton={false}>
                  <DialogHeader>
                    <VisuallyHidden>
                      <DialogTitle>Request Investor Information</DialogTitle>
                    </VisuallyHidden>
                  </DialogHeader>
                  <RequestDemoForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button outline size="lg" className="text-lg px-8 py-4">
                    Schedule Meeting
                  </Button>
                </DialogTrigger>
                <DialogContent showCloseButton={false}>
                  <DialogHeader>
                    <VisuallyHidden>
                      <DialogTitle>Schedule Investor Meeting</DialogTitle>
                    </VisuallyHidden>
                  </DialogHeader>
                  <EarlyBirdForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Hero Market Overview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20 shadow-2xl">
              <div className="grid md:grid-cols-4 gap-6">
                {marketSize.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-[#f2f827]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#f2f827]">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold text-[#f2f827] mb-1 group-hover:text-[#f2f827]">{item.value}</div>
                    <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-xs text-[#a8b0b7]">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              The Opportunity:{" "}
              <span className="text-[#f2f827]">A Digitization-Starved Sector</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Bangladesh and other South Asian countries have become global apparel powerhouses without 
              the advanced software infrastructure seen in other industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#f2f827] mb-6">
                The Problem
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Manual Operations:</span>
                    <span className="text-[#a8b0b7]"> Most factories rely on spreadsheets, email, and phone calls</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Limited Visibility:</span>
                    <span className="text-[#a8b0b7]"> No real-time insights into production and order status</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Buyer Pressure:</span>
                    <span className="text-[#a8b0b7]"> Global brands demand transparency and faster turnarounds</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Competitive Risk:</span>
                    <span className="text-[#a8b0b7]"> Factories must digitize to remain competitive</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
              <div className="aspect-square bg-gradient-to-br from-[#2a2d30] to-[#34383b] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingDown className="w-16 h-16 text-red-500" />
                  </div>
                  <p className="text-[#a8b0b7] text-xl mb-2">Current State</p>
                  <p className="text-sm text-[#6b7280]">Manual processes, limited visibility, and operational inefficiencies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
              <div className="aspect-square bg-gradient-to-br from-[#2a2d30] to-[#34383b] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-16 h-16 text-[#f2f827]" />
                  </div>
                  <p className="text-[#a8b0b7] text-xl mb-2">FabricXAI Solution</p>
                  <p className="text-sm text-[#6b7280]">AI-powered platform for complete digital transformation</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#f2f827] mb-6">
                Our Solution
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f2f827] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Integrated Platform:</span>
                    <span className="text-[#a8b0b7]"> End-to-end management from order to delivery</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f2f827] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">AI Intelligence:</span>
                    <span className="text-[#a8b0b7]"> Predictive analytics and automated insights</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f2f827] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Real-time Visibility:</span>
                    <span className="text-[#a8b0b7]"> Live tracking and automated buyer updates</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f2f827] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Competitive Advantage:</span>
                    <span className="text-[#a8b0b7]"> Position factories as preferred suppliers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Traction:{" "}
              <span className="text-[#f2f827]">Pilot Success & Early Adoption</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              FabricXAI is not just an idea – we have working product modules and early pilot successes 
              that validate our approach with measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tractionMetrics.map((metric, index) => (
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
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-[#f2f827] mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#f2f827] transition-colors duration-300">
                  {metric.metric}
                </h3>
                <p className="text-[#a8b0b7] text-sm group-hover:text-white transition-colors duration-300">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Business Model:{" "}
              <span className="text-[#f2f827]">SaaS with Scalable Recurring Revenue</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Multiple revenue streams with high margins and strong expansion potential through 
              land-and-expand strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {businessModel.map((model, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">
                  {model.title}
                </h3>
                <p className="text-[#a8b0b7] mb-4 group-hover:text-white transition-colors duration-300">
                  {model.description}
                </p>
                <div className="text-lg font-semibold text-[#f2f827] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {model.pricing}
                </div>
                <div className="text-sm text-[#a8b0b7] font-medium">
                  {model.revenue}
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Projection Chart */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <h3 className="text-2xl font-bold text-[#f2f827] mb-8 text-center">
              5-Year Revenue Projections
            </h3>
            <div className="grid md:grid-cols-5 gap-6">
              {financialProjections.map((projection, index) => (
                <div
                  key={index}
                  className={`
                    group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                    rounded-2xl p-6 overflow-hidden 
                    transition-all duration-300 ease-in-out transform hover:scale-105
                    hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                  `}
                >
                  <div className="text-2xl font-bold text-[#f2f827] mb-2">
                    {projection.year}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#f2f827] transition-colors duration-300">
                    {projection.phase}
                  </h4>
                  <div className="text-sm text-[#a8b0b7] space-y-1 group-hover:text-white transition-colors duration-300">
                    <p><strong>Customers:</strong> {projection.customers}</p>
                    <p><strong>Revenue:</strong> {projection.revenue}</p>
                    <p><strong>Focus:</strong> {projection.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Expansion Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Market Expansion{" "}
              <span className="text-[#f2f827]">Roadmap</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Strategic expansion plan from Bangladesh to regional markets and beyond, 
              capturing the full $100B+ Asian garment manufacturing opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marketTimeline.map((phase, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <div className="text-lg font-bold text-[#f2f827] mb-2">
                  {phase.phase}
                </div>
                <div className="text-sm text-[#a8b0b7] mb-3 group-hover:text-white transition-colors duration-300">
                  {phase.timeline}
                </div>
                <div className="text-lg font-semibold text-white mb-2 group-hover:text-[#f2f827] transition-colors duration-300">
                  {phase.target}
                </div>
                <p className="text-[#a8b0b7] text-sm group-hover:text-white transition-colors duration-300">
                  {phase.focus}
                </p>
              </div>
            ))}
          </div>

          {/* Market Map Visualization */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <div className="aspect-video bg-gradient-to-br from-[#2a2d30] to-[#34383b] rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-16 h-16 text-[#f2f827]" />
                </div>
                <p className="text-[#a8b0b7] text-xl mb-2">Asian Garment Manufacturing Hub</p>
                <p className="text-sm text-[#6b7280]">Bangladesh → Vietnam → India → Regional Expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Competitive{" "}
              <span className="text-[#f2f827]">Advantages</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Multiple sustainable competitive advantages that create significant barriers to entry 
              and position FabricXAI for long-term market leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {competitiveAdvantages.map((advantage, index) => (
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
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Competitive Landscape */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <h3 className="text-2xl font-bold text-[#f2f827] mb-8 text-center">
              Competitive Landscape
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Manual Processes</h4>
                <p className="text-[#a8b0b7] text-sm">Spreadsheets, emails, phone calls</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Generic ERP</h4>
                <p className="text-[#a8b0b7] text-sm">Not tailored for RMG workflows</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-[#f2f827]" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">FabricXAI</h4>
                <p className="text-[#a8b0b7] text-sm">AI-powered, RMG-specific platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Use of{" "}
              <span className="text-[#f2f827]">Funds</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Strategic allocation of $1M investment to accelerate growth and capture market opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {useOfFunds.map((item, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <div className="text-2xl font-bold text-[#f2f827] mb-2">
                  {item.percentage}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#f2f827] transition-colors duration-300">
                  {item.category}
                </h3>
                <p className="text-[#a8b0b7] text-sm mb-3 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
                <div className="text-lg font-bold text-[#f2f827] group-hover:text-[#f2f827]">
                  {item.amount}
                </div>
              </div>
            ))}
          </div>

          {/* Investment Summary */}
          <div className="bg-[#1a2025] rounded-2xl p-8 border border-[#f2f827]/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#f2f827] mb-2">$1M</div>
                <h4 className="text-lg font-semibold text-white mb-2">Investment Target</h4>
                <p className="text-[#a8b0b7] text-sm">Series A funding round</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#f2f827] mb-2">18-24</div>
                <h4 className="text-lg font-semibold text-white mb-2">Months to $1M ARR</h4>
                <p className="text-[#a8b0b7] text-sm">Clear path to revenue milestone</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#f2f827] mb-2">5-10x</div>
                <h4 className="text-lg font-semibold text-white mb-2">Potential Returns</h4>
                <p className="text-[#a8b0b7] text-sm">Based on market opportunity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Now Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
            Why{" "}
            <span className="text-[#f2f827]">Invest Now?</span>
          </h2>
          <p className="text-xl text-[#a8b0b7] mb-8">
            FabricXAI sits at the intersection of a huge market and a critical technology gap. 
            The Bangladesh RMG sector and its regional peers are at a tipping point.
          </p>
          
          <div className="bg-[#1a2025] rounded-xl p-6 border border-[#34383b] mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-[#f2f827] mb-3">Market Timing</h3>
                <ul className="text-[#a8b0b7] text-sm space-y-2">
                  <li>• Industry at digital transformation inflection point</li>
                  <li>• No incumbent software dominates the space</li>
                  <li>• First-mover advantage in AI-first solution</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f2f827] mb-3">Proven Traction</h3>
                <ul className="text-[#a8b0b7] text-sm space-y-2">
                  <li>• 100% pilot conversion rate</li>
                  <li>• Measurable ROI for customers</li>
                  <li>• Strong product-market fit</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-4">
                  Request Investor Deck
                </Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <VisuallyHidden>
                    <DialogTitle>Request Investor Information</DialogTitle>
                  </VisuallyHidden>
                </DialogHeader>
                <RequestDemoForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button outline size="lg" className="text-lg px-8 py-4">
                  Schedule Meeting
                </Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <VisuallyHidden>
                    <DialogTitle>Schedule Investor Meeting</DialogTitle>
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