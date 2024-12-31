import React from "react";
import { CarouselNexxom } from "@/components/carousel-nexxom";
import MaxWidth from "@/components/layout/maxWidth";
import { Button } from "@/components/ui/button";

const SuccessStories = () => {
  const stories = [
    {
      title: "Enhancing Operational Efficiency",
      image: "/success.png",
      challenge: "Complex manual processes slowing down operations.",
      solution: "Automated workflows and integrated systems to streamline tasks.",
      impact: "40% reduction in processing times, freeing up resources for core activities.",
    },
    {
      title: "Boosting Team Productivity",
      image: "/productivity.png",
      challenge: "Lack of collaboration tools hampering teamwork.",
      solution: "Implemented a centralized collaboration platform.",
      impact: "Increased project completion rate by 30%.",
    },
    // Add more stories as needed
  ];

  const elements = stories.map((story, index) => (
    <div
      key={index}
      className="flex h-[610px] justify-between md:h-[410px] flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-16 border-gray-200 border-l-8"
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 bg-black/0 p-6">
        <h1 className="text-2xl md:text-2xl lg:text-4xl font1">{story.title}</h1>
        <h2 className="mt-6 md:mt-8 text-xl md:text-2xl font1">Challenge</h2>
        <p className="text-sm md:text-md font2 mt-2">{story.challenge}</p>
        <h2 className="mt-4 md:mt-6 text-xl md:text-2xl font1">Solution</h2>
        <p className="text-sm md:text-md font2 mt-2">{story.solution}</p>
        <h2 className="mt-4 md:mt-6 text-xl md:text-2xl font1">Impact</h2>
        <p className="text-sm md:text-md font2 mt-2">{story.impact}</p>
      </div>

      {/* Background with Image, Filter, and Text */}
      <div className="relative w-full md:w-1/2 h-72 md:h-auto">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${story.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Filter Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="">
      <MaxWidth>
        {/* Header Section */}
        <div className="relative">
          <h1 className="font1 text-4xl lg:text-5xl max-w-xl">
            Driving Success Across Industries
          </h1>
          <p className="mt-4 max-w-3xl">
            Explore how our innovative solutions and strategies have empowered
            businesses to achieve their goals, overcome challenges, and thrive
            in a competitive landscape.
          </p>
          <Button className="lg:absolute mt-8 lg:mt-0 right-1 sm:bottom-0">Your Success</Button>
        </div>
        <CarouselNexxom items={elements} />
      </MaxWidth>
    </section>
  );
};

export default SuccessStories;
