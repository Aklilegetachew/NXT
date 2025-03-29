"use client";

import BackgroundShapes from "@/app/Components/BackgroundShapes";
import BrandingOrbitSection from "@/app/Components/BrandingOrbitSection";

import { Footer } from "@/app/Components/footer";
import { Header } from "@/app/Components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <BrandingOrbitSection />
      <BackgroundShapes>
        <div className="h-102"></div>
      </BackgroundShapes>
      <Footer />
    </main>
  );
}
