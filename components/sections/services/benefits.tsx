import React from "react";
import MaxWidth from "../../layout/maxWidth";
import { Button } from "../../ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";

const Benefits = () => {
  return (
    <section className="pt-20 pb-16 sm:pt-20 sm:pb-16">
      <MaxWidth>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
          {/* Left Section */}
          

          <div className="col-span-1 flex flex-col  items-start">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font1 font-normal mb-8 sm:mb-12 text-left">
          30% increase in productivity for companies that implement automation.
          {/* <span className="text-primary"> Your Business </span> */}
        </h2>

        <h2 className="font1 text-xl mb-8">Join the ranks of these companies Nexxom is here to help you achieve it.</h2>


            <h2 className="font1 text-xl text-primary">Process optimization is just the beginning.</h2>
            <p className="text-sm sm:text-base font2 text-gray-700 mb-4 sm:mb-6 text-left">
            Automation simplifies workflows to achieve greater efficiency. With optimized operations, you can focus on driving results and achieving your goals.
            </p>

            <h2 className="font1 text-xl text-primary">Empowering teams with smart tools. </h2>
            <p className="text-sm sm:text-base font2 text-gray-700 mb-4 sm:mb-6 text-left">
            By automating repetitive tasks, teams can dedicate their time to strategic objectives and innovation, directly contributing to improved performance.
            </p>




            {/* <div className="flex justify-center lg:justify-start">
              <Button variant={"outline"} className="mt-4">
                Start Your Transformation Today
              </Button>
            </div> */}
          </div>

          {/* Right Section */}
          <div className="col-span-1 relative w-full lg:w-full h-64 lg:h-full rounded-lg overflow-hidden">
            <img
              src="/benefit-1.png"
              alt="About Us"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

            <div className="flex absolute bottom-0 right-0 text-primary-foreground items-center p-4 sm:p-6 bg-primary/20 text-xs sm:text-sm">
            Companies that automate their processes save an average of 30% on operational costs.        </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Benefits;
