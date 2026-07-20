import type { Metadata } from "next";

import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

import CareersHero from "@/components/career/CareersHero";
import WhyJoinUs from "@/components/career/WhyJoinUs";
import CareerBenefits from "@/components/career/CareerBenefits";
import HiringProcess from "@/components/career/HiringProcess";
import CareerApplication from "@/components/career/CareerApplication";
import CareerCTA from "@/components/career/CareerCTA";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Join Manjeet Pride Group and build your career with a team creating landmark real estate developments.",
};

export default function CareerPage() {
  return (
    <SiteShell>

      {/* Hero */}
      <CareersHero />


      {/* Why Join Us */}
      <Reveal>
        <WhyJoinUs />
      </Reveal>


      {/* Benefits */}
      <Reveal delay={0.1}>
        <CareerBenefits />
      </Reveal>


      {/* Hiring Process */}
      <Reveal delay={0.2}>
        <HiringProcess />
      </Reveal>


      {/* Application Form */}
      <Reveal delay={0.3}>
        <CareerApplication />
      </Reveal>


      {/* CTA */}
      <Reveal delay={0.4}>
        <CareerCTA />
      </Reveal>


    </SiteShell>
  );
}