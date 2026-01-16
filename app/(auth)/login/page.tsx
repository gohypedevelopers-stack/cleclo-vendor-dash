import { AuthHeader } from "@/components/auth/auth-header"
import { LoginForm } from "@/components/auth/login-form"
import Footer from "@/components/home/footer"

export default function LoginPage() {
  return (
    <div className="bg-background font-sans">
      <AuthHeader />
      
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <LoginForm />
      </main>
      <Footer />
    </div>
  )
}
