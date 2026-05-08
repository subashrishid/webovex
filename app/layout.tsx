import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEBOVEX | We Forge Digital Empires",
  description:
    "WEBOVEX builds scalable digital products, modern web applications, enterprise IT systems, immersive 3D experiences, and AI-integrated cloud applications.",
  keywords: [
    "Webovex",
    "WEBOVEX",
    "We Forge Digital Empires",
    "3D portfolio website",
    "immersive web experiences",
    "industrial UI UX",
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
    title: "WEBOVEX - We Forge Digital Empires",
    description:
      "A premium cinematic 3D portfolio for WEBOVEX, a modern development studio forging scalable digital products and enterprise systems.",
    url: "https://webovex.com/",
    siteName: "Webovex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBOVEX - We Forge Digital Empires",
    description:
      "WEBOVEX builds scalable digital products, modern web applications, enterprise IT systems, immersive 3D experiences, and AI-integrated cloud applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#03040a",
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
