"use client";

import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function BookSiteVisit() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] bg-[#163d6c] px-8 py-16 text-white shadow-2xl lg:px-16 lg:py-20"
        >

          {/* Background Glow */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C9A54C]/20 blur-[120px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Left */}

            <div>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-[#C9A54C]">
                Book a Site Visit
              </span>

              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                Experience our projects before making your decision.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Schedule a guided site visit with our experts. Explore
                project amenities, sample apartments, master plans,
                and financing options in person.
              </p>

              <ul className="mt-10 space-y-4 text-white/80">

                <li>✓ Guided project tour</li>

                <li>✓ Meet our sales consultants</li>

                <li>✓ Home loan assistance</li>

                <li>✓ Exclusive launch offers</li>

              </ul>

            </div>

            {/* Right */}

            <div className="rounded-[32px] bg-white p-8 text-[#163d6c] shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#163d6c]/10">

                <CalendarDays size={30} />

              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Schedule Today
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Choose a convenient date and our relationship manager
                will contact you to confirm your visit.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C9A54C] px-8 py-4 font-medium text-[#163d6c] transition hover:bg-[#163d6c] hover:text-white"
              >
                Book Now

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}