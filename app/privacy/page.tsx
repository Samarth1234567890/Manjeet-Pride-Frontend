import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

export const metadata: Metadata = {
  title: "Privacy Policy | Manjeet Pride",
  description: "Privacy Policy for Manjeet Pride Group.",
};

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        title="Privacy Policy"
        description="Your privacy matters to us. This page explains how Manjeet Pride Group collects, uses, stores and protects your information." image={""}      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-neutral max-w-none">
          <h2>Introduction</h2>
          <p>
            Manjeet Pride Group is committed to protecting your privacy. This
            Privacy Policy explains how information submitted through our
            website, enquiry forms, contact forms and other communication
            channels may be collected and used.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Project enquiry details</li>
            <li>Any information voluntarily shared with us</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>Respond to enquiries.</li>
            <li>Provide project information.</li>
            <li>Schedule site visits.</li>
            <li>Improve our website and customer experience.</li>
            <li>Send relevant updates when permitted by law.</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies and similar technologies to improve
            performance, understand visitor behaviour and enhance user
            experience.
          </p>

          <h2>Data Security</h2>
          <p>
            We use reasonable administrative and technical safeguards to help
            protect the information you provide. No internet transmission can
            be guaranteed to be completely secure.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to external websites. We are not
            responsible for their privacy practices or content.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may contact us to request correction or deletion of personal
            information where applicable under law.
          </p>

          <h2>Policy Updates</h2>
          <p>
            This Privacy Policy may be updated from time to time. Changes become
            effective once published on this website.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact
            Manjeet Pride Group using the contact details published on the
            website.
          </p>
        </div>
      </section>

      <CTASection title={""} description={""} buttonText={""} href={""} />
    </SiteShell>
  );
}
