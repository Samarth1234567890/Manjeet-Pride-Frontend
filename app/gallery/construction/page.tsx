import { SiteShell } from "@/components/site/SiteShell";

export default function ConstructionPage() {
  return (
    <SiteShell>
      <section className="min-h-screen py-32 text-center">
        <h1 className="text-5xl font-bold text-[#071A2E]">
          Construction Updates
        </h1>

        <p className="mt-5 text-gray-600">
          Track construction progress of our projects.
        </p>
      </section>
    </SiteShell>
  );
}