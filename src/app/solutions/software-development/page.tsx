"use client";

import BackgroundShapes from "@/app/Components/BackgroundShapes";
import FAQSection from "@/app/Components/faq";
import { Footer } from "@/app/Components/footer";
import { Header } from "@/app/Components/header";
import ProcessRopeSteps from "@/app/Components/processes";
import ProjectShowcaseTabs from "@/app/Components/ProjectShowcaseTabs";
import ServicesShowcase from "@/app/Components/service-list";
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

const services = [
  {
    id: "Software",
    title: "Software Development",
    description:
      "Need a custom website? You're in the right place. We create dozens of custom WordPress websites every year.",
    image: "/softwareDevlopment.jpg",
  },
  {
    id: "API",
    title: "API Integration Services",
    description:
      "Ready for the next step in your online success? As the leading WooCommerce partner, we create successful webshops.",
    image: "/api.jpg",
  },
  {
    id: "Design",
    title: "UI/UX Design",
    description:
      "Want to let your customers configure products online? We have extensive experience creating complex configurators.",
    image: "/ui.jpg",
  },
  {
    id: "DevOps",
    title: "Cloud & DevOps",
    description:
      "Time for efficiency? Connect different systems and automate your business processes.",
    image: "/cloud.webp",
  },
];

const tabs = [
  {
    label: "Planning",
    title: "Discovery & Requirements",
    subtitle:
      "We analyze your business goals, define scope, and document technical specifications to create a roadmap.",
    image: "/steps/step1plan.webp",
  },
  {
    label: "Prototyping",
    title: "UI/UX Wireframes",
    subtitle:
      "Low-fidelity prototypes visualize user flows and validate functionality before development begins.",
    image: "/steps/step2.webp",
  },
  {
    label: "Development",
    title: "Agile Coding",
    subtitle:
      "Our engineers build scalable features using iterative sprints, with continuous testing and feedback loops.",
    image: "/steps/devlopment.webp",
  },
  {
    label: "Testing",
    title: "QA & Optimization",
    subtitle:
      "Rigorous automated and manual testing ensures performance, security, and bug-free delivery.",
    image: "/steps/testing.webp",
  },
  {
    label: "Deployment",
    title: "Launch & Support",
    subtitle:
      "We handle seamless deployment, monitoring, and post-launch maintenance for long-term success.",
    image: "/steps/deploymnet.webp",
  },
];

// const faqs = [
//   {
//     question: "What makes your ERP system special?",
//     answer:
//       "Our ERP system is tailored to your workflow and offers full integration across departments like finance, HR, inventory, and more.",
//   },
//   {
//     question: "Who can benefit from your Hotel Booking System?",
//     answer:
//       "Our system is perfect for hotels, lodges, and resorts of all sizes. It simplifies room reservations, payments, and guest management.",
//   },
//   {
//     question: "Is coding needed to use these systems?",
//     answer:
//       "No coding skills are required to operate our solutions — the interfaces are built to be intuitive and user-friendly.",
//   },
//   {
//     question: "Can the Hospital Management System scale for large clinics?",
//     answer:
//       "Absolutely. It supports multi-department workflows, electronic medical records, pharmacy, billing, and more.",
//   },
//   {
//     question: "Can I host these systems on cloud or on-premise?",
//     answer:
//       "Yes! We offer flexible deployment options depending on your infrastructure and compliance requirements.",
//   },
// ];

const faqs = [
  {
    question: "Why us?",
    answer:
      "With over 10 years of experience, we consistently deliver high-quality software solutions. We're not just experienced — we're experts at what we do.",
  },
  {
    question: "Why build custom software?",
    answer:
      "Custom software is designed to fit your unique business workflow. It helps you avoid the limitations of generic tools and ensures a solution tailored to your specific needs.",
  },
  {
    question: "Is custom software development expensive?",
    answer:
      "Not at all. When you consider the value and long-term benefits, it's a fair and smart investment. You're paying for a solution that's built exactly for your job and business growth.",
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
            Empowering Ideas
          </motion.h2>
          <motion.h2
            className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 uppercase leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Through Tailored Software Solutions
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
                title: "Tomoca Mobile App",
                image: "/projects/tomocaApp.png",
                description:
                  "We designed and built a user-friendly mobile app that lets customers browse, order, and pay for premium coffee blends, beans, and merchandise with ease.",
              },
              {
                title: "Referral Tracking System",
                image: "/projects/referal.png",
                description:
                  "A powerful analytics platform for monitoring referral traffic, user engagement, and campaign performance in real-time. Track conversions, manage custom referral links, and optimize marketing channels with actionable insights",
              },
              {
                title: "Over 50+ Projects",
                image: "/projects/kuriftu.png",
                description:
                  "We’ve successfully positioned 50+ companies on the digital map, crafting memorable brands and data-driven online strategies. From identity design to targeted campaigns, we amplify visibility, engagement, and growth—ensuring your brand stands out and scales",
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

        <FeatureTabsSection tabs={tabs} />
        {/* <ProjectShowcaseTabs /> */}

        <ServicesShowcase services={services} />
        <FAQSection faqs={faqs} />

        {/* <ProcessRopeSteps /> */}
      </BackgroundShapes>
      <Footer />
    </main>
  );
}
