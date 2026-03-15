import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css'; // Global styles

// Body/UI Text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Display/Headings
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kasama.ph";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Kasama PH',
    default: 'Kasama PH | Ang Kaibigan ng Lola at Lolo',
  },
  description: 'Tech na may puso para sa mga senior ng Pilipinas. Medicine reminders, emergency alerts, and family connection in one simple app.',
  openGraph: {
    title: {
      template: '%s | Kasama PH',
      default: 'Kasama PH | Ang Kaibigan ng Lola at Lolo',
    },
    description: 'Tech na may puso para sa mga senior ng Pilipinas. Medicine reminders, emergency alerts, and family connection in one simple app.',
    url: siteUrl,
    siteName: 'Kasama PH',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | Kasama PH',
      default: 'Kasama PH | Ang Kaibigan ng Lola at Lolo',
    },
    description: 'Tech na may puso para sa mga senior ng Pilipinas. Medicine reminders, emergency alerts, and family connection in one simple app.',
    creator: '@kasamaph',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable} scroll-smooth`}>
      <body className="min-h-screen bg-kasama-cream text-kasama-espresso font-sans antialiased selection:bg-kasama-primary/20" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
