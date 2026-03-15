import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, CheckCircle2, HeartPulse, ShieldAlert, Mic, MessageCircle, Activity, Music, Palette } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, Float } from "@/components/animations/FadeIn"

export const metadata: Metadata = {
  title: "Features | Medicine Reminders, SOS Alerts & More",
  description: "Discover the features of Kasama PH: Promise Protocol medicine reminders, Bantay SOS emergency alerts, Legacy Vault voice memories, and senior-friendly activities.",
  alternates: {
    canonical: '/features',
  },
}

export default function FeaturesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Promise Protocol",
        "description": "Medicine reminders that sound like a warm family conversation."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bantay SOS",
        "description": "One-tap emergency button with GPS location sharing."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Legacy Vault",
        "description": "Voice memory recording to preserve family history."
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
            Lahat ng Kailangan ni Lola at Lolo, Nasa Isang App.
          </h1>
          {/* AEO Optimized Summary Block */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 text-left md:text-center">
            <p className="text-lg text-kasama-espresso font-medium leading-relaxed">
              Kasama PH is an app that helps Filipino families remotely care for their elderly parents through medicine reminders, emergency alerts, voice memory recording, and daily conversation prompts.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 2. HEALTH & SAFETY (Alternating Layout: Text Left, Image Right) */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn direction="right" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
                Health & Safety First
              </h2>
              <p className="text-lg text-kasama-muted">
                Peace of mind for you, independence for them. We designed our safety features to be foolproof and friendly.
              </p>
            </div>

            <ul className="space-y-6" aria-label="Health and Safety Features">
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-kasama-primary/10 text-kasama-primary">
                  <HeartPulse className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kasama-espresso">Promise Protocol</h3>
                  <p className="mt-2 text-kasama-muted">
                    Medicine reminders that sound like a warm family conversation. Lola Zeny receives a gentle nudge, and Leo gets notified when she takes her meds.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-kasama-secondary/10 text-kasama-secondary">
                  <ShieldAlert className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kasama-espresso">Bantay SOS</h3>
                  <p className="mt-2 text-kasama-muted">
                    One massive, easy-to-press emergency button. If Lola Zeny needs help, Leo receives an instant alert with her exact GPS location.
                  </p>
                </div>
              </li>
            </ul>
          </FadeIn>

          {/* Image: Lola Zeny + Leo */}
          <FadeIn direction="left" delay={0.2} className="relative aspect-square w-full rounded-3xl bg-kasama-cream shadow-xl overflow-hidden border border-black/5">
            <Float>
              <Image
                src="/images/kasama/kasama-bantay-sos-emergency.webp"
                alt="Lola Zeny interacting with the Promise Protocol on her screen, while a floating UI bubble shows Leo receiving the update."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Float>
          </FadeIn>
        </div>
      </Section>

      {/* 3. CONNECTION & MEMORIES (Alternating Layout: Image Left, Text Right) */}
      <Section className="bg-kasama-cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image: Lolo Boy + Annie (Moved to left for desktop via order classes) */}
          <FadeIn direction="right" className="order-2 lg:order-1 relative aspect-square w-full rounded-3xl bg-white shadow-xl overflow-hidden border border-black/5">
            <Float delay={0.5}>
              <Image
                src="/images/kasama/kasama-family-video-checkin.webp"
                alt="A warm family video check-in showing Lola Zeny and her family connecting remotely through the Kasama app."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Float>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
                Connection & Memories
              </h2>
              <p className="text-lg text-kasama-muted">
                Bridge the distance with tools that capture their stories and keep the daily conversation flowing.
              </p>
            </div>

            <ul className="space-y-6" aria-label="Connection and Memory Features">
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-kasama-espresso/10 text-kasama-espresso">
                  <Mic className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kasama-espresso">Legacy Vault</h3>
                  <p className="mt-2 text-kasama-muted">
                    A secure place for Lolo Boy to record voice memories, family recipes, and stories for Annie and the next generation to cherish forever.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-kasama-primary/10 text-kasama-primary">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kasama-espresso">Kwentuhan Time</h3>
                  <p className="mt-2 text-kasama-muted">
                    Daily conversation prompts that spark joy. Answer simple questions together, even when you are miles apart.
                  </p>
                </div>
              </li>
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* 4. ACTIVITY & JOY (Grid Layout) */}
      <Section className="bg-white">
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            Activity & Joy
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            Keeping the mind and body active is crucial. Kasama PH includes fun, safe activities designed specifically for seniors.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          <FadeIn delay={0.1} className="h-full">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-kasama-secondary/10 text-kasama-secondary">
                  <Activity className="h-8 w-8" aria-hidden="true" />
                </div>
                <CardTitle>Galaw-Galaw Gym</CardTitle>
                <CardDescription>
                  Safe, guided chair exercises for seniors to maintain mobility without strain.
                </CardDescription>
              </CardHeader>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-kasama-primary/10 text-kasama-primary">
                  <Music className="h-8 w-8" aria-hidden="true" />
                </div>
                <CardTitle>Kanta Mode</CardTitle>
                <CardDescription>
                  Acapella song recording for memory preservation and pure enjoyment.
                </CardDescription>
              </CardHeader>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-kasama-espresso/10 text-kasama-espresso">
                  <Palette className="h-8 w-8" aria-hidden="true" />
                </div>
                <CardTitle>Kulay Kasama</CardTitle>
                <CardDescription>
                  Collaborative digital coloring activities to share with grandchildren.
                </CardDescription>
              </CardHeader>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* 5. BOTTOM CTA */}
      <Section className="bg-kasama-cream border-t border-black/5">
        <FadeIn className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-kasama-espresso sm:text-5xl">
            Ready to give them a Kasama?
          </h2>
          <p className="text-xl text-kasama-muted">
            Join the waitlist today and be the first to experience a new way of caring for your parents.
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
