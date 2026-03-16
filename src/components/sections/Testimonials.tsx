"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

type VideoTestimonial = {
  id: number;
  title: string;
  speaker: string;
  role: string;
  organization: string;
  videoSrc: string;
};

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    title: "Case center collaboration",
    speaker: "Prof. (Dr.) Gurinder Singh",
    role: "Group Vice Chancellor",
    organization: "Amity Universities",
    videoSrc: "/video-1.mp4",
  },
  {
    id: 2,
    title: "Institutional Collaboration Highlights at University of Southampton",
    speaker: "Prof. (Dr.) Gurinder Singh",
    role: "Academic Leader",
    organization: "Global Partnerships",
    videoSrc: "/video-2.mp4",
  },
  {
    id: 3,
    title: "Academic and Industry Impact at University of Bristol",
    speaker: "Prof. (Dr.) Gurinder Singh",
    role: "Institution Builder",
    organization: "Amity Global Network",
    videoSrc: "/video-3.mp4",
  },
];

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Testimonials() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container-custom relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.14em] text-primary">
            <PlayCircle className="h-3.5 w-3.5" />
            Real Stories
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl">
            Video Testimonials That Speak for Themselves
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-foreground-secondary md:text-lg">
            Swipe through voices from academia and industry. The carousel auto-scrolls,
            supports touch gestures, and pauses while users interact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: smoothEase }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {videoTestimonials.map((item) => (
                <div key={item.id} className="min-w-0 flex-[0_0_100%] px-1 md:px-3">
                  <article className="glass overflow-hidden rounded-2xl border border-white/10">
                    <div className="aspect-video w-full overflow-hidden border-b border-white/10 bg-black">
                      <video
                        className="h-full w-full"
                        src={item.videoSrc}
                        aria-label={`${item.speaker} testimonial video`}
                        controls
                        playsInline
                        preload="metadata"
                      />
                    </div>

                    <div className="grid gap-3 p-6 md:p-7">
                      <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground-secondary md:text-base">
                        {item.speaker} · {item.role}
                      </p>
                      <p className="text-sm text-gold md:text-base">{item.organization}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Jump to video ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="glass inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous video"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="glass inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next video"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
