"use client";

import { motion } from "framer-motion";

export default function BrandingOrbitSection() {
  return (
    <section className="w-full bg-[#010145] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
 
        <div className="relative w-[300px] h-[300px] mx-auto">
         
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#010145] rounded-full flex items-center justify-center text-white text-sm font-medium shadow-lg border-2 border-white border-dashed transform -translate-x-1/2 -translate-y-1/2 z-10">
            Brodcasting
          </div>

       
          <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-white rounded-full"></div>

         
          <motion.div
            className="absolute w-5 h-5 bg-white rounded-full top-0 left-1/2 transform -translate-x-1/2 z-10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            style={{ transformOrigin: "center 150px" }} // orbit radius
          />

          {/* Orbiting Circle 2 (opposite side) */}
          <motion.div
            className="absolute w-5 h-5 bg-white rounded-full bottom-0 left-1/2 transform -translate-x-1/2 z-10"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
              delay: 4,
            }}
            style={{ transformOrigin: "center -150px" }} // orbit radius
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Branding design services <br /> that forge lasting connections
          </h2>
          <p className="text-white text-opacity-90 mb-4">
            Branding is the foundation of your market presence. It's the compass
            guiding your messaging, shaping customer perception, and ultimately,
            securing your competitive edge.
          </p>
          <p className="text-white text-opacity-80">
            Brand design services delve deeper, forging a unified identity that
            resonates through every interaction. Brand identity, website design
            and more – these are all facets of your brand, the elements that
            collectively build lasting connections with your audience. Those are
            all areas of our expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
