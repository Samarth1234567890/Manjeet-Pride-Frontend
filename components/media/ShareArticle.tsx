"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Share2,
  Facebook,
  Linkedin,
  Twitter,
  Copy,
  ArrowRight,
} from "lucide-react";

export default function ShareArticle() {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Article link copied!");
    } catch {
      alert("Unable to copy link.");
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#173042] to-[#20465E] shadow-2xl"
        >

          <div className="grid gap-10 lg:grid-cols-[1.3fr_auto] p-10 lg:p-14">

            <div>

              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-white">
                <Share2 size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                  Share Article
                </span>
              </div>

              <h2 className="mt-7 text-4xl font-bold text-white">
                Found this article useful?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                Share it with your friends, colleagues and family to let
                them discover Manjeet Pride Group's latest updates,
                project milestones and real estate insights.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#B08D57]"
                >
                  <Facebook size={20} />
                </Link>

                <Link
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#B08D57]"
                >
                  <Twitter size={20} />
                </Link>

                <Link
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#B08D57]"
                >
                  <Linkedin size={20} />
                </Link>

                <button
                  onClick={copyLink}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#B08D57]"
                >
                  <Copy size={20} />
                </button>

              </div>

            </div>

            <div className="flex items-center">

              <Link
                href="/media"
                className="inline-flex items-center gap-3 rounded-full bg-[#B08D57] px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#9B7644]"
              >
                More Articles
                <ArrowRight size={20} />
              </Link>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}