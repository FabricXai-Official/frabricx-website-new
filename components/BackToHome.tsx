"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToHome() {
  return (
    <div className="flex justify-end py-8 px-4">
      <Link 
        href="/" 
        className="flex items-center justify-center w-12 h-12 bg-[#f2f827] hover:bg-[#e0e626] text-[#13191D] rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
        aria-label="Back to home page"
      >
        <ArrowLeft className="w-5 h-5" />
      </Link>
    </div>
  );
} 