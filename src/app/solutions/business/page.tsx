"use client";

import BackgroundShapes from "@/app/Components/BackgroundShapes";
import PainPointsSection from "@/app/Components/beforeAfter";
import BrandingOrbitSection from "@/app/Components/BrandingOrbitSection";

import { Footer } from "@/app/Components/footer";
import { Header } from "@/app/Components/header";
import NShapeHero from "@/app/Components/NShapeHero";
import PreviousWorks from "@/app/Components/PreviousWorks";
import ProcessRopeSteps from "@/app/Components/processes";

export default function Bussiness() {
  const projects = [
    {
      title: "ERP System",
      description:
        "A comprehensive platform to streamline finance, HR, inventory, and operations for growing businesses.",
      imageUrl: "/images/erp-system.jpg",
    },
    {
      title: "Hotel Reservation & Booking System",
      description:
        "An intuitive system for hotels to manage room bookings, reservations, payments, and customer communication.",
      imageUrl: "/images/hotel-booking.jpg",
    },
    {
      title: "Hospital Management System",
      description:
        "A robust solution that handles patient records, appointments, billing, pharmacy, and medical staff management.",
      imageUrl: "/images/hospital-management.jpg",
    },
  ];
  return (
    <main className="min-h-screen">
      <Header />
      <NShapeHero />
      <PainPointsSection />
      <ProcessRopeSteps />
      <PreviousWorks projects={projects} />
      <Footer />
    </main>
  );
}
