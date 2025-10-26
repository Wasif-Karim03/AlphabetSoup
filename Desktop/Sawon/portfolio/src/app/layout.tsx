import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getOrganizationSchema, getPersonSchema } from "@/lib/structured-data";
import { Providers } from "./providers";
import { AnalyticsWrapper } from "@/components/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uttaracricketacademy.com"),
  title: {
    default: "Uttara Cricket Academy - Developing Champions",
    template: "%s | Uttara Cricket Academy",
  },
  description:
    "Uttara Cricket Academy (UCA) - Developing disciplined, technically sound cricketers through structured training. Founded by Tareq Bin Delwar in Dhaka's Uttara area.",
  keywords: ["Cricket Academy", "Uttara Cricket", "Cricket Coaching", "Youth Cricket", "Dhaka Cricket", "Cricket Training Bangladesh", "Tareq Bin Delwar"],
  authors: [{ name: "Tareq Bin Delwar", url: "https://uttaracricketacademy.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uttaracricketacademy.com",
    title: "Uttara Cricket Academy - Developing Champions",
    description: "Developing disciplined, technically sound cricketers—one session at a time",
    siteName: "Uttara Cricket Academy",
    images: [
      {
        url: "/og-social-preview.svg",
        width: 1200,
        height: 630,
        alt: "Uttara Cricket Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttara Cricket Academy - Developing Champions",
    description: "Developing disciplined, technically sound cricketers—one session at a time",
    images: ["/og-social-preview.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const personSchema = getPersonSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <AnalyticsWrapper />
        </Providers>
      </body>
    </html>
  );
}
