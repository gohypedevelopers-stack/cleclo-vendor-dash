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

  function handleLogin() {
    // Static redirect to dashboard (no login logic for now)
    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="text-center space-y-2">
        <div className="mx-auto w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
          <Store className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Vendor Portal Login
        </h1>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          Manage your orders, track earnings, and update your catalog.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="identifier"
            className="text-xs font-semibold uppercase text-gray-700"
          >
            Mobile or Email
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              id="identifier"
              placeholder="vendor@cleclo.com"
              className="pl-10 bg-green-50/50 border-transparent focus-visible:bg-white focus-visible:border-primary transition-all h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="text-xs font-semibold uppercase text-gray-700"
            >
              Password / OTP
            </Label>
            <a
              href="#"
              className="text-xs font-medium text-primary hover:underline"
            >
              Forgot?
            </a>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="........"
              className="pl-10 pr-10 bg-green-50/50 border-transparent focus-visible:bg-white focus-visible:border-primary transition-all h-11"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 focus:outline-none"
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
            onClick={handleLogin}
            className="w-full h-11 text-base bg-primary hover:bg-primary/90"
          >
            Secure Login
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleLogin}
            className="w-full h-11 text-base border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Request OTP
          </Button>
        </div>
      </div>
    </div>
  );
}
