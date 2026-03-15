import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, HeartPulse, ShieldAlert, Mic } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, Float } from "@/components/animations/FadeIn"

export default function LandingPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <FadeIn direction="right" className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight text-kasama-espresso sm:text-6xl xl:text-7xl">
                Kasama: Ang Kaibigan ng Lola at Lolo
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-kasama-muted lg:mx-0">
                Simple lang. Hindi ka nag-iisa, Lo. Medicine reminders, emergency alerts, and family connection in one simple app designed for Filipino seniors.
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
          <FadeIn direction="left" delay={0.2} className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Float>
              <div className="relative aspect-square w-full rounded-3xl bg-white/50 shadow-2xl overflow-hidden border border-black/5">
                <Image
                  src="/images/kasama/kasama-grandparents-celebration.webp"
                  alt="Lola Zeny, Leo, Lolo Boy, and Annie gathered around a tablet smiling"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Float>
            {/* Decorative background blob */}
            <div className="absolute -inset-4 -z-10 rounded-full bg-kasama-primary/10 blur-3xl" aria-hidden="true" />
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
                  src="/images/kasama/placeholder-leo-worry.webp"
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
                  Medicine reminders that feel like a warm family conversation, not a cold alarm clock.
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
                  One large, easy-to-press emergency button that instantly alerts the family with GPS location.
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
                  A secure place for Lolo and Lola to record voice memories and stories for the next generation.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/5 bg-kasama-cream">
                  <Image
                    src="/images/kasama/kasama-legacy-vault-photo-scan.webp"
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

      {/* 4. EMOTIONAL CLOSE */}
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
          
          {/* Background Illustration: Lolo Boy and Annie Hugging */}
          <div className="absolute bottom-0 right-0 -z-10 opacity-20 lg:opacity-100 lg:relative lg:mt-12 lg:flex lg:justify-center">
             <div className="relative h-64 w-64 lg:h-96 lg:w-96">
                <Image
                  src="/images/kasama/lolo-boy-lola-zeny-happy.webp"
                  alt="A warm, glowing illustration of Annie hugging Lolo Boy"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 256px, 384px"
                />
             </div>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
