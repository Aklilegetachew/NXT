"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Partner = {
  name: string;
  logo: string;
  url: string;
};

const partners: Partner[] = [
  {
    name: "Partner 1",
    logo: "/partners/partner1.png",
    url: "https://partner1.com",
  },
  {
    name: "Partner 2",
    logo: "/partners/partner2.png",
    url: "https://partner2.com",
  },
  {
    name: "Partner 3",
    logo: "/partners/partner3.png",
    url: "https://partner3.com",
  },
  {
    name: "Partner 4",
    logo: "/partners/partner4.png",
    url: "https://partner4.com",
  },
  {
    name: "Partner 5",
    logo: "/partners/partner5.png",
    url: "https://partner5.com",
  },
  {
    name: "Partner 6",
    logo: "/partners/partner6.png",
    url: "https://partner6.com",
  },
  {
    name: "Partner 7",
    logo: "/partners/partner7.png",
    url: "https://partner7.com",
  },
  {
    name: "Partner 8",
    logo: "/partners/partner8.png",
    url: "https://partner8.com",
  },
  // Add more partners as needed
];

export function Partners() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-24 md:h-32 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-300 ease-in-out filter grayscale hover:filter-none"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
