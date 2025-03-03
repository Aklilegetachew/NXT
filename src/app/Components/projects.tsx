"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Booking System",
    description:
      "Developed a seamless booking platform enabling businesses to manage reservations efficiently, enhance customer experience, and streamline operations.",
    image: "/projects/booking.jpeg",
  },
  {
    id: 2,
    title: "E-commerce & Bot Development",
    description:
      "Built robust e-commerce solutions integrated with AI-powered bots to automate customer interactions, improve sales, and personalize the shopping experience.",
    image: "/projects/ecommerce.jpeg",
  },
  {
    id: 3,
    title: "ERP System",
    description:
      "Implemented an enterprise resource planning system to optimize business processes, improve workflow automation, and ensure data-driven decision-making.",
    image: "/projects/erp.webp",
  },
  {
    id: 4,
    title: "Graphic Design System",
    description:
      "Designed a high-performance graphic design tool tailored for creative professionals, offering intuitive features for branding, marketing, and content creation.",
    image: "/projects/graphicDesign.jpeg",
  },
  {
    id: 5,
    title: "Hospital Management System",
    description:
      "Developed an advanced hospital management system to streamline patient records, appointments, billing, and improve healthcare service efficiency.",
    image: "/projects/hospitalManagment.jpeg",
  },
  {
    id: 6,
    title: "Website Development & Server Management",
    description:
      "Provided end-to-end website development solutions, coupled with reliable server management for high-performance, secure, and scalable digital platforms.",
    image: "/projects/webservice.jpeg",
  },
  {
    id: 7,
    title: "Video Production",
    description:
      "Offered professional video production services, covering pre-production, shooting, and post-production to deliver high-quality content for media and marketing.",
    image: "/projects/videoProduction.jpeg",
  },
  {
    id: 8,
    title: "Mobile Development",
    description:
      "Created cross-platform mobile applications, ensuring seamless user experiences, high performance, and scalability for various business needs.",
    image: "/projects/mobileDevlopmnt.jpeg",
  },
];

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${-(projects.length - 1) * 100}%`]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newIndex = Math.floor(v * projects.length);
      setActiveProject(Math.min(newIndex, projects.length));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="bg-gray-100">
      <div className="h-screen sticky top-0 overflow-hidden">
        <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center">
          {/* Left side: Fixed content */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h3 className="text-3xl font-bold mb-4">
                {projects[activeProject].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {projects[activeProject].description}
              </p>
              <button className="bg-[#010145] hover:bg-[#010145] text-white font-bold py-2 px-3 rounded-sm  transition duration-300 ease-in-out transform hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right side: Scrollable images */}
          <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{ y }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  style={{ y: `${index * 100}%` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: activeProject === index ? 1 : 0,
                    scale: activeProject === index ? 1 : 0.8,
                    pointerEvents: activeProject === index ? "auto" : "none",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full h-3/4 max-w-2xl mx-auto">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-fill rounded-sm"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Spacer to allow scrolling */}
      <div style={{ height: `${(projects.length - 1) * 100}vh` }}></div>
    </section>
  );
}
