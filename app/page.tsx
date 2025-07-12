import Defination from "@/components/Definition";
import Hero from "@/components/Hero";
import SmartTools from "@/components/SmartTools";
import SolutionsAndChallenges from "@/components/SolutionsAndChallenges";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <SmartTools />
      <SolutionsAndChallenges />
      <Defination />
    </main>
  );
}
