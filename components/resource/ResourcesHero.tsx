"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  ArrowDown,
  FolderOpen,
} from "lucide-react";

export default function ResourcesHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/resources/resources-hero.jpg')",
        }}
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/95 via-[#071A2E]/80 to-black/70" />


      {/* Decorative Glow */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#0B5FA5]/20 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#C9A14A]/20 blur-3xl" />


      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">


        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A14A]/40 bg-white/10 backdrop-blur-md"
        >
          <FolderOpen className="h-10 w-10 text-[#C9A14A]" />
        </motion.div>



        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex justify-center items-center gap-2 text-sm text-gray-300"
        >

          <Link
            href="/"
            className="transition hover:text-[#C9A14A]"
          >
            Home
          </Link>

          <ChevronRight size={16}/>

          <span className="text-[#C9A14A]">
            Resources
          </span>

        </motion.div>




        {/* Gold Line */}
        <motion.div
          initial={{ width:0 }}
          animate={{ width:90 }}
          transition={{
            delay:0.4,
            duration:0.8
          }}
          className="mx-auto mt-8 h-1 rounded-full bg-[#C9A14A]"
        />




        {/* Heading */}
        <motion.h1
          initial={{
            opacity:0,
            y:40
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:0.5,
            duration:0.8
          }}
          className="mt-8 text-5xl font-light leading-tight text-white md:text-7xl"
        >

          Project
          <span className="block font-semibold text-[#C9A14A]">
            Resources
          </span>

        </motion.h1>





        {/* Description */}
        <motion.p
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:0.7
          }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          Explore project brochures, specifications, and detailed
          information about Manjeet Pride Group's landmark developments.
          Download resources and discover your future home.
        </motion.p>




        {/* Button */}
        <motion.div
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:0.9
          }}
          className="mt-10"
        >

          <Link
            href="#projects"
            className="inline-flex rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition hover:scale-105"
          >
            Explore Projects
          </Link>

        </motion.div>



      </div>




      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y:[0,12,0]
        }}
        transition={{
          repeat:Infinity,
          duration:1.8
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-7 w-7 text-[#C9A14A]" />
      </motion.div>


    </section>
  );
}