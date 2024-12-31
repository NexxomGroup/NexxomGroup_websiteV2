import Loading from '@/app/[locale]/loading'
import { CarouselNexxom } from '@/components/carousel-nexxom'
import Benefits from '@/components/sections/services/benefits'
import Benefits2 from '@/components/sections/services/benefits-2'
import ServiceHero from '@/components/sections/services/service-hero'
import React from 'react'
import CallToAction from "@/components/sections/callToAction";
import ServiceImpactfulJourney from '@/components/sections/services/service-impactful-journey'
import ServiceSuccessStories from '@/components/sections/services/service-success'

const Service = () => {

  return (
    <>
        <ServiceHero/>
        <Benefits/>
        <Benefits2/>
        <div className="h-8 w-full"></div>

        <ServiceSuccessStories />
        <ServiceImpactfulJourney/>
        <CallToAction />
    

    </>
  )
}

export default Service