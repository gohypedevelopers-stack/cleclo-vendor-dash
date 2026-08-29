"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Package,
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  DollarSign,
  BarChart3,
  Clock,
  IndianRupee,
} from "lucide-react";

export default function VendorBenefits() {
  const benefits = [
    {
      icon: Package,
      title: "Multi-Outlet Management",
      description:
        "Centrally manage multiple outlets, vendors and processing units with real-time visibility across orders, capacity and performance.",
      size: "large",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      delay: 0,
    },
    {
      icon: MapPin,
      title: "Smart Order Assignment",
      description:
        "Automatically route orders based on location, capacity, turnaround time and predefined business rules.",
      size: "small",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description:
        "Actionable analytics on revenue, order volume, outlet performance and customer trends- updated in real time.",
      size: "small",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Verification System",
      description:
        "Built-in vendor and rider verification with audit trails to ensure compliance, service quality and operational accountability.",
      size: "medium",
      gradient: "from-orange-500 to-amber-500",
      delay: 0.3,
    },
    {
      icon: BarChart3,
      title: "Revenue Dashboard",
      description:
        "Monitor revenue, commissions, payouts and margins across outlets- with complete financial transparency.",
      size: "medium",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4,
    },
    {
      icon: Zap,
      title: "Flexible Delivery Workflows",
      description:
        "Configure standard and priority delivery workflows with SLA tracking to meet different service commitments.",
      size: "small",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.5,
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description:
        "Configurable pricing rules with automatic GST calculation, invoicing and tax-ready reporting.",
      size: "small",
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.6,
    },
    {
      icon: TrendingUp,
      title: "Vendor Performance Scoring",
      description:
        "Vendor performance tracking based on turnaround time, order accuracy and SLA compliance.",
      size: "small",
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.6,
    },
    {
      icon: Clock,
      title: "24/7 Platform Availability",
      description:
        "Orders, tracking and system workflows remain active 24/7, ensuring uninterrupted operations across outlets and vendors.",
      size: "large",
      gradient: "from-rose-500 via-pink-500 to-purple-500",
      delay: 0.7,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const getGridClass = (size: string, index: number) => {
    switch (size) {
      case "large":
        return index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-3";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <section
      id="features"
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
          <div className="eyebrow mx-auto">Why Choose Us</div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[var(--pine)] text-center mb-4 max-w-4xl mx-auto">
            Purpose Built Tools to Manage Operations, Increase Efficiency and{" "}
            <span className="text-[var(--stamp)]">
              Scale Your Laundry Business with Confidence.
            </span>
          </h2>
          <p className="lede max-w-4xl mx-auto text-center text-[var(--ink-soft)]">
            Ideal for independent laundry owners, multi-outlet operators and backend vendors.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;

            return (
              <motion.div
                key={index}
                className="svc-card group border border-[var(--line)] bg-[var(--white)] rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 40, scale: 0.95 }
                }
                transition={{
                  duration: 0.5,
                  delay: benefit.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Icon */}
                <div className="svc-icon w-12 h-12 rounded-xl bg-[var(--pine)] text-[var(--brass-dim)] flex items-center justify-center mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-[var(--pine)] mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--ink-soft)] font-sans">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
