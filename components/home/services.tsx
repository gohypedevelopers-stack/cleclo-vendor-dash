import { Shirt, Droplets, Wind } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Shirt,
      title: "Dry Clean",
      description: "Premium dry cleaning service for delicate garments",
    },
    {
      icon: Droplets,
      title: "Wash Only",
      description: "Professional washing with care for all fabric types",
    },
    {
      icon: Wind,
      title: "Iron",
      description: "Expert pressing and ironing service",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services You Can Offer</h2>
          <p className="text-xl text-muted-foreground">Comprehensive service options to meet diverse customer needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="h-32 bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
