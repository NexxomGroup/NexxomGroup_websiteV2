import React from "react";
import MaxWidth from "../../layout/maxWidth";
import { Button } from "../../ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";

const Benefits2 = () => {
  return (
    <section className="pt-20 pb-16 sm:pt-20 sm:pb-16">
      <div
        style={{
          backgroundImage: `url(/hero-s1.png)`,
          transition: "background-image 1s ease-in-out",
        }}
        className="relative flex items-center bg-no-repeat bg-cover bg-center"
      >
        <div className="absolute h-full w-full bg-black/10 backdrop-blur-sm"></div>
        <MaxWidth>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8 py-20">
            {/* Colonne 1 */}
            <div className="bg-white/90 p-8 rounded-lg shadow-md flex flex-col justify-between order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold font1 mb-3">Process Optimization</h3>
                  <p className="text-gray-700 text-base">Streamline workflows for <span className="text-primary">greater efficiency</span>.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font1 mb-3">Cost Reduction</h3>
                  <p className="text-gray-700 text-base"><span className="text-primary">Save operational expenses</span> by automating repetitive tasks.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font1 mb-3">Increased Reliability</h3>
                  <p className="text-gray-700 text-base"><span className="text-primary">Reduce errors</span> and ensure consistent performance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font1 mb-3">Freeing up teams from</h3>
                  <p className="text-gray-700 text-base">
                    Free your teams from repetitive tasks, allowing them to <span className="text-primary">focus on strategic</span> objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne 2 */}
            <div className="space-y-6 flex flex-col justify-between order-1 lg:order-2">
              <div className="bg-white/90 p-8">
                <h3 className="text-xl font-semibold font1 mb-3">Strategic Support for a Successful Transformation</h3>
                <p className="text-gray-700 text-base">
                  We improve your business processes by integrating automation
                  solutions to enhance efficiency. With full support for your teams
                  during the transition, we ensure a smooth transformation that
                  strengthens operational performance. Our strategic approach turns
                  your operations into a sustainable growth driver.
                </p>
              </div>
              <div className="bg-white/90 p-8">
                <h3 className="text-xl font-semibold font1 mb-3">Automation for Streamlined Business Processes</h3>
                <p className="text-gray-700 text-base">
                  We optimize your workflows by automating repetitive tasks using
                  solutions and custom-built tools. This approach enhances
                  productivity, significantly reduces errors, and allows your teams to
                  focus on high-value activities. Our solutions are tailored to your
                  unique needs, ensuring measurable results and long-term impact.
                </p>
              </div>
            </div>
          </div>
        </MaxWidth>
      </div>
    </section>
  );
};

export default Benefits2;
