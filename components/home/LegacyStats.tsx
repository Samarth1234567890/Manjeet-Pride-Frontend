"use client";

import { motion } from "framer-motion";
import {CountUp} from "@/components/site/CountUp";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

const stats = [
  {
    value: 24,
    suffix: "+",
    title: "Years of Legacy",
    description:
      "Building trust through premium developments and lasting relationships.",
  },
  {
    value: 31,
    suffix: "+",
    title: "Completed Projects",
    description:
      "Successfully delivered residential and commercial developments.",
  },
  {
    value: 500,
    suffix: "+",
    title: "Plots Sold",
    description:
      "Prime investment opportunities delivered across the city.",
  },
  {
    value: 4000,
    suffix: "+",
    title: "Residential Spaces Sold",
    description:
      "Luxury homes crafted for modern families.",
  },
  {
    value: 5000,
    suffix: "+",
    title: "Satisfied Buyers",
    description:
      "Thousands of homeowners continue to trust Manjeet Pride Group.",
  },
  {
    value: 25000,
    suffix: "+",
    title: "Happy Faces",
    description:
      "Creating communities where generations grow together.",
  },
];

export function LegacyStats() {
  return (
    <section className="relative overflow-hidden bg-[#0E2747] py-28 text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,165,76,0.15),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>

          <SectionTitle
            eyebrow="OUR LEGACY"
            title={
              <>
                Numbers That Reflect
                <br />
                Trust & Excellence
              </>
            }
            light
            align="center"
            className="mx-auto"
          />

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-white/70">

            Every milestone represents years of dedication,
            customer trust and an uncompromising commitment
            to delivering premium developments.

          </p>

        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {stats.map((stat, index) => (
          <Reveal key={stat.title} delay={index * 0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#C9A54C]/40 hover:bg-white/10 hover:shadow-[0_30px_80px_rgba(0,0,0,.35)]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#C9A54C]/10 blur-3xl transition-all duration-500 group-hover:bg-[#C9A54C]/20" />

              <div className="relative">

                <h3 className="font-serif text-5xl text-[#C9A54C]">

                  <CountUp
                    value={stat.value}
                    duration={2.5}
                  />

                  {stat.suffix}

                </h3>

                <h4 className="mt-6 text-xl font-semibold text-white">
                  {stat.title}
                </h4>

                <p className="mt-4 leading-7 text-white/70">
                  {stat.description}
                </p>

              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Bottom Highlight */}

      <Reveal delay={0.5}>
        <div className="mt-20 overflow-hidden rounded-[36px] border border-[#C9A54C]/25 bg-gradient-to-r from-[#12365E] via-[#0E2747] to-[#12365E] p-10 text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#C9A54C]">
            LIVE LIFE KING SIZE
          </p>

          <h3 className="mt-4 font-serif text-4xl text-white">
            Creating Landmark Developments
            <br />
            That Define Modern Living
          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/75">
            For over two decades, Manjeet Pride Group has delivered
            thoughtfully designed residential and commercial projects
            with uncompromising quality, premium architecture,
            strategic locations and exceptional customer satisfaction.
          </p>

        </div>
      </Reveal>

    </div>
  </section>
);
}
    