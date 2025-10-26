"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, Target, Trophy, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProgramGridClientProps {
  programs: Array<{
    id: string;
    name: string;
    description: string;
    ages: string;
    focus: string;
    sessionFormat: string;
    cadence: string;
    fees: string;
    features: string[];
  }>;
}

const programIcons: Record<string, any> = {
  starter: Target,
  development: Trophy,
  performance: Sparkles,
  "holiday-camp": Users,
};

export function ProgramGridClient({ programs }: ProgramGridClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {programs.map((program, index) => {
          const Icon = programIcons[program.id] || Target;
          
          return (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Card className="h-full flex flex-col hover:border-primary transition-all shadow-card hover:shadow-2xl hover:-translate-y-1">
                {/* Header with Icon */}
                <CardHeader className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-primary to-bangladesh-red p-3 rounded-xl shadow-lg">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl font-bold">
                          {program.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{program.ages}</p>
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="flex-1 space-y-6">
                  {/* Program Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Session
                      </div>
                      <div className="text-sm font-medium">{program.sessionFormat}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Frequency
                      </div>
                      <div className="text-sm font-medium">{program.cadence}</div>
                    </div>
                  </div>

                  {/* Focus Area */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground">Focus Area:</div>
                    <p className="text-sm leading-relaxed">{program.focus}</p>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Monthly Fee</span>
                      <div className="text-3xl font-bold bg-gradient-to-r from-bangladesh-green to-bangladesh-red bg-clip-text text-transparent">
                        {program.fees}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold mb-3">What's Included:</div>
                    <div className="grid grid-cols-1 gap-2">
                      {program.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Footer */}
                <CardFooter>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/contact">
                      Enroll Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

