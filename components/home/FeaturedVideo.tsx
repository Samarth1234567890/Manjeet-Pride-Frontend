"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Award, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export function FeaturedVideo() {
  return (
    <section className="relative overflow-hidden py-32 bg-white">

      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2] to-white" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>

          <SectionTitle
            eyebrow="FEATURED VIDEO"
            title={
              <>
                CMIA Awards 2025
              </>
            }
            align="center"
            className="mx-auto"
          />

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-neutral-600">

            Celebrating another milestone of excellence.
            Watch Manjeet Pride Group being recognised
            for its commitment to premium developments,
            quality construction and customer trust.

          </p>

        </Reveal>

        <Reveal delay={0.15}>

          <motion.div

            whileHover={{ scale: 1.01 }}

            transition={{ duration: .4 }}

            className="group relative mt-16 overflow-hidden rounded-[34px] shadow-[0_35px_80px_rgba(0,0,0,.18)]"

          >

            <Image

              src="/images/video/cmia-awards.jpg"

              alt="CMIA Awards"

              width={1600}

              height={900}

              className="aspect-video w-full object-cover duration-700 group-hover:scale-105"

            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <Link

              href="https://www.youtube.com/@manjeetpride"

              target="_blank"

              className="absolute inset-0 flex items-center justify-center"

            >

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1B4E8A]/90 backdrop-blur-lg transition duration-300 group-hover:scale-110">

                <Play
                  fill="white"
                  className="ml-1 h-9 w-9 text-white"
                />

              </div>

            </Link>
                        {/* Bottom Information Card */}

            <div className="absolute bottom-0 left-0 right-0">

              <div className="grid gap-6 bg-gradient-to-r from-[#0E2747]/95 to-[#1B4E8A]/90 px-8 py-8 backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center">

                <div className="flex items-start gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A54C]">

                    <Award className="h-8 w-8 text-white" />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.35em] text-[#C9A54C]">

                      Award Recognition

                    </p>

                    <h3 className="mt-2 text-2xl font-serif text-white">

                      CMIA Awards 2025

                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-white/75">

                      A proud recognition of Manjeet Pride Group's
                      continued excellence in delivering premium
                      residential developments, customer trust,
                      construction quality and innovation across
                      Chhatrapati Sambhajinagar.

                    </p>

                  </div>

                </div>

                <div className="flex justify-start md:justify-end">

                  <Link
                    href="https://www.youtube.com/@manjeetpride"
                    target="_blank"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#C9A54C] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B89134]"
                  >

                    Watch On YouTube

                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                  </Link>

                </div>

              </div>

            </div>

          </motion.div>

        </Reveal>

      </div>

    </section>
  );
}