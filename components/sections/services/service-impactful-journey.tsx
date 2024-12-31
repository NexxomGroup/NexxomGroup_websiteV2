import { CarouselNexxom } from '@/components/carousel-nexxom';
import MaxWidth from '@/components/layout/maxWidth'
import React from 'react'

const ServiceImpactfulJourney = () => {
    
  const stories = [
    {
      title: "Enhancing Operational Efficiency",
      image: "/success.png",
      challenge: "Complex manual processes slowing down operations.",
      solution: "Automated workflows and integrated systems to streamline tasks.",
      impact: "40% reduction in processing times, freeing up resources for core activities.",
    },
    {
      title: "Enhancing Operational Efficiency",
      image: "/success.png",
      challenge: "Complex manual processes slowing down operations.",
      solution: "Automated workflows and integrated systems to streamline tasks.",
      impact: "40% reduction in processing times, freeing up resources for core activities.",
    },
    {
      title: "Enhancing Operational Efficiency",
      image: "/success.png",
      challenge: "Complex manual processes slowing down operations.",
      solution: "Automated workflows and integrated systems to streamline tasks.",
      impact: "40% reduction in processing times, freeing up resources for core activities.",
    },
    {
      title: "Enhancing Operational Efficiency",
      image: "/success.png",
      challenge: "Complex manual processes slowing down operations.",
      solution: "Automated workflows and integrated systems to streamline tasks.",
      impact: "40% reduction in processing times, freeing up resources for core activities.",
    },
    {
      title: "Enhancing Operational Efficiency",
      image: "/success.png",
      challenge: "Complex manual processes slowing down operations.",
      solution: "Automated workflows and integrated systems to streamline tasks.",
      impact: "40% reduction in processing times, freeing up resources for core activities.",
    },
    {
      title: "Enhancing Operational Efficiency",
      image: "/success.png",
      challenge: "Complex manual processes slowing down operations.",
      solution: "Automated workflows and integrated systems to streamline tasks.",
      impact: "40% reduction in processing times, freeing up resources for core activities.",
    },
    {
      title: "Enhancing Operational Efficiency",
      image: "/success.png",
      challenge: "Complex manual processes slowing down operations.",
      solution: "Automated workflows and integrated systems to streamline tasks.",
      impact: "40% reduction in processing times, freeing up resources for core activities.",
    },
    {
      title: "Enhancing Operational Efficiency",
      image: "/success.png",
      challenge: "Complex manual processes slowing down operations.",
      solution: "Automated workflows and integrated systems to streamline tasks.",
      impact: "40% reduction in processing times, freeing up resources for core activities.",
    },


    // Add more stories as needed
  ];

  const elements = stories.map((story, index) => (
    <div
      key={index}
    >
      {/* Text Content */}

      {/* Background with Image, Filter, and Text */}
      <div className="relative w-full h-60">
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
    <section className='pt-8'>
        <MaxWidth>
            <div className='pt-4 w-full'>
            <h1 className='text-3xl font1 font-medium mb-10'>Impactful Journeys </h1>
            <CarouselNexxom items={elements} className='basis-1/2 md:basis-1/3 lg:basis-1/4'/>
            </div>
        </MaxWidth>
    </section>
  )
}

export default ServiceImpactfulJourney