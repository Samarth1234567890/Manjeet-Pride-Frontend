import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectLocation from "@/components/project/ProjectLocation";

const projects = [
  {
    slug: "manjeet-pride",
    name: "Manjeet Pride",
    location: "Pune, Maharashtra",
    description:
      "A premium residential development by Manjeet Pride Group designed with modern architecture, comfort and quality living.",
    image: "/images/projects/manjeet-pride.jpg",

    amenities: [
      "Club House",
      "Swimming Pool",
      "Gymnasium",
      "Garden Area",
      "Children Play Area",
      "24x7 Security",
    ],
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  return {
    title: project?.name || "Project",
    description: project?.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>

      {/* Hero */}
      <ProjectHero
  eyebrow="Manjeet Pride"
  title={project.name}
  image={project.image}
  description={project.description}
/>


      {/* Overview */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-semibold">
            Project Overview
          </h2>

          <p className="mt-5 max-w-3xl text-gray-600">
            Manjeet Pride offers thoughtfully designed
            residences with modern facilities, excellent
            connectivity and premium lifestyle features.
          </p>

        </div>
      </section>


      {/* Completed */}
      <section
        id="completed"
        className="bg-gray-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-semibold">
            Completed Projects
          </h2>

          <p className="mt-4 text-gray-600">
            Successfully delivered developments by
            Manjeet Pride Group.
          </p>

        </div>
      </section>


      {/* Upcoming */}
      <section
        id="upcoming"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-semibold">
            Upcoming Projects
          </h2>

          <p className="mt-4 text-gray-600">
            Future developments planned with modern
            architecture and premium amenities.
          </p>

        </div>
      </section>


      {/* Amenities */}
      <Reveal>
        <section
          id="amenities"
          className="bg-gray-50 px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">

            <h2 className="text-4xl font-semibold">
              Amenities
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {project.amenities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border p-6"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>
        </section>
      </Reveal>


      {/* Location */}
      <Reveal>
        <ProjectLocation />
      </Reveal>


      <CTASection
        title="Book A Site Visit"
        description="Experience Manjeet Pride personally."
        buttonText="Contact Us"
        href="/contact"
      />

    </SiteShell>
  );
}