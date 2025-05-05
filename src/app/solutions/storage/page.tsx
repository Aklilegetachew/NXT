"use client";

import EnterpriseSolution from "@/app/Components/EnterpriseSolution";
import { Footer } from "@/app/Components/footer";
import { Header } from "@/app/Components/header";
import HeroSection from "@/app/Components/marketing-hero";

export default function Storage() {
  return (
    <main className="min-h-screen">
      <Header />
      <EnterpriseSolution
        title="Cloud Storage Solutions"
        subtitle="Public | Private | Hybrid"
        description="Modern businesses need flexible cloud storage solutions that scale with their needs. Our cloud storage options provide the perfect balance of performance, accessibility, and cost-effectiveness. Whether you need public cloud flexibility, private cloud security, or a hybrid approach, our team can design and implement the ideal solution for your organization's specific requirements."
        imageSrc="/bg.jpeg"
        imageAlt="Cloud server infrastructure"
        backgroundImageSrc="/cloud-illustration.png"
        companyName="CloudTech"
      />
      <Footer />
    </main>
  );
}
