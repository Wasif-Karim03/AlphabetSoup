# Contact Form Setup

## Features

✅ **Server Action with Email Integration**
- Uses Resend API for transactional emails
- Server-side form processing
- Server component compatible

✅ **Spam Protection**
- Hidden honeypot field
- Rate limiting (5 submissions per hour per IP)
- Spam detection with silent failure

✅ **User Experience**
- Toast notifications for success/error states
- Loading states during submission
- Auto-reset form on success
- Tap-to-call/chat on mobile devices

✅ **Security & Privacy**
- Minimal logging (no PII stored)
- Server-side validation with Zod
- Rate limiting to prevent abuse
- Honeypot protection

## Setup

### 1. Install Dependencies

The following packages are already installed:
- `resend` - Email API
- `react-hot-toast` - Toast notifications
- `zod` - Schema validation
- `@vercel/analytics` - Analytics
- `@vercel/speed-insights` - Performance monitoring

### 2. Configure Resend

1. Create a Resend account at https://resend.com
2. Get your API key from the dashboard
3. Add to `.env.local`:

```env
RESEND_API_KEY=re_your_api_key_here
```

### 3. Verify Domain (Production)

1. Add your domain in Resend dashboard
2. Add the DNS records provided by Resend
3. Wait for verification (usually within minutes)

### 4. Email Template

The contact form sends emails with:
- **From:** SAWON Academy <noreply@sawonacademy.com>
- **To:** info@sawonacademy.com (configure in code)
- **Reply-To:** User's email address
- **Subject:** New Contact Form Submission from [Name]
- **Content:** All form fields formatted nicely

## Files

### Server Action
- `/src/app/actions/contact.ts` - Main server action with email logic

### Components
- `/src/components/sections/ContactForm.tsx` - Form with toast integration
- `/src/components/sections/ContactCards.tsx` - Tap-to-call implementation
- `/src/app/providers.tsx` - Toast provider setup
- `/src/components/Analytics.tsx` - Analytics wrapper

### Content
- `/src/content/contact.json` - Contact information

## Testing

### Development
Without a Resend API key, the form will:
- Accept submissions
- Show success toast
- Log to console
- NOT send emails

### Production
With a valid Resend API key:
- Emails are sent
- Form submissions are recorded
- Server logs show delivery status

## Rate Limiting

- **Limit:** 5 submissions per hour per IP
- **Reset:** Every hour
- **Response:** User-friendly error message with retry time
- **Storage:** In-memory (use Redis for production)

## Contact Information

Phone numbers are formatted for tap-to-call:
```html
<a href="tel:+8801234567890">+880 1234-567890</a>
```

WhatsApp links open in chat:
```html
<a href="https://wa.me/8801234567890">WhatsApp</a>
```

## Logging

Minimal logging (no PII):
```
[CONTACT FORM] Submission received at 2025-01-01T00:00:00.000Z
[SPAM DETECTED] Honeypot field filled
[DEMO MODE] Would send email: {...}
```

## Error Handling

- Network errors: User-friendly error toast
- Rate limit exceeded: Shows remaining time
- Validation errors: Field-specific messages
- Server errors: Generic error message (detailed in logs)

## Mobile Optimization

All contact information includes proper link formatting:
- Phone numbers: `tel:` protocol
- WhatsApp: Deep links to app
- Email: `mailto:` protocol
- Address: Google Maps link

## Next Steps (Production)

1. **Deploy:** Push to Vercel/hosting
2. **Add API Key:** Configure in environment variables
3. **Verify Domain:** Complete DNS setup in Resend
4. **Monitor:** Check Resend dashboard for delivery stats
5. **Optional:** Add reCAPTCHA v3 for additional protection

