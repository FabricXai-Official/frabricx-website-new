import Link from "next/link";
import FabricXAi from "@/public/icons/fabricxai.svg";
import MailAlt from "@/public/icons/mail-alt.svg";
import Phone from "@/public/icons/phone.svg";
import LocationPin from "@/public/icons/pin.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import TwitterX from "@/public/icons/twitter-x.svg";
import Facebook from "@/public/icons/facebook.svg";
import Youtube from "@/public/icons/youtube.svg";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Footer() {
  return (
    <footer className="bg-[#34383B] m-0 p-0 text-[#A8B0B7]">
      <div className="m-0 py-4 px-24 flex items-center justify-between text-center">
        <div>
          <div className="pt-6">
            <FabricXAi />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="flex items-center gap-4">
              {" "}
              <MailAlt />{" "}
              <a href="mailto:hello@fabricxai.com">hello@fabricxai.com</a>
            </div>
            <div className="flex items-center gap-4">
              {" "}
              <Phone /> <a href="tel:+880 1234 567890">+880 1234 567890</a>
            </div>
            <div className="flex items-center gap-4">
              {" "}
              <LocationPin /> <a href="#">Dhaka, Bangladesh</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-white font-bold pt-6">Quick Links</h1>
          <div className="flex flex-col gap-2 mt-8 items-start">
            <Link href="#about">About</Link>
            <Link href="#features">Features</Link>
            <Link href="#solutions">Solutions</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-white font-bold pt-6">Account</h1>
          <div className="flex flex-col gap-2 mt-8 items-start">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/demo">Demo</Link>
            <Link href="/join-beta">Beta Program</Link>
          </div>
        </div>
        <div className="h-full">
          <div className="flex flex-col items-center justify-center gap-6">
            <a href="#">
              <LinkedIn />
            </a>
            <a href="#">
              <TwitterX />
            </a>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Youtube />
            </a>
          </div>
        </div>
        <div className="rounded-lg border-2 border-[#101725]">
          <GoogleMapsEmbed
            apiKey="XYZ"
            height={200}
            width={360}
            mode="place"
            q="Brooklyn+Bridge,New+York,NY"
          />
        </div>
      </div>
      <div className="m-0 py-4 px-24 flex items-center justify-between text-center border-t border-[#DFE1F433]">
        <p>© 2025 fabricXai. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
