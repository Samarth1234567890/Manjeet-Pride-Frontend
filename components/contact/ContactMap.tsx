"use client";

import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="bg-white py-24">

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
          className="mb-12 text-center"
        >

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#071A2E]">

            <MapPinned
              className="text-[#C9A14A]"
              size={32}
            />

          </div>


          <p className="mt-6 uppercase tracking-[0.35em] text-[#C9A14A]">
            Find Us
          </p>


          <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[#C9A14A]" />


          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">

            Our
            <span className="block font-semibold">
              Location
            </span>

          </h2>


        </motion.div>




        {/* Map */}
        <motion.div
          initial={{
            opacity:0,
            scale:0.95
          }}
          whileInView={{
            opacity:1,
            scale:1
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:0.8
          }}
          className="overflow-hidden rounded-3xl border border-gray-200 shadow-2xl"
        >

          <iframe
            src="https://www.google.com/maps?q=Ajanta%20Tower%20Chhatrapati%20Sambhajinagar&output=embed"
            width="100%"
            height="500"
            style={{
              border:0
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </motion.div>



      </div>

    </section>
  );
}