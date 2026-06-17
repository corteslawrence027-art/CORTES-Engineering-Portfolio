import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import TikTokPixelInit from "@/components/TikTokPixelInit";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Lawrence Cortes — Software Developer & Brand Designer | Cebu, Philippines",
  description:
    "Portfolio of Lawrence Cortes: Next.js developer, brand designer, cybersecurity learner, and AI builder based in Cebu, PH. Available for internships.",
  keywords: [
    "software developer Philippines",
    "Next.js developer Cebu",
    "brand designer Philippines",
    "cybersecurity student",
    "internship ready 2025",
    "CORTES Engineering Portfolio",
  ],
  openGraph: {
    title: "Lawrence Cortes — Software Developer",
    description:
      "Next.js developer, brand designer, and AI builder from Cebu, PH. Available for internships.",
    images: ["/og-image.png"],
    url: "https://lawrencecortes.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawrence Cortes — Software Developer",
    description: "Next.js developer, brand designer, and AI builder from Cebu, PH.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lawrence Cortes",
    jobTitle: "Software Developer & Brand Designer",
    url: "https://lawrencecortes.dev",
    sameAs: [
      "https://github.com/corteslawrence027-art/CORTES-Engineering-Portfolio",
    ],
    description:
      "Software developer, brand designer, and AI builder based in Cebu, Philippines.",
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-zinc-950 text-zinc-100 transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <TikTokPixelInit />
        <Analytics />
      </body>
    </html>
  );
}
