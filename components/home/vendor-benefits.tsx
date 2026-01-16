import { Package, MapPin, TrendingUp, Shield, Zap, DollarSign } from "lucide-react"

export default function VendorBenefits() {
  const benefits = [
    {
      icon: Package,
      title: "Multiple Outlet Management",
      description: "Manage all your laundry outlets from one centralized dashboard",
    },
    {
      icon: MapPin,
      title: "Smart Order Assignment",
      description: "Orders automatically assigned to the nearest outlet for faster service",
    },
    {
      icon: TrendingUp,
      title: "Order Volume Tracking",
      description: "Real-time analytics and insights to track your business growth",
    },
    {
      icon: Shield,
      title: "Verification System",
      description: "Built-in rider and vendor verification for quality assurance",
    },
    {
      icon: Zap,
      title: "Flexible Delivery Options",
      description: "Offer Standard & Express delivery options to maximize revenue",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear pricing structure with automatic GST support",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Key Vendor Benefits</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in today&apos;s competitive market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
