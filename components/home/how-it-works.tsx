export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Register as a Vendor",
      description: "Sign up and complete your profile with business details and verification documents.",
    },
    {
      number: "2",
      title: "Add Your Outlets & Services",
      description: "Create outlets, define services (Dry Clean, Wash, Iron), and set pricing.",
    },
    {
      number: "3",
      title: "Receive Orders & Get Paid",
      description: "Start receiving orders automatically and get paid on time, every time.",
    },
  ]

  return (
    <section id="how" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to grow your laundry business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border h-full">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary mb-6 flex-shrink-0">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4 text-secondary text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
