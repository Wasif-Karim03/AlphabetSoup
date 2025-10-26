"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, Globe, Mail, Calendar, MessageSquare } from "lucide-react";
import { Contact } from "@/lib/schemas";

interface ContactCardsClientProps {
  content: Contact;
}

export function ContactCardsClient({ content }: ContactCardsClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Contact Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="hover:border-primary transition-all shadow-card hover:shadow-xl">
          <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Get In Touch</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <a 
              href={`tel:${content.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Phone/WhatsApp</div>
                <div className="font-semibold group-hover:text-primary transition-colors">{content.phone}</div>
              </div>
            </a>

            <a 
              href={`mailto:${content.email}`} 
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</div>
                <div className="font-semibold group-hover:text-primary transition-colors">{content.email}</div>
              </div>
            </a>
          </CardContent>
        </Card>
      </motion.div>

      {/* Availability Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="hover:border-primary transition-all shadow-card hover:shadow-xl">
          <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Training Schedule</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Status</div>
                <div className="font-semibold">{content.availability.status}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Response Time</div>
                <div className="font-semibold">{content.availability.responseTime}</div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4 border-t pt-4">
              {content.availability.note}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Social Media Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="hover:border-primary transition-all shadow-card hover:shadow-xl">
          <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Follow Us</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 pt-6">
            {content.socialMedia.facebook && (
              <a 
                href={content.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <span className="text-blue-600 group-hover:text-white font-bold">f</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold group-hover:text-primary transition-colors">Facebook</div>
                  <div className="text-sm text-muted-foreground">Connect with us</div>
                </div>
              </a>
            )}

            {content.socialMedia.instagram && (
              <a 
                href={content.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                  <span className="text-pink-600 group-hover:text-white font-bold">@</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold group-hover:text-primary transition-colors">Instagram</div>
                  <div className="text-sm text-muted-foreground">See our updates</div>
                </div>
              </a>
            )}

            {content.socialMedia.youtube && (
              <a 
                href={content.socialMedia.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <span className="text-red-600 group-hover:text-white font-bold">YT</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold group-hover:text-primary transition-colors">YouTube</div>
                  <div className="text-sm text-muted-foreground">Watch our videos</div>
                </div>
              </a>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

