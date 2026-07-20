"use client";

import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[#071A2E]" />


      {/* Decorative Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0B5FA5]/30 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C9A14A]/20 blur-3xl" />



      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-12">

        <motion.div
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
            duration:0.8
          }}
        >


          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A14A]/40 bg-white/10 backdrop-blur-md">

            <Building2
              className="text-[#C9A14A]"
              size={40}
            />

          </div>




          <p className="mt-8 uppercase tracking-[0.35em] text-[#C9A14A]">
            Project Information
          </p>



          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />




          <h2 className="text-4xl font-light text-white md:text-6xl">

            Download Complete
            <span className="block font-semibold text-[#C9A14A]">
              Project Details
            </span>

          </h2>




          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">

            Get detailed brochures, floor plans, specifications,
            and complete project information of Manjeet Pride Group
            developments.

          </p>





          {/* Resource Boxes */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">


            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">

              <FileText
                className="mx-auto text-[#C9A14A]"
                size={35}
              />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Brochures
              </h3>

              <p className="mt-2 text-gray-300">
                Detailed project brochures
              </p>

            </div>




            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">

              <Building2
                className="mx-auto text-[#C9A14A]"
                size={35}
              />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Floor Plans
              </h3>

              <p className="mt-2 text-gray-300">
                Explore layouts and designs
              </p>

            </div>





            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">

              <Download
                className="mx-auto text-[#C9A14A]"
                size={35}
              />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Specifications
              </h3>

              <p className="mt-2 text-gray-300">
                Complete project details
              </p>

            </div>


          </div>





          {/* CTA */}
          <button
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#C9A14A] px-10 py-4 font-semibold text-[#071A2E] transition hover:scale-105"
          >

            Download Resources

            <ArrowRight size={18}/>

          </button>



        </motion.div>

      </div>


    </section>
  );
}