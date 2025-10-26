import { AboutIntro } from "@/components/sections/AboutIntro";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { Philosophy } from "@/components/sections/Philosophy";

export const metadata = {
  title: "About",
  description: "Learn about Coach Tareq Bin Delwar and Uttara Cricket Academy's approach to developing young cricketers.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24 space-y-24">
      <AboutIntro />
      <QuickFacts />
      <Philosophy />
    </div>
  );
}
