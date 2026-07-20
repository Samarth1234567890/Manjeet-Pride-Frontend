"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import { NAV_LINKS } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [projectsOpen, setProjectsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
const [resourcesOpen, setResourcesOpen] = useState(false);
const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: .6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link href="/" className="flex items-center">

            <Image
              src="/logo.png"
              alt="Manjeet Pride Group"
              width={190}
              height={60}
              className="h-auto w-44"
              priority
            />

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-9 xl:flex">
                        {/* Home */}

            <Link
              href="/"
              className={`relative text-[15px] font-medium transition-all duration-300 hover:text-[#C9A54C] ${
                scrolled ? "text-[#163d6c]" : "text-white"
              }`}
            >
              Home
            </Link>

            {/* About */}

            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[15px] font-medium transition hover:text-[#C9A54C] ${
                  scrolled ? "text-[#163d6c]" : "text-white"
                }`}
              >
                About
                <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: .25 }}
                    className="absolute left-0 mt-5 w-64 overflow-hidden rounded-3xl border border-[#163d6c]/10 bg-white shadow-2xl"
                  >
                    {NAV_LINKS.find((l) => l.label === "About")?.children?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-6 py-4 text-[#163d6c] transition hover:bg-[#163d6c] hover:text-white"
                      >
                        {item.label}
                        <ArrowUpRight size={16} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Projects */}

            <div
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[15px] font-medium transition hover:text-[#C9A54C] ${
                  scrolled ? "text-[#163d6c]" : "text-white"
                }`}
              >
                Projects
                <ChevronDown size={16} />
              </button>

              <AnimatePresence>

                {projectsOpen && (

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: .25 }}
                    className="absolute left-1/2 mt-5 w-[420px] -translate-x-1/2 overflow-hidden rounded-[28px] border border-[#163d6c]/10 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,.12)]"
                  >

                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A54C]">
                      Ongoing & Completed
                    </h3>

                    <div className="grid grid-cols-2 gap-2">

                      {NAV_LINKS.find((l) => l.label === "Projects")?.children?.map((item) => (

                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-2xl p-4 transition hover:bg-[#163d6c] hover:text-white"
                        >

                          <p className="font-medium text-[#163d6c] hover:text-white">
                            {item.label}
                          </p>

                        </Link>

                      ))}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>
                        {/* Gallery */}

            <div
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[15px] font-medium transition hover:text-[#C9A54C] ${
                  scrolled ? "text-[#163d6c]" : "text-white"
                }`}
              >
                Gallery
                <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {galleryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: .25 }}
                    className="absolute left-0 mt-5 w-72 overflow-hidden rounded-[28px] border border-[#163d6c]/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,.12)]"
                  >
                    {NAV_LINKS.find(
                      (l) => l.label === "Gallery"
                    )?.children?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-6 py-4 text-[#163d6c] transition hover:bg-[#163d6c] hover:text-white"
                      >
                        {item.label}
                        <ArrowUpRight size={16} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
 className="relative"
 onMouseEnter={()=>setMediaOpen(true)}
 onMouseLeave={()=>setMediaOpen(false)}
>

<button
className={`flex items-center gap-1 text-[15px] font-medium transition hover:text-[#C9A54C] ${
scrolled ? "text-[#163d6c]" : "text-white"
}`}
>
Media
<ChevronDown size={16}/>
</button>


<AnimatePresence>

{mediaOpen && (

<motion.div
initial={{opacity:0,y:18}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:18}}
className="
absolute left-0 mt-5 w-72 overflow-hidden
rounded-[28px] border border-[#163d6c]/10
bg-white shadow-xl
"
>

{NAV_LINKS.find(
(l)=>l.label==="Media"
)?.children?.map((item)=>(

<Link
key={item.href}
href={item.href}
className="
flex items-center justify-between
px-6 py-4 text-[#163d6c]
hover:bg-[#163d6c]
hover:text-white
"
>

{item.label}

<ArrowUpRight size={16}/>

</Link>

))}

</motion.div>

)}

</AnimatePresence>

</div>

            {/* Career */}

            <Link
              href="/career"
              className={`text-[15px] font-medium transition hover:text-[#C9A54C] ${
                scrolled ? "text-[#163d6c]" : "text-white"
              }`}
            >
              Career
            </Link>

            {/* Blogs */}

            <Link
              href="/blogs"
              className={`text-[15px] font-medium transition hover:text-[#C9A54C] ${
                scrolled ? "text-[#163d6c]" : "text-white"
              }`}
            >
              Blogs
            </Link>

            {/* Resources */}

            <Link
              href="/resources"
              className={`text-[15px] font-medium transition hover:text-[#C9A54C] ${
                scrolled ? "text-[#163d6c]" : "text-white"
              }`}
            >
              Resources
            </Link>

            {/* Contact */}

            <Link
              href="/contact"
              className={`text-[15px] font-medium transition hover:text-[#C9A54C] ${
                scrolled ? "text-[#163d6c]" : "text-white"
              }`}
            >
              Contact
            </Link>

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <Link
              href="/contact"
              className="hidden rounded-full bg-[#163d6c] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9A54C] hover:text-[#163d6c] xl:inline-flex"
            >
              Schedule Visit
            </Link>

            {/* Mobile Menu */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden ${
                scrolled ? "text-[#163d6c]" : "text-white"
              }`}
            >
              {mobileOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>

          </div>

        </div>
                {/* Mobile Menu */}

        <AnimatePresence>

          {mobileOpen && (

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[999] bg-[#163d6c] xl:hidden"
            >

              <div className="flex items-center justify-between border-b border-white/10 p-6">

                <Image
                  src="/logo.png"
                  alt="Manjeet Pride"
                  width={170}
                  height={50}
                  className="h-auto w-40"
                />

                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white"
                >
                  <X size={30} />
                </button>

              </div>

              <div className="flex h-[calc(100%-88px)] flex-col overflow-y-auto px-8 py-8">

                {NAV_LINKS.map((item) => (

                  <div
                    key={item.label}
                    className="border-b border-white/10 py-5"
                  >

                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between text-lg font-medium text-white transition hover:text-[#C9A54C]"
                    >

                      {item.label}

                      {!item.children && (
                        <ArrowUpRight size={18} />
                      )}

                    </Link>

                    {item.children && (

                      <div className="mt-4 ml-5 space-y-3">

                        {item.children.map((child) => (

                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm text-white/70 transition hover:text-[#C9A54C]"
                          >
                            {child.label}
                          </Link>

                        ))}

                      </div>

                    )}

                  </div>

                ))}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-10 flex justify-center rounded-full bg-[#C9A54C] px-8 py-4 text-center text-base font-semibold text-[#163d6c] transition hover:scale-[1.03]"
                >
                  Schedule Visit
                </Link>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.header>

    </>
  );
}
          