import AiPowered from "@/components/AiPowered";
import Defination from "@/components/Definition";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import InsightAndStory from "@/components/InsightAndStory";
import SeeInAction from "@/components/SeeInAction";
import SmartTools from "@/components/SmartTools";
import SolutionsAndChallenges from "@/components/SolutionsAndChallenges";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#13191D]">
      <Hero />
      <SmartTools />
      <SolutionsAndChallenges />
      <Defination />
      <AiPowered />
      <SeeInAction />
      <InsightAndStory />
      <FAQ />
    </main>
  );
}
