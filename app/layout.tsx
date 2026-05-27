import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEBOVEX | Premium Websites, Apps, and Business Systems",
  description:
    "WEBOVEX builds premium websites, modern applications, enterprise IT systems, ecommerce platforms, dashboards, and AI-integrated cloud applications with polished client-focused visuals.",
  keywords: [
    "Webovex",
    "WEBOVEX",
    "We Forge Digital Empires",
    "premium website development",
    "Apple style website",
    "Tesla style website",
    "business dashboard development",
    "PERN stack",
    "Django",
    "Node.js",
    "Cloud Applications",
    "AI Integrations",
    "enterprise IT systems",
  ],
  authors: [{ name: "Subash N - Webovex" }],
  alternates: {
    canonical: "https://webovex.com/",
  },
  openGraph: {
    title: "WEBOVEX - Premium Websites, Apps, and Business Systems",
    description:
      "A clean premium product-style website for WEBOVEX with client-focused images, video proof, and scalable digital product services.",
    url: "https://webovex.com/",
    siteName: "Webovex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBOVEX - Premium Websites, Apps, and Business Systems",
    description:
      "WEBOVEX builds premium websites, modern applications, enterprise IT systems, ecommerce platforms, dashboards, and AI-integrated cloud applications with polished client-focused visuals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f8fb",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://webovex.com/#organization",
      name: "Webovex",
      url: "https://webovex.com/",
      description:
        "Webovex is a modern development studio focused on building high-performance web platforms and scalable digital solutions.",
      founder: {
        "@id": "https://webovex.com/#subash-n",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      email: "subashrishid@gmail.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://webovex.com/#website",
      name: "Webovex",
      url: "https://webovex.com/",
      publisher: {
        "@id": "https://webovex.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": "https://webovex.com/#subash-n",
      name: "Subash N",
      url: "https://webovex.com/",
      email: "subashrishid@gmail.com",
      jobTitle: "Software Architect and Full-Stack Engineer",
      worksFor: {
        "@id": "https://webovex.com/#organization",
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
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
