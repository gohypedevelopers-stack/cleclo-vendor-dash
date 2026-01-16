"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/logo.png"
              alt="Cleclo Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition"
            >
              Home
            </a>
            <a
              href="#how"
              className="text-foreground hover:text-primary transition"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/signup">Become a Vendor</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition"
            >
              Home
            </a>
            <a
              href="#how"
              className="text-foreground hover:text-primary transition"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition"
            >
              Contact
            </a>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 w-full"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 w-full">
              <Link href="/signup">Become a Vendor</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
