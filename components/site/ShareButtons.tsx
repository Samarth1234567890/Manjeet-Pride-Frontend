"use client";

import { Facebook, Linkedin, Link2, Twitter } from "lucide-react";

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const url =
    typeof window !== "undefined" ? window.location.href : "";

  const share = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const links: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };

    window.open(links[platform], "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => share("facebook")}
        className="rounded-full border p-2 transition hover:bg-primary hover:text-white"
      >
        <Facebook className="h-4 w-4" />
      </button>

      <button
        onClick={() => share("twitter")}
        className="rounded-full border p-2 transition hover:bg-primary hover:text-white"
      >
        <Twitter className="h-4 w-4" />
      </button>

      <button
        onClick={() => share("linkedin")}
        className="rounded-full border p-2 transition hover:bg-primary hover:text-white"
      >
        <Linkedin className="h-4 w-4" />
      </button>

      <button
        onClick={copyLink}
        className="rounded-full border p-2 transition hover:bg-primary hover:text-white"
      >
        <Link2 className="h-4 w-4" />
      </button>
    </div>
  );
}