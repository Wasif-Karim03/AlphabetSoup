import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Trophy } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Technique First Approach",
    description:
      "Building repeatable fundamentals with grip, stance, alignment, release, and balance. Focus on proper technique before power and range for long-term success.",
  },
  {
    icon: Trophy,
    title: "Proven Development System",
    description:
      "Structured age-group curricula (U10, U12, U14, U16) with progressive skill targets. High-repetition drills, match simulations, and individualized correction ensure consistent improvement.",
  },
];

export function FeatureCallouts() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="rounded-2xl shadow-card border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
        </div>
      </div>
    </section>
  );
}
