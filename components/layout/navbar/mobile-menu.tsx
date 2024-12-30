"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import SearchComponent from "./search";
import { LangSwitcher } from "./lang-switcher";

interface MobileMenuProps {
  navItems: {
    label: string;
    href: string;
    subItems?: { label: string; href: string }[];
  }[];
  menuOpen: boolean;
  closeMenu: () => void;
}

const swipeVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  }),
};

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, menuOpen, closeMenu }) => {
  const [menuStack, setMenuStack] = useState<[string, typeof navItems][]>([
    ["main", navItems],
  ]);
  const [direction, setDirection] = useState(1); // Direction: 1 (forward), -1 (backward)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSubMenu = (label: string, subItems: typeof navItems) => {
    setMenuStack((prev) => [...prev, [label, subItems]]);
    setDirection(1); // Forward direction
  };

  const handleBack = () => {
    if (menuStack.length > 1) {
      setMenuStack((prev) => prev.slice(0, -1));
      setDirection(-1); // Backward direction
    }
  };

  const currentMenu = menuStack[menuStack.length - 1][1];

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeMenu}
    >


<div onClick={(e) => e.stopPropagation()} className=" px-8 h-20 w-full bg-[#2d2d2d] flex justify-between">
<SearchComponent/> <LangSwitcher/>
</div>


      <div
        className={`fixed bottom-0 mx-2 rounded-t-xl pb-10 inset-x-0 bg-white text-black z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Absolu */}
        <button
          className={`absolute top-[-32px] left-1/2 transform -translate-x-1/2 p-2 bg-white border border-gray-300 rounded-full shadow-md transition-opacity duration-300 ${
            menuOpen ? "opacity-100 delay-300" : "opacity-0"
          }`}
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <X size={44} className="text-black" />
        </button>

        {/* Conteneur avec overflow-hidden */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={menuStack.map((entry) => entry[0]).join("-")}
              className="absolute top-0 left-0 w-full h-full flex flex-col space-y-8 pt-14 px-4 text-md font-semibold"
              variants={swipeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
            >
              {/* Back Button */}
              {menuStack.length > 1 && (
                <button
                  className="flex items-center mb-4 text-gray-500 hover:text-black"
                  onClick={handleBack}
                >
                  <ChevronLeft size={24} className="mr-2" />
                  Retour
                </button>
              )}

              {/* Menu Items */}
              <div className="flex flex-col space-y-6">
                {currentMenu.map((item) =>
                  item.subItems ? (
                    <button
                      key={item.label}
                      className="flex justify-between items-center w-full text-left hover:text-gray-500"
                      onClick={() => handleSubMenu(item.label, item.subItems!)}
                    >
                      {item.label}
                      <ChevronRight size={24} />
                    </button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-left hover:text-gray-500"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>

              <Separator className="my-8" />
              <Button className="px-20">Follow Us</Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
