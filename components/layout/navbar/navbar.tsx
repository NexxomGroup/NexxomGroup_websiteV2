"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchComponent from "./search";
import MobileMenu from "./mobile-menu";
import MaxWidth from "../maxWidth";
import { useLocale, useTranslations } from "next-intl";
import { LangSwitcher } from "./lang-switcher";
import { navData } from "./navData";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("common");

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubItems, setActiveSubItems] = useState<{
    label: string;
    subItems?: { label: string; href: string }[];
  } | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setActiveSubItems(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSubItemsEnter = (item: {
    label: string;
    subItems?: { label: string; href: string }[];
  }) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveSubItems(item);
  };

  const handleSubItemsLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubItems(null);
    }, 300);
    setHoverTimeout(timeout);
  };

  const translatedNavItems = navData.map((item) => ({
    label: t(item.labelKey),
    href: item.href,
    subItems: item.subItems
      ? item.subItems.map((sub) => ({
        label: t(sub.labelKey),
        href: sub.href,
      }))
      : undefined,
  }));

  const DesktopMenu: React.FC<{
    navItems: { label: string; href: string; subItems?: { label: string; href: string }[] }[];
  }> = ({ navItems }) => (
    <ul className="ml-20 hidden md:flex space-x-4 items-center">
      {navItems.map((item) => (
        <li
          key={item.label}
          className="relative group cursor-pointer hover:text-gray-500 text-sm transition"
          onMouseEnter={() => handleSubItemsEnter(item)}
          onMouseLeave={handleSubItemsLeave}
        >
          <a href={item.href} className="flex items-center py-2 px-4">
            {item.label} {item.subItems && <ChevronDown size={16} className="ml-1" />}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-zinc-900 text-white shadow-lg"
        : "bg-transparent text-white"
        }`}
    >
      <MaxWidth className="">
        <nav className="flex items-center justify-between relative h-full py-7">
          <div
            className={`absolute w-full bottom-0 bg-primary-foreground/50 h-0.5${isScrolled
              ? "bg-primary-foreground/0  transition-all duration-300"
              : ""
              }`}
          ></div>
          <div className="flex items-center">
            <a href="/">
              <Image
                className="hidden md:block"
                src="/nexxom.png"
                alt={t("brand")}
                width={120}
                height={40}
              />
              <Image
                className="md:hidden"
                src="/X.png"
                alt={t("brand")}
                width={40}
                height={40}
              />
            </a>

            <DesktopMenu navItems={translatedNavItems} />
          </div>

          <div className="text-accent-foreground hidden lg:flex">
            <LangSwitcher />
            <SearchComponent />
          </div>

          <div className="flex md:hidden p-2">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </MaxWidth>

      <AnimatePresence>
        {activeSubItems && activeSubItems.subItems && (
          <motion.div
            className="absolute top-[100%] left-0 w-full bg-white shadow-lg py-4 z-40 sub-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onMouseEnter={() => setActiveSubItems(activeSubItems)}
            onMouseLeave={() => setActiveSubItems(null)}
          >
                  <MaxWidth className="relative">
                    <div className="absolute left-0 h-full bg-zinc-900/80 w-1"></div>

            <div className="  px-4 min-h-[300px]  flex">
             
              <div className="w-1/2 h-full relative ">

                <h1 className="text-secondary-foreground mt-2 mb-3 font-bold">{t("categories.services")}</h1>
                <div className="h-[0.5px] mt-2 mb-4 bg-black/40 mr-4"></div>
                <ul>
                  {activeSubItems.subItems.map((subItem) => (
                    <li key={subItem.label} className="py-2">
                      <Link
                        locale={locale}
                        href={subItem.href}
                        className="block text-black hover:text-gray-700  text-sm transition"
                        onClick={() => {
                          setActiveSubItems(null); // Fermer le sous-menu
                          setMenuOpen(false); // Fermer le menu mobile, si applicable
                        }}
                      >
                        - {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
              <div className="w-1/2 relative ">
                <Image
                  src="/hero3.png"
                  alt="Submenu visual"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center">
                    <h1 className="mt-sm text-xl mb-4 text-primary-foreground">Bring the future to now.</h1>
                    <Link href={"https://www.linkedin.com/company/nexxom/"}>
                      <Button>
                        {t("follow")} <FaLinkedin className="mt-0.5 ml-1.5" />
                      </Button>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
            </MaxWidth>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileMenu navItems={translatedNavItems} menuOpen={menuOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Navbar;
