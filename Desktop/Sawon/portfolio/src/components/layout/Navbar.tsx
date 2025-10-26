"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/coaching" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Logo className="w-16 h-auto" />
            <span className="text-xl font-bold bg-gradient-to-r from-bangladesh-green to-bangladesh-red bg-clip-text text-transparent hidden sm:inline">
              TAREQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-bangladesh-green to-bangladesh-red hover:opacity-90"
              asChild
            >
              <a href="/contact">Join the Academy</a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }
              }}
              className="md:hidden p-2 rounded-md hover:bg-accent"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-2">
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-bangladesh-green to-bangladesh-red hover:opacity-90"
                asChild
              >
                <a href="/contact">Join the Academy</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

