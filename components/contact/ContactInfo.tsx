"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  QrCode,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Corporate Office",
    value: [
      "Pride Group Headquarters",
      "6th Floor, Ajanta Tower",
      "Opp. Airport, Hyatt Road",
      "My World",
      "Chh. Sambhajinagar",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    value: ["+91 91681 43690"],
  },
  {
    icon: Mail,
    title: "Email",
    value: ["abdpridegroup@yahoo.com"],
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: [
      "Mon - Sat : 10:00 AM - 7:00 PM",
      "Sunday : By Appointment",
    ],
  },
];

export default function ContactInfo() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#f8f9fb] to-white">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="overflow-hidden rounded-[40px] border border-[#E8E8E8] bg-white shadow-[0_25px_70px_rgba(0,0,0,.08)]"
        >

          <div className="grid lg:grid-cols-[1.1fr_.9fr]">

            {/* LEFT */}

            <div className="p-10 lg:p-14">

              <span className="inline-block uppercase tracking-[0.35em] text-sm text-[#C9A54C]">
                Visit Us
              </span>

              <div className="mt-4 h-1 w-20 rounded-full bg-[#C9A54C]" />

              <h2 className="mt-8 font-serif text-5xl leading-tight text-[#163d6c]">

                Visit Our

                <span className="block font-semibold">
                  Corporate Office
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">

                We'd love to welcome you to our office.
                Meet our relationship managers, explore project
                brochures, discuss investment opportunities and
                schedule a personalized site visit.

              </p>

              <div className="mt-12 space-y-6">

                {contactDetails.map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.12,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="flex gap-5 rounded-3xl border border-[#ECECEC] bg-[#FCFCFC] p-6 transition-all duration-300 hover:border-[#C9A54C] hover:shadow-xl"
                    >

                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#163d6c]">

                        <Icon
                          size={28}
                          className="text-[#C9A54C]"
                        />

                      </div>

                      <div>

                        <h3 className="text-xl font-semibold text-[#163d6c]">
                          {item.title}
                        </h3>

                        <div className="mt-2 space-y-1">

                          {item.value.map((line) => (

                            <p
                              key={line}
                              className="leading-7 text-slate-600"
                            >
                              {line}
                            </p>

                          ))}

                        </div>

                      </div>

                    </motion.div>

                  );

                })}

              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#163d6c] px-8 py-4 font-medium text-white transition hover:bg-[#C9A54C] hover:text-[#163d6c]"
              >
                Open in Google Maps

                <ArrowUpRight size={18} />

              </a>

            </div>

            {/* RIGHT */}

            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#163d6c] to-[#0d2746] p-12">

              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#C9A54C]/10 blur-[120px]" />

              <div className="relative z-10 text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10">

                  <QrCode
                    size={42}
                    className="text-[#C9A54C]"
                  />

                </div>

                <h3 className="mt-7 text-3xl font-semibold text-white">
                  Scan QR Code
                </h3>

                <p className="mt-3 text-white/70">
                  Save our contact instantly
                </p>

                <div className="mt-8 rounded-[28px] border-4 border-[#C9A54C] bg-white p-5 shadow-2xl">

                  <img
                    src="/images/contact/qr-code.png"
                    alt="QR Code"
                    className="mx-auto h-56 w-56 object-contain"
                  />

                </div>                <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
                  Scan this QR code to instantly save our office contact
                  details, enquire about our projects, or connect with our
                  sales team for a personalized site visit.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A54C] px-8 py-4 font-medium text-[#163d6c] transition-all duration-300 hover:scale-105 hover:bg-white"
                  >
                    Visit Our Office

                    <ArrowUpRight size={18} />

                  </a>

                  <a
                    href="/brochure.pdf"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#163d6c]"
                  >
                    Download Brochure

                    <ArrowUpRight size={18} />

                  </a>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}