"use client";

import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

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
          className="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-12"
        >


          {/* Heading */}
          <div className="mb-10 text-center">

            <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
              Get In Touch
            </p>


            <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />


            <h2 className="text-4xl font-light text-[#071A2E]">
              Need More Information
              <span className="block font-semibold">
                Contact Us Now!
              </span>
            </h2>

          </div>




          <form className="space-y-6">


            {/* Name */}
            <div className="relative">

              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-5 outline-none transition focus:border-[#C9A14A]"
              />

            </div>




            {/* Mobile */}
            <div className="relative">

              <Phone
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="tel"
                placeholder="Mobile"
                className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-5 outline-none transition focus:border-[#C9A14A]"
              />

            </div>





            {/* Email */}
            <div className="relative">

              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-5 outline-none transition focus:border-[#C9A14A]"
              />

            </div>






            {/* Message */}
            <div className="relative">

              <MessageSquare
                className="absolute left-4 top-5 text-gray-400"
                size={20}
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-5 outline-none transition focus:border-[#C9A14A]"
              />

            </div>






            {/* Consent */}
            <label className="flex items-start gap-3 text-sm text-gray-600">

              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-[#C9A14A]"
              />

              <span>
                I agree to be contacted via SMS, WhatsApp, and calls.
              </span>

            </label>






            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#071A2E] py-4 font-semibold text-white transition hover:bg-[#C9A14A] hover:text-[#071A2E]"
            >

              Send Message

              <Send size={18}/>

            </button>



          </form>


        </motion.div>

      </div>
    </section>
  );
}