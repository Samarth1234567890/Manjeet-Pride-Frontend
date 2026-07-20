"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageRevealProps {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  ratio = "aspect-[4/3]",
  className = "",
  priority = false,
}: ImageRevealProps) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
      }}
      whileInView={{
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
      }}
      viewport={{
        once:true,
      }}
      transition={{
        duration:1,
      }}
      className={`relative overflow-hidden ${ratio} ${className}`}
    >

      <motion.div
        initial={{
          scale:1.15,
        }}
        whileInView={{
          scale:1,
        }}
        transition={{
          duration:1.2,
        }}
        viewport={{
          once:true,
        }}
        className="h-full w-full"
      >

        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
        />

      </motion.div>

    </motion.div>
  );
}