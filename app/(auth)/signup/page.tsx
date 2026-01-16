import { AuthHeader } from "@/components/auth/auth-header"
import { VendorSignupForm } from "@/components/auth/vendor-signup-form"
import Footer from "@/components/home/footer"

export default function SignupPage() {
  return (
    <div className="bg-background font-sans min-h-screen flex flex-col">
      <AuthHeader />
      
      <main className="flex-1 flex flex-col items-center w-full pt-20 pb-10">
        <VendorSignupForm />
      </main>
      <Footer />
    </div>
  )
}
