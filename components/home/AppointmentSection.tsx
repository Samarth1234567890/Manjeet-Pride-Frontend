"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Building2,
  Wallet,
  Calendar,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { MagneticButton } from "@/components/site/MagneticButton";

export function AppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    budget: "",
  });

  return (
    <section className="relative overflow-hidden py-32 bg-[#F8F6F2]">

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#1B4E8A]/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C9A54C]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-[1fr_620px]">

          {/* LEFT */}

          <Reveal>

            <SectionTitle
              eyebrow="SCHEDULE YOUR APPOINTMENT"
              title={
                <>
                  Begin Your Journey
                  <br />
                  Towards Luxury Living
                </>
              }
            />

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">

              Meet our experts and discover homes crafted
              around timeless architecture, thoughtful planning,
              world-class amenities and exceptional investment value.

            </p>

            <div className="mt-14 space-y-8">

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B4E8A] text-white">

                  <Building2 className="h-6 w-6"/>

                </div>

                <div>

                  <h4 className="font-semibold text-xl">

                    Personalized Consultation

                  </h4>

                  <p className="mt-2 text-neutral-600">

                    Our advisors understand your lifestyle
                    and recommend the perfect residence.

                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B4E8A] text-white">

                  <Calendar className="h-6 w-6"/>

                </div>

                <div>

                  <h4 className="font-semibold text-xl">

                    Private Site Visit

                  </h4>

                  <p className="mt-2 text-neutral-600">

                    Experience every detail before making
                    your investment decision.

                  </p>

                </div>

              </div>

            </div>

          </Reveal>

          {/* FORM */}

          <Reveal delay={0.15}>

            <motion.div

              whileHover={{y:-6}}

              className="rounded-[36px] border border-[#1B4E8A]/10 bg-gradient-to-br from-[#163d6c] via-[#1B4E8A] to-[#234f87] p-10 shadow-[0_35px_90px_rgba(27,78,138,.28)]"

            >

              <h3 className="font-serif text-4xl text-white">

                Book Your Appointment

              </h3>

              <p className="mt-4 text-white/70">

                Our relationship team will contact you shortly.

              </p>

              <form className="mt-10 space-y-6">                {/* Name */}

                <div className="relative">

                  <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C9A54C]" />

                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="h-14 w-full rounded-2xl border border-white/15 bg-white/10 pl-14 pr-5 text-white placeholder:text-white/45 backdrop-blur-md outline-none transition-all focus:border-[#C9A54C]"
                  />

                </div>

                {/* Phone */}

                <div className="relative">

                  <Phone className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C9A54C]" />

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="h-14 w-full rounded-2xl border border-white/15 bg-white/10 pl-14 pr-5 text-white placeholder:text-white/45 backdrop-blur-md outline-none transition-all focus:border-[#C9A54C]"
                  />

                </div>

                {/* Email */}

                <div className="relative">

                  <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C9A54C]" />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 w-full rounded-2xl border border-white/15 bg-white/10 pl-14 pr-5 text-white placeholder:text-white/45 backdrop-blur-md outline-none transition-all focus:border-[#C9A54C]"
                  />

                </div>

                {/* Interested Project */}

                <div className="relative">

                  <Building2 className="absolute left-5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#C9A54C]" />

                  <select className="h-14 w-full appearance-none rounded-2xl border border-white/15 bg-white/10 pl-14 pr-5 text-white backdrop-blur-md outline-none focus:border-[#C9A54C]">

                    <option className="text-black">
                      Select Project
                    </option>

                    <option className="text-black">
                      One World
                    </option>

                    <option className="text-black">
                      Dream World
                    </option>

                    <option className="text-black">
                      Manjeet Pride Landmark
                    </option>

                    <option className="text-black">
                      My World & VXL Residences
                    </option>

                  </select>

                </div>

                {/* Budget */}

                <div className="relative">

                  <Wallet className="absolute left-5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#C9A54C]" />

                  <select className="h-14 w-full appearance-none rounded-2xl border border-white/15 bg-white/10 pl-14 pr-5 text-white backdrop-blur-md outline-none focus:border-[#C9A54C]">

                    <option className="text-black">
                      Select Budget
                    </option>

                    <option className="text-black">
                      ₹50 Lakh – ₹1 Cr
                    </option>

                    <option className="text-black">
                      ₹1 Cr – ₹2 Cr
                    </option>

                    <option className="text-black">
                      ₹2 Cr – ₹3 Cr
                    </option>

                    <option className="text-black">
                      Above ₹3 Cr
                    </option>

                  </select>

                </div>

                <div className="pt-3">

                  <MagneticButton
                    href="/contact"
                    variant="primary"
                    className="w-full justify-center rounded-2xl bg-[#C9A54C] py-4 text-base font-semibold text-[#163d6c] hover:bg-[#d9b867]"
                  >
                    Schedule My Visit
                  </MagneticButton>

                </div>

              </form>

            </motion.div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}