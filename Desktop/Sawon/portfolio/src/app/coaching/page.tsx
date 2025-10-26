import { ProgramGrid } from "@/components/sections/ProgramGrid";
import { FAQ } from "@/components/sections/FAQ";
import { AdmissionsInfo } from "@/components/sections/AdmissionsInfo";

export const metadata = {
  title: "Programs",
  description: "Explore our age-group training programs designed for cricketers from 8-16 years.",
};

export default function Coaching() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24 space-y-24">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-bangladesh-green to-bangladesh-red bg-clip-text text-transparent">
          Our Training Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Age-group focused training with progressive skill targets. Each program builds on the fundamentals to develop
          complete cricketers who understand technique, tactics, and sportsmanship.
        </p>
      </div>

      {/* Admissions Info */}
      <div className="max-w-4xl mx-auto">
        <AdmissionsInfo />
      </div>

      {/* Programs Grid */}
      <ProgramGrid />

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <FAQ />
      </div>
    </div>
  );
}
