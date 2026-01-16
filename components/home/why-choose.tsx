import { TrendingUp, BarChart3, Users, Zap } from "lucide-react"

export default function WhyChoose() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Increased Order Volume",
      description: "Access to a large network of customers looking for quality laundry services",
    },
    {
      icon: BarChart3,
      title: "Reduced Manual Coordination",
      description: "Automation handles order matching and delivery logistics",
    },
    {
      icon: Users,
      title: "Location-Based Assignment",
      description: "Smart algorithms ensure orders go to the nearest outlet for faster service",
    },
    {
      icon: Zap,
      title: "Scalable Growth",
      description: "Grow from single outlet to multi-location operation effortlessly",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Our Platform</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful vendors already growing their business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className="flex gap-6 p-6 bg-background rounded-xl border border-border hover:border-secondary transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
