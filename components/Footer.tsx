import Link from "next/link";
import FabricXAi from "@/public/icons/fabricxai.svg";
import MailAlt from "@/public/icons/mail-alt.svg";
import Phone from "@/public/icons/phone.svg";
import LocationPin from "@/public/icons/pin.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import Facebook from "@/public/icons/facebook.svg";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Footer() {
  return (
    <footer className="bg-[#34383B] m-0 p-0 text-[#A8B0B7]">
      <div className="m-0 py-4 px-8 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between text-center">
        <div>
          <div className="pt-6">
            <FabricXAi />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="flex items-center gap-4 hover:text-[#f2f827]">
              {" "}
              <MailAlt />{" "}
              <a href="mailto:hello@fabricxai.com">hello@fabricxai.com</a>
            </div>
            <div className="flex items-center gap-4 hover:text-[#f2f827]">
              {" "}
              <Phone /> <a href="tel:+880 1234 567890">+880 1234 567890</a>
            </div>
            <div className="flex items-center gap-4 hover:text-[#f2f827]">
              {" "}
              <LocationPin /> <a href="#">Dhaka, Bangladesh</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-white font-bold pt-6">Quick Links</h1>
          <div className="flex flex-col gap-2 mt-8 items-start">
            <Link className="hover:text-[#f2f827]" href="#about">About</Link>
            <Link className="hover:text-[#f2f827]" href="#features">Features</Link>
            <Link className="hover:text-[#f2f827]" href="#solutions">Solutions</Link>
            <Link className="hover:text-[#f2f827]" href="/blog">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-white font-bold pt-6">Account</h1>
          <div className="flex flex-col gap-2 mt-8 items-start">
            <Link className="hover:text-[#f2f827]" href="/login">Login</Link>
            <Link className="hover:text-[#f2f827]" href="/register">Register</Link>
            <Link className="hover:text-[#f2f827]" href="/demo">Demo</Link>
            <Link className="hover:text-[#f2f827]" href="/join-beta">Beta Program</Link>
          </div>
        </div>
        <div className="h-full">
          <div className="flex flex-row lg:flex-col items-center justify-center gap-6 py-4">
            <a href="https://www.linkedin.com/company/fabricx-ai" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href="https://www.facebook.com/FabricXAI" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
          </div>
        </div>
        <div className="rounded-lg border-2 border-[#101725]">
          <GoogleMapsEmbed
            apiKey="AIzaSyBKB5MZJITnpOS_Z5e0NR_uT0JTWnIGa9c"
            height={200}
            width={360}
            mode="place"
            q="21+Jigatola+Dhaka"
          />
        </div>
      </div>
      <div className="m-0 py-4 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between text-center border-t border-[#DFE1F433]">
        <p>© 2025 fabricXai. All rights reserved.</p>
        <div className="flex gap-4">
          <Link className="hover:text-[#f2f827]" href="/privacy-policy">Privacy Policy</Link>
          <Link className="hover:text-[#f2f827]" href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
