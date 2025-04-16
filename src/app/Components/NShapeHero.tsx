"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function NShapeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Autoplay failed", err);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/entsora2.mp4" type="video/mp4" />
      </video>

      {/* 🔲 Overlay (except N-shape cutout) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="n-mask">
            <rect width="1000" height="600" fill="white" />
            <path
              d="
                M150,100 
                L150,500 
                L300,500 
                L300,300 
                L500,500 
                L650,500 
                L650,100 
                L500,100 
                L500,300 
                L300,100 
                Z
              "
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="1000"
          height="600"
          fill="black"
          fillOpacity="0.85"
          mask="url(#n-mask)"
        />
      </svg>

      {/* 🌟 Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full text-white">
        {/* N Shape Area - optional overlay content */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6">
          <div className="text-center md:text-left">
            <div className="text-6xl font-bold drop-shadow-lg">+25.6%</div>
            <div className="text-xl mt-2 drop-shadow-md">
              transactions compared to last year
            </div>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-8">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your partner for custom websites and webshops
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Driven by data, design and technology, we realize websites and
              webshops. We realize wonderful online successes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#services"
                className="px-6 py-3 bg-green-500 rounded-full hover:bg-green-600 transition"
              >
                View our services
              </Link>
              <Link
                href="#about"
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Get to know us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
