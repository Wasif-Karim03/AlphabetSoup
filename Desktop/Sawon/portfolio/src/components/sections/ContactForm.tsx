"use client";

import { motion } from "framer-motion";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/actions/contact";
import { Mail } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending} size="lg">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || 'Message sent successfully!');
    } else if (state && !state.success) {
      toast.error(state.error || 'Failed to send message. Please try again.');
    }
  }, [state]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card border-2 rounded-2xl p-8 shadow-card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-primary to-bangladesh-red p-3 rounded-xl shadow-lg">
          <Mail className="w-6 h-6 text-primary-foreground" />
        </div>
        <h2 className="text-3xl font-bold">Send us a Message</h2>
      </div>

      <form action={formAction} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
          <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Student Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Enter student's full name"
            className="h-12"
          />
        </div>

        <div>
          <label htmlFor="guardianName" className="block text-sm font-medium mb-2">
            Parent/Guardian Name (Optional)
          </label>
          <Input
            id="guardianName"
            name="guardianName"
            placeholder="If student is under 18"
            className="h-12"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone/WhatsApp <span className="text-destructive">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+880 1234-567890"
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="h-12"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us how we can help you..."
            rows={6}
            className="resize-none"
          />
        </div>

        <SubmitButton />
      </form>
    </motion.div>
  );
}
