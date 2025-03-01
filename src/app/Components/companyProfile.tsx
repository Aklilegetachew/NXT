"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Milestone = {
  date: string;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    date: "February 2020",
    title: "Launched Consulting & Technology Services",
    description:
      "Launched our consulting and technology services in a 40 SQM office in Addis Ababa.",
  },
  {
    date: "June 2021",
    title: "Major Project Deployment",
    description:
      "Deployed Health Network Signage and Website System for leading Ethiopian Pharmacy Network.",
  },
  {
    date: "November 2023",
    title: "Company Expansion",
    description:
      "Moved to new company headquarters with infrastructure to support increased software development.",
  },
  {
    date: "2025",
    title: "Digital Platform Launch",
    description:
      "Launched digital e-commerce and booking platform for two world-renowned Ethiopian companies.",
  },
];

export function CompanyProfile() {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Our Story
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          We're a software development firm that helps our clients succeed with
          innovative, software-centric solutions. We design, integrate, and
          support cutting-edge media and communication technologies for a
          connected world.
        </p>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#6f6fc5]"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
                onMouseEnter={() => setActiveMilestone(index)}
                onMouseLeave={() => setActiveMilestone(null)}
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {milestone.date}
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mt-2">
                  {milestone.title}
                </h4>
                <motion.p
                  className="text-gray-600 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeMilestone === index ? 1 : 0,
                    height: activeMilestone === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {milestone.description}
                </motion.p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#010145] rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#010145]"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="ml-12 mb-8 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -left-12 top-1 w-4 h-4 bg-[#010145] rounded-full"></div>
              <div
                className="bg-white p-4 rounded-lg shadow-md"
                onClick={() =>
                  setActiveMilestone(activeMilestone === index ? null : index)
                }
              >
                <h3 className="text-lg font-semibold text-[#010145]">
                  {milestone.date}
                </h3>
                <h4 className="text-md font-medium text-gray-800 mt-1">
                  {milestone.title}
                </h4>
                <motion.p
                  className="text-gray-600 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeMilestone === index ? 1 : 0,
                    height: activeMilestone === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {milestone.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
