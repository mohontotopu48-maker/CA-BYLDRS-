import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1A237E',
};

export const metadata: Metadata = {
  title: {
    default: "CA BYLDRS — Elite B2B Contractor Alliance | Orange County & LA County",
    template: "%s | CA BYLDRS",
  },
  description:
    "Stop buying garbage leads. CA BYLDRS is the Elite B2B Unified Referral Network for licensed contractors in Orange County and Los Angeles County. Exclusive leads, automated sales OS, personal brand video, and the Guardian Gold Seal.",
  keywords: [
    "CA BYLDRS",
    "contractor recruitment",
    "B2B contractor alliance",
    "exclusive contractor leads",
    "NXLBYLDR™ OS",
    "BYLDRS Guardian",
    "Orange County contractors",
    "Los Angeles County contractors",
    "roofing leads OC",
    "plumbing leads LA",
    "HVAC leads Southern California",
    "electrical contractor leads",
    "contractor marketing automation",
    "GoHighLevel for contractors",
    "lead generation for contractors",
    "contractor personal branding",
    "exclusive leads no sharing",
  ],
  authors: [{ name: "CA BYLDRS", url: "https://cabyldrs.com" }],
  creator: "CA BYLDRS",
  publisher: "CA BYLDRS",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: "CA BYLDRS — Stop Buying Garbage Leads. Start Owning Your Market.",
    description:
      "The Elite B2B Unified Referral Network for licensed contractors in OC & LA County. Exclusive leads, automated sales engine, personal brand video, and the Guardian Gold Seal.",
    type: "website",
    locale: "en_US",
    url: "https://cabyldrs.com",
    siteName: "CA BYLDRS",
    images: [{ url: "https://i.ibb.co/6308JrK/image.png", width: 512, height: 512, alt: "CA BYLDRS — Elite Contractor Alliance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CA BYLDRS — Elite B2B Contractor Alliance",
    description: "Exclusive leads, automated sales OS, personal brand video, and the Guardian Gold Seal for licensed contractors in OC & LA County.",
    images: ["https://i.ibb.co/6308JrK/image.png"],
  },
  alternates: {
    canonical: "https://cabyldrs.com",
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Santa Fe Springs, California',
    'geo.position': '33.9469;-118.0702',
    'ICBM': '33.9469, -118.0702',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'CA BYLDRS',
            description: 'The Elite B2B Unified Referral Network for Licensed Contractors in Orange County & Los Angeles County.',
            url: 'https://cabyldrs.com',
            telephone: '+1-562-944-0500',
            email: 'hello@nxlbyldr.com',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-562-944-0500',
              contactType: 'partner applications',
              email: 'hello@nxlbyldr.com',
              availableLanguage: ['English'],
            },
            address: { '@type': 'PostalAddress', streetAddress: '12510 Mc Cann Dr.', addressLocality: 'Santa Fe Springs', addressRegion: 'CA', postalCode: '90670', addressCountry: 'US' },
            areaServed: [{ '@type': 'AdministrativeArea', name: 'Orange County' }, { '@type': 'AdministrativeArea', name: 'Los Angeles County' }],
            serviceType: ['Roofing', 'Plumbing', 'HVAC', 'Electrical'],
            knowsAbout: ['NXLBYLDR™ OS', 'BYLDRS Guardian', 'Contractor Lead Generation', 'Marketing Automation'],
            image: 'https://i.ibb.co/6308JrK/image.png',
            sameAs: ['https://cabyldrs.com', 'https://nxlbyldr.com'],
          }),
        }}
      />
      <head>
        {/* GoHighLevel External Tracking Script */}
        <script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_10e022fb5c9f4ebea7a518b61fa81171"
          async
        />
        {/* Preload critical logo image */}
        <link rel="preload" as="image" href="https://i.ibb.co/6308JrK/image.png" type="image/png" />
        <link rel="icon" href="https://i.ibb.co/6308JrK/image.png" type="image/png" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        {/* Skip Navigation */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1A237E] focus:text-white focus:rounded-lg">Skip to main content</a>
      </body>
    </html>
  );
}
