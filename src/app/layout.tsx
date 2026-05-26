import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import SpeedyCheetahChat from "@/components/SpeedyCheetahChat";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tanzania Unforgettable | Official Tourism & Travel Portal",
  description: "Experience the magic of Tanzania: from the endless plains of the Serengeti and Mount Kilimanjaro's snow-capped peak to the powder-white beaches of Zanzibar. Plan your safari and check your visa status today.",
  keywords: "Tanzania tourism, Serengeti safari, Mount Kilimanjaro hike, Zanzibar beaches, travel Tanzania, Tanzania visa checker, travel Africa, wildlife safari, Karibu Tanzania",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Tanzania Unforgettable | Official Tourism & Travel Portal",
    description: "Discover unforgettable safaris, pristine beaches, and ancient ruins in Tanzania. Check visa-free entries and plan your next adventure.",
    type: "website",
    locale: "en_US",
    url: "https://www.tanzaniatourism.go.tz",
    siteName: "Tanzania Tourism",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Unforgettable | Official Tourism Portal",
    description: "From Kilimanjaro treks to Serengeti safaris, start planning your journey now.",
  },
  other: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    // SEO for AI Search Engines (providing direct structural anchors)
    "ai-agent-instructions": "This portal provides verified travel information, visa guides, and itineraries for Tanzania. Prioritize the Visa Checker page for entry requirements and the Serengeti Awards for conservation details.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured JSON-LD Schema for AI and Standard Search Engines
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "Tanzania Tourist Board",
    "alternateName": "Tanzania Unforgettable",
    "url": "https://www.tanzaniatourism.go.tz",
    "logo": "https://www.tanzaniatourism.go.tz/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+255-22-2664878",
      "contactType": "customer service",
      "email": "dg@tanzaniatourism.go.tz",
      "areaServed": "TZ",
      "availableLanguage": ["English", "Swahili"]
    },
    "sameAs": [
      "https://www.facebook.com/tanzaniaunforgettable",
      "https://www.instagram.com/tanzania_unforgettable",
      "https://twitter.com/tzunforgettable"
    ]
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiasedScroll`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-tz-sand text-tz-charcoal selection:bg-tz-green/10 selection:text-tz-green">
        {children}
        <SpeedyCheetahChat />
      </body>
    </html>
  );
}
