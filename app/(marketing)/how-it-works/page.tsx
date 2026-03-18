import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { UserPlus, HeartPulse, ShieldCheck, QrCode, Smartphone, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, Float } from "@/components/animations/FadeIn"
import { useLanguage } from "@/lib/i18n"

export const metadata: Metadata = {
  title: "How It Works | Simple Setup for Seniors",
  description: "Learn how easy it is to set up Kasama PH. Remote configuration for family members and simple QR code login for seniors. No passwords needed.",
  alternates: {
    canonical: '/how-it-works',
  },
}

export default function HowItWorksPage() {
  const { t } = useLanguage();
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
            {t('how.hero.title')}
          </h1>
          {/* AEO Optimized Summary Block */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 text-left md:text-center">
            <p className="text-lg text-kasama-espresso font-medium leading-relaxed">
              {t('how.hero.desc')}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 2. SETUP TIMELINE */}
      <Section className="bg-white">
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            {t('how.timeline.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            {t('how.timeline.desc')}
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
                    <div className="text-sm font-bold text-kasama-primary uppercase tracking-wider mb-1">{t('how.step1.label')}</div>
                    <CardTitle>{t('how.step1.title')}</CardTitle>
                    <CardDescription>
                      {t('how.step1.desc')}
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
                    <div className="text-sm font-bold text-kasama-secondary uppercase tracking-wider mb-1">{t('how.step2.label')}</div>
                    <CardTitle>{t('how.step2.title')}</CardTitle>
                    <CardDescription>
                      {t('how.step2.desc')}
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
                    <div className="text-sm font-bold text-kasama-espresso uppercase tracking-wider mb-1">{t('how.step3.label')}</div>
                    <CardTitle>{t('how.step3.title')}</CardTitle>
                    <CardDescription>
                      {t('how.step3.desc')}
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
                    <div className="text-sm font-bold text-kasama-primary uppercase tracking-wider mb-1">{t('how.step4.label')}</div>
                    <CardTitle>{t('how.step4.title')}</CardTitle>
                    <CardDescription>
                      {t('how.step4.desc')}
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
                {t('how.pwa.title')}
              </h2>
              <p className="text-lg text-kasama-muted">
                {t('how.pwa.desc')}
              </p>
            </div>

            <ul className="space-y-6" aria-label="PWA Installation Benefits">
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-kasama-espresso shadow-sm">
                  <Smartphone className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kasama-espresso">{t('how.pwa.1.title')}</h3>
                  <p className="mt-2 text-kasama-muted">
                    {t('how.pwa.1.desc')}
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
            {t('how.cta.title')}
          </h2>
          <p className="text-xl text-kasama-muted">
            {t('how.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/waitlist" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto text-lg px-10 h-14 shadow-[0_8px_20px_rgba(255,113,91,0.4)]">
                {t('how.cta.button')}
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
