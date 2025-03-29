"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = [
  {
    label: "Sitemap",
    title: "Sitemap",
    subtitle:
      "AI generates a clear, organized sitemap based on your project needs, ensuring a strong foundation for your website.",
    image: "/sitemap-image.png", // Replace with your sitemap image
  },
  {
    label: "Wireframe",
    title: "Wireframe",
    subtitle:
      "Turn your sitemap into low-fidelity wireframes to visualize structure and user flow before investing in design.",
    image: "/wireframe-image.png", // Replace with your wireframe image
  },
  {
    label: "Design",
    title: "Design",
    subtitle:
      "Apply professional styles effortlessly, bringing your wireframes to life before exporting them to Webflow.",
    image: "/design-image.png", // Replace with your design image
  },
];

export default function FeatureTabsSection() {
  const [activeTab, setActiveTab] = useState("Sitemap");
  const current = tabs.find((tab) => tab.label === activeTab)!;

  return (
    <section className="w-full py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-medium text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Generate sitemaps, wireframes, and polished designs with AI—
            <br />
            <span className="font-bold">ready to paste into Webflow.</span>
          </motion.h2>

          {/* Tabs */}
          <div className="space-y-6 border-l border-gray-200">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                className={`pl-4 cursor-pointer transition-all ${
                  activeTab === tab.label
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab.label)}
              >
                <div className="flex items-center space-x-2">
                  {activeTab === tab.label && (
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-red-400 rounded-full mr-2" />
                  )}
                  <div className="text-xl">{tab.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="pt-4">
            <h4 className="text-2xl font-bold text-black mb-2">
              {current.title}
            </h4>
            <p className="text-gray-600">{current.subtitle}</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.label}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={current.image}
                alt={current.label}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
