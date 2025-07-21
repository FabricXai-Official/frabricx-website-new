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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import LiveChat from "@/components/LiveChat";
import Image from "next/image";

export default function Home() {
  // const [showChat, setShowChat] = useState(false);
  // const toggleChat = () => setShowChat(!showChat);

  const [selectedDefinition, setSelectedDefinition] = useState<"buying" | "garments">("buying");

  // Sync Definition and AiPowered tabs both ways
  // const handleDefinitionChange = (value: "buying" | "garments") => {
  //   setSelectedDefinition(value);
  // };

  const handleAiTabChange = (tab: "brm" | "pi") => {
    setSelectedDefinition(tab === "brm" ? "buying" : "garments");
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-[#13191D]">
      <Hero />
      <SmartTools />
      <Partners />
      <SolutionsAndChallenges />
      <Definition selected={selectedDefinition} setSelected={setSelectedDefinition} />
      <AiPowered
        activeTab={selectedDefinition === "buying" ? "brm" : "pi"}
        setActiveTab={handleAiTabChange}
      />
      <SeeInAction />
      <InsightAndStory />
      <FAQ />

      <Popover>
        <PopoverTrigger asChild>
          <button className="fixed bottom-6 right-6 h-16 w-16 bg-[#f2f827] rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg hover:shadow-xl">
            <Image
              src="/icons/MARBIM.svg"
              alt="MARBIM Chat"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-96 p-0 bg-[#13191D]">
          <LiveChat className="w-full h-[500px] p-2" />
        </PopoverContent>
      </Popover>
    </main>
  );
}
