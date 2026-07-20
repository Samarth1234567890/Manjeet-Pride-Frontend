import type { Metadata } from "next";

import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

import BlogHero from "@/components/blog/BlogHero";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogGrid from "@/components/blog/BlogGrid";
import NewsletterCTA from "@/components/blog/NewsletterCTA";

export const metadata: Metadata = {
  title: "Blogs | Manjeet Pride Group",
  description:
    "Read insights, updates, and latest articles from Manjeet Pride Group.",
};

export default function BlogsPage() {
  return (
    <SiteShell>
      <BlogHero />

      <Reveal>
        <FeaturedBlog />
      </Reveal>

      <Reveal delay={0.1}>
        <BlogCategories />
      </Reveal>

      <Reveal delay={0.2}>
        <BlogGrid />
      </Reveal>

      <Reveal delay={0.3}>
        <NewsletterCTA />
      </Reveal>

      <CTASection
        title="Stay Connected"
        description="Get the latest real estate updates and project news."
        buttonText="Contact Us"
        href="/contact"
      />
    </SiteShell>
  );
}