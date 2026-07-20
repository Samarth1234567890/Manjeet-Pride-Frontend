import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

import AboutHero from "@/components/about/AboutHero";
import CompanyProfile from "@/components/about/CompanyProfile";
import GroupCompanies from "@/components/about/GroupCompanies";
import DirectorsHero from "@/components/about/DirectorsHero";
import DirectorsIntro from "@/components/about/DirectorsIntro";
import DirectorsGrid from "@/components/about/DirectorsGrid";
import DirectorsInterviews from "@/components/about/DirectorsInterviews";
import TeamHero from "@/components/about/TeamHero";
import LeadershipGrid from "@/components/about/LeadershipGrid";
import TeamGallery from "@/components/about/TeamGallery";
import TestimonialsHero from "@/components/about/TestimonialsHero";
import TestimonialsGallery from "@/components/about/TestimonialsGallery";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Manjeet Pride Group, our journey, leadership, values, team, and commitment to delivering quality real estate developments.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <div id="about">
  <AboutHero />
</div>

      <Reveal>
        <CompanyProfile />
      </Reveal>

      <Reveal delay={0.1}>
        <GroupCompanies />
      </Reveal>

      <div id="directors">
  <Reveal delay={0.2}>
    <DirectorsHero />
  </Reveal>
</div>

      <Reveal delay={0.3}>
        <DirectorsIntro />
      </Reveal>

      <Reveal delay={0.4}>
        <DirectorsGrid />
      </Reveal>

      <Reveal delay={0.5}>
        <DirectorsInterviews />
      </Reveal>

      <div id="team">
  <Reveal delay={0.6}>
    <TeamHero />
  </Reveal>
</div>

      <Reveal delay={0.7}>
        <LeadershipGrid />
      </Reveal>

      <Reveal delay={0.8}>
        <TeamGallery />
      </Reveal>
<div id="testimonials">
  <Reveal delay={0.9}>
    <TestimonialsHero />
  </Reveal>
</div>

      <Reveal delay={1}>
        <TestimonialsGallery />
      </Reveal>

      <CTASection title={""} description={""} buttonText={""} href={""} />
    </SiteShell>
  );
}