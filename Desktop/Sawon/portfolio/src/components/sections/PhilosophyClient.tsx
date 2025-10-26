"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PhilosophyClientProps {
  philosophy: string[];
}

export function PhilosophyClient({ philosophy }: PhilosophyClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-bangladesh-green to-bangladesh-red bg-clip-text text-transparent"
      >
        Our Coaching Philosophy
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {philosophy.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:border-primary transition-all shadow-card hover:shadow-xl h-full group">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold leading-snug pt-1">
                    {principle}
                  </CardTitle>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center pt-12"
      >
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <Link href="/coaching">Explore Our Programs</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
