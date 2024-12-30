"use client";

import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import MaxWidth from "../../layout/maxWidth";
import { Button } from "../../ui/button";
import { Separator } from "@/components/ui/separator";

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const animation = { start: 0, end: value };
    const duration = 1.5; // Duration of the animation in seconds

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setDisplayValue(Math.floor(progress * (animation.end - animation.start) + animation.start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  return <span>{displayValue}</span>;
};

const ServiceHero: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/hero-s1.png)`,
          transition: "background-image 1s ease-in-out",
        }}
        className="relative flex items-center bg-no-repeat bg-cover bg-center "
      >
        <MaxWidth className="relative flex pt-40 md:pt-0 items-start md:items-center 2xl:min-h-[800px] min-h-[700px]">
          <div className="h-64 md:w-2/3">
            <h1 className=" text-4xl md:text-4xl  lg:text-5xl xl:text-6xl text-primary-foreground font1 font-medium">
              Automation
            </h1>
            <p className="mt-4 w-full md:w-3/5 text-primary-foreground font2">
              Harness cutting-edge solutions to streamline processes, enhance
              efficiency, and drive unparalleled growth.
            </p>
            <div className="flex mt-8">
              <Button className="">Contact us</Button>
              <Button variant={"ghost"} className="ml-6">
                Success story
              </Button>
            </div>
          </div>
        </MaxWidth>
        <div className=" absolute bottom-0 py-8 h-44 w-full bg-white/80 backdrop-blur-lg">
          <MaxWidth>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h1 className="font1 text-5xl font-medium">
                  <AnimatedNumber value={30} />%
                </h1>
                <p className=" max-w-64">
                  Average savings in operational costs with automation.
                </p>
              </div>
              <div>
                <h1 className="font1 text-5xl font-medium">
                  <AnimatedNumber value={24} />/<AnimatedNumber value={7} />
                </h1>
                <p className=" max-w-64">
                  Efficiency: Never stop running your business.
                </p>
              </div>
              <div>
                <h1 className="font1 text-5xl font-medium">
                  <AnimatedNumber value={80} />%
                </h1>
                <p className=" max-w-64">
                  Reduction in manual processing time.
                </p>
              </div>
            </div>
          </MaxWidth>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(/sub-hero-1.png)`,
          transition: "background-image 1s ease-in-out",
        }}
        className="relative flex items-center bg-no-repeat bg-cover bg-center "
      >
        <MaxWidth className="relative flex pt-40 md:pt-0 items-start md:items-center min-h-[200px]">
          <div className="flex h-full justify-center items-center">
            <div className="px-8">
              <h2 className="font1 text-2xl font-semibold text-primary-foreground w-60">
                Turning automation into growth
              </h2>
            </div>
            <Separator orientation="vertical" />
            <div className="w-full flex-col items-center justify-center px-12">
              <p className="text-center text-primary-foreground">
                "The first rule of any technology used in a business is that
                automation applied to an efficient operation will magnify the
                efficiency."
              </p>
              <p className="mt-5 text-center text-sm text-primary-foreground">Bill Gates</p>
            </div>
          </div>
        </MaxWidth>
      </div>
    </>
  );
};

export default ServiceHero;
