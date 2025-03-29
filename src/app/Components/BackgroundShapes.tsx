"use client";

import { ReactNode } from "react";

export default function BackgroundShapes({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circle 1 */}
        <div className="absolute w-[456.2px] h-[0.2px] rounded-full bg-black  top-10 left-[-40px]"></div>

        {/* Circle 2 */}
        <div className="absolute w-[410.2px] h-[0.2px] rounded-full border-black   bottom-24 right-10"></div>
        <div className="absolute w-[410.2px] h-[0.2px] rounded-full border-black   bottom-24 right-10"></div>
        <div className="absolute w-[410.2px] h-[0.2px] rounded-full border-black   bottom-24 right-10"></div>

        {/* Horizontal Line */}
        <div className="absolute w-[0.2px] h-full bg-black  rotate-12 top-1/3 left-1/4"></div>
        <div className="absolute w-[0.2px] h-full bg-black  rotate-12 top-1/3 left-1/4"></div>
        <div className="absolute w-[0.2px] h-full bg-black  rotate-12 top-1/3 left-1/4"></div>
        <div className="absolute w-[0.2px] h-full bg-black  rotate-12 top-1/3 left-1/4"></div>

        {/* Vertical Line */}
        <div className="absolute h-full w-[0.2px] bg-black  rotate-45 bottom-10 left-[30%]"></div>
        <div className="absolute h-full w-[0.2px] bg-black  rotate-45 bottom-10 left-[30%]"></div>
        <div className="absolute h-full w-[0.2px] bg-black  rotate-45 bottom-10 left-[30%]"></div>
        <div className="absolute h-full w-[0.2px] bg-black  rotate-45 bottom-10 left-[30%]"></div>

        {/* Diagonal Line */}
        <div className="absolute w-[0.2px] h-full bg-black -rotate-45 top-1/2 right-[20%]"></div>
        <div className="absolute w-[0.2px] h-full bg-black -rotate-45 top-1/2 right-[20%]"></div>
        <div className="absolute w-[0.2px] h-full bg-black -rotate-45 top-1/2 right-[20%]"></div>
        <div className="absolute w-[0.2px] h-full bg-black -rotate-45 top-1/2 right-[20%]"></div>
        <div className="absolute w-[0.2px] h-full bg-black -rotate-45 top-1/2 right-[20%]"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
