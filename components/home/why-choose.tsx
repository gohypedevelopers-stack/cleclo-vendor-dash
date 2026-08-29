"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  Target,
  Headphones,
  Award,
  Globe,
} from "lucide-react";

export default function WhyChoose() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      icon: TrendingUp,
      title: "Increased Order Volume",
      description:
        "Gain access to a growing network of customers actively seeking professional laundry services in your service area.",
      stat: "3x",
      statLabel: "More Orders",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: BarChart3,
      title: "Smart Automation",
      description:
        "Automate order routing, delivery workflows and customer updates—significantly reducing manual coordination and operational overhead.",
      stat: "80%",
      statLabel: "Less Manual Work",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Target,
      title: "Location-Based Assignment",
      description:
        "Orders are intelligently routed to the most suitable outlet based on proximity and availability, improving turnaround and response times.",
      stat: "15 Min",
      statLabel: "Average Order Acknowledgement Time",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Scalable Growth",
      description:
        "Scale from a single outlet to a multi-location operation with systems designed to support high-volume growth.",
      stat: "10x",
      statLabel: "Scale Potential",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Headphones,
      title: "Platform Reliability",
      description:
        "Built on robust infrastructure with high availability to ensure uninterrupted operations.",
      stat: "99.9%",
      statLabel: "Uptime",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Vendor Recognition",
      description:
        "High-performing vendors may receive enhanced visibility, performance badges and platform recognition.",
      stat: "5★",
      statLabel: "Featured vendors",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section wrap bg-[var(--steam)]">
      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div
          className="section-head text-center mx-auto flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mx-auto flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[var(--pine)]" />
            Join 5000+ Vendors
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--pine)] text-center mb-4 max-w-4xl mx-auto">
            Why Vendors Choose <span className="text-[var(--stamp)]">Cleclo</span>
          </h2>
          <p className="lede max-w-2xl mx-auto text-center text-[var(--ink-soft)]">
            Join thousands of laundry vendors already growing their business with Cleclo.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="h-full bg-[var(--white)] rounded-2xl p-6 md:p-8 border border-[var(--line)] hover:border-[var(--pine)] transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md"
                  whileHover={{ y: -4 }}
                >
                  <div className="relative z-10">
                    {/* Header with icon and stat */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-xl bg-[var(--pine)] text-[var(--brass-dim)] flex items-center justify-center shadow-md"
                      >
                        <IconComponent className="w-7 h-7" />
                      </div>

                      {/* Stat badge */}
                      <div className="text-right">
                        <div className="text-2xl font-bold font-mono text-[var(--stamp)]">
                          {reason.stat}
                        </div>
                        <div className="text-xs text-[var(--ink-soft)] font-mono">
                          {reason.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-display text-[var(--pine)] mb-3">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--ink-soft)] leading-relaxed font-sans text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom testimonial */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex flex-col items-center">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-[var(--pine)] border-2 border-[var(--steam)] shadow-sm"
                />
              ))}
              <div
                className="w-10 h-10 rounded-full bg-[var(--kraft)] border-2 border-[var(--steam)] shadow-sm flex items-center justify-center text-xs font-bold font-mono text-[var(--pine)]"
              >
                +5K
              </div>
            </div>
            <p className="text-[var(--pine)] text-lg font-sans">
              Join <span className="font-bold text-[var(--stamp)]">5,000+</span>{" "}
              laundry and dry-cleaning vendors who trust Cleclo.
            </p>
            <p className="text-[var(--ink-soft)] text-sm font-sans mt-1">
              Designed for long-term partnerships, not short-term transactions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
