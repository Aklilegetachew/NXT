"use client";

import BackgroundShapes from "@/app/Components/BackgroundShapes";
import FAQSection from "@/app/Components/faq";
import { Footer } from "@/app/Components/footer";
import { Header } from "@/app/Components/header";
import ProcessRopeSteps from "@/app/Components/processes";
import ProjectShowcaseTabs from "@/app/Components/ProjectShowcaseTabs";
import FeatureTabsSection from "@/app/Components/stepsToDev";
import { motion } from "framer-motion";

const serviceGroups = [
  {
    title: "Software Development",
    items: [
      "Website Development",
      "Mobile App Development",
      "Telegram Bot Development",
      "Custom Idea Development",
    ],
  },
  {
    title: "API Integration Services",
    items: [
      "Payment Gateway Integration",
      "Third-party Service Integration",
      "Internal Process Automation",
      "Custom API Solutions",
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      "User Interface Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "Responsive Web Design",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Cloud Infrastructure Setup",
      "CI/CD Pipelines",
      "Monitoring & Logging",
      "Infrastructure as Code",
    ],
  },
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <BackgroundShapes>
        <section className="relative py-20 px-4 bg-white dark:bg-gray-900 text-center mt-12 overflow-hidden">
          {/* Top Left Dots */}
          <div className="absolute top-0 left-0 w-54 h-50 opacity-10">
            <svg className="w-full h-full " viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" fill="black" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>

          {/* Bottom Right Dots */}
          <div className="absolute bottom-0 right-0 w-52 h-48 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern
                  id="dots2"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" fill="black" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots2)" />
            </svg>
          </div>

          {/* Content Goes Here */}
          <motion.h2
            className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 uppercase leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Ideas Through Tailored Software Solutions
          </motion.h2>

          <motion.div
            className="h-0.5 w-full max-w-5xl mx-auto bg-black rounded-full mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ transformOrigin: "left" }}
          />

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {serviceGroups.map((group, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {group.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {group.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Products Built Section */}
        <section className="py-24 px-4 bg-black text-white text-center">
          <motion.h3
            className="text-4xl md:text-5xl font-bold mb-16 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Among Our <span className="text-blue-600">Works</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "ERP System",
                image: "/erp-system.png", // Replace with your ERP system image
                description:
                  "A powerful enterprise resource planning solution that integrates finance, inventory, HR, and operations into one seamless platform — fully customized for business needs.",
              },
              {
                title: "Hotel Booking System",
                image: "/hotel-booking.png", // Replace with your hotel booking image
                description:
                  "An intuitive hotel reservation and management platform that streamlines bookings, room availability, payments, and customer management with ease.",
              },
              {
                title: "Hospital Management System",
                image: "/hospital-system.png", // Replace with your hospital system image
                description:
                  "End-to-end hospital management software designed to handle patient records, appointments, billing, pharmacy, and staff operations — all in one place.",
              },
              {
                title: "Hospital Management System",
                image: "/hospital-system.png", // Replace with your hospital system image
                description:
                  "End-to-end hospital management software designed to handle patient records, appointments, billing, pharmacy, and staff operations — all in one place.",
              },
              {
                title: "Hospital Management System",
                image: "/hospital-system.png", // Replace with your hospital system image
                description:
                  "End-to-end hospital management software designed to handle patient records, appointments, billing, pharmacy, and staff operations — all in one place.",
              },
              {
                title: "Hospital Management System",
                image: "/hospital-system.png", // Replace with your hospital system image
                description:
                  "End-to-end hospital management software designed to handle patient records, appointments, billing, pharmacy, and staff operations — all in one place.",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-800 hover:scale-[1.02] transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover border-b border-gray-700"
                />
                <div className="p-6 text-left">
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <ProjectShowcaseTabs />
        <FAQSection />
        <FeatureTabsSection />
        {/* <ProcessRopeSteps /> */}
      </BackgroundShapes>
      <Footer />
    </main>
  );
}
