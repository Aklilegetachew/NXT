import Image from "next/image";
import { Header } from "./Components/header";
import { HeroSection } from "./Components/heroSection";
import { CompanyProfile } from "./Components/companyProfile";
import { Partners } from "./Components/partners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CompanyProfile />
      <Partners />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#010145] mb-6">
          Explore Our Features
        </h2>
      </div>
    </main>
  );
}
