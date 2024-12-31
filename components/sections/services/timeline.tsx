"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import MaxWidth from "@/components/layout/maxWidth";
import { ArrowRight } from "lucide-react";


// Liste des items avec des illustrations spécifiques
const timelineItems = [
  {
    id: 1,
    title: "Analyse et cadrage du projet",
    description: "Nous définissons les objectifs techniques et fonctionnels de votre site, identifions les besoins spécifiques, et établissons une stratégie claire pour répondre aux enjeux du projet.",
    illustration: <ArrowRight/>
  },
  {
    id: 2,
    title: "Conception de l'identité visuelle",
    description: "Nous créons une identité visuelle forte, en cohérence avec votre marque et vos valeurs, tout en anticipant les exigences techniques et les attentes du marché.",
    illustration:<ArrowRight/>
  },
  {
    id: 3,
    title: "Stratégie de contenu",
    description: "Nous élaborons une stratégie de contenu alignée sur vos objectifs, afin d'assurer une communication claire et engageante qui favorise la conversion.",
    illustration:<ArrowRight/>
  },
  {
    id: 4,
    title: "Design UI/UX",
    description: "Nous concevons des interfaces utilisateurs intuitives (UI) et une expérience utilisateur (UX) optimisée, avec des maquettes haute fidélité sur Figma, pour une navigation fluide sur tous les supports.",
    illustration: <ArrowRight/>
  },
  {
    id: 5,
    title: "Développement sur mesure",
    description: "Nous développons votre site avec une intégration précise et conforme aux normes de qualité les plus strictes, pour garantir performance, sécurité et évolutivité.",
    illustration:<ArrowRight/>
  },
  {
    id: 6,
    title: "Livraison et formation",
    description: "Après la livraison, nous vous formons à l'utilisation de votre site pour une gestion autonome, tout en vous offrant un support continu pour assurer son évolution.",
    illustration: <ArrowRight/>
  },
];


export default function Timeline() {
  const [primaryColor, setPrimaryColor] = useState<string>("");



  const [activeBubble, setActiveBubble] = useState<number | null>(null);
  const [progressHeight, setProgressHeight] = useState(0); // Pour calculer la progression de la barre
  const timelineRef = useRef<HTMLDivElement>(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]); // Références pour les bulles

  const updateBubbleState = (scrollY: number, windowHeight: number) => {
    bubbleRefs.current.forEach((bubble, index) => {
      if (bubble) {
        const bubbleTop = bubble.getBoundingClientRect().top + window.scrollY;
        const bubbleBottom = bubbleTop + bubble.offsetHeight - 110;

        // Si la ligne médiane de l'écran atteint la bulle, elle devient active
        if (scrollY + windowHeight / 2 >= bubbleTop && scrollY + windowHeight / 2 <= bubbleBottom) {
          setActiveBubble(index);
        } else if (scrollY + windowHeight / 2 > bubbleBottom) {
          setActiveBubble(index);
        }
      }
    });
  };

  const handleScroll = () => {
    if (timelineRef.current) {
      const timelineTop = timelineRef.current.getBoundingClientRect().top + window.scrollY;
      const timelineHeight = timelineRef.current.scrollHeight; // Hauteur totale de la timeline
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculer la progression en fonction de la position du scroll à l'intérieur de la timeline
      const scrolledDistance = scrollY + windowHeight / 2 - timelineTop;
      const progressPercentage = (scrolledDistance / timelineHeight) * 100;

      const boundedProgress = Math.min(Math.max(progressPercentage, 0), 100); // Limiter entre 0% et 100%

      setProgressHeight(boundedProgress);

      // Mettre à jour l'état des bulles atteintes
      updateBubbleState(scrollY, windowHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Exécuter le calcul immédiatement après le rendu pour l'état initial des bulles
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MaxWidth className="mt-20 bg-secondary/25 font1">
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font1 font-normal mb-8 sm:mb-12 text-left">
      En tant qu'architecte digital, Nexxom transforme vos envies de développement en
              <span className="text-primary"> réalité</span>.
            </h2>

      <div ref={timelineRef} className="relative flex flex-col items-center py-20 mb-20">
        {/* Barre de progression limitée à la taille du composant, à gauche */}
        <div className="absolute left-8 transform -translate-x-1/2 h-full w-1 bg-gray-300">
          <motion.div
            className="absolute top-0 left-0 w-1 bg-primary/40"
            style={{ height: `${progressHeight}%` }} // La barre ne dépasse pas les limites de la timeline
          />
        </div>

        {/* Items de la timeline */}
        <div className="space-y-12 w-full">
          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                bubbleRefs.current[index] = el;
              }}
              className={`relative flex items-center transition-opacity duration-300 ${activeBubble !== null && activeBubble < index ? 'opacity-30' : 'opacity-100'
                }`} // Opacité réduite pour les items pas encore atteints
            >
              <TimelineItem
                title={item.title}
                description={item.description}
                index={index}
                isActive={activeBubble === index || (activeBubble !== null && activeBubble > index)} // Garder les bulles déjà atteintes actives
                illustration={item.illustration}
                primaryColor={primaryColor} // Passer la couleur dynamique à chaque illustration
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-1 bg-primary/20 rounded-full mb-4"></div>
      <div className="bg-gray-200 p-0 sm:p-6 rounded-lg ">
        <div className=" rounded-lg ">
          <div className=" flex justify-center">
            <p className="text-sm text-center text-muted-foreground mb-4">Nexxom s&apos;occupe d&apos;absolument tout pour votre site internet. Du site simple vitrine, à la solution web complexe avec des fonctionnalités poussées.</p>
          </div>
        
        </div>
      </div>

    </MaxWidth>
  );
}

interface TimelineItemProps {
  title: string;
  description: string;
  index: number;
  isActive: boolean; // Bulle active ou non
  illustration: ReactNode;
  primaryColor: string; // Passer la couleur primaire
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  index,
  isActive,
  illustration,
  primaryColor,
}) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div ref={ref} className="relative flex items-center ">
      {/* Bulle numérotée */}
      <motion.div
        className={`w-16 h-16 flex items-center justify-center  shadow-md flex-shrink-0 
          ${isActive ? 'border-4 border-primary  bg-secondary text-secondary-foreground' : 'bg-gray-300 text-gray-600'}`} // Changement de style si la bulle est active
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        {index + 1}
      </motion.div>

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="ml-14 text-left  max-w-2xl "
      >
        <div className=" flex flex-col md:flex-row items-start ">
          <div className="h-20 w-auto aspect-square  p-4">
            {/* Injecter la couleur primaire dans l'illustration */}
            {illustration}
          </div>

          <div className="mt-4 md:mt-0 md:ml-4">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </motion.div>





    </div>
  );
};
