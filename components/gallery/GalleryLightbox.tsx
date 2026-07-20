"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface GalleryLightboxProps {
  images: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!images.length) return null;

  const image = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-[#C9A14A] hover:text-[#071A2E]"
          >
            <X size={24} />
          </button>

          {/* Previous */}
          <button
            onClick={onPrev}
            className="absolute left-6 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-[#C9A14A] hover:text-[#071A2E]"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Image */}
          <motion.div
            key={image.id}
            initial={{ scale: .9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .9, opacity: 0 }}
            transition={{ duration: .35 }}
            className="relative h-[80vh] w-[90vw] max-w-6xl"
          >
            <Image
              src={image.image}
              alt={image.title}
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Next */}
          <button
            onClick={onNext}
            className="absolute right-6 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-[#C9A14A] hover:text-[#071A2E]"
          >
            <ChevronRight size={30} />
          </button>

          {/* Bottom Info */}
          <div className="absolute bottom-8 text-center">
            <span className="rounded-full bg-[#C9A14A] px-4 py-2 text-sm font-semibold text-[#071A2E]">
              {image.category}
            </span>

            <h3 className="mt-5 text-3xl font-semibold text-white">
              {image.title}
            </h3>

            <p className="mt-2 text-gray-300">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}