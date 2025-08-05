"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { ChevronDown } from "lucide-react";
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
import Youtube from "@/public/icons/youtube.svg";
import RequestDemoForm from "./RequestDemoForm";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SendMessageForm from "./SendMessageForm";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Clock, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const pathname = usePathname();

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.solutions-dropdown')) {
        setIsSolutionsOpen(false);
      }
    };

    if (isSolutionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSolutionsOpen]);
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
            <LocationPin />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/search/21%2BJigatola%2BDhaka/@23.74074,90.36718,14z?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
            >
              21 Jigatola, Dhaka, Bangladesh
            </a>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Dialog>
            <DialogTrigger asChild>
              <button className="hover:text-[#f2f827]">Contact</button>
            </DialogTrigger>
            <DialogContent
              showCloseButton={false}
              className="w-full md:max-w-5xl"
            >
              <DialogHeader>
                <VisuallyHidden asChild>
                  <DialogTitle>Enter Your Details</DialogTitle>
                </VisuallyHidden>
              </DialogHeader>
              <div className="flex flex-col md:flex-row gap-4">
                <SendMessageForm className="w-2/3" />
                <div className="flex flex-col gap-4 w-1/3">
                  <div className="flex flex-col items-start justify-between w-full h-full border border-yellow-400/50 rounded-lg px-6 py-4 gap-6">
                    <div className="flex items-center justify-start w-full gap-4">
                      <div className="flex items-center justify-center p-4 bg-[#f2f827]/20 text-[#f2f827] hover:bg-[#f2f827]/40 rounded-lg">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">Live Chat</h2>
                        <p className="text-sm">Chat with our AI assistant</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 inline-block" />
                        <p className="text-sm font-light">Instant Response</p>
                      </div>
                      <Button className="w-full">Start Chat</Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between w-full h-full border border-yellow-400/50 rounded-lg px-6 py-4 gap-6">
                    <h2 className="font-semibold text-lg">Business Hours</h2>
                    <div className="w-full text-sm">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">Monday - Friday</p>
                        <p>9:00 AM - 6:00 PM</p>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <p className="font-semibold">Saturday</p>
                        <p>10:00 AM - 4:00 PM</p>
                      </div>
                      <div className="flex items-center justify-between text-yellow-400/50">
                        <p className="font-semibold">Sunday</p>
                        <p>Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
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
            <a
              href="https://www.youtube.com/@fabricXai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8B0B7] hover:text-[#f2f827]"
            >
              <Youtube className="h-4 w-5" />
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
        <NavbarBrand href="/" className="m-0 p-0">
          <div className="flex items-center justify-center h-6 sm:h-9 ">
            <FabricXAi />
          </div>
        </NavbarBrand>
        <div className="flex md:order-2 gap-2">
          <Button
            outline
            onClick={() => window.open("https://webx.fabricxai.com", "_blank")}
            className="hidden md:block"
          >
            Access App
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <div>
                <Button>Get a Demo</Button>
              </div>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <VisuallyHidden asChild>
                  <DialogTitle>Request Demo</DialogTitle>
                </VisuallyHidden>
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
          <NavbarLink href="/" active={pathname === "/"}>
            Home
          </NavbarLink>
          <NavbarLink href="/what-is-fabricxai" active={pathname === "/what-is-fabricxai"}>
            About
          </NavbarLink>
          
          <NavbarLink href="/history" active={pathname === "/history"}>
            The Journey
          </NavbarLink>
          
          <NavbarLink href="/future" active={pathname === "/future"}>
            The Future
          </NavbarLink>
          
          {/* Solutions Dropdown */}
          <div className="relative solutions-dropdown">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className={`block py-2 pl-3 pr-4 md:p-0 transition-colors duration-300 flex items-center gap-1 ${
                pathname === "/brm-intelligence" || pathname === "/production-intelligence" || pathname === "/stychx"
                  ? "text-[#f2f827]"
                  : "text-white hover:text-[#f2f827]"
              }`}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isSolutionsOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 md:w-56 bg-[#1a2025] border border-[#34383B] rounded-lg shadow-xl z-50">
                <div className="py-2">
                  <a
                    href="/brm-intelligence"
                    className="block px-4 py-3 text-sm text-white hover:bg-[#f2f827]/10 hover:text-[#f2f827] transition-colors duration-200"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    BRM Intelligence
                  </a>
                  <a
                    href="/production-intelligence"
                    className="block px-4 py-3 text-sm text-white hover:bg-[#f2f827]/10 hover:text-[#f2f827] transition-colors duration-200"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    Production Intelligence
                  </a>
                  <a
                    href="/stychx"
                    className="block px-4 py-3 text-sm text-white hover:bg-[#f2f827]/10 hover:text-[#f2f827] transition-colors duration-200"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    Stychx
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <NavbarLink href="/blogs" active={pathname === "/blogs"}>Blog</NavbarLink>
          <NavbarLink href="/invest-in-fabricxai" active={pathname === "/invest-in-fabricxai"}>Invest</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
