import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/site/CTASection";

import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/site/OfficeLocations";
import GoogleMap from "@/components/contact/ContactMap";
import BookSiteVisit from "@/components/contact/BookSiteVisit";
import FAQSection from "@/components/contact/FAQSection";
import ContactCards from "@/components/contact/ContactCards";
import SocialConnect from "@/components/contact/SocialConnect";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Manjeet Pride Group for project enquiries, site visits, bookings, customer support, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let's build your
            <br className="hidden sm:block" />
            future together.
          </>
        }
        image="/images/contact/contact-hero.jpg"
        description="Whether you're looking for your dream home, want to schedule a site visit, or have questions about our projects, our team is here to help."
      />

      {/* Contact Information */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <SectionTitle
              eyebrow="Get In Touch"
              title="We're just a call or message away."
            />
          </Reveal>

          <div className="mt-16">
            <ContactCards />
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <ContactInfo />
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <Reveal>
        <OfficeLocations />
      </Reveal>

      {/* Google Map */}
      <Reveal>
        <GoogleMap />
      </Reveal>

      {/* Book Site Visit */}
      <Reveal>
        <BookSiteVisit />
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <FAQSection />
      </Reveal>

      {/* Social Media */}
      <Reveal>
        <SocialConnect />
      </Reveal>

      <CTASection title={""} description={""} buttonText={""} href={""} />
    </SiteShell>
  );
}