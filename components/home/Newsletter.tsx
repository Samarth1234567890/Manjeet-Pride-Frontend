"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#163d6c]/5 blur-[140px]" />

        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#C9A54C]/10 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-5xl px-6">

        <Reveal>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: .35 }}
            className="overflow-hidden rounded-[40px] border border-[#163d6c]/10 bg-gradient-to-br from-[#163d6c] via-[#1B4E8A] to-[#163d6c] p-14 shadow-[0_30px_90px_rgba(22,61,108,.25)]"
          >

            <div className="mx-auto max-w-3xl text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C9A54C]">

                <Mail className="h-9 w-9 text-[#163d6c]" />

              </div>

              <SectionTitle
                eyebrow="JOIN OUR NEWSLETTER"
                title={
                  <>
                    Stay Connected With
                    <br />
                    Manjeet Pride Group
                  </>
                }
                light
                align="center"
                className="mx-auto mt-8"
              />

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">

                Receive updates about new project launches,
                exclusive offers, construction progress,
                events and premium real estate insights
                directly in your inbox.

              </p>

              <div className="mt-12">

                <form className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">

                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="h-16 flex-1 rounded-full border border-white/15 bg-white/10 px-7 text-white placeholder:text-white/45 outline-none backdrop-blur-xl transition-all duration-300 focus:border-[#C9A54C] focus:ring-2 focus:ring-[#C9A54C]/30"
                />

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex h-16 items-center justify-center gap-3 rounded-full bg-[#C9A54C] px-10 font-semibold text-[#163d6c] shadow-lg transition-all duration-300 hover:shadow-[0_20px_45px_rgba(201,165,76,.45)]"
                >
                  Subscribe
                  <Send className="h-5 w-5" />
                </motion.button>

              </form>

              <p className="mt-5 text-sm text-white/60">
                No spam. Only premium project launches, construction updates,
                exclusive offers and real estate insights from Manjeet Pride Group.
              </p>

            </div>

            </div>

          </motion.div>

        </Reveal>

        {/* Features */}

        <Reveal delay={0.2}>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Exclusive Launches",
                text: "Get early access to upcoming premium residential and commercial developments."
              },
              {
                title: "Project Updates",
                text: "Receive construction progress, milestone achievements and possession updates."
              },
              {
                title: "Special Offers",
                text: "Be the first to know about festive offers and exclusive investment opportunities."
              }
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: .3 }}
                className="rounded-[28px] border border-[#163d6c]/10 bg-white p-8 text-center shadow-[0_15px_50px_rgba(0,0,0,.06)]"
              >

                <h3 className="font-serif text-2xl text-[#163d6c]">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-neutral-600">

                  {item.text}

                </p>

              </motion.div>

            ))}

          </div>

        </Reveal>

      </div>

    </section>
  );
}