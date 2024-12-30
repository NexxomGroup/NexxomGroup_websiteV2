// components/Hero.tsx

"use client";

import { useState, useEffect } from "react";
import React from "react";
import MaxWidth from "../layout/maxWidth";
import { Button } from "../ui/button";
import { FlipWords } from "../ui/flip-words";
import { useTranslations } from "next-intl";

type HeroButton = {
  label: string;
  variant: "default" | "outline" | string; // Adjust based on your Button variants
};

const Hero = () => {
  // Use the key "Hero" to match the RootLayout
  const t = useTranslations("hero");

  // Recompose heroContents from translations
  const heroContents = [
    {
      title: t("carousel.0.title"),
      description: t("carousel.0.description"),
      buttons: [
        {
          label: t("carousel.0.buttons.0.label"),
          variant: t("carousel.0.buttons.0.variant"),
        },
        {
          label: t("carousel.0.buttons.1.label"),
          variant: t("carousel.0.buttons.1.variant"),
        },
      ],
    },
    {
      title: t("carousel.1.title"),
      description: t("carousel.1.description"),
      buttons: [
        {
          label: t("carousel.1.buttons.0.label"),
          variant: t("carousel.1.buttons.0.variant"),
        },
        // Only one button here
      ],
    },
    {
      title: t("carousel.2.title"),
      description: t("carousel.2.description"),
      buttons: [
        {
          label: t("carousel.2.buttons.0.label"),
          variant: t("carousel.2.buttons.0.variant"),
        },
        {
          label: t("carousel.2.buttons.1.label"),
          variant: t("carousel.2.buttons.1.variant"),
        },
      ],
    },
  ];

  // Items in the right list
  const items = [
    t("carouselItems.0"),
    t("carouselItems.1"),
    t("carouselItems.2"),
  ];

  // Images (not translated)
  const images = ["/hero1.png", "/hero-s1.png", "/hero3.png"];

  const carouselSpeed = 5000; // Duration between slides in ms
  const progressSpeed = 50;   // Progress bar update speed

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Handle automatic slide rotation and progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setCurrentItemIndex((prev) => (prev + 1) % items.length);
      setProgress(0);
    }, carouselSpeed);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, progressSpeed);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [images.length, items.length, carouselSpeed, progressSpeed]);

  // Handle click on an item in the list
  const handleItemClick = (index: number) => {
    setCurrentImageIndex(index);
    setCurrentItemIndex(index);
    setProgress(0);
  };

  // Get current slide content
  const currentSlide = heroContents[currentImageIndex];

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
      className="flex items-center bg-no-repeat bg-cover bg-center"
    >
      <MaxWidth className="relative flex pt-40 md:pt-0 items-start md:items-center 2xl:min-h-[800px] min-h-[700px]">
        <div className="h-64 md:w-2/3">
          {/* Animated Title */}
          <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground font1 font-medium">
            <FlipWords
              key={currentImageIndex}          // Force re-render on slide change
              words={[currentSlide.title]}      // Show only current slide title
              duration={carouselSpeed}          // Sync with carousel speed
            />
          </h1>

          {/* Description */}
          <p className="mt-4 w-full md:w-3/5 text-primary-foreground font2">
            {currentSlide.description}
          </p>

          {/* Buttons (one or two) */}
          <div className="mt-8 flex space-x-4">
            {currentSlide.buttons.map((btn: HeroButton, idx: number) => (
              <Button key={idx} variant={btn.variant as any}>
                {btn.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Slide selection list (indicator on the right) */}
        <div className="absolute -left-20 md:left-auto bottom-0 md:right-0 md:bottom-0 m-20 text-primary-foreground/90 font2">
          <ul className="list-none text-lg flex flex-col space-y-4">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                className={`flex items-center text-sm md:text-md transition-all duration-300 cursor-pointer ${
                  index === currentItemIndex
                    ? "text-primary-foreground font-bold"
                    : "text-primary-foreground/60"
                }`}
              >
                <div
                  className={`mr-2 md:mr-4 transform -skew-x-12 transition-all duration-300 ${
                    index === currentItemIndex
                      ? "h-3 w-5 md:h-4 md:w-8 bg-primary/40"
                      : "h-2 w-4 md:h-3 md:w-6 bg-gray-300"
                  }`}
                >
                  {index === currentItemIndex && (
                    <div
                      className="h-full bg-primary transition-all duration-50"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Hero;
