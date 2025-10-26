import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { FeatureCallouts } from "@/components/sections/FeatureCallouts";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatsStrip />
      <FeatureCallouts />
    </div>
  );
}
