"use client";

import { motion } from "framer-motion";
import ResourceCard from "@/components/resource/ResourceCard";

const projects = [
  {
    title: "One World",
    image: "/images/resources/one-world.jpg",
    description:
      "One World by Manjeet Pride Group is a premium integrated township designed with modern amenities, sustainable living, and a vibrant community lifestyle.",
    brochure: "/brochures/one-world.pdf",
  },
  {
    title: "Dream World",
    image: "/images/resources/dream-world.jpg",
    description:
      "Dream World offers thoughtfully designed homes with world-class amenities, excellent connectivity, and a luxurious living experience.",
    brochure: "/brochures/dream-world.pdf",
  },
];

export default function ResourceProjects() {
  return (
    <section
      id="projects"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{
            opacity:0,
            y:40
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:0.7
          }}
          className="mb-16 text-center"
        >

          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Project Library
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Explore Our
            <span className="block font-semibold">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Access detailed brochures and information about
            Manjeet Pride Group's premium developments.
          </p>

        </motion.div>




        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2">

          {projects.map((project,index)=>(
            <ResourceCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}

        </div>


      </div>
    </section>
  );
}