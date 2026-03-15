import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { UserPlus, HeartPulse, ShieldCheck, QrCode, Smartphone, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, Float } from "@/components/animations/FadeIn"

export const metadata: Metadata = {
  title: "How It Works | Simple Setup for Seniors",
  description: "Learn how easy it is to set up Kasama PH. Remote configuration for family members and simple QR code login for seniors. No passwords needed.",
  alternates: {
    canonical: '/how-it-works',
  },
}

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to set up Kasama PH",
    "description": "Step-by-step guide to setting up the Kasama PH app for your family.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Create Family Account",
        "text": "The primary caregiver downloads the app and creates the main family account."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Setup Senior Profile",
        "text": "Add Lola or Lolo's details, medicine schedule, and emergency contacts remotely."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "QR Code Scan",
        "text": "Senior scans a unique QR code to instantly log in and configure their device."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. AEO SUMMARY HEADER */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-kasama-cream">
        <FadeIn className="mx-auto max-w-3xl text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-kasama-espresso sm:text-6xl">
            Simple Setup. Zero Frustration.
          </h1>
          {/* AEO Optimized Summary Block */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 text-left md:text-center">
            <p className="text-lg text-kasama-espresso font-medium leading-relaxed">
              Setting up Kasama PH is designed to be handled entirely by the family member remotely. You configure the health data and preferences on your phone, and generate a simple QR code. Your parent just scans it to instantly log in and configure their device.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 2. SETUP TIMELINE */}
      <Section className="bg-white">
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            The Onboarding Journey
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            We removed passwords and complicated menus for our seniors. Here is how the family sets it up in four easy steps.
          </p>
        </FadeIn>

        <div className="mx-auto max-w-4xl">
          <ol className="relative border-l-2 border-kasama-primary/20 ml-4 md:ml-0 space-y-12">
            {/* Step 1 */}
            <li className="pl-10 relative">
              <FadeIn delay={0.1}>
                <div className="absolute -left-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-kasama-primary text-white shadow-md ring-4 ring-white">
                  <UserPlus className="h-5 w-5" aria-hidden="true" />
                </div>
                <Card>
                  <CardHeader>
                    <div className="text-sm font-bold text-kasama-primary uppercase tracking-wider mb-1">Step 1</div>
                    <CardTitle>Create Family Account</CardTitle>
                    <CardDescription>
                      The primary caregiver (like Leo or Annie) downloads the app and creates the main family account. This acts as the central hub for all alerts and settings.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            </li>

            {/* Step 2 */}
            <li className="pl-10 relative">
              <FadeIn delay={0.2}>
                <div className="absolute -left-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-kasama-secondary text-white shadow-md ring-4 ring-white">
                  <HeartPulse className="h-5 w-5" aria-hidden="true" />
                </div>
                <Card>
                  <CardHeader>
                    <div className="text-sm font-bold text-kasama-secondary uppercase tracking-wider mb-1">Step 2</div>
                    <CardTitle>Setup Senior Profile & Health</CardTitle>
                    <CardDescription>
                      Add Lola or Lolo&apos;s details. Input their daily medicine schedule, doctor&apos;s contact information, and emergency hotlines. All of this is done remotely by the family member.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            </li>

            {/* Step 3 */}
            <li className="pl-10 relative">
              <FadeIn delay={0.3}>
                <div className="absolute -left-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-kasama-espresso text-white shadow-md ring-4 ring-white">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <Card>
                  <CardHeader>
                    <div className="text-sm font-bold text-kasama-espresso uppercase tracking-wider mb-1">Step 3</div>
                    <CardTitle>Preferences & Consent</CardTitle>
                    <CardDescription>
                      Adjust the app&apos;s text size, volume, and language preferences (e.g., Tagalog or English). Review and agree to the privacy and location tracking consents required for Bantay SOS.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            </li>

            {/* Step 4 */}
            <li className="pl-10 relative">
              <FadeIn delay={0.4}>
                <div className="absolute -left-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-kasama-primary text-white shadow-md ring-4 ring-white">
                  <QrCode className="h-5 w-5" aria-hidden="true" />
                </div>
                <Card>
                  <CardHeader>
                    <div className="text-sm font-bold text-kasama-primary uppercase tracking-wider mb-1">Step 4</div>
                    <CardTitle>QR Code Generation</CardTitle>
                    <CardDescription>
                      The app generates a unique, secure QR code. Print it out or show it on your screen. Lola or Lolo simply opens their camera, scans the code, and their device is instantly configured and logged in. No typing required.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video w-full max-w-sm overflow-hidden rounded-xl border border-black/5 bg-kasama-cream mt-4">
                      <Float>
                        <Image
                          src="/images/kasama/kasama-tech-for-seniors.webp"
                          alt="Lola Zeny scanning a QR code on Leo's phone using her tablet"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 384px"
                        />
                      </Float>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </li>
          </ol>
        </div>
      </Section>

      {/* 3. PWA INSTALL GUIDE */}
      <Section className="bg-kasama-cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn direction="right" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
                No App Store Needed
              </h2>
              <p className="text-lg text-kasama-muted">
                Kasama PH is built as a Progressive Web App (PWA). This means it doesn&apos;t take up heavy storage space and never requires manual updates from the App Store or Google Play.
              </p>
            </div>

            <ul className="space-y-6" aria-label="PWA Installation Benefits">
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-kasama-espresso shadow-sm">
                  <Smartphone className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kasama-espresso">Add to Home Screen</h3>
                  <p className="mt-2 text-kasama-muted">
                    Just tap &quot;Add to Home Screen&quot; from your browser. It installs instantly and looks exactly like a native app.
                  </p>
                </div>
              </li>
            </ul>
          </FadeIn>

          {/* Image: PWA Install Step */}
          <FadeIn direction="left" delay={0.2} className="relative aspect-square w-full rounded-3xl bg-white shadow-xl overflow-hidden border border-black/5">
            <Float>
              <Image
                src="/images/kasama/kasama-family-video-call.webp"
                alt="A smartphone screen showing the 'Add to Home Screen' prompt for the Kasama PH app"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Float>
          </FadeIn>
        </div>
      </Section>

      {/* 4. BOTTOM CTA */}
      <Section className="bg-white border-t border-black/5">
        <FadeIn className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-kasama-espresso sm:text-5xl">
            Ready to simplify their daily routine?
          </h2>
          <p className="text-xl text-kasama-muted">
            Join the waitlist today and get early access to the easiest caregiving app for Filipino families.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/waitlist" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto text-lg px-10 h-14 shadow-[0_8px_20px_rgba(255,113,91,0.4)]">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
