"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
    color: "#1877F2",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
    color: "#E1306C",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
    color: "#FF0000",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
    color: "#1DA1F2",
  },
];

export default function SocialConnect() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[40px] bg-[#163d6c] px-8 py-16 text-center text-white lg:px-16"
        >

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-[#C9A54C]">
            Follow Us
          </span>

          <h2 className="mt-6 font-serif text-4xl sm:text-5xl">
            Stay Connected with Manjeet Pride
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Follow us for project launches, construction updates,
            investment opportunities, customer stories and the latest
            news from Manjeet Pride Group.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -8,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm transition-all"
                  style={{
                    borderColor: social.color,
                  }}
                >
                  <Icon
                    size={30}
                    className="transition group-hover:scale-110"
                    style={{
                      color: social.color,
                    }}
                  />
                </motion.a>
              );
            })}

          </div>

          <div className="mt-12 text-white/60">
            Join thousands of happy homeowners and investors
            following our journey.
          </div>

        </motion.div>

      </div>
    </section>
  );
}