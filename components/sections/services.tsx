import React from 'react';
import MaxWidth from '../layout/maxWidth';
import { Button } from '../ui/button';

const Services = () => {
  const services = [
    { title: 'Consulting', image: '/hero1.png' },
    { title: 'Development', image: '/hero2.png' },
    { title: 'Integration', image: '/hero3.png' },
    { title: 'Support', image: '/services4.jpg' },
    { title: 'Automation', image: '/services5.jpg' },
  ];

  return (
    <section className="pt-16">
      <MaxWidth>
        <h1 className="text-5xl font1 font-normal mb-12">
          Expert solutions <br /> tailored to transform your business.
        </h1>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-40 overflow-hidden rounded-lg group"
            >
              {/* Conteneur de l'image avec l'effet de zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Overlay gradient avec filtre de couleur */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition duration-300"></div>

              {/* Filtre de couleur primaire (appliqué au hover) */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Titre du service */}
              <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold z-10">
                {service.title}
              </h2>

              {/* Décoration supplémentaire */}
              <div className="absolute md:hidden -skew-x-12 right-12 h-full w-6 bg-white/20"></div>
            </div>
          ))}
          {/* Bouton "Voir tout" (commenté pour l'instant) */}
          {/* <div className="relative h-40 overflow-hidden rounded-lg bg-gray-100/10 flex items-center justify-center">
            <Button className="text-lg">Voir tout</Button>
          </div> */}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Services;
