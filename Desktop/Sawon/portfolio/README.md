# SAWON Academy Website

A modern, accessible website for SAWON Academy built with Next.js, React, and TypeScript.

## Features

✅ **Server Components & Actions**
✅ **SEO Optimized** (Meta tags, JSON-LD, Sitemap, Robots.txt)
✅ **Accessibility** (WCAG AA, Keyboard Navigation, Screen Reader Support)
✅ **Performance** (Optimized images, Font preloading, Analytics)
✅ **Contact Form** (Resend email integration, Spam protection, Rate limiting)
✅ **Content Management** (JSON-based, Zod validation)
✅ **Responsive Design** (Mobile-first, Bangladesh flag inspired theme)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, Shadcn UI
- **Validation:** Zod
- **Email:** Resend
- **Analytics:** Vercel Analytics, Speed Insights
- **Testing:** Jest, Testing Library
- **Linting:** ESLint, Prettier, jsx-a11y

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Add your Resend API key (optional for development):
```env
RESEND_API_KEY=re_your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Editing

All content is managed through JSON files in `src/content/`:

### Available Content Files

- `site.json` - General site information
- `home.json` - Hero section, CTAs, stats
- `about.json` - Bio, quick facts, philosophy
- `programs.json` - Coaching programs details
- `contact.json` - Contact information
- `gallery.json` - Media items for gallery
- `testimonials.json` - Client testimonials
- `highlights.json` - Achievements
- `experience.json` - Professional experience

### Editing Content

1. Navigate to `src/content/[filename].json`
2. Edit the JSON following the existing structure
3. Save the file (changes hot-reload in dev)
4. Content is automatically validated with Zod schemas

### Adding New Content

When adding new content:

1. Update the corresponding schema in `src/lib/schemas.ts`
2. Add the content to the JSON file
3. Use the component in your pages

## Project Structure

```
portfolio/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── actions/         # Server actions
│   │   ├── about/
│   │   ├── coaching/
│   │   ├── contact/
│   │   ├── gallery/
│   │   └── layout.tsx
│   ├── components/          # React components
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/      # Page sections
│   │   └── ui/            # UI components
│   ├── content/           # JSON content files
│   ├── lib/              # Utilities, schemas
│   └── styles/
├── public/               # Static assets
├── jest.config.ts       # Jest configuration
└── package.json
```

## Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm run test         # Run tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues

# Type Checking
npm run type-check   # Check TypeScript
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- ContactForm
```

### Accessibility Testing

The project includes automated accessibility checks:

```bash
# Run accessibility linter
npm run lint

# Manual testing with axe DevTools
# Install browser extension: https://www.deque.com/axe/devtools/
```

Accessibility features:
- Color contrast (AA compliant)
- Keyboard navigation
- Screen reader support
- ARIA labels and roles
- Semantic HTML
- Focus management

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `RESEND_API_KEY`
4. Deploy

The site will be live at `your-domain.vercel.app`

### Environment Variables

Required for production:

```env
RESEND_API_KEY=re_your_api_key_here  # For contact form emails
```

Optional:

```env
NEXT_PUBLIC_SITE_URL=https://sawon.dev  # For absolute URLs
```

### Email Setup (Production)

1. Create a [Resend account](https://resend.com)
2. Add your domain in the Resend dashboard
3. Add DNS records (DKIM, SPF)
4. Get your API key
5. Add to Vercel environment variables
6. Update email addresses in `src/app/actions/contact.ts`:

```typescript
from: 'SAWON Academy <noreply@your-domain.com>',
to: 'info@your-domain.com',
```

## Customization

### Theme Colors

Edit `src/app/globals.css`:

```css
--brand: #006A4E;      /* Bangladesh green */
--accent: #DA291C;    /* Bangladesh red */
--bg: #0B0F13;        /* Dark background */
--fg: #111827;        /* Foreground */
```

### Fonts

Currently using:
- **Headings:** Poppins (Google Fonts)
- **Body:** Inter (Google Fonts)

To change fonts, edit `src/app/layout.tsx` and `globals.css`.

### Adding New Pages

1. Create page file: `src/app/[route]/page.tsx`
2. Add route to Navbar: `src/components/layout/Navbar.tsx`
3. Add to sitemap: `src/app/sitemap.ts`
4. Add to Footer links: `src/content/footer.json`

## Testing

### Unit Tests

Tests are located in `src/**/__tests__/` directories.

To add a new test:

```typescript
// src/components/__tests__/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Accessibility Tests

Run automated checks:

```bash
npm run lint  # Includes jsx-a11y rules
```

### Manual Testing Checklist

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets AA standards
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] Links are descriptive
- [ ] Page works with screen reader
- [ ] Mobile responsive

## Performance

The site is optimized for performance:

- **Image optimization** via Next.js Image component
- **Font optimization** with `display: swap`
- **Code splitting** automatically
- **Static generation** where possible
- **Analytics** via Vercel Analytics
- **Speed insights** via Vercel Speed Insights

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Run tests: `npm test`
6. Run linter: `npm run lint`
7. Submit a pull request

## License

© 2025 SAWON Academy. All rights reserved.

## Support

For questions or issues:
- Email: info@sawonacademy.com
- Phone: +880 1234-567890
- Website: https://sawon.dev
