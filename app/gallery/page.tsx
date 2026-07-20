"use client";

import { useState } from "react";

import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryCategories from "@/components/gallery/GalleryCategories";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <SiteShell>

      <GalleryHero />

      <Reveal>
        <GalleryCategories
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </Reveal>


      <Reveal>
        <GalleryGrid
          activeCategory={activeCategory}
        />
      </Reveal>


      <Reveal>
        <GalleryCTA />
      </Reveal>

    </SiteShell>
  );
}