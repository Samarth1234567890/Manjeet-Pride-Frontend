"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Building2, ShieldCheck, Sparkles } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

const features = [
  {
    icon: Award,
    title: "Premium Construction",
    description:
      "Every development is built using superior construction quality, meticulous workmanship and premium materials.",
  },
  {
    icon: Building2,
    title: "Prime Locations",
    description:
      "Strategically selected locations offering excellent connectivity, convenience and long-term investment value.",
  },
  {
    icon: Sparkles,
    title: "Luxury Living",
    description:
      "Thoughtfully designed homes with spacious layouts, elegant architecture and modern amenities.",
  },
  {
    icon: ShieldCheck,
    title: "Built On Trust",
    description:
      "Thousands of families have trusted Manjeet Pride Group to build homes that stand the test of time.",
  },
];

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F2] py-28">

      {/* Decorative Background */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#1B4E8A]/5 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-[#C9A54C]/10 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">

        {/* LEFT IMAGE */}

        <Reveal>

          <div className="relative">

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: .4,
              }}
              className="overflow-hidden rounded-[36px]"
            >

              <Image
                src="/images/about/one-world.jpg"
                alt="Manjeet Pride Group"
                width={900}
                height={1100}
                className="h-[720px] w-full object-cover"
              />

            </motion.div>

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-8 bottom-10 rounded-3xl border border-white/40 bg-white/90 p-8 shadow-2xl backdrop-blur-xl"
            >

              <p className="text-5xl font-light text-[#1B4E8A]">

                24+

              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-600">

                Years Of Legacy

              </p>

            </motion.div>

          </div>

        </Reveal>

        {/* RIGHT CONTENT */}

        <div>

          <Reveal>

            <SectionTitle
              eyebrow="WHO WE ARE"
              title={
                <>
                  Creating More Than Homes.
                  <br />
                  Building Communities That Last.
                </>
              }
            />

          </Reveal>

          <Reveal delay={0.15}>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              The Manjeet Pride Group is one of
              Chhatrapati Sambhajinagar's most trusted real
              estate developers, known for delivering premium
              residential, commercial and integrated
              developments with uncompromising quality.

              <br />
              <br />

              As pioneers of the philosophy
              <strong className="text-[#1B4E8A]">
                {" "}
                "Live Life King Size"
              </strong>
              , we believe a home should offer more than
              four walls.

              Every project is thoughtfully planned to
              combine luxurious architecture, spacious
              layouts, modern amenities and prime
              locations that enrich everyday living.

              <br />
              <br />

              With more than one million square feet of
              successful development and thousands of
              satisfied homeowners, Manjeet Pride Group
              continues to create landmarks built on
              trust, quality and innovation.

            </p>

          </Reveal>

          <Reveal delay={0.25}>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#1B4E8A]/20 hover:shadow-2xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B4E8A]/10 transition-all duration-300 group-hover:bg-[#1B4E8A]">
                      <Icon className="h-7 w-7 text-[#1B4E8A] transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-14 flex flex-wrap gap-4">
              <a
                href="/about"
                className="inline-flex items-center rounded-full bg-[#1B4E8A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#163d6c] hover:shadow-xl"
              >
                Discover Our Story
              </a>

              <a
                href="/projects"
                className="inline-flex items-center rounded-full border border-[#C9A54C] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A54C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9A54C] hover:text-white"
              >
                Explore Projects
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}