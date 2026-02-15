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
  title: "Djeli - Facturation FNE conforme pour PME Cote d'Ivoire",
  description:
    "Creez des factures normalisees electroniques (FNE) conformes en 30 secondes. Solution mobile-first avec paiement Mobile Money integre pour PME ivoiriennes.",
  keywords: [
    "facturation Cote d'Ivoire",
    "FNE",
    "facture normalisee electronique",
    "logiciel facturation PME",
    "facturation electronique Afrique",
    "Mobile Money",
    "Orange Money facturation",
    "comptabilite PME Abidjan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Djeli - Facturation FNE conforme pour PME",
    description:
      "Factures FNE conformes en 30 secondes. Mobile-first, paiement Mobile Money integre.",
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
    "Application de facturation FNE conforme pour PME en Cote d'Ivoire. Mobile-first avec paiement Mobile Money.",
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
      name: "Qu'est-ce que la FNE en Cote d'Ivoire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Facture Normalisee Electronique (FNE) est obligatoire depuis mai 2025 pour toutes les entreprises en Cote d'Ivoire. Elle doit etre connectee au systeme de la DGI avec un QR code de validation.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les sanctions si je ne suis pas conforme FNE ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les entreprises non conformes s'exposent a des amendes et des penalites fiscales. La DGI effectue des controles reguliers pour verifier la conformite.",
      },
    },
    {
      "@type": "Question",
      name: "Djeli fonctionne-t-il avec Orange Money et MTN ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Djeli integre tous les moyens de paiement Mobile Money : Orange Money, MTN Mobile Money et Wave. Vos clients peuvent payer leurs factures directement.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coute Djeli ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Djeli propose un essai gratuit de 14 jours. Ensuite, les plans commencent a 10,000 FCFA/mois pour les microentreprises.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je utiliser Djeli sur mon telephone ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Djeli est concu mobile-first. Vous pouvez creer et envoyer des factures depuis votre smartphone, meme hors connexion.",
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
