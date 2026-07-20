import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/site/CTASection";

import FeaturedNews from "@/components/media/FeaturedArticle";
import LatestNews from "@/components/media/LatestNews";
import NewsCategories from "@/components/media/MediaCategories";

export const metadata: Metadata = {
  title: "News",
  description:
    "Stay updated with the latest project launches, construction milestones, company announcements, awards, and media coverage from Manjeet Pride Group.",
};

export default function NewsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Latest News"
        title={
          <>
            Every milestone
            <br className="hidden sm:block" />
            tells a story.
          </>
        }
        image="/images/news/news-hero.jpg"
        description="Follow the latest updates from Manjeet Pride Group including project launches, construction progress, awards, events, and company announcements."
      />

      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <SectionTitle
              eyebrow="Featured News"
              title="Latest announcement."
            />
          </Reveal>

          <FeaturedNews />
        </div>
      </section>

      <Reveal>
        <LatestNews />
      </Reveal>

      <Reveal>
        <NewsCategories />
      </Reveal>

      <CTASection title={""} description={""} buttonText={""} href={""} />
    </SiteShell>
  );
}