"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shirt, Droplets, Wind, Sparkles, Clock, Check } from "lucide-react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Shirt,
      title: "Dry Clean",
      description:
        "Enable professional dry-cleaning workflows for delicate garments, formal wear and specialty fabrics.",
      features: [
        "Configurable stain treatment workflows.",
        "Fabric specific handling options.",
        "Premium finishing standards.",
      ],
      gradient: "from-violet-500 to-purple-600",
      lightGradient: "from-violet-100 to-purple-100",
      accentColor: "text-violet-500",
      dotColor: "bg-violet-500",
    },
    {
      icon: Droplets,
      title: "Washing",
      description:
        "Enable standardized washing workflows for everyday garments with configurable processes across fabric types.",
      features: [
        "Fabric-wise and color-based wash segregation.",
        "Detergent, water level and cycle configuration.",
        "Quality checks and freshness controls.",
      ],
      gradient: "from-cyan-500 to-blue-500",
      lightGradient: "from-cyan-100 to-blue-100",
      accentColor: "text-cyan-500",
      dotColor: "bg-cyan-500",
    },
    {
      icon: Wind,
      title: "Steam Iron",
      description:
        "Provide professional pressing and finishing services with controlled turnaround times.",
      features: [
        "Consistent finishing quality.",
        "Fabric-safe temperature controls.",
        "Priority processing options.",
      ],
      gradient: "from-orange-400 to-amber-500",
      lightGradient: "from-orange-100 to-amber-100",
      accentColor: "text-orange-500",
      dotColor: "bg-orange-500",
    },
    {
      icon: Sparkles,
      title: "Premium Care",
      description:
        "Enable premium-care workflows for luxury garments, designer wear and high-value items.",
      features: [
        "Specialized handling protocols.",
        "Optional value-protection coverage.",
        "Controlled handover and packaging.",
      ],
      gradient: "from-rose-400 to-pink-500",
      lightGradient: "from-rose-100 to-pink-100",
      accentColor: "text-rose-500",
      dotColor: "bg-rose-500",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="section wrap bg-[var(--steam)]"
    >
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
          <div className="eyebrow mx-auto">Services &amp; Workflows</div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[var(--pine)] text-center mb-4 max-w-4xl mx-auto">
            Services &amp; Standardised Processing Categories
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={index}
                className="group"
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
                  className="h-full bg-[var(--white)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[var(--line)] p-6"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--pine)] text-[var(--brass-dim)] flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Text content */}
                  <h3 className="text-xl font-bold font-display text-[var(--pine)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 border-t border-[var(--kraft-line)] pt-3">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--stamp)] shrink-0" />
                        <span className="text-xs text-[var(--pine-2)] font-mono">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom info badge */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--kraft)] border border-[var(--kraft-line)]">
            <Clock className="w-4 h-4 text-[var(--pine)]" />
            <span className="text-sm font-medium text-[var(--pine)]">
              Priority turnaround options can be configured across all service categories.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
