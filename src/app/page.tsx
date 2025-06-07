import Image from "next/image";
import { Header } from "./Components/header";
import { HeroSection } from "./Components/heroSection";
import { CompanyProfile } from "./Components/companyProfile";
import { Partners } from "./Components/partners";
import { Projects } from "./Components/projects";
import ContactUs from "./Components/contactus";
import { Footer } from "./Components/footer";
import Timeline from "./Components/timeLine";
import PortfolioCards from "./Components/portfolioCard";
import BackgroundPaths from "./Components/BackgroundPath";

export default function Home() {
  const milestones = [
    {
      year: "2020",
      title: "Launched Consulting & Technology Services",
      description:
        "Launched our consulting and technology services in a 40 SQM office in Addis Ababa.",
      image: "/step1.svg?height=240&width=240",
    },
    {
      year: "2021",
      title: "Major Project Deployment",
      description:
        "Deployed Health Network Signage and Website System for leading Ethiopian Pharmacy Network.",
      image: "/step2.svg?height=240&width=240",
    },
    {
      year: "2023",
      title: "Company Expansion",
      description:
        "Moved to new company headquarters with infrastructure to support increased software development.",
      image: "/step3.svg?height=240&width=240",
    },
    {
      year: "2025",
      title: "Digital Platform Launch",
      description:
        "Launched digital e-commerce and booking platform for two world-renowned Ethiopian companies.",
      image: "/lastStep.svg?height=240&width=240",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="min-h-screen  pt-16 px-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#341C1C]">
            Our Story
          </h2>
          <p className="text-center text-[#341C1C] mb-16 max-w-3xl mx-auto">
            We're a software development firm that helps our clients succeed
            with innovative, software-centric solutions. We design, integrate,
            and support cutting-edge media and communication technologies for a
            connected world.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <Timeline milestones={milestones} />
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16 px-4 bg-gray-50" id="Explore">
        <div className="max-w-4/5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#341C1C] mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our latest projects and creative solutions that have
              helped businesses transform digitally.
            </p>
          </div>
          <PortfolioCards />
        </div>
      </div>
      <Partners />
      <BackgroundPaths />
      <Footer />
    </main>
  );
}
