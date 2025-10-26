'use server'

import { Resend } from 'resend';
import { z } from 'zod';

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  guardianName: z.string().optional(),
  phone: z.string().regex(/^[+]?[\d\s-()]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0).optional(), // Spam protection
});

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_demo_key';
const resend = new Resend(RESEND_API_KEY);

interface RateLimitResult {
  allowed: boolean;
  retryAfter?: number;
}

function checkRateLimit(identifier: string): RateLimitResult {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);
  const RESET_INTERVAL = 3600000; // 1 hour
  const MAX_REQUESTS = 5; // Max 5 submissions per hour

  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + RESET_INTERVAL });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count++;
  return { allowed: true };
}

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    // Get IP from headers (in production, use proper IP detection)
    const ip = 'client-ip'; // Would come from request headers in production
    
    // Check rate limit
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return {
        success: false,
        error: `Rate limit exceeded. Please try again in ${rateLimit.retryAfter} seconds.`,
      };
    }

    // Parse and validate form data
    const rawData = {
      name: formData.get('name'),
      guardianName: formData.get('guardianName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
      honeypot: formData.get('honeypot'), // Hidden spam field
    };

    // Check honeypot
    if (rawData.honeypot && rawData.honeypot !== '') {
      // Spam detected
      console.log('[SPAM DETECTED] Honeypot field filled');
      return {
        success: true, // Fake success to not reveal honeypot
        error: 'Message sent successfully!',
      };
    }

    const validation = contactSchema.safeParse(rawData);
    
    if (!validation.success) {
      return {
        success: false,
        error: validation.error.errors[0].message,
      };
    }

    const data = validation.data;

    // Send email via Resend
    if (RESEND_API_KEY !== 're_demo_key') {
      await resend.emails.send({
        from: 'Uttara Cricket Academy <noreply@uttaracricketacademy.com>',
        to: 'info@uttaracricketacademy.com',
        replyTo: data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Student Name:</strong> ${data.name}</p>
          ${data.guardianName ? `<p><strong>Parent/Guardian:</strong> ${data.guardianName}</p>` : ''}
          <p><strong>Phone/WhatsApp:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      });
    } else {
      // Demo mode - just log
      console.log('[DEMO MODE] Would send email:', {
        to: 'info@uttaracricketacademy.com',
        from: data.email,
        subject: 'New Contact Form Submission',
      });
    }

    // Log successful submission (minimal info)
    console.log('[CONTACT FORM] Submission received at', new Date().toISOString());

    return {
      success: true,
      message: 'Thank you! Your message has been sent. We\'ll get back to you soon.',
    };
  } catch (error) {
    console.error('[CONTACT FORM ERROR]', error);
    return {
      success: false,
      error: 'Something went wrong. Please try again later.',
    };
  }
}

