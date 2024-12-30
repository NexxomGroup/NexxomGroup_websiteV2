import Loading from '@/app/[locale]/loading'
import { CarouselNexxom } from '@/components/carousel-nexxom'
import Benefits from '@/components/sections/services/benefits'
import Benefits2 from '@/components/sections/services/benefits-2'
import ServiceHero from '@/components/sections/services/service-hero'
import SuccessStories from '@/components/sections/success_stories'
import React from 'react'

const Service = () => {

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
    <>
        <ServiceHero/>
        <Benefits/>
        <div className="h-8 w-full"></div>

        <SuccessStories/>
        <CarouselNexxom items={elements} className='basis-1/2 md:basis-1/3 lg:basis-1/4'/>
        {/*<Benefits2/>*/}

    </>
  )
}

export default Service