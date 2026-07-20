import { SiteShell } from "@/components/site/SiteShell";

export default function PhotosPage() {
  return (
    <SiteShell>
      <section className="min-h-screen py-32 text-center">
        <h1 className="text-5xl font-bold text-[#071A2E]">
          Gallery Photos
        </h1>

        <p className="mt-5 text-gray-600">
          Explore project photos and memorable moments.
        </p>
      </section>
    </SiteShell>
  );
}