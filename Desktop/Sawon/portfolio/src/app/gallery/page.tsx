import { MediaGrid } from "@/components/sections/MediaGrid";

export const metadata = {
  title: "Gallery",
  description: "Explore training sessions, match highlights, and academy activities.",
};

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-bangladesh-green to-bangladesh-red bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Explore our training sessions, match highlights, and academy activities. Watch our players develop their skills
          through structured training, drills, and competitive play.
        </p>
      </div>

      {/* Gallery Grid */}
      <MediaGrid />
    </div>
  );
}

