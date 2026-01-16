import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-pretty text-foreground">
              Grow Your Laundry Business with Our <span className="text-primary">Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Manage orders, outlets, and deliveries effortlessly with smart automation. Scale your business while we
              handle the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join as Vendor
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-2xl blur-3xl opacity-30"></div>
              <div className="relative bg-card rounded-2xl p-12 shadow-lg border border-border">
                <div className="space-y-4">
                  <div className="h-12 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
