"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

const deliveredProjects = [
  {
    name: "Phoenix",
    logo: "/images/projects/phoenix-logo.png",
  },
  {
    name: "My World",
    logo: "/images/projects/my-world-logo.png",
  },
  {
    name: "24 Carat",
    logo: "/images/projects/24carat-logo.png",
  },
  {
    name: "My Home",
    logo: "/images/projects/my-home-logo.png",
  },
  {
    name: "VXL Residences",
    logo: "/images/projects/vxl-logo.png",
  },
  {
    name: "Landmark",
    logo: "/images/projects/landmark-logo.png",
  },
];

const upcomingProjects = [
  {
    name: "One World",
    logo: "/images/projects/one-world-logo.png",
  },
  {
    name: "Dream World",
    logo: "/images/projects/dream-world-logo.png",
  },
];

export function CommitmentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-[#1B4E8A]/5 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-[#C9A54C]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>

          <SectionTitle
            eyebrow="OUR LEGACY"
            title={
              <>
                What We Committed,
                <br />
                We Delivered.
              </>
            }
            align="center"
            className="mx-auto"
          />

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-neutral-600">

            Every project delivered by Manjeet Pride Group
            reflects quality construction, luxurious living,
            timely possession and customer satisfaction.

          </p>

        </Reveal>

        <div className="mt-20">

          <h3 className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A54C]">

            Successfully Delivered Projects

          </h3>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {deliveredProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="group flex h-52 items-center justify-center rounded-[30px] border border-[#1B4E8A]/10 bg-white p-10 shadow-[0_15px_60px_rgba(0,0,0,0.06)] transition-all hover:border-[#C9A54C]/40 hover:shadow-[0_25px_70px_rgba(27,78,138,.15)]"
              >
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={220}
                  height={120}
                  className="max-h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <div className="my-24 h-px w-full bg-gradient-to-r from-transparent via-[#C9A54C] to-transparent" />
        </Reveal>

        <Reveal delay={0.45}>
          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A54C]">
              NOW BRINGING THE SAME EXCELLENCE TO...
            </p>

            <h3 className="mt-4 font-serif text-5xl text-[#163d6c]">
              Our Signature Developments
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Continuing our legacy with landmark developments that combine
              timeless architecture, premium amenities and exceptional
              investment opportunities.
            </p>

          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {upcomingProjects.map((project, index) => (
            <Reveal key={project.name} delay={0.55 + index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="group rounded-[36px] border border-[#1B4E8A]/10 bg-gradient-to-br from-[#163d6c] via-[#1B4E8A] to-[#245189] p-14 text-center shadow-[0_30px_80px_rgba(27,78,138,.22)]"
              >
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={260}
                  height={120}
                  className="mx-auto h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />

                <h4 className="mt-10 font-serif text-3xl text-white">
                  {project.name}
                </h4>

                <p className="mt-5 text-white/75 leading-8">
                  Discover a new benchmark of luxury, comfort and thoughtfully
                  designed living spaces crafted by Manjeet Pride Group.
                </p>

              </motion.div>
            </Reveal>
          ))}

        </div>

      </div>

      </div>
    </section>
  );
}

        