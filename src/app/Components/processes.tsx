"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01.",
    title: "Consultation",
    description:
      "We start by understanding your business challenges and goals to recommend the most effective automation solutions.",
  },
  {
    number: "02.",
    title: "Design & Customization",
    description:
      "Our team tailors the ERP and enterprise software to fit your workflows, ensuring seamless alignment with your operations.",
  },
  {
    number: "03.",
    title: "Implementation & Integration",
    description:
      "We deploy the solution, integrate it with your existing systems, and ensure a smooth transition with minimal disruption.",
  },
  {
    number: "04.",
    title: "Ongoing Support",
    description:
      "After launch, we provide continuous support, updates, and optimization to ensure long-term success and scalability.",
  },
];

export default function ProcessRopeSteps() {
  return (
    <section className="relative px-4 py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How we deliver enterprise software solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We empower businesses through a proven process that ensures smooth
          implementation and lasting impact. Here’s how we work with you:
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
