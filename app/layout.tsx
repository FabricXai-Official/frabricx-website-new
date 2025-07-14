import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const chillax = localFont({
  src: '../public/fonts/Chillax-Variable.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-chillax',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FabricXai",
  description: "AI-Powered Garment Export Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${chillax.variable} antialiased relative`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
