import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Australia’s Leading Marble Protection Film | NanoShield HD",
  description:
    "Protect your natural stone with NanoShield HD marble protection film. Installation in Melbourne, Sydney and Brisbane. Get your benchtop protection quote.",
  openGraph: {
    title: "Australia’s Leading Marble Protection Film | NanoShield HD",
    description:
      "Protect your natural stone with NanoShield HD marble protection film. Installation in Melbourne, Sydney and Brisbane. Get your benchtop protection quote.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        playfair.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-screen flex flex-col bg-black text-white">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
