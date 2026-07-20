import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

export const metadata: Metadata = {
  title: "Terms & Conditions | Manjeet Pride",
  description: "Terms and Conditions for Manjeet Pride Group website.",
};

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero title="Terms & Conditions" description="Please read these terms carefully before using the Manjeet Pride Group website." image={""} />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-neutral max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>By using this website you agree to these Terms & Conditions.</p>
          <h2>Website Use</h2>
          <p>This website provides information about Manjeet Pride Group and its projects. Use it only for lawful purposes.</p>
          <h2>Project Information</h2>
          <p>Project details, pricing, specifications and availability may change without notice.</p>
          <h2>Intellectual Property</h2>
          <p>All website content is owned by or licensed to Manjeet Pride Group.</p>
          <h2>User Responsibilities</h2>
          <p>Do not misuse the website or attempt unauthorized access.</p>
          <h2>Third-Party Links</h2>
          <p>We are not responsible for external websites linked from this site.</p>
          <h2>Limitation of Liability</h2>
          <p>We are not liable for indirect losses arising from website use.</p>
          <h2>Changes</h2>
          <p>These terms may be updated from time to time.</p>
          <h2>Governing Law</h2>
          <p>These Terms are governed by the laws of India.</p>
          <h2>Contact</h2>
          <p>Please use the contact details published on the Manjeet Pride Group website.</p>
        </div>
      </section>
      <CTASection title={""} description={""} buttonText={""} href={""} />
    </SiteShell>
  );
}
