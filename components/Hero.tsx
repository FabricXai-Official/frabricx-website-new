import CTA from "./CTA";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RequestDemoForm from "./RequestDemoForm";

export default function Hero() {
  return (
    <section className="w-full h-screen">
        <div className="w-full h-full bg-[url(/bg/ai-and-garments-RGM-representative-image.png)] bg-cover bg-center">
          <div className="bg-transparent border-none shadow-none flex flex-col items-start justify-center h-full px-24">
            <div className="flex flex-col w-full md:max-w-md gap-8">
              <div className="text-white w-full">
                <h1 className="font-mono text-4xl">Revolutionize <span className="font-bold">RMG Business</span> with <span className="font-bold">AI-Driven Intelligence</span></h1>
                <p className="text-sm"><span className="font-bold">fabricXai</span> delivers cutting-edge Buyer Relationship Management & Production Intelligence tailored for the RGM industry.</p>
              </div>
              <div className="flex gap-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <div>
                      <CTA>
                        Get a Demo
                      </CTA>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Enter Your Details</DialogTitle>
                    </DialogHeader>
                    <div>
                      <RequestDemoForm />
                    </div>
                  </DialogContent>
                </Dialog>

                      <CTA color="alternative">
                        Be an Early Bird
                      </CTA>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
