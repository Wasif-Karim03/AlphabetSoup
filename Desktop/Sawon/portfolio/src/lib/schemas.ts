import { z } from "zod";

// Site Schema
export const SiteSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  location: z.string(),
  languages: z.array(z.string()),
  socialLinks: z.object({
    facebook: z.string().url(),
    instagram: z.string().url(),
    twitter: z.string().url(),
    youtube: z.string().url(),
    linkedin: z.string().url(),
  }),
  phone: z.string(),
  email: z.string().email(),
});

export type Site = z.infer<typeof SiteSchema>;

// Home Schema
export const HomeSchema = z.object({
  hero: z.object({
    heading: z.string(),
    subheading: z.string(),
    description: z.string(),
  }),
  ctas: z.object({
    primary: z.object({
      text: z.string(),
      href: z.string(),
    }),
    secondary: z.object({
      text: z.string(),
      href: z.string(),
    }),
  }),
  highlightStats: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      description: z.string(),
    })
  ),
});

export type Home = z.infer<typeof HomeSchema>;

// About Schema
export const AboutSchema = z.object({
  bio: z.array(z.string()),
  quickFacts: z.object({
    role: z.string(),
    academy: z.string(),
    background: z.string(),
    focus: z.string(),
    experience: z.string(),
  }),
  philosophy: z.array(z.string()),
});

export type About = z.infer<typeof AboutSchema>;

// Experience Schema
export const ExperienceSchema = z.object({
  roles: z.array(
    z.object({
      title: z.string(),
      org: z.string(),
      location: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      bullets: z.array(z.string()),
    })
  ),
});

export type Experience = z.infer<typeof ExperienceSchema>;

// Programs Schema
export const ProgramsSchema = z.object({
  programs: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      duration: z.string(),
      focus: z.string(),
      deliverables: z.string(),
      price: z.string(),
      features: z.array(z.string()),
    })
  ),
});

export type Programs = z.infer<typeof ProgramsSchema>;

// Facilities Schema
export const FacilitiesSchema = z.object({
  venues: z.array(
    z.object({
      name: z.string(),
      location: z.string(),
      description: z.string(),
      features: z.array(z.string()),
    })
  ),
  equipment: z.array(z.string()),
  notes: z.string(),
});

export type Facilities = z.infer<typeof FacilitiesSchema>;

// Highlights Schema
export const HighlightsSchema = z.object({
  achievements: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.number(),
    })
  ),
});

export type Highlights = z.infer<typeof HighlightsSchema>;

// Testimonials Schema
export const TestimonialsSchema = z.object({
  testimonials: z.array(
    z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
    })
  ),
});

export type Testimonials = z.infer<typeof TestimonialsSchema>;

// Contact Schema
export const ContactSchema = z.object({
  address: z.array(z.string()),
  mapLink: z.string().url(),
  phone: z.string(),
  whatsapp: z.string(),
  email: z.string().email(),
  availability: z.object({
    status: z.string(),
    timezone: z.string(),
    responseTime: z.string(),
    note: z.string(),
  }),
  socialMedia: z.object({
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    email: z.string().optional(),
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
    whatsapp: z.string().url().optional(),
  }),
});

export type Contact = z.infer<typeof ContactSchema>;

// Gallery Schema
export const GallerySchema = z.object({
  mediaItems: z.array(
    z.object({
      id: z.string(),
      type: z.enum(["image", "video"]),
      url: z.string().url(),
      thumbnail: z.string().url(),
      title: z.string(),
      description: z.string(),
    })
  ),
});

export type Gallery = z.infer<typeof GallerySchema>;

