"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const heroData = {
  heading: "Tareq Bin Delwar",
  subheading: "Founder & Head Coach, Uttara Cricket Academy",
  description:
    "Developing disciplined, technically sound cricketers—one session at a time. Building future champions through structured training, match simulations, and fitness-focused sessions.",
  ctas: {
    primary: {
      text: "Join the Academy",
      href: "/contact",
    },
    secondary: {
      text: "View Programs",
      href: "/coaching",
    },
  },
};

export function Hero() {
  const { heading, subheading, description, ctas } = heroData;

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          {heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-4"
        >
          {subheading}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
        <Button size="lg" asChild>
          <a href="/contact">{ctas.primary.text}</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="/coaching">{ctas.secondary.text}</a>
        </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
