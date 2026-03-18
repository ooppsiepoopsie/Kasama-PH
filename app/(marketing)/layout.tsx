import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kasama PH | Ang Kaibigan ng Lola at Lolo',
  description: 'A premium elderly care app for Filipino families, featuring medicine reminders, emergency alerts, and family connection.',
  alternates: {
    canonical: '/',
  },
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
