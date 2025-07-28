"use client";

import { useState } from "react";
import AiPowered from "@/components/AiPowered";
import Definition from "@/components/Definition";
import FAQ from "@/components/FAQ"
import HeroMobile from "@/components/HeroMobile";
import InsightAndStory from "@/components/InsightAndStory";
import Partners from "@/components/Partners";
import SeeInAction from "@/components/SeeInAction";
import SmartTools from "@/components/SmartTools";
import SolutionsAndChallenges from "@/components/SolutionsAndChallenges";
import MobileChatButton from "@/components/MobileChatButton";

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  // const toggleChat = () => setShowChat(!showChat);

  const [selectedDefinition, setSelectedDefinition] = useState<"buying" | "garments">("buying");

  // Sync Definition and AiPowered tabs both ways
  const handleDefinitionChange: React.Dispatch<React.SetStateAction<"buying" | "garments">> = (value) => {
    if (typeof value === "function") {
      setSelectedDefinition(value(selectedDefinition));
    } else {
      setSelectedDefinition(value);
    }
  };

  const handleAiTabChange = (tab: "brm" | "pi") => {
    setSelectedDefinition(tab === "brm" ? "buying" : "garments");
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-[#13191D]">
      <HeroMobile />
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

      <MobileChatButton />
    </main>
  );
}
