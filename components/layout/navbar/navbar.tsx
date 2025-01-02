// components/layout/navbar.tsx

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import SearchComponent from "./search";
import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";
import MaxWidth from "../maxWidth";
import { useLocale, useTranslations } from "next-intl";
import { LangSwitcher } from "./lang-switcher";
import { navData } from "./navData"; // Importer les données de navigation

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("common"); // Accès aux traductions communes

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
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

  // Transformer navData avec les labels traduits
  const translatedNavItems = navData.map((item) => ({
    label: t(item.labelKey),
    href: item.href,
    subItems: item.subItems
      ? item.subItems.map((sub) => ({
          label: t(sub.labelKey),
          href: sub.href
        }))
      : undefined
  }));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900 text-white shadow-lg   "
          : "bg-transparent text-white    "
      }`}
    >
      <MaxWidth>
        <nav className="flex items-center justify-between relative h-full  py-7 ">
          <div className={`absolute w-full bottom-0 bg-primary-foreground/50 h-0.5${
        isScrolled
          ? "bg-primary-foreground/0  transition-all duration-300"
          : "  "
      }`}
      
      ></div>
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <Image
                className="hidden md:block"
                src="/nexxom.png"
                alt={t("brand")}
                width={150}
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

            {/* Desktop Menu */}
            <DesktopMenu navItems={translatedNavItems} />
          </div>

          {/* Search Component */}
          <div className="text-accent-foreground hidden lg:flex">
            <LangSwitcher />
            <SearchComponent />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden p-2">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </MaxWidth>

      {/* Mobile Menu */}
      <MobileMenu navItems={translatedNavItems} menuOpen={menuOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Navbar;
