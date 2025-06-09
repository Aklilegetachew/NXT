"use client";

import EnterpriseSolution from "@/app/Components/EnterpriseSolution";
import EnterpriseLeft from "@/app/Components/EnterpriseSolutionLeft";
import { Footer } from "@/app/Components/footer";
import { Header } from "@/app/Components/header";
import HeroSection from "@/app/Components/marketing-hero";
import Aboutus from "../Components/Aboutus";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | NXT Softwares",
  description:
    "Learn about NXT Softwares, an Ethiopian software company specializing in ERP, mobile, digital media & broadcasting solutions.",
  openGraph: {
    title: "About NXT Softwares",
    description: "Ethiopia-based ERP, mobile, and media solutions.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-about.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-about.png`],
  },
};
export default function Storage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Aboutus />
      <Footer />
    </main>
  );
}
