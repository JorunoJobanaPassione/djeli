import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://djeli.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Djeli - Facturation FNE conforme pour PME Côte d'Ivoire",
  description:
    "Créez des factures normalisées électroniques (FNE) conformes en 30 secondes. Solution mobile-first avec paiement Mobile Money intégré pour PME ivoiriennes.",
  keywords: [
    "facturation Côte d'Ivoire",
    "FNE",
    "facture normalisée électronique",
    "logiciel facturation PME",
    "facturation électronique Afrique",
    "Mobile Money",
    "Orange Money facturation",
    "comptabilité PME Abidjan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Djeli - Facturation FNE conforme pour PME",
    description:
      "Factures FNE conformes en 30 secondes. Mobile-first, paiement Mobile Money intégré.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Djeli",
  description:
    "Application de facturation FNE conforme pour PME en Côte d'Ivoire. Mobile-first avec paiement Mobile Money.",
  applicationCategory: "BusinessApplication",
  operatingSystem: ["Web", "iOS", "Android"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "XOF",
    description: "Essai gratuit 14 jours",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que la FNE en Côte d'Ivoire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Facture Normalisée Électronique (FNE) est obligatoire depuis mai 2025 pour toutes les entreprises en Côte d'Ivoire. Elle doit être connectée au système de la DGI avec un QR code de validation.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les sanctions si je ne suis pas conforme FNE ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les entreprises non conformes s'exposent à des amendes et des pénalités fiscales. La DGI effectue des contrôles réguliers pour vérifier la conformité.",
      },
    },
    {
      "@type": "Question",
      name: "Djeli fonctionne-t-il avec Orange Money et MTN ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Djeli intègre tous les moyens de paiement Mobile Money : Orange Money, MTN Mobile Money et Wave. Vos clients peuvent payer leurs factures directement.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte Djeli ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Djeli propose un essai gratuit de 14 jours. Ensuite, les plans commencent à 10 000 FCFA/mois pour les microentreprises.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je utiliser Djeli sur mon téléphone ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Djeli est conçu mobile-first. Vous pouvez créer et envoyer des factures depuis votre smartphone, même hors connexion.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
