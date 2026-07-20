import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { ReadingProgress } from "@/components/site/ReadingProgress";
import { CTASection } from "@/components/site/CTASection";

import NewsHero from "@/components/news/NewsHero";
import NewsContent from "@/components/news/NewsContent";
import NewsGallery from "@/components/news/NewsGallery";
import ShareNews from "@/components/news/ShareNews";
import NewsAuthor from "@/components/news/NewsAuthor";
import RelatedNews from "@/components/news/RelatedNews";

export const metadata: Metadata = {
  title: "News Article",
  description:
    "Read the latest news, announcements, project updates, and company stories from Manjeet Pride Group.",
};

export default function NewsArticlePage() {
  return (
    <SiteShell>
      <ReadingProgress />

      <NewsHero />

      <NewsContent />

      <NewsGallery />

      <NewsAuthor />

      <ShareNews />

      <RelatedNews />

      <CTASection />
    </SiteShell>
  );
}