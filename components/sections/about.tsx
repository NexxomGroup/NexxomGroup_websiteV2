import React from "react";
import MaxWidth from "../layout/maxWidth";
import { Button } from "../ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";

const About = () => {
  return (
    <section className="pt-20 pb-16 sm:pt-20 sm:pb-16">
      <MaxWidth>
      
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-20 gap-y-12">
          {/* Left Section */}
          
          <div className="col-span-1 lg:col-span-3 flex flex-col  items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font1 font-normal mb-8 sm:mb-12 text-left">
      En tant qu'architecte digital, Nexxom transforme vos envies de développement en
              <span className="text-primary"> réalité</span>.
            </h2>
            <p className="text-sm sm:text-base font2 text-gray-700 mb-4 sm:mb-6 text-left">
            Chez Nexxom, nous sommes spécialisés dans la conduite de la transformation numérique avec des solutions personnalisées qui répondent aux défis uniques de chaque entreprise. Notre objectif est de dynamiser votre entreprise grâce à la technologie, en favorisant la croissance et l'efficacité.
Nous livrons des solutions numériques innovantes, des systèmes évolutifs et une approche axée sur les résultats pour garantir votre succès.
            </p>
            <p className="text-sm sm:text-base font2 text-gray-700 mb-4 sm:mb-6 text-left">
            Nous livrons des solutions numériques innovantes, des systèmes évolutifs et une approche axée sur les résultats pour garantir votre succès.
            </p>


          </div>

          {/* Right Section */}
          <div className="col-span-1 lg:col-span-2 relative w-full lg:w-full h-96 sm:h-80 lg:h-72 rounded-lg overflow-hidden">
            <img
              src="/x-mountain.png"
              alt="About Us"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-sm lg:text-sm font-medium">
              Innovation Meets Excellence
            </h3>
            <div className="flex absolute bottom-0 right-0 text-primary-foreground items-center p-3 sm:p-4 bg-primary/20 text-xs sm:text-sm">
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
