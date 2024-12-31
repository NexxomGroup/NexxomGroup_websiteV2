"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

interface DesktopMenuProps {
  navItems: {
    label: string;
    href: string;
    subItems?: { label: string; href: string }[];
  }[];
}

const NavbarItem: React.FC<{ locale:string; label: string; href: string; subItems?: { label: string; href: string }[] }> = ({
 locale,
  label,
  href,
  subItems,
}) => (
  <li className="relative group cursor-pointer hover:text-gray-500 transition">
    {/* Lien principal */}
    <a href={href} className="flex items-center py-2 px-4">
      {label} {subItems && <ChevronDown size={16} className="ml-1" />}
    </a>

    {/* Sous-menus */}
    {subItems && (
      <ul className="absolute left-0 top-full mt-2 bg-white text-black shadow-md rounded-lg min-w-[200px] py-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-50">
        {subItems.map((subItem) => (
          <li key={subItem.label} className="hover:bg-gray-100">
                <Link
                locale={locale}
              href={subItem.href}
              className="block px-6 py-3 text-sm font-medium hover:text-gray-700 rounded transition"
            >
              {subItem.label}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navItems }) => {
  const locale = useLocale()
  return (
    <ul className="ml-20 hidden md:flex space-x-0 items-center">
      {navItems.map((item) => (
        <NavbarItem locale={locale} key={item.label} {...item} />
      ))}
    </ul>
  );
};

export default DesktopMenu;
