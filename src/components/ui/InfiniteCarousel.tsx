"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CarouselItem {
  src: string;
  alt: string;
  caption: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  speed?: number; // pixels per second
  onItemClick?: (index: number) => void;
}

export default function InfiniteCarousel({ 
  items, 
  speed = 30,
  onItemClick 
}: InfiniteCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Double the items for seamless loop
  const doubledItems = [...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = 400 + 24; // card width + gap
    const totalWidth = items.length * itemWidth;

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPaused) {
        setTranslateX((prev) => {
          const newValue = prev - (speed * deltaTime) / 1000;
          // Reset when we've scrolled through the first set
          if (Math.abs(newValue) >= totalWidth) {
            return 0;
          }
          return newValue;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, items.length, speed]);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-6"
        style={{ 
          transform: `translateX(${translateX}px)`,
          width: "max-content"
        }}
      >
        {doubledItems.map((item, index) => (
          <div
            key={`${item.alt}-${index}`}
            className="flex-shrink-0 w-[400px] cursor-pointer group"
            onClick={() => onItemClick?.(index % items.length)}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/5">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground font-medium text-sm">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
