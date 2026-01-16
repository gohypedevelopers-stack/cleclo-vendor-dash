import { User, Truck, CheckCircle } from "lucide-react"

export default function VerificationSystem() {
  const steps = [
    {
      icon: User,
      title: "User Confirms",
      description: "Customer confirms and uploads photos of their clothing items",
    },
    {
      icon: Truck,
      title: "Rider Verifies",
      description: "Delivery rider verifies physical items match the uploaded images",
    },
    {
      icon: CheckCircle,
      title: "Vendor Verifies",
      description: "Your team confirms items received match customer&apos;s expectations",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Three-Step Verification System</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built-in quality assurance ensures trust and transparency at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 text-secondary text-2xl">→</div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-card rounded-xl p-8 border border-border text-center max-w-2xl mx-auto">
          <p className="text-foreground leading-relaxed">
            Our multi-step verification system creates a transparent ecosystem where every party is accountable. This
            builds customer trust and reduces disputes.
          </p>
        </div>
      </div>
    </section>
  )
}
