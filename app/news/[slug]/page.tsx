import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { ReadingProgress } from "@/components/site/ReadingProgress";
import { CTASection } from "@/components/site/CTASection";

import NewsHero from "@/components/media/ArticleHero";
import NewsContent from "@/components/media/ArticleContent";
import NewsGallery from "@/components/media/ArticleGallery";
import ShareNews from "@/components/media/ShareArticle";
import NewsAuthor from "@/components/media/AuthorCard";
import RelatedNews from "@/components/media/RelatedArticles";

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

      <CTASection title={""} description={""} buttonText={""} href={""} />
    </SiteShell>
  );
}