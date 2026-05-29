import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLanding } from "../components/IndustryLanding";
import { industries } from "../data/conversionContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = industries.find((industry) => industry.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.name} | Webovex`,
    description: `${page.headline} Get a premium, mobile-friendly, SEO-ready business website from Webovex Chennai.`,
    alternates: {
      canonical: `https://webovex.com/${page.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const page = industries.find((industry) => industry.slug === slug);

  if (!page) {
    notFound();
  }

  return <IndustryLanding page={page} />;
}
