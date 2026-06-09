import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c111d" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mtverseadmin.com"),
  title: {
    default:
      "mtverse admin - Premium Tailwind CSS Admin Dashboard | 7000+ Components, 6 Frameworks",
    template: "%s | mtverse admin",
  },
  description:
    "mtverse admin is the most comprehensive premium Tailwind CSS admin dashboard template with 7,000+ components across 6 framework bundles (HTML+Alpine.js, React, Next.js, Vue, Angular, Laravel). Features 15 dashboard variants, dark mode, responsive design, 500+ pages, and production-ready code. Built with Tailwind CSS v4.",
  keywords: [
    "mtverse admin",
    "Tailwind CSS admin dashboard",
    "admin template",
    "dashboard UI kit",
    "React dashboard",
    "Next.js admin",
    "Vue dashboard",
    "Angular admin",
    "Laravel dashboard",
    "Tailwind components",
    "dark mode dashboard",
    "responsive admin",
    "SaaS dashboard",
    "e-commerce dashboard",
    "analytics dashboard",
    "CRM dashboard",
    "AI dashboard",
    "premium admin template",
    "Tailwind CSS v4",
    "admin panel",
    "dashboard template",
    "UI components library",
    "TailAdmin alternative",
    "admin UI kit",
    "management dashboard",
    "backend template",
    "control panel",
    "data visualization dashboard",
    "enterprise dashboard",
    "startup dashboard",
    "Alpine.js dashboard",
    "Next.js dashboard template",
    "React admin panel",
    "Vue admin template",
    "Angular dashboard UI",
    "Laravel admin panel",
    "Tailwind UI components",
    "dashboard starter kit",
    "admin dashboard boilerplate",
    "multipurpose admin template",
    "modern admin UI",
    "clean dashboard design",
    "minimal admin template",
    "Tailwind dashboard theme",
    "admin interface template",
    "web app dashboard",
    "management panel",
    "business dashboard",
    "corporate admin template",
    "SaaS admin panel",
    "real-time dashboard",
    "interactive dashboard UI",
    "drag and drop dashboard",
    "TypeScript admin template",
  ],
  authors: [{ name: "mtverse admin", url: "https://mtverseadmin.com" }],
  creator: "mtverse admin",
  publisher: "mtverse admin",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title:
      "mtverse admin - Premium Tailwind CSS Admin Dashboard | 7000+ Components",
    description:
      "The most comprehensive admin dashboard template. 7,000+ components across 6 frameworks (HTML, React, Next.js, Vue, Angular, Laravel). 15 dashboards, dark mode, responsive, production-ready.",
    type: "website",
    locale: "en_US",
    url: "https://mtverseadmin.com",
    siteName: "mtverse admin",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "mtverse admin - Premium Tailwind CSS Admin Dashboard with 7000+ Components",
        type: "image/png",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "mtverse admin - Premium Tailwind CSS Admin Dashboard",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "mtverse admin - Premium Tailwind CSS Admin Dashboard | 7000+ Components",
    description:
      "7,000+ components across 6 frameworks. 15 dashboard variants, dark mode, fully responsive production-ready admin template.",
    images: ["/opengraph-image"],
    creator: "@mtverseadmin",
    site: "@mtverseadmin",
  },
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
  category: "technology",
  classification: "Admin Dashboard Template",
};

// JSON-LD: SoftwareApplication Schema
const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "mtverse admin",
  description:
    "Premium Tailwind CSS Admin Dashboard Template with 7,000+ components across 6 frameworks",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  url: "https://mtverseadmin.com",
  author: {
    "@type": "Organization",
    name: "mtverse admin",
    url: "https://mtverseadmin.com",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    highPrice: "399",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "7,000+ Components",
    "6 Framework Bundles",
    "15 Dashboard Variants",
    "Dark Mode",
    "Responsive Design",
    "Production-Ready Code",
    "Tailwind CSS v4",
    "TypeScript Support",
    "SEO Optimized",
    "500+ Pages",
  ],
};

// JSON-LD: Product Schema with AggregateOffer
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "mtverse admin",
  description:
    "Premium Tailwind CSS Admin Dashboard Template with 7,000+ components across 6 frameworks",
  brand: {
    "@type": "Brand",
    name: "mtverse admin",
  },
  image: "https://mtverseadmin.com/og-image.png",
  url: "https://mtverseadmin.com",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    highPrice: "399",
    offerCount: "3",
    offers: [
      {
        "@type": "Offer",
        name: "Basic",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description: "Free basic access with limited components",
      },
      {
        "@type": "Offer",
        name: "Premium",
        price: "149",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description: "Full access to all components and frameworks",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "399",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description:
          "Premium access with priority support and custom licensing",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
};

// JSON-LD: WebSite Schema with SearchAction
const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "mtverse admin",
  url: "https://mtverseadmin.com",
  description:
    "Premium Tailwind CSS Admin Dashboard Template with 7,000+ components",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://mtverseadmin.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// JSON-LD: Organization Schema
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "mtverse admin",
  url: "https://mtverseadmin.com",
  logo: "https://mtverseadmin.com/icon.svg",
  sameAs: [
    "https://twitter.com/mtverseadmin",
    "https://github.com/mtverseadmin",
    "https://www.youtube.com/@mtverseadmin",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@mtverseadmin.com",
    availableLanguage: ["English"],
  },
};

// JSON-LD: FAQPage Schema
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What frameworks does mtverse admin support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mtverse admin supports 6 frameworks: HTML+Alpine.js, React, Next.js, Vue.js, Angular, and Laravel. Each framework bundle includes fully compatible components and pages.",
      },
    },
    {
      "@type": "Question",
      name: "How many components are included in mtverse admin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mtverse admin includes 7,000+ components across all framework bundles, covering UI elements, advanced UI components, extended UI, forms, tables, charts, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Does mtverse admin support dark mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, mtverse admin has built-in dark mode support with seamless light/dark theme switching. All components are designed to work perfectly in both modes.",
      },
    },
    {
      "@type": "Question",
      name: "Is mtverse admin mobile responsive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. mtverse admin is fully responsive and mobile-first. All 7,000+ components adapt perfectly to desktop, tablet, and mobile screen sizes.",
      },
    },
    {
      "@type": "Question",
      name: "What version of Tailwind CSS does mtverse admin use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mtverse admin is built with Tailwind CSS v4, the latest version, providing the most modern utility-first CSS framework with improved performance and new features.",
      },
    },
    {
      "@type": "Question",
      name: "How many dashboard variants are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mtverse admin includes 15+ dashboard variants including e-commerce, analytics, marketing, CRM, stocks, SaaS, logistics, AI, sales, finance, crypto, hospital, school, restaurant, and real estate dashboards.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use mtverse admin for commercial projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with the Premium or Enterprise license you can use mtverse admin in unlimited commercial projects. The Basic license is suitable for personal and learning purposes.",
      },
    },
    {
      "@type": "Question",
      name: "Does mtverse admin include source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, mtverse admin comes with full source code for all components across all 6 framework bundles. You get clean, well-documented, production-ready code.",
      },
    },
  ],
};

// JSON-LD: BreadcrumbList Schema
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://mtverseadmin.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Dashboards",
      item: "https://mtverseadmin.com/dashboards/ecommerce",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Components",
      item: "https://mtverseadmin.com/components/ui-elements",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Source Code",
      item: "https://mtverseadmin.com/source/ui-elements/buttons",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
