"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Shirt,
  Droplets,
  Wind,
  Sparkles,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Shirt,
      title: "Dry Clean",
      description:
        "Premium dry cleaning service for delicate garments and formal wear",
      features: ["Stain removal", "Gentle on fabrics", "Premium finish"],
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-500/20 to-purple-600/20",
      image: "👔",
    },
    {
      icon: Droplets,
      title: "Wash & Fold",
      description:
        "Professional washing with care for all fabric types and daily wear",
      features: ["Color separation", "Quality detergent", "Fresh scent"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      image: "👕",
    },
    {
      icon: Wind,
      title: "Steam Iron",
      description:
        "Expert pressing and steam ironing service for crisp, wrinkle-free clothes",
      features: ["Crisp finish", "No damage", "Quick service"],
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/20 to-amber-500/20",
      image: "👗",
    },
    {
      icon: Sparkles,
      title: "Premium Care",
      description:
        "Specialized care for luxury fabrics, wedding attire, and designer wear",
      features: ["Expert handling", "Insurance cover", "White glove"],
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-500/20 to-pink-500/20",
      image: "👘",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
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
            className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.2 }}
          >
            Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Services You Can <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive service options to meet diverse customer needs and
            maximize your revenue
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
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
                  className="h-full bg-card rounded-2xl overflow-hidden border border-border transition-all duration-500 hover:border-transparent relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient border on hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ padding: "2px" }}
                  >
                    <div className="absolute inset-[2px] bg-card rounded-2xl" />
                  </motion.div>

                  {/* Card content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon section with gradient background */}
                    <div
                      className={`relative h-40 flex items-center justify-center bg-gradient-to-br ${service.bgGradient} overflow-hidden`}
                    >
                      {/* Animated circles */}
                      <motion.div
                        className="absolute inset-0"
                        animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 blur-xl`}
                        />
                      </motion.div>

                      {/* Icon */}
                      <motion.div
                        className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl`}
                        animate={
                          isHovered
                            ? { scale: 1.1, rotate: 5 }
                            : { scale: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Text content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              isHovered
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0.7, x: 0 }
                            }
                            transition={{ delay: i * 0.05 }}
                          >
                            <CheckCircle
                              className={`w-4 h-4 bg-gradient-to-br ${service.gradient} rounded-full text-white p-0.5`}
                            />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            <Clock className="inline-block w-5 h-5 mr-2 text-primary" />
            All services available with Express Delivery option
          </p>
        </motion.div>
      </div>
    </section>
  );
}
