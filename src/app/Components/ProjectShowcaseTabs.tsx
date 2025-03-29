"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Monitor, Cloud } from "lucide-react";

// Define the project data structure
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: {
    name: string;
    icon: React.ReactNode;
  }[];
  learnMoreUrl: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Needly – Project Management Tracking App",
    description:
      "Needly is a project management tracking app built to optimize project workflows and boost team productivity. Uncover the key features and design insights that make Needly a powerful tool for project management in our detailed case study.",
    image: "/placeholder.svg?height=400&width=600",
    categories: [
      { name: "Web App Design", icon: <Monitor className="w-4 h-4" /> },
      { name: "SaaS", icon: <Cloud className="w-4 h-4" /> },
    ],
    learnMoreUrl: "#",
  },
  {
    id: 2,
    title: "Taskify – Team Collaboration Platform",
    description:
      "Taskify helps teams collaborate seamlessly with an intuitive interface designed for productivity. Explore how we created a user-friendly platform that simplifies complex workflows and enhances team communication.",
    image: "/placeholder.svg?height=400&width=600",
    categories: [
      { name: "Web App Design", icon: <Monitor className="w-4 h-4" /> },
      { name: "SaaS", icon: <Cloud className="w-4 h-4" /> },
    ],
    learnMoreUrl: "#",
  },
  {
    id: 3,
    title: "Fintrack – Financial Management Dashboard",
    description:
      "Fintrack provides businesses with powerful financial tracking tools in an elegant dashboard. Discover how our design approach balances complex data visualization with accessibility to create an effective financial management solution.",
    image: "/placeholder.svg?height=400&width=600",
    categories: [
      { name: "Web App Design", icon: <Monitor className="w-4 h-4" /> },
      { name: "FinTech", icon: <Cloud className="w-4 h-4" /> },
    ],
    learnMoreUrl: "#",
  },
  {
    id: 4,
    title: "HealthHub – Patient Management System",
    description:
      "HealthHub streamlines patient management for healthcare providers with an intuitive interface. Learn how we designed a HIPAA-compliant system that improves efficiency while maintaining the highest standards of data security.",
    image: "/placeholder.svg?height=400&width=600",
    categories: [
      { name: "Web App Design", icon: <Monitor className="w-4 h-4" /> },
      { name: "Healthcare", icon: <Cloud className="w-4 h-4" /> },
    ],
    learnMoreUrl: "#",
  },
  {
    id: 5,
    title: "EduLearn – Online Learning Platform",
    description:
      "EduLearn transforms online education with an engaging and accessible platform. Explore our approach to creating an immersive learning experience that keeps students motivated and helps educators track progress effectively.",
    image: "/placeholder.svg?height=400&width=600",
    categories: [
      { name: "Web App Design", icon: <Monitor className="w-4 h-4" /> },
      { name: "EdTech", icon: <Cloud className="w-4 h-4" /> },
    ],
    learnMoreUrl: "#",
  },
  {
    id: 6,
    title: "ShopSmart – E-commerce Platform",
    description:
      "ShopSmart delivers a premium shopping experience with its sleek interface and powerful features. Discover how we designed a conversion-optimized platform that enhances the customer journey from browsing to checkout.",
    image: "/placeholder.svg?height=400&width=600",
    categories: [
      { name: "Web App Design", icon: <Monitor className="w-4 h-4" /> },
      { name: "E-commerce", icon: <Cloud className="w-4 h-4" /> },
    ],
    learnMoreUrl: "#",
  },
];

interface ProjectShowcaseProps {
  initialProject?: number;
  customProjects?: Project[];
}

export default function ProjectShowcase({
  initialProject = 0,
  customProjects,
}: ProjectShowcaseProps) {
  const projectsData = customProjects || projects;
  const [currentIndex, setCurrentIndex] = useState(initialProject);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [displayedProject, setDisplayedProject] = useState(
    projectsData[initialProject]
  );

  // Handle animation when currentIndex changes
  useEffect(() => {
    if (currentIndex !== projectsData.indexOf(displayedProject)) {
      setIsAnimating(true);

      // After fade out, update the displayed project
      const timer = setTimeout(() => {
        setDisplayedProject(projectsData[currentIndex]);

        // After updating content, start fade in
        const fadeInTimer = setTimeout(() => {
          setIsAnimating(false);
        }, 50);

        return () => clearTimeout(fadeInTimer);
      }, 300); // Match this with the CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [currentIndex, displayedProject, projectsData]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  // Animation classes
  const contentClasses = `
    transition-all duration-300 ease-in-out
    ${
      isAnimating
        ? "opacity-0 transform " +
          (direction === "next" ? "translate-y-4" : "-translate-y-4")
        : "opacity-100 transform translate-y-0"
    }
  `;

  const imageClasses = `
    w-full h-auto object-cover transition-all duration-500 ease-in-out
    ${
      isAnimating
        ? "opacity-0 transform scale-95"
        : "opacity-100 transform scale-100"
    }
  `;

  return (
    <div className="w-full bg-gray-50 rounded-3xl overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-100/30 rounded-r-full transform -translate-x-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className={contentClasses}>
              <div className="flex flex-wrap gap-3">
                {displayedProject.categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 text-gray-600 bg-white px-3 py-1.5 rounded-full text-sm"
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 ${contentClasses}`}
            >
              {displayedProject.title}
            </h2>

            <p className={`text-gray-600 max-w-lg ${contentClasses}`}>
              {displayedProject.description}
            </p>

            <div className={contentClasses}>
              <Link
                href={displayedProject.learnMoreUrl}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-300/50 rounded-full blur-xl"></div>

              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-[1.02]">
                <Image
                  src={displayedProject.image || "/placeholder.svg"}
                  alt={displayedProject.title}
                  width={600}
                  height={400}
                  className={imageClasses}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 items-center gap-2">
          <button
            onClick={handlePrevious}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2 mx-4">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-blue-500 w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
