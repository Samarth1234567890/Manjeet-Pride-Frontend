"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ArticleContent() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none prose-headings:text-[#173042] prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-8 prose-li:text-gray-600"
        >
          <p className="text-xl font-medium text-[#173042] leading-9">
            At <strong>Manjeet Pride Group</strong>, every project is more than
            a building—it's a commitment to quality, trust, innovation, and
            creating vibrant communities that stand the test of time.
          </p>

          <h2>Building with Purpose</h2>

          <p>
            Every development begins with a clear vision: to deliver homes and
            commercial spaces that combine thoughtful planning, modern
            architecture, premium construction quality, and long-term value.
            From location selection to final handover, every stage is managed
            with attention to detail.
          </p>

          <Image
            src="/images/media/article-1.jpg"
            alt="Construction"
            width={1200}
            height={700}
            className="my-10 rounded-3xl"
          />

          <h2>Quality at Every Stage</h2>

          <p>
            We believe quality is achieved through disciplined execution,
            experienced professionals, trusted materials, and continuous site
            supervision. Every milestone reflects our commitment to excellence.
          </p>

          <blockquote className="rounded-2xl border-l-4 border-[#B08D57] bg-[#F8F7F3] p-8 italic text-[#173042]">
            "Our goal is not simply to construct buildings, but to create
            spaces where families thrive and communities flourish."
          </blockquote>

          <h2>Designed for Modern Living</h2>

          <p>
            Contemporary lifestyles require thoughtfully designed homes with
            open layouts, abundant natural light, modern amenities, landscaped
            surroundings, and excellent connectivity. Every Manjeet Pride
            project reflects these principles.
          </p>

          <ul>
            <li>Premium construction quality</li>
            <li>Modern architectural design</li>
            <li>Prime locations</li>
            <li>Excellent connectivity</li>
            <li>Thoughtfully planned amenities</li>
            <li>Customer-first approach</li>
          </ul>

          <Image
            src="/images/media/article-2.jpg"
            alt="Modern Living"
            width={1200}
            height={700}
            className="my-10 rounded-3xl"
          />

          <h2>Looking Ahead</h2>

          <p>
            As Manjeet Pride Group continues to grow, our focus remains the
            same—to build exceptional developments that enrich lives while
            maintaining the trust and confidence of every customer.
          </p>

          <p>
            Every completed project strengthens our commitment to innovation,
            sustainability, and delivering value that lasts for generations.
          </p>
        </motion.article>

      </div>
    </section>
  );
}