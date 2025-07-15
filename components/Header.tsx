"use client";

import {
  createTheme,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  ThemeProvider,
} from "flowbite-react";
import FabricXAi from "@/public/icons/fabricxai.svg";
import CTA from "./CTA";
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
import Link from "next/link";

const theme = createTheme({
  navbar: {
    root: {
      base: "bg-transparent py-2.5 sm:px-4 w-full mx-0 px-12 md:px-24",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-0 flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full md:block md:w-auto bg-[#13191D] md:bg-transparent",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "text-white md:bg-transparent",
        off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-[#F2F827]",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
      icon: "h-6 w-6 shrink-0",
      title: "sr-only",
    },
  },
});

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
      <div className={cn("fixed hidden left-0 top-0 z-50 h-12 w-full items-center justify-between gap-8 bg-[#13191D] text-white py-3 px-24 transition-all duration-500", {
        "md:flex": !isScrolled,
      })}>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            {" "}
            <MailAlt />{" "}
            <a href="mailto:hello@fabricxai.com">hello@fabricxai.com</a>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <Phone /> <a href="tel:+880 1234 567890">+880 1234 567890</a>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <LocationPin /> <a href="#">Dhaka, Bangladesh</a>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/contact">Contact</Link>
        <div className="flex flex-row items-center justify-center gap-6 py-4">
            <a href="https://www.linkedin.com/company/fabricx-ai" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href="https://www.facebook.com/FabricXAI" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
      <ThemeProvider theme={theme} applyTheme="replace">
        <Navbar
          fluid
          className={cn("transition-all duration-500 fixed top-0 z-50", {
            "bg-[#13191D]": isScrolled,
            "md:top-12": !isScrolled,
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
                  <CTA color="alternative" className="hidden md:block">
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

            <CTA className="hidden md:block">Get started</CTA>
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink href="#features">Features</NavbarLink>
            <NavbarLink href="#solutions">Solutions</NavbarLink>
            <NavbarLink href="#pricing">Pricing</NavbarLink>
            <NavbarLink href="#about">About</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </ThemeProvider>
    </>
  );
}
