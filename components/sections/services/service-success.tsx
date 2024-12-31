import { CarouselNexxom } from "@/components/carousel-nexxom";
import MaxWidth from "@/components/layout/maxWidth";
import { Button } from "@/components/ui/button";
import React from "react";


const ServiceSuccessStories = () => {
  const stories = [
    {
      title: "Enhancing Operational Efficiency",
      image: "/hero3.png",
      text: "We harness the power of Business Process Automation (BPA) and Robotic Process Automation (RPA) to transform how you manage workflows and repetitive tasks. By automating complex processes, rule-based activities, and building custom scripts to meet your specific needs, we enable your teams to focus on strategic objectives. Using industry-leading tools and methodologies, we simplify operations, reduce errors, and improve overall efficiency, ensuring seamless alignment with your goals.",

    },
    {
      title: "Enhancing Operational Efficiency",
      image: "/hero1.png",
      text: "We harness the power of Business Process Automation (BPA) and Robotic Process Automation (RPA) to transform how you manage workflows and repetitive tasks. By automating complex processes, rule-based activities, and building custom scripts to meet your specific needs, we enable your teams to focus on strategic objectives. Using industry-leading tools and methodologies, we simplify operations, reduce errors, and improve overall efficiency, ensuring seamless alignment with your goals.",

    },

    // Add more stories as needed
  ];

  const elements = stories.map((story, index) => (
    <div
      key={index}
      className="relative flex h-[610px] justify-between md:h-[410px] flex-col md:flex-row space-y-4 md:space-y-0  mt-16 "
    >



      {/* Background with Image, Filter, and Text */}
      <div className="relative w-full md:w-1/3 h-72 md:h-auto">
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
      {/* Text Content */}
      <div className="w-full md:w-2/3 bg-black/10 p-12 ">
        <h1 className="text-2xl md:text-2xl lg:text-4xl font1">{story.title}</h1>

        <p className="text-sm md:text-base font2 mt-8 max-w-md">{story.text}</p>
        
      </div>


    </div>
  ));

  return (
    <section className="">
      <MaxWidth>
        {/* Header Section */}
        <div className="relative">
          <h1 className="font1 text-4xl lg:text-5xl max-w-xl">
            Automation Services
          </h1>

        </div>
        <CarouselNexxom items={elements} />
      </MaxWidth>
    </section>
  );
};

export default ServiceSuccessStories;
