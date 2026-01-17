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
} from "lucide-react";

export default function VerificationSystem() {
  const steps = [
    {
      icon: User,
      badge: Camera,
      title: "Customer Confirms",
      description:
        "Customer uploads photos of their clothing items before pickup for documentation",
      color: "from-blue-500 to-cyan-500",
      accent: "blue",
    },
    {
      icon: Truck,
      badge: Package,
      title: "Rider Verifies",
      description:
        "Delivery rider verifies physical items match the uploaded images during pickup",
      color: "from-orange-500 to-amber-500",
      accent: "orange",
    },
    {
      icon: Store,
      badge: CheckCircle,
      title: "Vendor Confirms",
      description:
        "Your team confirms items received match customer's expectations before processing",
      color: "from-green-500 to-emerald-500",
      accent: "green",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px]">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <motion.circle
              cx="200"
              cy="300"
              r="150"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.circle
              cx="600"
              cy="300"
              r="150"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.7 }}
            />
            <motion.circle
              cx="1000"
              cy="300"
              r="150"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.9 }}
            />
          </svg>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.2 }}
          >
            <Shield className="w-4 h-4" />
            Trust & Safety
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            3-Step <span className="gradient-text">Verification</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built-in quality assurance ensures trust and transparency at every
            stage
          </p>
        </motion.div>

        {/* Steps with connecting arrows */}
        <div className="relative">
          {/* Connection lines - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 px-20">
            <svg
              className="w-full h-12"
              viewBox="0 0 800 50"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 25 L 350 25"
                stroke="url(#gradient1)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10 5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path
                d="M 450 25 L 800 25"
                stroke="url(#gradient2)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10 5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Step cards */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const BadgeIcon = step.badge;

              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-500 text-center relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/5"
                    whileHover={{ y: -10 }}
                  >
                    {/* Background glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Step number */}
                    <div className="absolute top-4 right-4 text-6xl font-bold text-muted/20">
                      {index + 1}
                    </div>

                    {/* Icon with badge */}
                    <div className="relative inline-flex mb-6">
                      <motion.div
                        className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-12 h-12 text-white" />
                      </motion.div>

                      {/* Small badge icon */}
                      <motion.div
                        className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-white shadow-lg border-2 border-card flex items-center justify-center`}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          delay: index * 0.2 + 0.5,
                          type: "spring",
                        }}
                      >
                        <BadgeIcon
                          className={`w-5 h-5 text-${step.accent}-500`}
                        />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative dots */}
                    <div className="flex justify-center gap-2 mt-6">
                      {[0, 1, 2].map((dot) => (
                        <motion.div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${dot === index ? `bg-gradient-to-r ${step.color}` : "bg-muted"}`}
                          animate={dot === index ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust message */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            <div className="relative z-10">
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-lg text-foreground leading-relaxed">
                Our multi-step verification creates a{" "}
                <strong>transparent ecosystem</strong> where every party is
                accountable. This builds customer trust and{" "}
                <strong>reduces disputes by 90%</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
