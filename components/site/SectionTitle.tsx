import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div
      className={clsx(
        centered ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-4 text-xs font-medium uppercase tracking-[0.35em]",
            light ? "text-accent" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={clsx(
          "font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl",
          light ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={clsx(
            "mt-6 max-w-3xl text-base leading-relaxed sm:text-lg",
            centered && "mx-auto",
            light
              ? "text-primary-foreground/80"
              : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}