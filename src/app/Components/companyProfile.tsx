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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
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

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Flow Connector using SVG */}
          <svg
            className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-0 h-full w-12 md:w-16 z-0"
            viewBox="0 0 24 1000"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M12 0 C12 250, 12 250, 12 500 C12 750, 12 750, 12 1000"
              stroke="url(#timelineGradient)"
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="timelineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className="relative mb-20 flex z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Left side */}
                <div
                  className={`w-1/2 ${
                    !isLeft ? "hidden md:block" : "text-right pr-6"
                  }`}
                >
                  {isLeft && (
                    <Card
                      milestone={milestone}
                      active={activeMilestone === index}
                      onToggle={() =>
                        setActiveMilestone(
                          activeMilestone === index ? null : index
                        )
                      }
                    />
                  )}
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-3 w-6 h-6 rounded-full bg-white border-4 border-indigo-600 z-20">
                  <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-25 animate-ping"></div>
                </div>

                {/* Right side */}
                <div className={`w-1/2 ${isLeft ? "hidden md:block" : "pl-6"}`}>
                  {!isLeft && (
                    <Card
                      milestone={milestone}
                      active={activeMilestone === index}
                      onToggle={() =>
                        setActiveMilestone(
                          activeMilestone === index ? null : index
                        )
                      }
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  milestone: Milestone;
  active: boolean;
  onToggle: () => void;
};

export const Card = ({ milestone, active, onToggle }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const showDetail = isHovered || active;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300">
        <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-indigo-800 bg-indigo-100 rounded-full">
          {milestone.date}
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-2">
          {milestone.title}
        </h4>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: showDetail ? 1 : 0,
            height: showDetail ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-600">{milestone.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
