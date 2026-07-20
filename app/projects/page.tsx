import type { Metadata } from "next";

import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/site/CTASection";

import ProjectHero from "@/components/project/ProjectHero";
import FeaturedProjects from "@/components/project/FeaturedProjects";
import ProjectCategories from "@/components/project/ProjectCategories";
import ProjectsGrid from "@/components/project/ProjectsGrid";
import ProjectStats from "@/components/project/ProjectStats";
import WhyChooseUs from "@/components/project/WhyChooseUs";
import ProjectLocation from "@/components/project/ProjectLocation";
import AwardsSection from "@/components/project/AwardsSection";
import Newsletter from "@/components/project/Newsletter";

const TypedProjectHero = ProjectHero as any;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore residential and commercial developments by Manjeet Pride Group across Pune.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <TypedProjectHero
        eyebrow="Our Projects"
        title={
          <>
            Spaces designed for
            <br className="hidden sm:block" />
            modern living.
          </>
        }
        image="/images/projects/projects-hero.jpg"
        description="Discover Manjeet Pride Group's portfolio of thoughtfully designed residential and commercial developments that combine quality construction, modern amenities, and strategic locations."
      />

      {/* Featured Projects */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <SectionTitle
              eyebrow="Featured Projects"
              title="Our Signature Developments"
              description="Explore our landmark residential and commercial projects crafted with quality, innovation, and modern architecture."
              align="center"
            />
          </Reveal>

          <div id="ongoing" className="mt-16">
  <FeaturedProjects />
</div>
        </div>
      </section>

      {/* Categories */}
      <div id="completed">
  <Reveal>
    <ProjectCategories />
  </Reveal>
</div>

      {/* Projects Grid */}
      <div id="upcoming">
  <Reveal>
    <ProjectsGrid />
  </Reveal>
</div>

      {/* Statistics */}
      <Reveal>
        <ProjectStats />
      </Reveal>

      {/* Why Choose Us */}
      <div id="amenities">
  <Reveal>
    <WhyChooseUs />
  </Reveal>
</div>

      {/* Locations */}
      <Reveal>
        <ProjectLocation />
      </Reveal>

      {/* Awards */}
      <Reveal>
        <AwardsSection />
      </Reveal>

      {/* Newsletter */}
      <Reveal>
        <Newsletter />
      </Reveal>

      {/* CTA */}
      <CTASection title={""} description={""} buttonText={""} href={""} />
    </SiteShell>
  );
}