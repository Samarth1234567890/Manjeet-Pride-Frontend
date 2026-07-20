"use client";

import { useRef } from "react";
import clsx from "clsx";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "outline";
}

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.15}px, ${
      y * 0.15
    }px)`;
  }

  function handleMouseLeave() {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform = "translate(0px, 0px)";
  }

  const styles = clsx(
    "inline-flex items-center justify-center rounded-full px-8 py-3",
    "text-sm font-medium transition-transform duration-300 ease-out",
    "tracking-wide",
    variant === "primary" &&
      "bg-primary text-primary-foreground hover:opacity-90",
    variant === "outline" &&
      "border border-border text-foreground hover:bg-accent",
    className
  );

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={styles}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={styles}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}