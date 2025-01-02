"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

/**
 * Exemple : vous pouvez lister ici toutes les langues supportées.
 * code: code ISO (ou identifiant) de la langue
 * label: texte affiché dans le menu
 */
const LANGUAGES = [
  { code: "en", label: "English", disabled: true },
  { code: "fr", label: "Français", disabled: false },
];

// Si vous avez un mapping de routes plus complexe, vous pouvez adapter
// cette fonction de construction d'URL selon la structure de vos URL.
function buildLocalePath(locale: string, pathname: string) {
  // Supposons que votre pathname soit du style /en/dashboard, /fr/dashboard, etc.
  // On enlève la première partie (la locale existante) et on la remplace.
  const segments = pathname.split("/").filter(Boolean); 
  // ex. ["en", "dashboard"] => segments[0] = "en"
  // => on veut remplacer segments[0] par "locale"
  if (segments.length > 0) {
    segments[0] = locale;
    return "/" + segments.join("/");
  }
  // S'il n'y avait pas de segments (page d'accueil), on met juste /locale
  return `/${locale}`;
}

export function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();   // ex. "/en/dashboard"
  const params = useParams();       // ex. { locale: "en", ... }

  // Au clic d’une langue, on remplace la locale dans le pathname
  const handleLanguageChange = (newLocale: string) => {
    // On construit la nouvelle URL locale
    const newPath = buildLocalePath(newLocale, pathname);
    // Redirection vers la nouvelle URL
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Bouton affichant la locale actuelle (majuscule) + icône */}
        <div className="h-auto text-primary-foreground mr-4 w-auto flex items-center">
          <h1 className="flex text-sm">
            {params?.locale.toUpperCase() ?? "LANG"}
            <ChevronDown className="h-5 ml-1" />
          </h1>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        {LANGUAGES.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code)}
            className="cursor-pointer flex items-center justify-between"
          >
            {label}
            {/* Ajout d'une pastille pour indiquer la langue active */}
            {code === params?.locale && (
              <span className="ml-2 h-2 w-2 rounded-full bg-blue-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
