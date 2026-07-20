"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/content";

const ongoingProjects = [
  {
    title: "One World",
    href: "/one_world",
  },
  {
    title: "Dream World",
    href: "/dream_world",
  },
  {
    title: "Manjeet Pride Landmark",
    href: "/manjeet_pride_landmark",
  },
  {
    title: "My World & VXL Residences",
    href: "/vxl_residences",
  },
];

const usefulLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Team",
    href: "/our_team",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    title: "Media",
    href: "/media",
  },
  {
    title: "Career",
    href: "/career",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const partners = [
  "Maha RERA",
  "CREDAI Chh. Sambhajinagar",
  "CREDAI Maharashtra",
  "State Bank of India",
  "HDFC Bank",
  "Bank of Maharashtra",
  "Bank of Baroda",
  "Union Bank of India",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#ffffff] text-black">

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#C9A54C]/10 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-[140px]" />

      </div>

      <div className="relative">

        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A54C] to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

            {/* Company */}

            <Reveal>

              <Image
                src="/logo.png"
                alt="Manjeet Pride Group"
                width={220}
                height={70}
                className="h-auto w-52"
              />

              <p className="mt-8 max-w-sm leading-8 text-black">

                The Manjeet Pride Group always works for Best
                Quality, Luxurious Looks, Spacious Rooms,
                Great Locality & Modern Amenities while creating
                landmarks that stand the test of time.

              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
  {
    icon: FaInstagram,
    href: SITE.social.instagram,
  },
  {
    icon: FaFacebookF,
    href: SITE.social.facebook,
  },
  {
    icon: FaLinkedinIn,
    href: SITE.social.linkedin,
  },
  {
    icon: FaYoutube,
    href: SITE.social.youtube,
  },
  {
    icon: FaTwitter,
    href: SITE.social.twitter,
  },
  {
    icon: FaPinterestP,
    href: SITE.social.pinterest,
  },
].map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -5,
                        scale: 1.08,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all hover:border-[#C9A54C] hover:bg-[#C9A54C] hover:text-[#163d6c]"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}

              </div>

            </Reveal>
                        {/* Ongoing Projects */}

            <Reveal delay={0.1}>

              <div>

                <h3 className="mb-8 text-lg font-semibold uppercase tracking-[0.18em] text-[#C9A54C]">
                  Ongoing Projects
                </h3>

                <ul className="space-y-5">

                  {ongoingProjects.map((project) => (

                    <li key={project.title}>

                      <Link
                        href={project.href}
                        className="group inline-flex items-center gap-2 text-black/70 transition-all hover:text-white"
                      >

                        <span className="transition-all group-hover:translate-x-1">
                          {project.title}
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                        />

                      </Link>

                    </li>

                  ))}

                </ul>

              </div>

            </Reveal>

            {/* Useful Links */}

            <Reveal delay={0.2}>

              <div>

                <h3 className="mb-8 text-lg font-semibold uppercase tracking-[0.18em] text-[#C9A54C]">
                  Useful Links
                </h3>

                <ul className="space-y-5">

                  {usefulLinks.map((item) => (

                    <li key={item.title}>

                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-black/70 transition-all hover:text-black"
                      >

                        <span className="transition-all group-hover:translate-x-1">
                          {item.title}
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                        />

                      </Link>

                    </li>

                  ))}

                </ul>

              </div>

            </Reveal>

            {/* Contact */}

            <Reveal delay={0.3}>

              <div>

                <h3 className="mb-8 text-lg font-semibold uppercase tracking-[0.18em] text-[#C9A54C]">
                  Contact Us
                </h3>

                <div className="space-y-7">

                  <div className="flex gap-4">

                    <MapPin className="mt-1 h-5 w-5 text-[#C9A54C]" />

                    <div className="space-y-1 text-black/70">

                      <p>{SITE.addressLine1}</p>

                      <p>{SITE.addressLine2}</p>

                      <p>{SITE.addressLine3}</p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <Mail className="h-5 w-5 text-[#C9A54C]" />

                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-black/70 transition hover:text-white"
                    >
                      {SITE.email}
                    </a>

                  </div>

                  <div className="flex items-center gap-4">

                    <Phone className="h-5 w-5 text-[#C9A54C]" />

                    <a
                      href={`tel:${SITE.phone}`}
                      className="text-black/70 transition hover:text-white"
                    >
                      {SITE.phone}
                    </a>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>
                   {/* Bottom Section */}

<Reveal delay={0.4}>

<div className="
mt-20 grid gap-8 lg:grid-cols-2
">


{/* Banking Partners Card */}

<div className="
rounded-[32px]
border border-[#C9A54C]/30
bg-[#FAF7F0]
p-8
shadow-[0_20px_50px_rgba(11,31,58,0.08)]
transition
hover:-translate-y-1
">


<h3 className="
mb-6
text-lg
font-semibold
uppercase
tracking-[0.18em]
text-[#0B1F3A]
">

Banking Partners

</h3>


<div className="
grid grid-cols-2 gap-4
">


{partners.map((partner)=>( 

<div

key={partner}

className="
rounded-2xl
border border-[#0B1F3A]/10
bg-white
px-5 py-4
text-sm
font-medium
text-[#64748B]
transition
hover:border-[#C9A54C]
hover:text-[#0B1F3A]
"

>

{partner}

</div>

))}


</div>


</div>





{/* Important Links Card */}


<div className="
rounded-[32px]
border border-[#C9A54C]/30
bg-[#FAF7F0]
p-8
shadow-[0_20px_50px_rgba(11,31,58,0.08)]
transition
hover:-translate-y-1
">


<h3 className="
mb-6
text-lg
font-semibold
uppercase
tracking-[0.18em]
text-[#0B1F3A]
">

Important Links

</h3>



<div className="
grid grid-cols-2 gap-4
">


{[
{
name:"Privacy Policy",
href:"/privacy_policy"
},
{
name:"Terms & Conditions",
href:"/terms_conditions"
},
{
name:"Career",
href:"/career"
},
{
name:"Contact Us",
href:"/contact"
},

].map((item)=>(


<Link

key={item.name}

href={item.href}

className="
rounded-2xl
border border-[#0B1F3A]/10
bg-white
px-5 py-4
text-sm
font-medium
text-[#64748B]
transition
hover:border-[#C9A54C]
hover:text-[#0B1F3A]
"

>

{item.name}

</Link>


))}


</div>


</div>



</div>


</Reveal>

          {/* Copyright */}

          <div className="mt-14 border-t border-white/10 pt-8">

            <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-black/60 lg:flex-row">

              <p>
                © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
              </p>

              <p className="text-black/40">
                Crafted with excellence • Inspired by luxury living
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );
}