"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Store, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin() {
    if (identifier === "cleclo@vender.com" && password === "123456789") {
      router.push("/dashboard");
    } else if (identifier === "cleclo@admin.com" && password === "123456789") {
      router.push("/admin");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-md space-y-8 relative bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-[var(--kraft-line)] shadow-xl shadow-[var(--pine)]/5">
      <div className="text-center space-y-2">
        <div className="mx-auto w-16 h-16 bg-[var(--pine)] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[var(--pine)]/20 transform hover:scale-105 transition-transform duration-300">
          <Store className="w-8 h-8 drop-shadow-sm" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--pine)]">
          Welcome Back
        </h1>
        <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed font-medium">
          Enter your credentials to access your vendor portal and manage your
          business.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="identifier"
            className="text-xs font-bold uppercase tracking-wider text-slate-600 ml-1"
          >
            Mobile or Email
          </Label>
          <div className="relative group">
            <div className="absolute left-3.5 top-3.5 text-slate-400 group-focus-within:text-[var(--stamp)] transition-colors">
              <User className="h-5 w-5" />
            </div>
            <Input
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="vendor@cleclo.com"
              className="pl-11 h-12 bg-white/80 border-[var(--kraft-line)] focus:bg-white focus:border-[var(--stamp)] focus:ring-4 focus:ring-[var(--stamp)]/10 transition-all rounded-xl placeholder:text-slate-400 text-slate-900 font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="text-xs font-bold uppercase tracking-wider text-slate-600 ml-1"
            >
              Password
            </Label>
            <a
              href="#"
              className="text-xs font-semibold text-[var(--stamp)] hover:underline transition-colors"
            >
              Forgot Password?
            </a>
          </div>
          <div className="relative group">
            <div className="absolute left-3.5 top-3.5 text-slate-400 group-focus-within:text-[var(--stamp)] transition-colors">
              <Lock className="h-5 w-5" />
            </div>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pl-11 pr-10 h-12 bg-white/80 border-[var(--kraft-line)] focus:bg-white focus:border-[var(--stamp)] focus:ring-4 focus:ring-[var(--stamp)]/10 transition-all rounded-xl placeholder:text-slate-400 text-slate-900 font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleLogin}
            className="w-full h-12 text-sm font-semibold border-[var(--kraft-line)] text-[var(--pine)] hover:bg-[var(--kraft)] hover:border-slate-300 rounded-xl transition-all"
          >
            Get OTP Instead
          </Button>

          <Button
            type="button"
            onClick={handleLogin}
            className="w-full h-12 text-sm font-semibold bg-[var(--pine)] hover:bg-[var(--pine)]/90 text-white shadow-lg shadow-[var(--pine)]/20 transition-all duration-300 rounded-xl"
          >
            Secure Login
          </Button>

          <div className="pt-1">
            <p className="text-xs text-slate-500 text-center font-medium">
              🔒 Your data is encrypted and securely stored.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-slate-500 font-medium">
          By logging in, you agree to our{" "}
          <a href="#" className="underline hover:text-slate-800">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-slate-800">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
