"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, IndianRupee, ThumbsUp, MapPin } from "lucide-react";

// Animated counter component
function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function for smooth animation
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(eased * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: IndianRupee,
      value: 5,
      suffix: "Cr+",
      prefix: "₹",
      label: "Revenue Processed",
      description: "Monthly Transactions",
    },
    {
      icon: Users,
      value: 1000,
      suffix: "+",
      label: "Active Vendors",
      description: "Transacting Partners",
    },
    {
      icon: ThumbsUp,
      value: 98,
      suffix: "%",
      label: "Partner Satisfaction Score",
      description: "Happy Vendors",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section className="section wrap bg-[var(--steam)]">
      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <motion.div
          className="kpi-grid grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="kpi-card"
              >
                <span className="hole"></span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg bg-[var(--pine)] text-[var(--brass-dim)] flex items-center justify-center mb-4"
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Value */}
                <div className="num font-mono">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix || ""}
                  />
                </div>

                {/* Label */}
                <div className="title font-display">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="desc font-mono">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-12 pt-8 border-t border-[var(--line)]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[
            "Secured Payments",
            "GSTIN Verified",
            "ISO Certified",
            "24/7 Vendor Support",
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[var(--ink-soft)] text-sm font-medium"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--stamp)]" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
