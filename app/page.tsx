import AiPowered from "@/components/AiPowered";
import Defination from "@/components/Definition";
import Hero from "@/components/Hero";
import SendMessageForm from "@/components/SendMessageForm";
import SmartTools from "@/components/SmartTools";
import SolutionsAndChallenges from "@/components/SolutionsAndChallenges";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#13191D]">
      <Hero />
      <SmartTools />
      <SolutionsAndChallenges />
      <Defination />
      <AiPowered />
      <Dialog>
        <DialogTrigger asChild><Button>Send Message</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </DialogHeader>
          <div>
            <SendMessageForm />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
