"use client";

import { motion } from "framer-motion";
import { Award, School, Users, Calendar, Target } from "lucide-react";

interface QuickFactsClientProps {
  quickFacts: {
    role: string;
    academy: string;
    background: string;
    focus: string;
    experience: string;
  };
}

export function QuickFactsClient({ quickFacts }: QuickFactsClientProps) {
  const iconMap: Record<string, any> = {
    role: Award,
    academy: School,
    background: Users,
    focus: Target,
    experience: Calendar,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        Quick Facts
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {Object.entries(quickFacts).map(([key, value], index) => {
          const Icon = iconMap[key];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border-2 rounded-2xl p-6 text-center hover:border-primary transition-all shadow-card hover:shadow-lg"
            >
              {Icon && <Icon className="w-8 h-8 text-primary mx-auto mb-3" />}
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{value}</div>
              <div className="text-sm text-muted-foreground capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

