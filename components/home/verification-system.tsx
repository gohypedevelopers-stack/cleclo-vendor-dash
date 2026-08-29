"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  User,
  Truck,
  Store,
  CheckCircle,
  Camera,
  Package,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function VerificationSystem() {
  const steps = [
    {
      icon: User,
      badge: Camera,
      title: "Customer Confirmation",
      description:
        "Order details and item condition are digitally recorded at initiation, creating a reference point for the entire service lifecycle.",
      gradient: "from-blue-500 to-cyan-500",
      lightGradient: "from-blue-50 to-cyan-50",
      dotColor: "bg-blue-500",
    },
    {
      icon: Truck,
      badge: Package,
      title: "Pickup Verification",
      description:
        "Items are verified at pickup to ensure consistency with recorded order details, establishing a secure handover.",
      gradient: "from-orange-400 to-amber-500",
      lightGradient: "from-orange-50 to-amber-50",
      dotColor: "bg-orange-500",
    },
    {
      icon: Store,
      badge: CheckCircle,
      title: "Vendor Intake Verification",
      description:
        "Items are validated at the processing stage to confirm condition, service scope and handling requirements before execution.",
      gradient: "from-green-500 to-emerald-500",
      lightGradient: "from-green-50 to-emerald-50",
      dotColor: "bg-green-500",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section wrap bg-[var(--steam)]">
      <div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Section header */}
        <motion.div
          className="section-head text-center mx-auto flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mx-auto flex items-center gap-2">
            <Shield className="w-3.5 h-3.5" />
            Trust &amp; Safety
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[var(--pine)] text-center mb-3 max-w-3xl mx-auto">
            3-Step <span className="text-[var(--stamp)]">Order Verification System</span>
          </h2>
          <p className="lede max-w-2xl mx-auto text-center text-[var(--ink-soft)]">
            A built-in verification framework that ensures accountability,
            reduces disputes and maintains service quality across every order.
          </p>
        </motion.div>

        {/* Step cards with arrows */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const BadgeIcon = step.badge;

              return (
                <motion.div
                  key={index}
                  className="relative group h-full"
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Arrow connector (between cards) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-5 z-20 -translate-y-1/2">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{ delay: index * 0.15 + 0.4 }}
                      >
                        <ArrowRight className="w-4 h-4 text-[var(--kraft-line)]" />
                      </motion.div>
                    </div>
                  )}

                  <motion.div
                    className="bg-[var(--white)] rounded-2xl p-6 border border-[var(--line)] hover:border-[var(--pine)] transition-all duration-300 text-left relative overflow-hidden shadow-sm hover:shadow-md h-full flex flex-col"
                    whileHover={{ y: -4 }}
                  >
                    {/* Step number watermark */}
                    <div className="absolute top-3 right-4 text-5xl font-bold font-mono text-[var(--kraft-line)] opacity-60 select-none">
                      {index + 1}
                    </div>

                    {/* Icon with badge */}
                    <div className="relative inline-flex mb-5 self-start">
                      <div
                        className="w-14 h-14 rounded-xl bg-[var(--pine)] text-[var(--brass-dim)] flex items-center justify-center shadow-md"
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Small badge icon */}
                      <div
                        className="absolute -bottom-1 -right-1 w-6 h-6 rounded-md bg-[var(--kraft)] border border-[var(--kraft-line)] flex items-center justify-center"
                      >
                        <BadgeIcon
                          className="w-3 h-3 text-[var(--stamp)]"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold font-display text-[var(--pine)] mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust message */}
        <motion.div
          className="mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-[var(--kraft)] rounded-xl p-5 border border-[var(--kraft-line)] text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--pine)] text-[var(--brass-dim)] flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <p className="text-base text-[var(--pine)] font-sans">
                Helps reduce order disputes by up to{" "}
                <strong className="font-bold text-[var(--stamp)]">
                  90% through transparent and auditable workflows.
                </strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
