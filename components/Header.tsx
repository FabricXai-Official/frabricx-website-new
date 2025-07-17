"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import FabricXAi from "@/public/icons/fabricxai.svg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MailAlt from "@/public/icons/mail-alt.svg";
import Phone from "@/public/icons/phone.svg";
import LocationPin from "@/public/icons/pin.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import Facebook from "@/public/icons/facebook.svg";
import RequestDemoForm from "./RequestDemoForm";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SendMessageForm from "./SendMessageForm";
import { VisuallyHidden } from "radix-ui";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50); // Change 50 to the desired scroll threshold
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={cn(
          "fixed hidden left-0 top-0 z-50 h-8 w-full items-center justify-between gap-8 bg-[#13191D] text-white py-3 px-24 transition-all duration-500 text-xs",
          {
            "md:flex": !isScrolled,
          }
        )}
      >
        <div className="flex gap-4">
          <div className="flex items-center gap-2 hover:text-[#f2f827]">
            {" "}
            <MailAlt />{" "}
            <a href="mailto:info@fabricxai.com">info@fabricxai.com</a>
          </div>
          <div className="flex items-center gap-2 hover:text-[#f2f827]">
            {" "}
            <Phone /> <a href="tel:+880 1711 253751">+880 1711 253751</a>
          </div>
          <div className="flex items-center gap-2 hover:text-[#f2f827]">
            {" "}
            <LocationPin /> <a href="https://www.google.com/maps/search/21%2BJigatola%2BDhaka/@23.74074,90.36718,14z?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D">21 Jigatola, Dhaka, Bangladesh</a>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Dialog>
            <DialogTrigger asChild>
              <button className="hover:text-[#f2f827]">Contact</button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <VisuallyHidden.Root asChild><DialogTitle>Enter Your Details</DialogTitle></VisuallyHidden.Root>
              </DialogHeader>
              <div>
                <SendMessageForm />
              </div>
            </DialogContent>
          </Dialog>
          <div className="flex flex-row items-center justify-center gap-6 py-4">
            <a
              href="https://www.linkedin.com/company/fabricx-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8B0B7] hover:text-[#f2f827]"
            >
              <LinkedIn className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/FabricXAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8B0B7] hover:text-[#f2f827]"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <Navbar
        fluid
        className={cn("transition-all duration-500 fixed top-0 z-50", {
          "bg-[#13191D]": isScrolled,
          "md:top-8": !isScrolled,
        })}
      >
        <NavbarBrand href="#" className="m-0 p-0">
          <div className="flex items-center justify-center h-6 sm:h-9 ">
            <FabricXAi />
          </div>
        </NavbarBrand>
        <div className="flex md:order-2 gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <div>
                    <Button>Get a Demo</Button>
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
{/* 
          <Button
            className="hidden md:block"
            onClick={() => window.open("https://webx.fabricxai.com", "_blank")}>
            Get started
          </Button> */}
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#features">Features</NavbarLink>
          <NavbarLink href="#partners">Partners</NavbarLink>
          <NavbarLink href="#solutions">Solutions</NavbarLink>
          <NavbarLink href="#faqs">FAQs</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
