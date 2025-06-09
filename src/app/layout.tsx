// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Structured data for NXT Softwares
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NXT Softwares",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
  description:
    "Ethiopia-based developer of software products and business solutions—ERP, mobile apps, digital media, broadcasting, and more.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "STERLING BUILDING",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  sameAs: ["https://www.linkedin.com/company/nxt-trading-plc/"],
};

export const metadata: Metadata = {
  title: "NXT Softwares – Ethiopian Business Software & Media Solutions",
  description:
    "NXT Softwares creates ERP, mobile, digital media, and broadcasting solutions tailored for Ethiopian businesses.",
  openGraph: {
    title: "NXT Softwares",
    description:
      "Ethiopia-based: ERP systems, mobile apps, digital media & broadcasting solutions.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
          key="jsonld"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
