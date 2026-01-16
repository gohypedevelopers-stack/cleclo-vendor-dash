import Header from "@/components/home/header"
import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import HowItWorks from "@/components/home/how-it-works"
import VerificationSystem from "@/components/home/verification-system"
import VendorBenefits from "@/components/home/vendor-benefits"
import WhyChoose from "@/components/home/why-choose"
import CallToAction from "@/components/home/call-to-action"
import Footer from "@/components/home/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <VendorBenefits />
        <Services />
        <VerificationSystem />
        <HowItWorks />
        <WhyChoose />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
