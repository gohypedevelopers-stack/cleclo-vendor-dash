"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  UserPlus,
  Store,
  Package,
  Banknote,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Register as a Vendor",
      description:
        "Sign up with your business details and submit basic verification information. Our onboarding team reviews and activates your account, typically within 24 hours.",
      gradient: "from-blue-500 to-cyan-500",
      color: "text-blue-500",
    },
    {
      number: "02",
      icon: Store,
      title: "Configure Outlets & Services",
      description:
        "Set up your outlets, choose the services you offer (Dry Clean, Washing, Ironing, etc), defined pricing and configure service areas all from a simple dashboard.",
      gradient: "from-purple-500 to-pink-500",
      color: "text-purple-500",
    },
    {
      number: "03",
      icon: Package,
      title: "Start Receiving Orders",
      description:
        "Once approved, your outlets go live and begin receiving orders automatically. Cleclo intelligently routes orders based on location, capacity and service availability.",
      gradient: "from-orange-500 to-amber-500",
      color: "text-orange-500",
    },
    {
      number: "04",
      icon: Banknote,
      title: "Seamless Payouts & Settlements",
      description:
        "Track your earnings in real time and receive payouts directly to your bank account. Settlements are processed on a regular cycle with complete transparency.",
      gradient: "from-green-500 to-emerald-500",
      color: "text-green-500",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  // Show between Step 2 (~0.36) and Step 3 (~0.63)
  const badgeOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [0, 1, 1, 0],
  );
  const badgeScale = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [0.8, 1, 1, 0.8],
  );

  return (
    <section
      id="how"
      className="section wrap bg-[var(--steam)]"
    >
      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div
          className="section-head text-center mx-auto flex flex-col items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mx-auto">Getting Started</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--pine)] text-center mb-4 max-w-3xl mx-auto">
            How It <span className="text-[var(--stamp)]">Works</span>
          </h2>
          <p className="lede max-w-2xl mx-auto text-center text-[var(--ink-soft)]">
            A streamlined process to onboard, operate and scale on Cleclo.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[var(--kraft-line)] -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[var(--stamp)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Dynamic Badge - Between Step 2 and 3 */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <motion.div
              style={{ opacity: badgeOpacity, scale: badgeScale }}
              className="bg-[var(--white)] border border-[var(--brass)] shadow-xl px-6 py-3 rounded-2xl flex items-center gap-4 whitespace-nowrap"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--pine)] text-[var(--brass-dim)] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-[var(--pine)] font-display">Cleclo Intelligence</p>
                <p className="text-[var(--ink-soft)] font-sans">
                  Handles order routing &amp; notifications automatically.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isEven ? -50 : 50 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Content card */}
                  <div
                    className={`w-full md:w-5/12 ${isEven ? "md:pr-12" : "md:pl-12"} text-left`}
                  >
                    <motion.div
                      className="bg-[var(--white)] rounded-2xl p-8 border border-[var(--line)] hover:border-[var(--pine)] transition-all duration-300 shadow-sm hover:shadow-md group"
                      whileHover={{ y: -4 }}
                    >
                      {/* Desktop Icon & Mobile Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--pine)] text-[var(--brass-dim)] flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-bold font-mono text-[var(--kraft-line)]">
                          {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-display text-[var(--pine)] mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[var(--ink-soft)] leading-relaxed font-sans text-sm">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center circle with number */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-[var(--pine)] text-[var(--steam)] border-2 border-[var(--steam)] flex items-center justify-center shadow-md"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        bounce: 0.5,
                      }}
                    >
                      <span className="text-lg font-bold font-mono">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-[var(--ink-soft)] mb-4 text-lg font-sans">
            Ready to grow your laundry business?
          </p>
          <motion.a
            href="/signup"
            className="btn btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Become a Vendor
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
