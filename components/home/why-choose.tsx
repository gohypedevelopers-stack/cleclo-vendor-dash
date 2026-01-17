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
        "Access to a large network of customers actively looking for quality laundry services in your area",
      stat: "3x",
      statLabel: "More orders",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: BarChart3,
      title: "Smart Automation",
      description:
        "Automation handles order matching, delivery logistics, and customer communication seamlessly",
      stat: "80%",
      statLabel: "Less manual work",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Target,
      title: "Location-Based Assignment",
      description:
        "Smart algorithms ensure orders go to the nearest outlet for faster, more efficient service",
      stat: "15min",
      statLabel: "Avg. response time",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Scalable Growth",
      description:
        "Grow from single outlet to multi-location operation effortlessly with our platform",
      stat: "10x",
      statLabel: "Scale potential",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Dedicated support team available round the clock to help you resolve any issues",
      stat: "99.9%",
      statLabel: "Uptime",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Premium Recognition",
      description:
        "Top performing vendors get featured prominently, earning badges and priority listings",
      stat: "5★",
      statLabel: "Featured vendors",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent" />
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
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.2 }}
          >
            <Globe className="w-4 h-4" />
            Join 5000+ Vendors
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">Our Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful vendors already growing their business
            with us
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
                  className="h-full bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-transparent transition-all duration-500 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Gradient border on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  >
                    <div className="absolute inset-[1px] bg-background rounded-2xl" />
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-30`}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Header with icon and stat */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg`}
                        animate={
                          isHovered
                            ? { scale: 1.1, rotate: 5 }
                            : { scale: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </motion.div>

                      {/* Stat badge */}
                      <div className="text-right">
                        <motion.div
                          className={`text-2xl font-bold bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}
                          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                        >
                          {reason.stat}
                        </motion.div>
                        <div className="text-xs text-muted-foreground">
                          {reason.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={{ scaleX: 0 }}
                      animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
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
                <motion.div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary border-3 border-card shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                />
              ))}
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/20 border-3 border-card shadow-lg flex items-center justify-center text-sm font-bold text-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 1.5, type: "spring" }}
              >
                +5K
              </motion.div>
            </div>
            <p className="text-muted-foreground">
              Join <span className="font-semibold text-foreground">5,000+</span>{" "}
              vendors who trust our platform
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
