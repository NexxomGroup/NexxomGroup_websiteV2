import React from "react";
import MaxWidth from "../layout/maxWidth";
import { Button } from "../ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";

const About = () => {
  return (
    <section className="pt-20 pb-16 sm:pt-20 sm:pb-16">
      <MaxWidth>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font1 font-normal mb-8 sm:mb-12 text-left">
              Transforming Businesses, <br />
              <span className="text-primary">One Solution </span>at a Time
            </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
          {/* Left Section */}
          
          <div className="col-span-1 flex flex-col  items-start">

            <p className="text-sm sm:text-base font2 text-gray-700 mb-4 sm:mb-6 text-left">
              At Nexxom, we specialize in driving digital transformation with
              tailor-made solutions that address unique business challenges. We
              believe that technology should work for you, not the other way
              around.
            </p>
            <p className="text-sm sm:text-base font2 text-gray-700 mb-4 sm:mb-14 text-left">
              We deliver{" "}
              <span className="text-primary">innovative digital</span>{" "}
              solutions, <span className="text-primary">scalable systems</span>,
              and a{" "}
              <span className="text-primary">business-centric approach</span>{" "}
              to drive your success.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button variant={"outline"} className="mt-4">
                Start Your Transformation Today
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 relative w-full lg:w-full h-96 sm:h-80 lg:h-72 rounded-lg overflow-hidden">
            <img
              src="/x-mountain.png"
              alt="About Us"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-sm lg:text-xl font-medium">
              Innovation Meets Excellence
            </h3>
            <div className="flex absolute bottom-0 right-0 text-primary-foreground items-center p-4 sm:p-6 bg-primary/20 text-sm sm:text-base">
              Voir l&apos;article
              <LucideSquareArrowOutUpRight className="ml-1 mt-0.5 h-4 sm:h-5" />
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default About;
