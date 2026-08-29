"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Rocket, Phone } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section wrap bg-[var(--steam)] py-20 md:py-28">
      <div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Headline */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-[var(--pine)] mb-6 leading-tight text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to{" "}
          <span className="text-[var(--stamp)]">
            Scale
          </span>{" "}
          Your Business Faster?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-[var(--ink-soft)] mb-10 max-w-2xl mx-auto leading-relaxed text-center font-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join Cleclo and start receiving orders through a structured, automated
          platform built to help laundry vendors scale without operational
          complexity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="btn btn-primary px-8 py-4 text-base font-bold shadow-md"
          >
            <Link href="/signup">
              <span className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Become a Cleclo Vendor
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="btn btn-ghost px-8 py-4 text-base"
          >
            <Phone className="w-5 h-5 mr-2" />
            Talk to Sales
          </Button>
        </motion.div>

        {/* Trust elements */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-[var(--ink-soft)] text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            "No Credit Card Required",
            "Free Forever Plan",
            "Setup in Minutes",
            "Cancel Anytime",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[var(--stamp)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
