import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Join the Waitlist | Be the First to Experience Kasama PH",
  description: "Sign up to get early access to Kasama PH. Join our family and help us shape the future of elderly care in the Philippines.",
  alternates: {
    canonical: '/waitlist',
  },
}

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
