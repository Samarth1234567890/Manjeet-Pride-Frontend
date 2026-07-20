import type { Metadata } from "next";

import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

import AwardCard from "@/components/award/AwardCard";
import { awards } from "@/components/data/awards";


export const metadata: Metadata = {
  title: "Awards & Recognition | Manjeet Pride",
  description:
    "Explore awards and recognitions received by Manjeet Pride for excellence in real estate.",
};


export default function AwardsPage() {
  return (
    <SiteShell>

      <PageHero
              title="Awards & Recognition"
              description="Celebrating our achievements, milestones, and commitment towards excellence in real estate." image={"/images/awards/hero.jpg"}       />


      <section className="py-20 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-800">
              Our Achievements
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our awards reflect our dedication towards quality,
              innovation, and creating exceptional living spaces.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">

            {awards.map((award: { id: any; title: any; organization: any; year: any; image: any; description: any; }) => (
              <AwardCard
                key={award.id}
                title={award.title}
                organization={award.organization}
                year={award.year}
                image={award.image}
                description={award.description}
              />
            ))}

          </div>

        </div>
      </section>


      <CTASection title={""} description={""} buttonText={""} href={""} />

    </SiteShell>
  );
}