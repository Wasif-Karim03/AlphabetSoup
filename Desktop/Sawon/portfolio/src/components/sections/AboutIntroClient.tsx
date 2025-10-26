"use client";

import { motion } from "framer-motion";
import { Award, Target, Users } from "lucide-react";

interface AboutIntroClientProps {
  bio: string[];
}

export function AboutIntroClient({ bio }: AboutIntroClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-bangladesh-green to-bangladesh-red bg-clip-text text-transparent"
        >
          About Coach Tareq
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-muted-foreground max-w-3xl mx-auto"
        >
          Former teacher & cricket coach. Building the next generation of cricketers.
        </motion.p>
      </div>

      {/* Bio Cards */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {bio.map((paragraph, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            className="relative group"
          >
            <div className="bg-card border-2 rounded-2xl p-8 hover:border-primary transition-all shadow-card hover:shadow-xl h-full flex flex-col">
              {/* Icon Indicator */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                {index === 0 && <Users className="w-6 h-6" />}
                {index === 1 && <Target className="w-6 h-6" />}
                {index === 2 && <Award className="w-6 h-6" />}
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed mt-4">
                {paragraph}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
