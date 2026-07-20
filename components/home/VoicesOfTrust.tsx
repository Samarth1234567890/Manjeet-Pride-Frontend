"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Happy Homeowner",
    project: "One World",
    thumbnail: "/testimonial.png",
    video: "https://www.youtube.com/embed/",
  },
  {
    id: 2,
    name: "Satisfied Family",
    project: "Dream World",
    thumbnail: "/testimonial1.png",
    video: "https://www.youtube.com/embed/",
  },
  {
    id: 3,
    name: "Premium Living",
    project: "Manjeet Pride Landmark",
    thumbnail: "/testimonial2.png",
    video: "https://www.youtube.com/embed/",
  },
  {
    id: 4,
    name: "Happy Investor",
    project: "My World & VXL Residences",
    thumbnail: "/testimonial3.png",
    video: "https://www.youtube.com/embed/",
  },
];

export function VoicesOfTrust() {
  return (
    <section className="relative overflow-hidden bg-[#071C34] py-32">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#C9A54C]/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#1B4E8A]/40 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>

          <SectionTitle
            eyebrow="VOICES OF TRUST"
            title={
              <>
                Stories From Families
                <br />
                Who Chose Manjeet Pride
              </>
            }
            light
            align="center"
            className="mx-auto"
          />

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-white/70">

            Every home has a story.
            Discover how thousands of families have experienced
            premium living with Manjeet Pride Group.

          </p>

        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                      {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <motion.a
                href={item.video}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                {/* Thumbnail */}

                <div className="relative overflow-hidden">

                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    width={700}
                    height={900}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Play Button */}

                  <div className="absolute inset-0 flex items-center justify-center">

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C9A54C] shadow-2xl transition-all duration-300 group-hover:scale-110"
                    >
                      <Play
                        className="ml-1 h-8 w-8 fill-[#163d6c] text-[#163d6c]"
                      />
                    </motion.div>

                  </div>

                  {/* Quote */}

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">

                    <Quote className="h-6 w-6 text-[#C9A54C]" />

                  </div>

                  {/* Bottom Content */}

                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <p className="text-xs uppercase tracking-[0.28em] text-[#C9A54C]">

                      {item.project}

                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-white">

                      {item.name}

                    </h3>

                    <p className="mt-3 text-sm text-white/70">

                      Watch their experience with
                      Manjeet Pride Group.

                    </p>

                  </div>

                </div>

              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* Bottom Banner */}

        <Reveal delay={0.4}>

          <div className="mt-20 rounded-[34px] border border-[#C9A54C]/20 bg-gradient-to-r from-[#0B223D] via-[#12365E] to-[#0B223D] p-12 text-center">

            <p className="text-xs uppercase tracking-[0.35em] text-[#C9A54C]">

              TRUST • QUALITY • LEGACY

            </p>

            <h3 className="mt-5 font-serif text-4xl text-white">

              More Than 5,000 Families
              <br />
              Proudly Call Us Home

            </h3>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/70">

              Every testimonial reflects our commitment to
              premium construction, timely delivery,
              transparent processes and a lifestyle that truly
              defines luxury living.

            </p>

          </div>

        </Reveal>

      </div>

    </section>
  );
}
    