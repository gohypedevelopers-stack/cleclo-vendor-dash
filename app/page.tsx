import Header from "@/components/customer/Header";
import Hero from "@/components/customer/Hero";
import WhyCleclo from "@/components/customer/WhyCleclo";
import ClecloStandard from "@/components/customer/ClecloStandard";
import HowItWorks from "@/components/customer/HowItWorks";
import Services from "@/components/customer/Services";
import Standardisation from "@/components/customer/Standardisation";
import Sustainability from "@/components/customer/Sustainability";
import Coverage from "@/components/customer/Coverage";
import FAQ from "@/components/customer/FAQ";
import DownloadBand from "@/components/customer/DownloadBand";
import Footer from "@/components/customer/Footer";
import ScrollReveal from "@/components/customer/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <WhyCleclo />
        <ClecloStandard />
        <HowItWorks />
        <Services />
        <Standardisation />
        <Sustainability />
        <Coverage />
        <FAQ />
        <DownloadBand />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
