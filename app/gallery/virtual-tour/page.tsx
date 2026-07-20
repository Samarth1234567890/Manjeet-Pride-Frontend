import { SiteShell } from "@/components/site/SiteShell";

export default function VirtualTourPage() {
  return (
    <SiteShell>
      <section className="min-h-screen py-32 text-center">
        <h1 className="text-5xl font-bold text-[#071A2E]">
          Virtual Tour
        </h1>

        <p className="mt-5 text-gray-600">
          Experience our projects through virtual tours.
        </p>
      </section>
    </SiteShell>
  );
}