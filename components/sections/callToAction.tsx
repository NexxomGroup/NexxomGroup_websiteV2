import React from "react";
import MaxWidth from "../layout/maxWidth";
import { Button } from "../ui/button";

const ImageBackgroundSection = () => {
  return (
    <section className="mt-28">
          <MaxWidth className="relative w-full h-80 flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/cta.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Filter Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white max-w-3xl">
        <h1 className=" font1 text-3xl md:text-6xl font-bold mb-4">
        Bring the future to now.
        </h1>
        <p className="text-base md:text-lg font1 mb-6 px-8">
          This is your space to inspire, inform, and engage your audience with a
          compelling message.
        </p>
        <Button>
          Learn More
          </Button>
      </div>
    </MaxWidth>
    </section>
  );
};

export default ImageBackgroundSection;
