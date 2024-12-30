"use client";
import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MaxWidth from "./layout/maxWidth";

interface CarouselNexxomProps {
  items: React.ReactNode[]; // Les éléments à afficher dans le carousel
  className?: string; // Classe personnalisée pour chaque élément (optionnel)
}

export function CarouselNexxom({ items, className = "" }: CarouselNexxomProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (

    <Carousel setApi={setApi} className="w-full">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className={className}>
            <div className="p-1">{item}</div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-4 flex flex-col items-center">
        {/* Bubble Navigation */}


        {/* Controls */}
        <div className="flex items-center space-x-4 mt-8">
          <CarouselPrevious />
          <div className="flex space-x-2 mb-8">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full ${
                current === index ? "bg-primary w-12" : "bg-gray-200 w-4"
              } transition-all duration-300`}
            />
          ))}
        </div>
  

          <CarouselNext />
        </div>
      </div>
    </Carousel>

  );
}
