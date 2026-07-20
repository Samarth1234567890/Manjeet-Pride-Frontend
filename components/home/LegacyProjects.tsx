"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const deliveredProjects = [
  {
    name: "Phoenix",
    logo: "/Phonix-logo.jpg",
  },
  {
    name: "MW",
    logo: "/MW.jpg",
  },
  {
    name: "24",
    logo: "/24.jpg",
  },
  {
    name: "MH",
    logo: "/MH.jpg",
  },
  {
    name: "VXL",
    logo: "/VXL.jpg",
  },
  {
    name: "Landmark",
    logo: "/Landmark.jpg",
  },
];

const upcomingProjects = [
  {
    name: "OW",
    logo: "/OW.jpg",
  },
  {
    name: "DW",
    logo: "/DW.jpg",
  },
];

export default function LegacyProjects() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#B58A55]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D7C2A2]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex items-center rounded-full border border-[#C9A66B]/40 bg-[#F9F6EF] px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#B58A55]">
            Our Legacy
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#173042]">
            WHAT WE COMMITTED,
            <br />
            WE DELIVERED!
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-[#B58A55]" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every completed development reflects our commitment to
            quality construction, thoughtful planning and customer
            satisfaction. These projects stand as a testament to the
            trust placed in Manjeet Pride Group.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {deliveredProjects.map((project, index) => (

            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group"
            >

              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#B58A55]/40 hover:shadow-2xl">

                <div className="flex h-28 items-center justify-center">

                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={180}
                    height={90}
                    className="max-h-20 w-auto object-contain transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="mt-6 text-center">

                  <h3 className="text-lg font-semibold text-[#173042]">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Successfully Delivered
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
                <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#C9A66B]/40 bg-[#F9F6EF] px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#B58A55]">
            Coming Soon
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-[#173042]">
            Now Bringing The Same Excellence To...
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#B58A55]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Building on our legacy of trust and excellence, we are now
            introducing our next landmark developments designed to
            redefine modern living.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">

          {upcomingProjects.map((project, index) => (

            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="group rounded-3xl border border-[#B58A55]/20 bg-gradient-to-br from-[#FFFDF9] to-[#F8F4EC] p-10 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-36 items-center justify-center">

                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={220}
                    height={110}
                    className="max-h-24 w-auto object-contain transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="mt-8 text-center">

                  <h3 className="text-2xl font-bold text-[#173042]">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-[#B58A55] font-medium">
                    Upcoming Development
                  </p>

                </div>

              </div>
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}