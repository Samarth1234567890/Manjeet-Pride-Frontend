import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

import ResourcesHero from "@/components/resource/ResourcesHero";
import ResourceCard from "@/components/resource/ResourceCard";
import ResourceProjects from "@/components/resource/ResourceProjects";
import DownloadSection from "@/components/resource/DownloadSection";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Download brochures, floor plans, master plans, legal documents, project specifications, and other resources from Manjeet Pride Group.",
};

export default function ResourcesPage() {
  return (
    <SiteShell>

      <PageHero
        eyebrow="Resources"
        title={
          <>
            Everything you
            <br className="hidden sm:block" />
            need in one place.
          </>
        }
        image="/images/resources/resources-hero.jpg"
        description="Access brochures, floor plans, legal approvals, project specifications, and important documents for all Manjeet Pride Group developments."
      />

      <ResourcesHero />

      <ResourceCard project={{
        title: "",
        image: "",
        description: "",
        brochure: ""
      }} index={0} />

      <ResourceProjects />

      <DownloadSection />

      <CTASection title={""} description={""} buttonText={""} href={""} />

    </SiteShell>
  );
}