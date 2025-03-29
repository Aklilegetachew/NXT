"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01.",
    title: "Research & Discovery",
    description:
      "We validate your idea, refine its concept, examine materials, craft a roadmap, and complete the brief thoroughly.",
  },
  {
    number: "02.",
    title: "Website UX design",
    description:
      "We create intuitive flows, sitemaps, and wireframes to ensure seamless navigation and clear user paths.",
  },
  {
    number: "03.",
    title: "Website UI design",
    description:
      "Using your brand elements, typography, and palette, we design a beautiful, functional UI tailored to your identity.",
  },
  {
    number: "04.",
    title: "Clickable product",
    description:
      "Our team builds a prototype ready for feedback, testing, and validation before full development begins.",
  },
  {
    number: "05.",
    title: "Delivery",
    description:
      "Finalized UI/UX is handed off to the dev team. We ensure a smooth transition and are ready for implementation.",
  },
];

export default function ProcessRopeSteps() {
  return (
    <section className="relative px-4 py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How we process website designing services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We turn ideas into impact through a well-defined creative process that
          ensures results. Here’s how we do it:
        </p>
      </div>

      {/* SVG Path / Rope */}
      <svg
        className="absolute left-1/2 transform -translate-x-1/2 top-40 hidden lg:block"
        width="4"
        height="1400"
        viewBox="0 0 4 1400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 0 C2 300, 2 400, 2 700 C2 1000, 2 1100, 2 1400"
          stroke="#93c5fd"
          strokeWidth="2"
          strokeDasharray="10 10"
        />
      </svg>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-y-24 gap-x-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex items-start ${
              index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
            }`}
          >
            {/* Dot */}
            <div className="w-6 h-6 bg-blue-500 rounded-full absolute -left-10 top-1.5 shadow-md" />

            {/* Content */}
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {step.number} <span className="text-black">{step.title}</span>
              </h3>
              <p className="text-gray-600 max-w-md">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
