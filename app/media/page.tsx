import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/site/CTASection";

import FeaturedArticle from "@/components/media/FeaturedArticle";
import MediaCategories from "@/components/media/MediaCategories";
import MediaExplorer from "@/components/media/MediaExplorer";
import PopularArticles from "@/components/media/PopularArticles";
import LatestNews from "@/components/media/LatestNews";
import NewsletterSection from "@/components/media/NewsletterSection";

import {
  featuredArticle,
  mediaCategories,
  mediaArticles,
  popularArticles,
  latestNews,
} from "@/components/data/media";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Explore the latest articles, news, blogs, interviews, construction updates, and insights from Manjeet Pride Group.",
};

export default function MediaPage() {
  return (
    <SiteShell>
  <PageHero
    eyebrow="Media Centre"
    title={
      <>
        Stories behind
        <br className="hidden sm:block" />
        every landmark.
      </>
    }
    image="/images/media/media-hero.jpg"
    description="Stay updated with project launches, company announcements, interviews, construction milestones, and industry insights from Manjeet Pride Group."
  />

  <section>
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionTitle
          eyebrow="Featured Story"
          title="Latest highlights from our journey."
        />
      </Reveal>

      <FeaturedArticle />
    </div>
  </section>

  <Reveal>
    <MediaCategories />
  </Reveal>

  <Reveal>
    <MediaExplorer />
  </Reveal>

  <Reveal>
    <PopularArticles />
  </Reveal>

  <Reveal>
    <LatestNews />
  </Reveal>

  <Reveal>
    <NewsletterSection />
  </Reveal>

  <CTASection title={""} description={""} buttonText={""} href={""} />
</SiteShell>
  );
}
