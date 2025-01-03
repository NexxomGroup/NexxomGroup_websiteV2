// app/[locale]/layout.tsx

import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import MainNavbar from "@/components/layout/navbar/navbar";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { loadTranslations } from "@/i18n/loadTranslations";

import { ReactNode } from "react";

const space_grotesk = Space_Grotesk({
  variable: "--space_grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexxom",
  description: "Generated by create next app",
};

// Convertir le tuple readonly en un tableau mutable pour éviter les erreurs TypeScript
const supportedLocales: string[] = Array.from(routing.locales);

/**
 * Génère les paramètres statiques pour les locales supportées.
 */
export function generateStaticParams() {
  return supportedLocales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>; // Typage corrigé : params est une Promise
}) {
  // Await la résolution de params
  const { locale } = await params;

  // Vérifie que la locale est supportée
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  // Charger les traductions en utilisant le module loadTranslations
  const messages = await loadTranslations(locale);

  return (
    <html lang={locale}>
      <body
        className={`${space_grotesk.variable} ${inter.variable} font2 antialiased overflow-x-hidden`}
      >
        {/* NextIntlClientProvider fournit les messages à toute l'application */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainNavbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
