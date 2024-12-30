import React from "react";
import { InfiniteMovingCardsPartnership } from "../infinite-carousel";
import MaxWidth from "../layout/maxWidth";

const Partnership = () => {
  return (
    <section className="bg-black/80 pt-16 pb-12">
    <MaxWidth className="flex justify-center">
      <div className="flex justify-center flex-col">
        <div className="flex justify-center mb-3">
            <h2 className="text-md font-medium text-primary-foreground font1">Trusted by industry leaders</h2>
        </div>
        <InfiniteMovingCardsPartnership />
      </div>
      </MaxWidth>
    </section>
  );
};

export default Partnership;
