import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css'; // Global styles
import { LanguageProvider } from '@/lib/i18n';

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
  description: 'A premium elderly care app for Filipino families, featuring medicine reminders, emergency alerts, and family connection.',
  keywords: [
    'elderly care app Philippines', 
    'medicine reminder for seniors', 
    'Filipino family care app', 
    'senior safety alert app', 
    'remote care for elderly parents', 
    'Kasama PH', 
    'senior care Philippines',
    'OFW family app',
    'senior health monitoring Philippines'
  ],
  authors: [{ name: 'Kasama PH Team' }],
  creator: 'Kasama PH',
  publisher: 'Kasama PH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Kasama PH | Ang Kaibigan ng Lola at Lolo',
    description: 'A premium elderly care app for Filipino families, featuring medicine reminders, emergency alerts, and family connection.',
    url: siteUrl,
    siteName: 'Kasama PH',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kasama PH | Ang Kaibigan ng Lola at Lolo',
    description: 'A premium elderly care app for Filipino families, featuring medicine reminders, emergency alerts, and family connection.',
    creator: '@kasamaph',
  },
  alternates: {
    canonical: '/',
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
    <html lang="en" className={`${inter.variable} ${nunito.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-kasama-cream text-kasama-espresso font-sans antialiased selection:bg-kasama-primary/20" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
