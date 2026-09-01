import Header from "@/components/home/header";
import { LoginForm } from "@/components/auth/login-form";
import Footer from "@/components/home/footer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--kraft)] font-sans antialiased text-[var(--pine)]">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-8">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

