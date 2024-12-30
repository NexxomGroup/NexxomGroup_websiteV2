// data/navData.ts

export interface NavItem {
    labelKey: string;       // Clé de traduction pour le label
    href: string;           // Lien de navigation
    subItems?: NavItem[];   // Sous-items de navigation (facultatif)
  }
  
  export interface ServiceItem {
    nameKey: string;       // Clé de traduction pour le nom
    href: string;          // Lien de navigation
    category?: string;     // Catégorie du service (facultatif)
  }
  
  export const navData: NavItem[] = [
    {
      labelKey: "nav.services",
      href: "#",
      subItems: [
        { labelKey: "nav.automation", href: "/services/automation" },
        { labelKey: "nav.mobileApps", href: "#mobile-apps" },
        { labelKey: "nav.cloudSolutions", href: "#cloud" }
      ]
    },
    { labelKey: "nav.insights", href: "#insights" },
    { labelKey: "nav.blog", href: "#blog" },
    { labelKey: "nav.contactUs", href: "#contact" }
  ];
  
  export const servicesList: ServiceItem[] = [
    { nameKey: "servicesList.home", href: "/" },
    { nameKey: "servicesList.automation", href: "/services/automation", category: "services" },
    { nameKey: "servicesList.cloud", href: "/services/cloud", category: "services" },
    { nameKey: "servicesList.development", href: "/services/development", category: "services" }
  ];
  