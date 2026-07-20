"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  PhoneCall,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[#071A2E]" />


      {/* Glow */}
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

            <CalendarDays
              className="text-[#C9A14A]"
              size={40}
            />

          </div>




          <p className="mt-8 uppercase tracking-[0.35em] text-[#C9A14A]">
            Get In Touch
          </p>


          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />



          <h2 className="text-4xl font-light text-white md:text-6xl">

            Need More Information
            <span className="block font-semibold text-[#C9A14A]">
              Schedule A Meeting?
            </span>

          </h2>




          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">

            Our team is ready to help you with project details,
            site visits, bookings, and all your real estate queries.

          </p>






          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">


            {/* Call */}
            <a
              href="tel:+919168143690"
              className="flex items-center gap-3 rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition hover:scale-105"
            >

              <PhoneCall size={20}/>

              Call Now

            </a>





            {/* WhatsApp */}
            <a
              href="https://wa.me/919168143690"
              target="_blank"
              className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#071A2E]"
            >

              <MessageCircle size={20}/>

              WhatsApp

            </a>




            {/* Meeting */}
            <button
              className="flex items-center gap-3 rounded-full border border-[#C9A14A] px-8 py-4 font-semibold text-[#C9A14A] transition hover:bg-[#C9A14A] hover:text-[#071A2E]"
            >

              Book Meeting

              <ArrowRight size={20}/>

            </button>


          </div>



        </motion.div>

      </div>

    </section>
  );
}