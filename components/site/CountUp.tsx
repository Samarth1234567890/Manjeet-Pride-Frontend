"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function CountUp({
  end,
  suffix = "",
  decimals = 0,
  duration = 2000,
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);

  }, [isInView, end, duration]);


  return (
    <span
      ref={ref}
      className={className}
    >
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}