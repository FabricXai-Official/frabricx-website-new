"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import RequestDemoForm from "@/components/RequestDemoForm";
import EarlyBirdForm from "@/components/EarlyBirdForm";
import MobileChatButton from "@/components/MobileChatButton";
import { Factory, Calendar, BarChart3, Clock, TrendingUp, Shield, Zap, Users, Settings, Target, AlertTriangle, ArrowRight } from "lucide-react";

export default function ProductionIntelligencePage() {
  // Remove unused state variables
  // const [activeTab, setActiveTab] = useState("overview");

  const challenges = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Fragmented Communication",
      description: "Tech pack updates and production changes get lost in email threads and Excel sheets."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Manual Planning Inefficiencies",
      description: "Production planning in spreadsheets is error-prone and slow under heavy workloads."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Lack of Visibility",
      description: "Without real-time tracking, issues go unnoticed until it's too late."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Costly Delays",
      description: "Missed deadlines can be catastrophic, requiring expensive air shipments."
    }
  ];

  const features = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Single Source of Truth",
      description: "All style information, timelines, and production data in one unified platform."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation + AI",
      description: "Rule-based automation for routine tasks with AI-driven analytics for complex planning."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Garment-Specific Design",
      description: "Built with garment industry logic for tech packs, size runs, and production cycles."
    }
  ];

  const preProductionFeatures = [
    {
      title: "Tech Pack Parsing & BOM Automation",
      description: "AI parses tech packs to extract all critical details automatically, reducing errors and ensuring nothing is overlooked."
    },
    {
      title: "Sample Development Tracking",
      description: "Tracks each sample type and status with automated alerts for upcoming due dates and buyer feedback."
    },
    {
      title: "Material & Costing Calculations",
      description: "Auto-generates materials requirements and cost sheets with fabric shrinkage and pattern adjustments."
    },
    {
      title: "Time & Action Calendar",
      description: "Dynamic T&A calendar that updates automatically and alerts planners to potential delays."
    }
  ];

  const planningFeatures = [
    {
      title: "Intelligent Line Scheduling",
      description: "Auto-schedules production orders based on delivery priorities, style complexity, and factory capacity."
    },
    {
      title: "Multi-Factory Coordination",
      description: "Allocates orders across facilities balancing load and leveraging each factory's expertise."
    },
    {
      title: "Efficiency Forecasting",
      description: "Generates daily efficiency forecasts for each line and style based on historical data."
    },
    {
      title: "Bottleneck Detection",
      description: "Continuously monitors output and detects emerging bottlenecks in real-time."
    },
    {
      title: "Workforce Planning",
      description: "AI-powered shift scheduling matching skilled workers to operations where they're needed most."
    },
    {
      title: "Adaptive Replanning",
      description: "Re-optimizes schedules on the fly when changes occur, maintaining production targets."
    }
  ];

  const monitoringFeatures = [
    {
      title: "Live Production Dashboard",
      description: "Real-time visibility into output, efficiency, defect rates, and WIP levels for each line."
    },
    {
      title: "Predictive Delay Warnings",
      description: "Machine learning analyzes trends to predict potential delays before they happen."
    },
    {
      title: "Quality Feedback Loop",
      description: "Integrates QC data to correlate defects with production and improve processes."
    },
    {
      title: "Collaboration & Visibility",
      description: "Role-based access for all stakeholders fostering collaborative, synchronized execution."
    }
  ];



  const workflowSteps = [
    {
      step: "01",
      title: "Tech Pack Processing",
      description: "AI parses tech packs and creates digital profiles with all specifications."
    },
    {
      step: "02",
      title: "Pre-Production Planning",
      description: "Automated T&A calendar, sample tracking, and material calculations."
    },
    {
      step: "03",
      title: "Intelligent Scheduling",
      description: "AI optimizes line assignments, workforce planning, and production sequences."
    },
    {
      step: "04",
      title: "Real-Time Monitoring",
      description: "Live dashboard tracks production progress and detects bottlenecks."
    },
    {
      step: "05",
      title: "Predictive Alerts",
      description: "Machine learning warns of potential delays before they occur."
    },
    {
      step: "06",
      title: "Quality Assurance",
      description: "Integrated QC data ensures consistent quality and process improvement."
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
              AI-Powered Production Planning & Optimization
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-6">
              Production{" "}
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
              Streamline pre-production, automate scheduling, and optimize your factory floor with AI. 
              Transform fragmented processes into a well-orchestrated operation.
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
                    <DialogTitle>Request Production Intelligence Demo</DialogTitle>
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
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-[#1a2025] rounded-2xl p-6 border border-[#f2f827]/20 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/dashboards/PI.png"
                  alt="Production Intelligence Dashboard"
                  className="w-full h-auto max-h-[600px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#f2f827]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Factory className="w-12 h-12 text-[#f2f827]" />
                    </div>
                    <p className="text-[#a8b0b7] text-lg">Production Intelligence Dashboard Preview</p>
                    <p className="text-sm text-[#6b7280] mt-2">Real-time production monitoring, AI scheduling, and factory optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Challenges Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Production Challenges in{" "}
              <span className="text-[#f2f827]">Garment Factories</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Modern garment production is a juggling act. Many factories still rely on disjointed tools and manual planning, 
              leading to critical pain points that impact efficiency and profitability.
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
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">{challenge.title}</h3>
                <p className="text-[#a8b0b7] text-sm group-hover:text-white transition-colors duration-300">{challenge.description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Production Intelligence Solution Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Introducing{" "}
              <span className="text-[#f2f827]">Production Intelligence</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              An end-to-end platform that automates and unifies your production planning process – 
              from the tech pack to the factory floor.
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

      {/* Pre-Production Automation Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1e2529] to-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Pre-Production{" "}
              <span className="text-[#f2f827]">Automation</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Streamline every step before the factory line starts, ensuring you&apos;re production-ready faster and with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {preProductionFeatures.map((feature, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-3 group-hover:text-[#f2f827] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* AI-Driven Planning Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              AI-Driven{" "}
              <span className="text-[#f2f827]">Production Planning</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Advanced planning engine creates optimal production schedules and line plans that maximize efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {planningFeatures.map((feature, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-3 group-hover:text-[#f2f827] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#a8b0b7] text-sm group-hover:text-white transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Real-Time Monitoring Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              Real-Time{" "}
              <span className="text-[#f2f827]">Factory Monitoring</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              Your co-pilot during production ensuring everything stays on track, day by day, hour by hour.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {monitoringFeatures.map((feature, index) => (
              <div
                key={index}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/50 
                  rounded-2xl p-6 overflow-hidden 
                  transition-all duration-300 ease-in-out transform hover:scale-105
                  hover:bg-[linear-gradient(to_bottom_right,_rgba(242,248,39,0.22),_rgba(242,248,39,0))]
                `}
              >
                <h3 className="text-xl font-semibold text-[#f2f827] mb-3 group-hover:text-[#f2f827] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Real-World Scenario Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1e2529]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              From Tech Pack to{" "}
              <span className="text-[#f2f827]">On-Time Delivery</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              See how Production Intelligence transforms a complex order into a smooth, well-orchestrated operation.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl space-y-8">
              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827] group-hover:text-[#f2f827] transition-colors duration-300">Tech Pack Processing</h3>
                </div>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  AI parses the tech pack, creates digital profiles, and generates automated T&A calendars 
                  with all pre-production milestones.
                </p>
              </div>

              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827] group-hover:text-[#f2f827] transition-colors duration-300">Intelligent Scheduling</h3>
                </div>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  AI optimizes line assignments, workforce planning, and production sequences 
                  to maximize efficiency and meet delivery targets.
                </p>
              </div>

              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827] group-hover:text-[#f2f827] transition-colors duration-300">Real-Time Monitoring</h3>
                </div>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  Live dashboard tracks production progress, detects bottlenecks early, 
                  and provides predictive alerts for potential delays.
                </p>
              </div>

              <div className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#f2f827] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-[#f2f827] group-hover:text-[#f2f827] transition-colors duration-300">Quality Assurance</h3>
                </div>
                <p className="text-[#a8b0b7] group-hover:text-white transition-colors duration-300">
                  Integrated QC data ensures consistent quality, catches issues early, 
                  and continuously improves processes for future orders.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>



      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#13191d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
              How Production Intelligence{" "}
              <span className="text-[#f2f827]">Works</span>
            </h2>
            <p className="text-xl text-[#a8b0b7] max-w-4xl mx-auto">
              A seamless workflow that transforms your production from fragmented processes to intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-[#1a2025] rounded-xl p-6 border border-[#34383b] relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a2d30] hover:border-[#f2f827]/30"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#f2f827] rounded-full flex items-center justify-center text-[#13191d] font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f2f827] transition-colors duration-300">{step.title}</h3>
                  <p className="text-[#a8b0b7] text-sm group-hover:text-white transition-colors duration-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#13191d] to-[#1e2529]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="text-[#f2f827]">Factory?</span>
          </h2>
          <p className="text-xl text-[#a8b0b7] mb-8">
            Join the future of garment production with AI-powered intelligence that drives efficiency, 
            reduces costs, and ensures consistent quality.
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
                  <DialogTitle>Request Production Intelligence Demo</DialogTitle>
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
              <strong className="text-[#f2f827]">No tech skills needed.</strong> No upfront commitment. 
              See the future of garment production today.
            </p>
          </div>
        </div>
      </section>

      <MobileChatButton />
    </main>
  );
} 