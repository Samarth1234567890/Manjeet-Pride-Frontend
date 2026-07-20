"use client";

import { motion } from "framer-motion";
import {
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";

interface ResourceCardProps {
  project: {
    title: string;
    image: string;
    description: string;
    brochure: string;
  };
  index: number;
}

export default function ResourceCard({
  project,
  index,
}: ResourceCardProps) {

  return (
    <motion.article
      initial={{
        opacity:0,
        y:50
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      viewport={{
        once:true
      }}
      transition={{
        duration:0.6,
        delay:index * 0.15
      }}
      whileHover={{
        y:-10
      }}
      className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100"
    >

      {/* Image */}
      <div className="relative h-80 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />


        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/80 via-transparent to-transparent" />


        {/* Project Badge */}
        <div className="absolute bottom-6 left-6">

          <div className="flex items-center gap-2 rounded-full bg-[#C9A14A] px-5 py-2 text-sm font-semibold text-[#071A2E]">

            <FileText size={16}/>
            Project Resource

          </div>

        </div>


      </div>




      {/* Content */}
      <div className="p-8">


        <h3 className="text-3xl font-semibold text-[#071A2E] transition group-hover:text-[#C9A14A]">
          {project.title}
        </h3>


        <div className="my-5 h-1 w-16 rounded-full bg-[#C9A14A]" />


        <p className="leading-7 text-gray-600">
          {project.description}
        </p>



        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">


          <a
            href={project.brochure}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#071A2E] px-6 py-3 font-semibold text-white transition hover:bg-[#C9A14A] hover:text-[#071A2E]"
          >

            <Download size={18}/>
            Download Brochure

          </a>



          <button
            className="inline-flex items-center gap-2 rounded-full border border-[#071A2E] px-6 py-3 font-semibold text-[#071A2E] transition hover:bg-[#071A2E] hover:text-white"
          >

            View Details

            <ArrowRight size={18}/>

          </button>


        </div>


      </div>


    </motion.article>
  );
}