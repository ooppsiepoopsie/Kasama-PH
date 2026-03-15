import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, HeartPulse, ShieldAlert, Mic, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, Float } from "@/components/animations/FadeIn"

export const metadata: Metadata = {
  title: 'Kasama PH | Ang Kaibigan ng Lola at Lolo',
  description: 'The comprehensive elderly care app for Filipino families. Medicine reminders, emergency alerts (Bantay SOS), and connection tools for remote caregiving.',
  alternates: {
    canonical: '/',
  },
}

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Kasama PH",
    "description": "Elderly care app for Filipino families featuring medicine reminders, emergency alerts, and family connection tools.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web, Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PHP"
    },
    "author": {
      "@type": "Organization",
      "name": "Kasama PH",
      "url": "https://www.kasama.ph"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. HERO SECTION */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
        {/* Slight gradient background */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-kasama-cream via-white to-kasama-cream" aria-hidden="true" />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <FadeIn direction="right" className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight text-kasama-espresso sm:text-6xl xl:text-7xl">
                Kasama: Ang Kaibigan ng Lola at Lolo
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-kasama-espresso font-medium lg:mx-0">
                An app that helps Filipino families care for their elderly parents through medicine reminders, emergency alerts, and daily connection.
              </p>
              <p className="mx-auto max-w-2xl text-lg text-kasama-muted lg:mx-0">
                Simple lang. Hindi ka nag-iisa, Lo. A comprehensive elderly care app designed for seniors.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/waitlist" tabIndex={-1}>
                <Button size="lg" className="w-full sm:w-auto">
                  Join Waitlist
                </Button>
              </Link>
              <Link href="/features" tabIndex={-1}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                  See Features
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </FadeIn>
          
          {/* Hero Image: Group shot of Lola Zeny, Leo, Lolo Boy, Annie */}
          <FadeIn direction="left" delay={0.2} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <Float>
              <div className="relative aspect-square w-full rounded-3xl bg-white/50 shadow-2xl overflow-hidden border border-black/5">
                <Image
                  src="/images/kasama/kasama-grandparents-celebration.webp"
                  alt="Lola Zeny, Leo, Lolo Boy, and Annie gathered around a tablet smiling"
                  fill
                  className="object-cover scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Float>
            {/* Decorative background blob */}
            <div className="absolute -inset-4 -z-10 rounded-full bg-kasama-primary/10 blur-3xl" aria-hidden="true" />
            
            {/* Subtle floating icon */}
            <Float delay={0.5} className="absolute -top-6 -right-6 z-10 hidden md:block">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl border border-black/5 text-kasama-primary">
                <HeartPulse className="h-8 w-8" />
              </div>
            </Float>
          </FadeIn>
        </div>
      </Section>

      {/* 2. PROBLEM / SOLUTION (COMIC STRIP) */}
      <Section className="bg-white">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-kasama-espresso sm:text-5xl">
            Far from home? Kasama namin sila.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            Hindi mo kailangang mag-alala. Kahit malayo ang pamilya, may Kasama sila araw-araw.
          </p>
        </FadeIn>

        {/* 3-Panel Comic Layout */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Panel 1: The Worry (Leo) */}
          <FadeIn delay={0.1} className="flex flex-col items-center space-y-4">
            <Float delay={0}>
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-black/5 bg-kasama-cream shadow-md">
                <Image
                  src="/images/kasama/annie-leo-family-support.webp"
                  alt="Leo looking worried at his office desk, thinking about his mother"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Float>
            <p className="text-center text-kasama-espresso font-medium">
              &quot;Did Mama take her medicine today?&quot;
            </p>
          </FadeIn>

          {/* Panel 2: The Solution (Lola Zeny) */}
          <FadeIn delay={0.3} className="flex flex-col items-center space-y-4">
            <Float delay={0.5}>
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-black/5 bg-kasama-cream shadow-md">
                <Image
                  src="/images/kasama/kasama-promise-protocol-reminder.webp"
                  alt="Lola Zeny smiling as the Kasama app reminds her to take her medicine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Float>
            <p className="text-center text-kasama-espresso font-medium">
              &quot;Oh, time for my vitamins! Salamat, Kasama.&quot;
            </p>
          </FadeIn>

          {/* Panel 3: The Relief (Leo) */}
          <FadeIn delay={0.5} className="flex flex-col items-center space-y-4">
            <Float delay={1}>
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-black/5 bg-kasama-cream shadow-md">
                <Image
                  src="/images/kasama/kasama-family-video-checkin.webp"
                  alt="Leo smiling at his phone after receiving a notification that his mother took her medicine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Float>
            <p className="text-center text-kasama-espresso font-medium">
              Peace of mind, wherever you are.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* 3. CORE FEATURES (BENTO GRID) */}
      <Section>
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-kasama-espresso sm:text-5xl">
            Mga Tampok na Kasama
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            Everything your parents need to stay safe, healthy, and connected, designed specifically for seniors who aren&apos;t tech-savvy.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1: Promise Protocol */}
          <FadeIn delay={0.1} className="h-full">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-kasama-primary/10 text-kasama-primary">
                  <HeartPulse className="h-8 w-8" aria-hidden="true" />
                </div>
                <CardTitle>Promise Protocol</CardTitle>
                <CardDescription>
                  A medicine reminder for seniors that sounds like a family member talking. Record your own voice to remind them to take their daily meds.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/5 bg-kasama-cream">
                  <Image
                    src="/images/kasama/kasama-promise-protocol-reminder.webp"
                    alt="Lola Zeny interacting with the Promise Protocol medicine reminder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Feature 2: Bantay SOS */}
          <FadeIn delay={0.2} className="h-full">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-kasama-secondary/10 text-kasama-secondary">
                  <ShieldAlert className="h-8 w-8" aria-hidden="true" />
                </div>
                <CardTitle>Bantay SOS</CardTitle>
                <CardDescription>
                  A senior safety alert app feature. Pressing the large SOS button sends an instant alert with GPS location to the family.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/5 bg-kasama-cream">
                  <Image
                    src="/images/kasama/kasama-bantay-sos-emergency.webp"
                    alt="Leo receiving an urgent Bantay SOS alert on his phone"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Feature 3: Legacy Vault */}
          <FadeIn delay={0.3} className="h-full">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-kasama-espresso/10 text-kasama-espresso">
                  <Mic className="h-8 w-8" aria-hidden="true" />
                </div>
                <CardTitle>Legacy Vault</CardTitle>
                <CardDescription>
                  Seniors can easily record voice memories and stories for future generations, preserving family history.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/5 bg-kasama-cream">
                  <Image
                    src="/images/kasama/kasama-voice-memory-story.webp"
                    alt="Lolo Boy recording a story into the Legacy Vault"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <Link href="/features" tabIndex={-1}>
            <Button variant="outline" size="lg" className="group">
              Explore all features
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </Link>
        </FadeIn>
      </Section>

      {/* 4. WHO IS THIS FOR? */}
      <Section className="bg-kasama-cream">
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            Kasama is made for families like yours
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            Whether you live in the next town or across the world, Kasama helps you provide remote care for elderly parents.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn delay={0.1} className="h-full">
            <Card className="flex flex-col h-full text-center p-6">
              <CardTitle className="text-xl mb-2">OFWs caring from afar</CardTitle>
              <CardDescription className="text-base">
                Stay connected and ensure your parents are safe, no matter the time zone.
              </CardDescription>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2} className="h-full">
            <Card className="flex flex-col h-full text-center p-6">
              <CardTitle className="text-xl mb-2">Adult children managing parents&apos; health</CardTitle>
              <CardDescription className="text-base">
                Easily coordinate medicine reminders and doctor appointments.
              </CardDescription>
            </Card>
          </FadeIn>
          <FadeIn delay={0.3} className="h-full">
            <Card className="flex flex-col h-full text-center p-6">
              <CardTitle className="text-xl mb-2">Seniors who want to stay independent</CardTitle>
              <CardDescription className="text-base">
                A simple, respectful interface that empowers seniors without overwhelming them.
              </CardDescription>
            </Card>
          </FadeIn>
          <FadeIn delay={0.4} className="h-full">
            <Card className="flex flex-col h-full text-center p-6">
              <CardTitle className="text-xl mb-2">Families who want to preserve memories</CardTitle>
              <CardDescription className="text-base">
                Capture and save precious stories and voice notes for future generations.
              </CardDescription>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* 5. MEET THE KASAMA FAMILY */}
      <Section className="bg-white">
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            Meet the Kasama Family
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            Our characters represent the beautiful diversity of the Filipino family.
          </p>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Lola Zeny */}
          <FadeIn delay={0.1} className="h-full">
            <Card className="flex flex-col h-full text-center items-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-square w-32 overflow-hidden rounded-full border-4 border-white shadow-md bg-kasama-primary/10 mb-4">
                <Image
                  src="/images/kasama/lolo-boy-lola-zeny-happy.webp"
                  alt="Lola Zeny"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <CardTitle className="text-xl mb-1">Lola Zeny</CardTitle>
              <p className="text-xs font-bold text-kasama-primary uppercase tracking-wider mb-3">The Heart</p>
              <CardDescription className="text-sm">
                Represents the loving Filipino grandmother who wants to stay healthy and connected with family.
              </CardDescription>
            </Card>
          </FadeIn>

          {/* Leo */}
          <FadeIn delay={0.2} className="h-full">
            <Card className="flex flex-col h-full text-center items-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-square w-32 overflow-hidden rounded-full border-4 border-white shadow-md bg-kasama-secondary/10 mb-4">
                <Image
                  src="/images/kasama/annie-leo-family-support.webp"
                  alt="Leo"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <CardTitle className="text-xl mb-1">Leo</CardTitle>
              <p className="text-xs font-bold text-kasama-secondary uppercase tracking-wider mb-3">The Protector</p>
              <CardDescription className="text-sm">
                The son who watches over his mother even when he is far away.
              </CardDescription>
            </Card>
          </FadeIn>

          {/* Lolo Boy */}
          <FadeIn delay={0.3} className="h-full">
            <Card className="flex flex-col h-full text-center items-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-square w-32 overflow-hidden rounded-full border-4 border-white shadow-md bg-kasama-espresso/10 mb-4">
                <Image
                  src="/images/kasama/kasama-whole-fam.webp"
                  alt="Lolo Boy"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <CardTitle className="text-xl mb-1">Lolo Boy</CardTitle>
              <p className="text-xs font-bold text-kasama-primary uppercase tracking-wider mb-3">The Energizer</p>
              <CardDescription className="text-sm">
                Full of life, stories, and movement.
              </CardDescription>
            </Card>
          </FadeIn>

          {/* Annie */}
          <FadeIn delay={0.4} className="h-full">
            <Card className="flex flex-col h-full text-center items-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-square w-32 overflow-hidden rounded-full border-4 border-white shadow-md bg-kasama-primary/10 mb-4">
                <Image
                  src="/images/kasama/kasama-preparing-for-love.webp"
                  alt="Annie"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <CardTitle className="text-xl mb-1">Annie</CardTitle>
              <p className="text-xs font-bold text-kasama-secondary uppercase tracking-wider mb-3">The Guide</p>
              <CardDescription className="text-sm">
                Helps families set up and manage the Kasama experience.
              </CardDescription>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* 6. TRUST SECTION */}
      <Section className="bg-kasama-cream py-16">
        <FadeIn className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            Safe, Private, and Family-First
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-black/5">
              <CheckCircle2 className="h-6 w-6 text-kasama-primary shrink-0" />
              <span className="font-medium text-kasama-espresso">Your family&apos;s data stays private</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-black/5">
              <CheckCircle2 className="h-6 w-6 text-kasama-primary shrink-0" />
              <span className="font-medium text-kasama-espresso">Designed with senior accessibility in mind</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-black/5">
              <CheckCircle2 className="h-6 w-6 text-kasama-primary shrink-0" />
              <span className="font-medium text-kasama-espresso">Built for Filipino families</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-black/5">
              <CheckCircle2 className="h-6 w-6 text-kasama-primary shrink-0" />
              <span className="font-medium text-kasama-espresso">No ads or spam</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 7. FAQ SECTION */}
      <Section className="bg-white">
        <FadeIn className="mx-auto max-w-3xl space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">What is Kasama PH?</h3>
              <p className="text-kasama-muted">Kasama PH is an elderly care app designed specifically for Filipino families. It provides medicine reminders, emergency alerts (Bantay SOS), and a way to stay connected daily.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">Who is Kasama for?</h3>
              <p className="text-kasama-muted">It is for seniors who want to stay independent, and for their family members (like OFWs or busy adult children) who want to provide remote care and ensure their parents are safe.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">Does Lola or Lolo need a smartphone?</h3>
              <p className="text-kasama-muted">Yes, they will need a basic smartphone or tablet. However, the Kasama app is designed to be extremely simple, with large buttons and voice-guided interfaces so even those who aren&apos;t tech-savvy can use it easily.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">Can families monitor from abroad?</h3>
              <p className="text-kasama-muted">Absolutely. Kasama is perfect for OFWs. As long as both devices have an internet connection, you can manage medicine schedules and receive alerts from anywhere in the world.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">Is Kasama a medical device?</h3>
              <p className="text-kasama-muted">No, Kasama is a family connection and reminder tool. It is not intended to diagnose, treat, or replace professional medical advice or emergency services.</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 8. EMOTIONAL CLOSE */}
      <Section className="bg-white overflow-hidden">
        <FadeIn className="relative rounded-3xl bg-kasama-primary/5 px-6 py-16 sm:px-12 sm:py-24 lg:px-16 border border-kasama-primary/10">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-kasama-espresso sm:text-5xl mb-6">
              Hindi nag-iisa si Lola at Lolo.
            </h2>
            <p className="text-xl text-kasama-muted mb-10">
              May Kasama sila araw-araw. Join the waitlist today and be the first to bring Kasama PH to your family.
            </p>
            <Link href="/waitlist" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto text-lg px-10 h-14 shadow-[0_8px_20px_rgba(255,113,91,0.4)]">
                Maging Unang Kasama &rarr;
              </Button>
            </Link>
          </div>
          
          {/* Illustration: Lolo Boy and Annie Hugging */}
          <div className="mt-12 flex justify-center lg:mt-16">
             <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[480px] lg:w-[480px]">
                <Image
                  src="/images/kasama/kasama-generational-care-story.webp"
                  alt="A warm, glowing illustration of Annie hugging Lolo Boy"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 480px"
                />
             </div>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
