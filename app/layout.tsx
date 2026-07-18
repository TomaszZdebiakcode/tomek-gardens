import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "TomekGardens – Projektowanie i pielęgnacja ogrodów",
  description:
    "Profesjonalne projektowanie, zakładanie i pielęgnacja ogrodów. Skontaktuj się z TomekGardens.",
  openGraph: {
    title: "TomekGardens",
    description: "Projektowanie, zakładanie i pielęgnacja ogrodów.",
    url: "https://tomekgardens.pl",
    siteName: "TomekGardens",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "TomekGardens",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TomekGardens",
  image: "https://tomekgardens.pl/og-image.webp",
  url: "https://tomekgardens.pl",
  telephone: "+48 735 133 563",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Szczecin",
    addressCountry: "PL",
  },
  areaServed: "Polska",
  description: "Projektowanie, zakładanie i pielęgnacja ogrodów.",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}