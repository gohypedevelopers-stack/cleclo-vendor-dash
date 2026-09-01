import Header from "@/components/home/header"
import { VendorSignupForm } from "@/components/auth/vendor-signup-form"
import Footer from "@/components/home/footer"

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--kraft)] font-sans antialiased text-[var(--pine)]">
      <Header />
      
      <main className="flex-1 flex flex-col items-center w-full pt-28 pb-16 px-4 sm:px-8">
        <VendorSignupForm />
      </main>
      <Footer />
    </div>
  )
}

