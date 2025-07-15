"use client";

import { useState } from "react";
import AiPowered from "@/components/AiPowered";
import Definition from "@/components/Definition";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import InsightAndStory from "@/components/InsightAndStory";
import Partners from "@/components/Partners";
import SeeInAction from "@/components/SeeInAction";
import SmartTools from "@/components/SmartTools";
import SolutionsAndChallenges from "@/components/SolutionsAndChallenges";

export default function Home() {
  const [selectedDefinition, setSelectedDefinition] = useState<"buying" | "garments">("buying");

  // Sync Definition and AiPowered tabs both ways
  const handleDefinitionChange = (value: "buying" | "garments") => {
    setSelectedDefinition(value);
  };

  const handleAiTabChange = (tab: "brm" | "pi") => {
    setSelectedDefinition(tab === "brm" ? "buying" : "garments");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#13191D]">
      <Hero />
      <SmartTools />
      <Partners />
      <SolutionsAndChallenges />
      <Definition selected={selectedDefinition} setSelected={handleDefinitionChange} />
      <AiPowered
        activeTab={selectedDefinition === "buying" ? "brm" : "pi"}
        setActiveTab={handleAiTabChange}
      />
      <SeeInAction />
      <InsightAndStory />
      <FAQ />
    </main>
  );
}
