import { ContactForm } from "@/components/sections/ContactForm";
import { ContactCards } from "@/components/sections/ContactCards";
import { AdmissionsInfo } from "@/components/sections/AdmissionsInfo";
import { loadContent } from "@/lib/content-loader";
import { ContactSchema } from "@/lib/schemas";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Uttara Cricket Academy. We're here to help you start your cricket journey.",
};

export default function Contact() {
  const content = loadContent("contact.json", ContactSchema);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24 space-y-24">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-bangladesh-green to-bangladesh-red bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Ready to join? Have questions about our programs? Contact us to schedule a trial session or learn more about our training programs.
        </p>
      </div>

      {/* Admissions Info */}
      <div className="max-w-4xl mx-auto">
        <AdmissionsInfo />
      </div>

      {/* Contact Form and Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <ContactForm />
        <ContactCards />
      </div>

      {/* Map Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-3 rounded-xl shadow-lg">
            <MapPin className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Find Us</h2>
        </div>
        
        <div className="border-2 rounded-2xl overflow-hidden shadow-card">
          <div className="aspect-video">
            <iframe
              src={content.mapLink}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
        </div>
        
        <div className="bg-card border-2 rounded-2xl p-6 shadow-card">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Our Address</div>
          <div className="space-y-1">
            {content.address.map((line, index) => (
              <p key={index} className="text-base">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
