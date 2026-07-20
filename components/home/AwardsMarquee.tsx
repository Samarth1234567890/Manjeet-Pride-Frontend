"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

const awards = [
  {
    id: 1,
    image: "/images/awards/award-1.png",
    title: "Excellence Award",
  },
  {
    id: 2,
    image: "/images/awards/award-2.png",
    title: "Quality Award",
  },
  {
    id: 3,
    image: "/images/awards/award-3.png",
    title: "Customer Choice",
  },
  {
    id: 4,
    image: "/images/awards/award-4.png",
    title: "Real Estate Award",
  },
  {
    id: 5,
    image: "/images/awards/award-5.png",
    title: "Construction Excellence",
  },
];

const marquee = [...awards, ...awards];

export function AwardsMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F6] py-32">

      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#163d6c]/5 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#C9A54C]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>

          <SectionTitle
            eyebrow="OUR ACHIEVEMENTS"
            title={
              <>
                Awards &
                <br />
                Recognition
              </>
            }
            align="center"
            className="mx-auto"
          />

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-neutral-600">

            Every recognition reflects our unwavering commitment
            towards premium construction, trust, innovation and
            customer satisfaction.

          </p>

        </Reveal>

        <div className="relative mt-20 overflow-hidden">          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 28,
              ease: "linear",
            }}
            className="flex w-max gap-8"
          >
            {marquee.map((award, index) => (
              <motion.div
                key={`${award.id}-${index}`}
                whileHover={{ y: -10, scale: 1.04 }}
                transition={{ duration: 0.35 }}
                className="flex h-72 w-72 shrink-0 flex-col items-center justify-center rounded-[34px] border border-[#163d6c]/10 bg-white p-10 shadow-[0_18px_60px_rgba(0,0,0,.06)]"
              >
                <Image
                  src={award.image}
                  alt={award.title}
                  width={180}
                  height={180}
                  className="h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <h3 className="mt-8 text-center font-serif text-2xl text-[#163d6c]">
                  {award.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

        </div>

        <Reveal delay={0.25}>

          <div className="mt-24 rounded-[40px] bg-gradient-to-r from-[#163d6c] via-[#1B4E8A] to-[#163d6c] px-10 py-16 shadow-[0_30px_80px_rgba(22,61,108,.25)]">

            <div className="grid gap-12 text-center md:grid-cols-4">

              <div>
                <h2 className="font-serif text-5xl text-[#C9A54C]">
                  24+
                </h2>
                <p className="mt-3 text-white/75">
                  Years of Legacy
                </p>
              </div>

              <div>
                <h2 className="font-serif text-5xl text-[#C9A54C]">
                  31+
                </h2>
                <p className="mt-3 text-white/75">
                  Completed Projects
                </p>
              </div>

              <div>
                <h2 className="font-serif text-5xl text-[#C9A54C]">
                  5,000+
                </h2>
                <p className="mt-3 text-white/75">
                  Satisfied Buyers
                </p>
              </div>

              <div>
                <h2 className="font-serif text-5xl text-[#C9A54C]">
                  25,000+
                </h2>
                <p className="mt-3 text-white/75">
                  Happy Faces
                </p>
              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}