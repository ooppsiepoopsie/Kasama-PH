import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Heart, Users, Home, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, Float } from "@/components/animations/FadeIn"

export const metadata: Metadata = {
  title: "About Us | Our Mission & Cultural Pillars",
  description: "Learn about the mission behind Kasama PH, our cultural pillars of Pagmamahal, Bayanihan, and Paggalang, and the families we serve.",
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Kasama PH",
    "description": "Information about the mission, values, and team behind Kasama PH, an elderly care application for Filipino families.",
    "publisher": {
      "@type": "Organization",
      "name": "Kasama PH",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.kasama.ph/images/kasama/kasama-logo-icon.webp"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. MISSION HERO (AEO Summary) */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-kasama-cream">
        <FadeIn className="mx-auto max-w-3xl text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-kasama-espresso sm:text-6xl">
            Built for the Filipino Family.
          </h1>
          {/* AEO Optimized Summary Block */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 text-left md:text-center">
            <p className="text-lg text-kasama-espresso font-medium leading-relaxed">
              Kasama PH was created to solve a deeply personal problem: caring for our aging parents in the Philippines while living miles away. Our mission is to use technology to bridge the distance, preserving the warmth, respect, and deep connection of the Filipino family.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 2. CULTURAL PILLARS */}
      <Section className="bg-white">
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            Our Cultural Pillars
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            We didn&apos;t just translate an app into Tagalog. We built Kasama PH from the ground up based on core Filipino values.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          <FadeIn delay={0.1} className="h-full">
            <Card className="flex flex-col h-full text-center items-center p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-kasama-primary/10 text-kasama-primary">
                <Heart className="h-8 w-8" aria-hidden="true" />
              </div>
              <CardTitle className="text-2xl mb-2">Pagmamahal</CardTitle>
              <CardDescription className="text-base">
                Love and care. Technology should never feel cold. Every reminder and alert is designed to feel like a warm embrace from a family member.
              </CardDescription>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <Card className="flex flex-col h-full text-center items-center p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-kasama-secondary/10 text-kasama-secondary">
                <Users className="h-8 w-8" aria-hidden="true" />
              </div>
              <CardTitle className="text-2xl mb-2">Bayanihan</CardTitle>
              <CardDescription className="text-base">
                Community spirit. Caregiving is a shared responsibility. We make it easy for siblings and relatives to coordinate care together.
              </CardDescription>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full">
            <Card className="flex flex-col h-full text-center items-center p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-kasama-espresso/10 text-kasama-espresso">
                <Home className="h-8 w-8" aria-hidden="true" />
              </div>
              <CardTitle className="text-2xl mb-2">Paggalang</CardTitle>
              <CardDescription className="text-base">
                Deep respect for our elders. We prioritize their dignity and independence, giving them tools they can use confidently without feeling helpless.
              </CardDescription>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* 3. CHARACTER PROFILES */}
      <Section className="bg-kasama-cream">
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            Meet the Kasama Family
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            We designed Kasama PH with real people in mind. These characters represent the families we serve every day.
          </p>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Lola Zeny */}
          <FadeIn delay={0.1} className="flex flex-col items-center text-center space-y-4">
            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full border-4 border-white shadow-lg bg-kasama-primary/10">
              <Image
                src="/images/kasama/placeholder-portrait-lola-zeny.webp"
                alt="Lola Zeny, a warm and smiling Filipino grandmother"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-kasama-espresso">Lola Zeny</h3>
              <p className="text-sm font-semibold text-kasama-primary uppercase tracking-wider">Senior User</p>
              <p className="mt-2 text-kasama-muted text-sm">
                Loves gardening and cooking. Needs a little help remembering her daily maintenance medicines.
              </p>
            </div>
          </FadeIn>

          {/* Leo */}
          <FadeIn delay={0.2} className="flex flex-col items-center text-center space-y-4">
            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full border-4 border-white shadow-lg bg-kasama-secondary/10">
              <Image
                src="/images/kasama/placeholder-portrait-leo.webp"
                alt="Leo, a caring Filipino son working in an office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-kasama-espresso">Leo</h3>
              <p className="text-sm font-semibold text-kasama-secondary uppercase tracking-wider">Family Partner</p>
              <p className="mt-2 text-kasama-muted text-sm">
                Lola Zeny&apos;s son. Works in the city and worries about his mom living alone in the province.
              </p>
            </div>
          </FadeIn>

          {/* Lolo Boy */}
          <FadeIn delay={0.3} className="flex flex-col items-center text-center space-y-4">
            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full border-4 border-white shadow-lg bg-kasama-espresso/10">
              <Image
                src="/images/kasama/placeholder-portrait-lolo-boy.webp"
                alt="Lolo Boy, a cheerful Filipino grandfather"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-kasama-espresso">Lolo Boy</h3>
              <p className="text-sm font-semibold text-kasama-primary uppercase tracking-wider">Senior User</p>
              <p className="mt-2 text-kasama-muted text-sm">
                A retired teacher with a lot of stories to tell. Wants to stay active and connected with his grandchildren.
              </p>
            </div>
          </FadeIn>

          {/* Annie */}
          <FadeIn delay={0.4} className="flex flex-col items-center text-center space-y-4">
            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full border-4 border-white shadow-lg bg-kasama-primary/10">
              <Image
                src="/images/kasama/placeholder-portrait-annie.webp"
                alt="Annie, a supportive Filipino daughter living abroad"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-kasama-espresso">Annie</h3>
              <p className="text-sm font-semibold text-kasama-secondary uppercase tracking-wider">Family Partner</p>
              <p className="mt-2 text-kasama-muted text-sm">
                Lolo Boy&apos;s daughter. An OFW who wants to make sure her father is safe and happy while she is away.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 4. TEAM STORY */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn direction="right" className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-kasama-muted">
              <p>
                Kasama PH started with a simple question: <em>&quot;Did Mama take her medicine today?&quot;</em>
              </p>
              <p>
                As Filipinos, taking care of our parents is not an obligation; it is a privilege. But modern life often takes us far from home—to different cities, or even different countries. Existing health apps were too complicated, too clinical, and built for Western audiences.
              </p>
              <p>
                We realized we needed something different. Something that spoke our language, understood our culture, and was so simple that even a grandparent who has never used a smartphone could understand it.
              </p>
              <p className="font-medium text-kasama-espresso">
                That is why we built Kasama PH. Para sa pamilyang Pilipino.
              </p>
            </div>
          </FadeIn>
          
          {/* Team Image Placeholder */}
          <FadeIn direction="left" delay={0.2} className="relative aspect-video w-full rounded-3xl bg-kasama-cream shadow-xl overflow-hidden border border-black/5">
            <Image
              src="/images/kasama/placeholder-team-story.webp"
              alt="A diverse team of Filipino creators working together on the Kasama PH app"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </Section>

      {/* 5. BOTTOM CTA */}
      <Section className="bg-kasama-cream border-t border-black/5">
        <FadeIn className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-kasama-espresso sm:text-5xl">
            Be part of our journey.
          </h2>
          <p className="text-xl text-kasama-muted">
            We are launching soon. Join the waitlist to get early access and help us shape the future of elderly care in the Philippines.
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
