import Link from "next/link";
import FabricXAi from "@/public/icons/fabricxai.svg";
import MailAlt from "@/public/icons/mail-alt.svg";
import Phone from "@/public/icons/phone.svg";
import LocationPin from "@/public/icons/pin.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import Facebook from "@/public/icons/facebook.svg";
import Youtube from "@/public/icons/youtube.svg";

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
              <a href="mailto:info@fabricxai.com">info@fabricxai.com</a>
            </div>
            <div className="flex items-center gap-4 hover:text-[#f2f827]">
              {" "}
              <Phone /> <a href="tel:+880 1711 253751">+880 1711 253751</a>
            </div>
            <div className="flex items-center gap-4 hover:text-[#f2f827]">
              {" "}
              <LocationPin /> <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/21%2BJigatola%2BDhaka/@23.74074,90.36718,14z?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D">21 Jigatola, Dhaka, Bangladesh</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-white font-bold pt-6">Quick Links</h1>
          <div className="flex flex-col gap-2 mt-8 items-start">
            <Link className="hover:text-[#f2f827]" href="#about">
              About
            </Link>
            <Link className="hover:text-[#f2f827]" href="#features">
              Features
            </Link>
            <Link className="hover:text-[#f2f827]" href="#solutions">
              Solutions
            </Link>
            <Link className="hover:text-[#f2f827]" href="/blog">
              Blog
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-white font-bold pt-6">Account</h1>
          <div className="flex flex-col gap-2 mt-8 items-start">
            <Link className="hover:text-[#f2f827]" href="/login">
              Login
            </Link>
            <Link className="hover:text-[#f2f827]" href="/register">
              Register
            </Link>
            <Link className="hover:text-[#f2f827]" href="/demo">
              Demo
            </Link>
            <Link className="hover:text-[#f2f827]" href="/join-beta">
              Beta Program
            </Link>
          </div>
        </div>
        <div className="h-full">
          <div className="flex flex-row lg:flex-col items-center justify-center gap-6 py-4">
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
        <iframe
          className="rounded-lg border-2 border-[#101725]"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7304.372330416168!2d90.3671795917661!3d23.740739864707628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s21%2BJigatola%2BDhaka!5e0!3m2!1sen!2sbd!4v1752602363827!5m2!1sen!2sbd"
          width="360"
          height="200"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="m-0 py-4 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between text-center border-t border-[#DFE1F433]">
        <p>© 2025 fabricXai. All rights reserved.</p>
        <div className="flex gap-4">
          <Link className="hover:text-[#f2f827]" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="hover:text-[#f2f827]" href="/terms-of-service">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
