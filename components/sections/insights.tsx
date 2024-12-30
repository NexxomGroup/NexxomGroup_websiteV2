import React from "react";
import MaxWidth from "../layout/maxWidth";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowUpRight } from "lucide-react";

const Insights = () => {
  return (
    <section className="pt-6 md:pt-12">
      <MaxWidth>
        <div className="relative text-center md:text-left">
          <h1 className="font1 text-3xl md:text-4xl max-w-md mx-auto md:mx-0">
            Stay updated with our latest insights
          </h1>
          <p className="mt-3 max-w-md md:max-w-lg text-sm md:text-base">
            The blog is the best source of information for interviews, tips,
            guides, industry best practices, and news. Subscribe for updates in
            your inbox every week.
          </p>
          <Button className="mt-4 md:absolute md:right-1 md:bottom-0">All Insights</Button>
        </div>
        <div className="grid grid-cols-1 gap-3 mt-8 md:mt-10 md:grid-cols-2">
          <div className="relative h-[300px] md:h-[500px] bg-red-400">
            {/* Image en fond */}
            <div
              className="absolute inset-0 bg-cover bg-center filter brightness-75"
              style={{
                backgroundImage: `url('/blogimage.png')`,
              }}
            ></div>

            {/* Overlay noir transparent */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Texte centré */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-4 md:p-6 relative">
                <div className="max-w-sm">
                  <Badge>Expert view</Badge>
                  <h3 className="mt-3 text-base md:text-lg font-semibold text-primary-foreground">
                    Tech innovations transforming businesses
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground">
                    Discover the latest tech innovations driving digital
                    transformation. Learn how...
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 bg-black/20 m-3 p-1">
                  <ArrowUpRight className="h-6 w-auto text-primary-foreground/90" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3 h-full">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex bg-gray-100/50 border border-border p-3 flex-1"
              >
                <div className="relative aspect-square h-32 md:h-auto ">
                  <div
                    className="absolute inset-0 bg-cover bg-center filter brightness-75"
                    style={{
                      backgroundImage: `url('/blogimage.png')`,
                    }}
                  ></div>

                  {/* Overlay noir transparent */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative ml-3 flex-1 flex flex-col justify-between">
                  <div className="absolute bottom-2">
                    <span className="text-primary text-sm font-semibold">
                      Success story
                    </span>
                    <h2 className="mt-1 text-sm md:text-base font-semibold">
                      AR Rental enhances learning experiences with a fully
                      custom training platform
                    </h2>
                  </div>
                  <div className="absolute top-0 right-0 bg-black/10 p-1">
                    <ArrowUpRight className="h-5 md:h-6 w-auto text-secondary-foreground/90" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Insights;
