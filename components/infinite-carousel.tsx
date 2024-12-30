"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsPartnership() {
  return (
    <div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={logos} direction="right" speed="slow" />
    </div>
  );
}

const logos = [
  { src: "/logos/logo1.png", alt: "Logo 1" },
  { src: "/logos/logo2.png", alt: "Logo 2" },
  { src: "/logos/logo3.png", alt: "Logo 3" },
  { src: "/logos/logo4.png", alt: "Logo 4" },
  { src: "/logos/logo5.png", alt: "Logo 5" },
];
