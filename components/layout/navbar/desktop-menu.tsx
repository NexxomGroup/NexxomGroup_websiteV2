"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface DesktopMenuProps {
  navItems: {
    label: string;
    href: string;
    subItems?: { label: string; href: string }[];
  }[];
}

const NavbarItem: React.FC<{ label: string; href: string; subItems?: { label: string; href: string }[] }> = ({
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
            <a
              href={subItem.href}
              className="block px-6 py-3 text-sm font-medium hover:text-gray-700 rounded transition"
            >
              {subItem.label}
            </a>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navItems }) => {
  return (
    <ul className="ml-20 hidden md:flex space-x-0 items-center">
      {navItems.map((item) => (
        <NavbarItem key={item.label} {...item} />
      ))}
    </ul>
  );
};

export default DesktopMenu;
