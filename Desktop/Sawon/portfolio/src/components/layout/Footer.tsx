"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import footerContent from "@/content/footer.json";

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

export function Footer() {
  const { copyright, socialLinks, quickLinks } = footerContent;

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
