"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export function useCountUp({
  end,
  duration = 2000,
  delay = 0,
  suffix = "",
  prefix = "",
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(end);
        return;
      }

      const progress = (now - startTime) / duration;
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, delay]);

  return {
    ref,
    value: `${prefix}${count.toLocaleString()}${suffix}`,
    isInView,
  };
}

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const { ref, value } = useCountUp({ end, duration, delay, suffix, prefix });

  return (
    <span ref={ref} className={`counter-animate ${className}`}>
      {value}
    </span>
  );
}
