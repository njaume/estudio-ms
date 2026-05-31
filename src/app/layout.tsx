import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://msestudiojuridico.com.ar"),
  title: "M&S Estudio Jurídico | Abogados en Paraná, Entre Ríos",
  description:
    "Estudio jurídico en Paraná especializado en Derecho de Familia, Sucesiones, Accidentes de Tránsito, Derecho Civil y más. Atención personalizada y cercana.",
  keywords: [
    "abogado en Paraná",
    "estudio jurídico Paraná",
    "abogado Entre Ríos",
    "abogado de familia Paraná",
    "sucesiones Paraná",
    "accidentes de tránsito Paraná",
    "derecho civil Paraná",
    "mediación Paraná",
    "derecho previsional Paraná",
    "M&S Estudio Jurídico",
  ],
  authors: [
    { name: "Martina Inés Santilli" },
    { name: "Luis Ernesto Martino" },
  ],
  creator: "M&S Estudio Jurídico",
  publisher: "M&S Estudio Jurídico",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://msestudiojuridico.com.ar",
    siteName: "M&S Estudio Jurídico",
    title: "M&S Estudio Jurídico | Abogados en Paraná, Entre Ríos",
    description:
      "Asesoramiento jurídico claro, cercano y profesional en Paraná. Especializados en Familia, Sucesiones, Civil, Accidentes y más.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M&S Estudio Jurídico — Abogados en Paraná, Entre Ríos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M&S Estudio Jurídico | Abogados en Paraná",
    description:
      "Asesoramiento jurídico claro, cercano y profesional en Paraná, Entre Ríos.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://msestudiojuridico.com.ar",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "M&S Estudio Jurídico",
  url: "https://msestudiojuridico.com.ar",
  telephone: "+54-343-XXX-XXXX",
  email: "consultas@msestudiojuridico.com.ar",
  description:
    "Estudio jurídico boutique en Paraná, Entre Ríos. Especializados en Derecho de Familia, Sucesiones, Derecho Civil, Accidentes de Tránsito y más.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Dirección a completar]",
    addressLocality: "Paraná",
    addressRegion: "Entre Ríos",
    postalCode: "3100",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.7333,
    longitude: -60.5333,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Paraná",
    },
    {
      "@type": "AdministrativeArea",
      name: "Entre Ríos",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Áreas de Práctica",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Derecho Civil" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Derecho de Familia" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sucesiones" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accidentes de Tránsito" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contratos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mediación" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Derecho Inmobiliario" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Amparos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Derecho Previsional" } },
    ],
  },
  employee: [
    {
      "@type": "Person",
      name: "Martina Inés Santilli",
      jobTitle: "Abogada",
    },
    {
      "@type": "Person",
      name: "Luis Ernesto Martino",
      jobTitle: "Abogado",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </body>
    </html>
  );
}
