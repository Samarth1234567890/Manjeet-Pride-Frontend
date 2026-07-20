import type { ComponentType } from "react";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { ReadingProgress } from "@/components/site/ReadingProgress";
import { CTASection } from "@/components/site/CTASection";

import ArticleHero from "@/components/media/ArticleHero";
import ArticleContent from "@/components/media/ArticleContent";
import ArticleGallery from "@/components/media/ArticleGallery";
import ShareArticle from "@/components/media/ShareArticle";
import AuthorCard from "@/components/media/AuthorCard";
import RelatedArticles from "@/components/media/RelatedArticles";

import {
  featuredArticle,
  relatedArticles,
} from "@/components/data/media";

const RelatedArticlesWithProps = RelatedArticles as ComponentType<{
  articles: typeof relatedArticles;
}>;

export const metadata: Metadata = {
  title: "Media Article",
  description:
    "Read the latest article from Manjeet Pride Group covering architecture, real estate, project updates and company news.",
};

export default function MediaArticlePage() {
  return (
    <SiteShell>
  <ReadingProgress />

  <ArticleHero />

  <ArticleContent />

  <AuthorCard />

  <ArticleGallery />

  <ShareArticle />

  <RelatedArticles />

  <CTASection title={""} description={""} buttonText={""} href={""} />
</SiteShell>
  );
}