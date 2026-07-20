"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";

const stats = [
  {
    number: "24+",
    label: "Years of Legacy",
  },
  {
    number: "31+",
    label: "Completed Projects",
  },
  {
    number: "500+",
    label: "Plots Sold",
  },
  {
    number: "4,000+",
    label: "Residential Spaces Sold",
  },
];

export function Hero() {
  return (
    <section className="relative h-screen min-h-[920px] w-full overflow-hidden">

      {/* Background */}

      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/one-world-hero.jpg"
          alt="Manjeet Pride Group"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Luxury Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      {/* Gold Glow */}

      <div className="absolute -left-48 top-32 h-[500px] w-[500px] rounded-full bg-[#C9A54C]/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#1B4E8A]/20 blur-[140px]" />

      {/* Content */}

      <div className="relative z-20 flex h-full items-center">

        <div className="mx-auto flex w-full max-w-7xl px-6 lg:px-10">

          <div className="max-w-3xl">

            <Reveal>

              <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

                <span className="h-2 w-2 rounded-full bg-[#C9A54C]" />

                <span className="text-xs uppercase tracking-[0.45em] text-white/90">

                  Welcome To Manjeet Pride Group

                </span>

              </span>

            </Reveal>

            <Reveal delay={0.15}>

              <h1 className="mt-10 font-serif text-5xl font-light leading-[1.05] text-white md:text-7xl">

                Live Life
                <br />

                <span className="text-[#C9A54C]">

                  King Size.

                </span>

                <br />

                Luxury Living
                <br />

                Built To Last.

              </h1>

            </Reveal>

            <Reveal delay={0.25}>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">

                The Manjeet Pride Group has been transforming
                Chhatrapati Sambhajinagar through landmark
                residential, commercial and mixed-use
                developments for more than two decades.

                <br />
                <br />

                Every project is thoughtfully designed with
                luxurious architecture, spacious planning,
                superior construction quality, premium
                amenities and prime locations that create
                long-term value for families and investors.

              </p>

            </Reveal>

            <Reveal delay={0.35}>

              <div className="mt-12 flex flex-wrap gap-5">

                <MagneticButton
                  href="/projects"
                  variant="primary"
                >

                  Explore Projects

                </MagneticButton>

                <MagneticButton
                  href="/contact"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1B4E8A]"
                >

                  Book Site Visit

                </MagneticButton>

              </div>

            </Reveal>
                        <Reveal delay={0.45}>
              <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4">
                {stats.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
                  >
                    <h3 className="text-4xl font-light text-[#C9A54C]">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/70">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Floating Card */}

          <div className="ml-auto hidden items-end lg:flex">

            <Reveal delay={0.55}>

              <motion.div
                whileHover={{
                  y: -8,
                  rotate: -1,
                }}
                transition={{
                  duration: .4,
                }}
                className="w-[340px] rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-2xl"
              >

                <span className="text-xs uppercase tracking-[0.35em] text-[#C9A54C]">

                  Featured Project

                </span>

                <h3 className="mt-4 text-3xl font-serif font-light text-white">

                  One World

                </h3>

                <p className="mt-5 leading-8 text-white/75">

                  Experience premium residences crafted with
                  exceptional architecture, spacious layouts,
                  landscaped surroundings and world-class
                  amenities that redefine luxury living.

                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm uppercase tracking-[0.25em] text-white/60">

                    Luxury Residences

                  </span>

                  <ArrowDownRight className="h-7 w-7 text-[#C9A54C]" />

                </div>

              </motion.div>

            </Reveal>

          </div>

        </div>

      </div>

      {/* Bottom Scroll */}

      <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2">

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex flex-col items-center gap-3"
        >

          <span className="text-xs uppercase tracking-[0.4em] text-white/70">

            Scroll

          </span>

          <div className="flex h-14 w-8 justify-center rounded-full border border-white/40">

            <motion.div
              animate={{
                y: [6, 26, 6],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="mt-2 h-3 w-3 rounded-full bg-[#C9A54C]"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}