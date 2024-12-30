// components/layout/search.tsx

"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Search, Check } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
  CommandEmpty,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { servicesList } from "./navData"; // Importer la liste des services

/**
 * Construit l'URL localisée : si la locale est "en" et le href "/services/cloud",
 * on obtient "/en/services/cloud".
 */
function buildLocalePath(locale: string, rawHref: string) {
  // Enlève le slash initial s’il existe
  const cleanHref = rawHref.replace(/^\/+/, "");
  return `/${locale}/${cleanHref}`;
}

const SearchComponent = () => {
  const t = useTranslations("common"); // Accès aux traductions communes
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false); // Contrôle l'affichage du popover
  const [query, setQuery] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Transformer servicesList avec les noms traduits
  const translatedServices = servicesList.map((service) => ({
    name: t(service.nameKey),
    href: service.href,
    category: service.category // Peut être undefined
  }));

  // Filtrer les services en fonction de la requête
  const filteredServices = query
    ? translatedServices.filter((service) =>
        service.name.toLowerCase().includes(query.toLowerCase())
      )
    : translatedServices;

  const handleSelect = (href: string, name: string) => {
    setSelectedService(name);
    setIsOpen(false);
    /**
     * Redirige vers une URL localisée :
     * - si locale = "en" et href = "/services/automation", => "/en/services/automation"
     * - si locale = "fr" et href = "/", => "/fr/"
     */
    redirect(buildLocalePath(locale, href));
  };

  return (
    <div className="relative flex items-center">
      {/* Bouton Loupe */}
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        variant="ghost"
        className={`p-2 focus:outline-none transition border-none ${
          isOpen ? "bg-white text-secondary-foreground" : "text-primary-foreground"
        }`}
      >
        <Search className="w-6 h-6" />
      </Button>

      {/* Barre de recherche avec Popover */}
      <div
        className={`ml-1 transition-all duration-300 ${
          isOpen ? "w-64 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-between ${
                !selectedService && "text-muted-foreground"
              }`}
            >
              {selectedService ? selectedService : t("search.placeholder")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput
                placeholder={t("search.placeholder")}
                value={query}
                onValueChange={setQuery}
                className="h-9"
              />
              <CommandList>
                {filteredServices.length > 0 ? (
                  <CommandGroup heading="Suggestions">
                    {filteredServices.map((service) => (
                      <CommandItem
                        key={service.href}
                        onSelect={() => handleSelect(service.href, service.name)}
                      >
                        {service.category === "services"
                          ? `${t("categories.services")} > ${service.name}`
                          : service.name}
                        <Check
                          className={cn(
                            "ml-auto",
                            selectedService === service.name
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ) : (
                  <CommandEmpty>{t("search.noResults")}</CommandEmpty>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SearchComponent;
