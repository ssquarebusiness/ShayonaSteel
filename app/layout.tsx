import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["500", "600", "700"] });

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} | Steel Fabrication in Nadiad`,
  description: site.description,
  keywords: [
    "steel fabrication Nadiad",
    "pergola",
    "steel gate",
    "laser cut jali",
    "MS railing",
    "industrial shed",
    "fabrication works Gujarat",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/work/pergola-04.jpg", width: 1280, height: 506, alt: "Steel pergola by Shayona Steel" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1f24",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  founder: site.owner,
  telephone: "+919825511011",
  email: site.email,
  image: `${siteUrl}/work/pergola-04.jpg`,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
