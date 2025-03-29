import Image from "next/image";
import { Header } from "./Components/header";
import { HeroSection } from "./Components/heroSection";
import { CompanyProfile } from "./Components/companyProfile";
import { Partners } from "./Components/partners";
import { Projects } from "./Components/projects";
import { ContactUs } from "./Components/contactus";
import { Footer } from "./Components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CompanyProfile />
      {/* <Partners /> */}

      {/* <div className="min-h-screen">
        {" "}
        <Projects />
      </div> */}

      <div className="mt-12">
        {" "}
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-4"
          style={{ backgroundImage: "url('/bgpattern.jpeg')" }} 
        >
          <div className="absolute inset-0 bg-black/50"></div>{" "}
          {/* Dark overlay for readability */}
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Benefits</h2>
            <p className="text-lg mb-8 leading-relaxed">
              For each engagement, we dive deep to understand your business
              goals and then focus on operational alignment to those objectives.
              We look at technology as a tool to support your operations. A
              smart balance of process and carefully selected solutions allows
              us to deliver technology that meets your goals and expectations.
            </p>
            <button className="bg-[#010145] hover:bg-[#010145] text-white font-bold py-3 px-6 rounded-sm transition transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </section>
      </div>
      <ContactUs />
      <Footer />
    </main>
  );
}
