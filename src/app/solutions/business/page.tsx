"use client";

import BackgroundShapes from "@/app/Components/BackgroundShapes";
import BrandingOrbitSection from "@/app/Components/BrandingOrbitSection";

import { Footer } from "@/app/Components/footer";
import { Header } from "@/app/Components/header";
import NShapeHero from "@/app/Components/NShapeHero";

export default function Bussiness() {
  return (
    <main className="min-h-screen">
      <Header />
      <NShapeHero />
      <Footer />
    </main>
  );
}
