import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webovex | Immersive AI & Enterprise Software Universe",
  description:
    "Webovex engineers AI systems, cloud infrastructure, SaaS platforms, authentication systems, APIs, and immersive enterprise software experiences.",
  keywords: [
    "Webovex",
    "AI systems",
    "PERN stack",
    "React",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "enterprise software",
    "SaaS platforms",
    "immersive WebGL",
  ],
  authors: [{ name: "Subash N - Webovex" }],
  alternates: {
    canonical: "https://webovex.com/",
  },
  openGraph: {
    title: "Webovex - Immersive AI & Enterprise Software Universe",
    description:
      "A cinematic digital headquarters for AI, cloud, enterprise applications, SaaS systems, and premium software engineering.",
    url: "https://webovex.com/",
    siteName: "Webovex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webovex - Immersive AI & Enterprise Software Universe",
    description:
      "Cinematic WebGL storytelling for AI, cloud, enterprise applications, SaaS, APIs, and secure software architecture.",
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
        "Webovex builds AI systems, PERN applications, cloud infrastructure, authentication systems, APIs, SaaS platforms, automation systems, and immersive enterprise software.",
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
