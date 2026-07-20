"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I schedule a site visit?",
    answer:
      "You can schedule a site visit by filling out our contact form or calling our sales team. Our representative will confirm your preferred date and time.",
  },
  {
    question: "Do you provide home loan assistance?",
    answer:
      "Yes. We work with leading banks and financial institutions to help you choose the most suitable home loan.",
  },
  {
    question: "Are all projects RERA registered?",
    answer:
      "Yes. Our projects comply with all applicable regulations. RERA registration details are provided for every project.",
  },
  {
    question: "Can I book a property online?",
    answer:
      "Yes. Our sales team can guide you through the booking process and documentation remotely if required.",
  },
  {
    question: "What documents are required for booking?",
    answer:
      "Generally, you'll need identity proof, address proof, PAN card, passport-size photographs, and booking amount details. Our team will guide you based on the project.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">

        <div className="text-center">

          <span className="rounded-full bg-[#C9A54C]/10 px-4 py-2 text-sm font-medium text-[#C9A54C]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 font-serif text-4xl text-[#163d6c] sm:text-5xl">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Here are some of the most common questions our customers ask.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white"
              >

                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <span className="text-lg font-semibold text-[#163d6c]">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: active ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown />
                  </motion.div>

                </button>

                <AnimatePresence>

                  {active && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >

                      <div className="border-t border-neutral-100 px-8 py-6">

                        <p className="leading-8 text-neutral-600">
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}