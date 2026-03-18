'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, HeartPulse, ShieldAlert, Mic, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, Float } from "@/components/animations/FadeIn"
import { useLanguage } from "@/lib/i18n"

export function LandingContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* 1. HERO SECTION */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden relative bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn direction="right" className="flex flex-col justify-center space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-kasama-espresso sm:text-6xl xl:text-7xl leading-tight">
                {t('hero.title')}
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-kasama-espresso/80 font-medium lg:mx-0 leading-[1.6]">
                {t('hero.subtitle')}
              </p>
              <p className="mx-auto max-w-2xl text-lg text-kasama-muted lg:mx-0 leading-[1.6]">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/waitlist" tabIndex={-1}>
                <Button size="lg" className="w-full sm:w-auto rounded-full px-10 py-7 text-lg shadow-sm hover:shadow-md transition-all">
                  {t('hero.cta.waitlist')}
                </Button>
              </Link>
              <Link href="/features" tabIndex={-1}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 py-7 text-lg border-kasama-espresso/10 text-kasama-espresso hover:bg-kasama-espresso/5 transition-all">
                  {t('hero.cta.features')}
                </Button>
              </Link>
            </div>
          </FadeIn>
          
          {/* Hero Image: Focused Brand Logo */}
          <FadeIn direction="left" delay={0.2} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <Float duration={6} yOffset={10}>
              <div className="relative aspect-square w-full rounded-[40px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-black/5 flex items-center justify-center p-4 lg:p-6">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/kasama/kasama-logo.webp"
                    alt="Kasama PH Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                  />
                </div>
              </div>
            </Float>
            {/* Subtle background glow */}
            <div className="absolute -inset-10 -z-10 rounded-full bg-kasama-primary/5 blur-3xl" aria-hidden="true" />
          </FadeIn>
        </div>
      </Section>

      {/* 2. PROBLEM / SOLUTION (COMIC STRIP) */}
      <Section className="bg-white">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-kasama-espresso sm:text-5xl">
            {t('problem.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            {t('problem.subtitle')}
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
            </Float>
            <p className="text-center text-kasama-espresso font-medium">
              {t('problem.panel1')}
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
            </Float>
            <p className="text-center text-kasama-espresso font-medium">
              {t('problem.panel2')}
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
            </Float>
            <p className="text-center text-kasama-espresso font-medium">
              {t('problem.panel3')}
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* 3. CORE FEATURES (BENTO GRID) */}
      <Section>
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-kasama-espresso sm:text-5xl">
            {t('features.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            {t('features.subtitle')}
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
                <CardTitle>{t('features.promise.title')}</CardTitle>
                <CardDescription>
                  {t('features.promise.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/5 bg-kasama-cream">
                  <Image
                    src="/images/kasama/kasama-promise-protocol-reminder.webp"
                    alt="Lola Zeny interacting with the Promise Protocol medicine reminder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
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
                <CardTitle>{t('features.sos.title')}</CardTitle>
                <CardDescription>
                  {t('features.sos.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/5 bg-kasama-cream">
                  <Image
                    src="/images/kasama/kasama-bantay-sos-emergency.webp"
                    alt="Leo receiving an urgent Bantay SOS alert on his phone"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
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
                <CardTitle>{t('features.legacy.title')}</CardTitle>
                <CardDescription>
                  {t('features.legacy.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/5 bg-kasama-cream">
                  <Image
                    src="/images/kasama/kasama-voice-memory-story.webp"
                    alt="Lolo Boy recording a story into the Legacy Vault"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <Link href="/features" tabIndex={-1}>
            <Button variant="outline" size="lg" className="group">
              {t('features.explore')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </Link>
        </FadeIn>
      </Section>

      {/* 4. WHO IS THIS FOR? */}
      <Section className="bg-kasama-cream">
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            {t('who.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            {t('who.subtitle')}
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn delay={0.1} className="h-full">
            <Card className="flex flex-col h-full text-center p-6">
              <CardTitle className="text-xl mb-2">{t('who.1.title')}</CardTitle>
              <CardDescription className="text-base">
                {t('who.1.desc')}
              </CardDescription>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2} className="h-full">
            <Card className="flex flex-col h-full text-center p-6">
              <CardTitle className="text-xl mb-2">{t('who.2.title')}</CardTitle>
              <CardDescription className="text-base">
                {t('who.2.desc')}
              </CardDescription>
            </Card>
          </FadeIn>
          <FadeIn delay={0.3} className="h-full">
            <Card className="flex flex-col h-full text-center p-6">
              <CardTitle className="text-xl mb-2">{t('who.3.title')}</CardTitle>
              <CardDescription className="text-base">
                {t('who.3.desc')}
              </CardDescription>
            </Card>
          </FadeIn>
          <FadeIn delay={0.4} className="h-full">
            <Card className="flex flex-col h-full text-center p-6">
              <CardTitle className="text-xl mb-2">{t('who.4.title')}</CardTitle>
              <CardDescription className="text-base">
                {t('who.4.desc')}
              </CardDescription>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* 5. MEET THE KASAMA FAMILY */}
      <Section className="bg-white">
        <FadeIn className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            {t('family.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-kasama-muted">
            {t('family.subtitle')}
          </p>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Lola Zeny */}
          <FadeIn direction="up" delay={0.1} className="h-full">
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
              <CardTitle className="text-xl mb-1">{t('family.zeny.title')}</CardTitle>
              <p className="text-xs font-bold text-kasama-primary uppercase tracking-wider mb-3">{t('family.zeny.role')}</p>
              <CardDescription className="text-sm">
                {t('family.zeny.desc')}
              </CardDescription>
            </Card>
          </FadeIn>

          {/* Leo */}
          <FadeIn direction="up" delay={0.2} className="h-full">
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
              <CardTitle className="text-xl mb-1">{t('family.leo.title')}</CardTitle>
              <p className="text-xs font-bold text-kasama-secondary uppercase tracking-wider mb-3">{t('family.leo.role')}</p>
              <CardDescription className="text-sm">
                {t('family.leo.desc')}
              </CardDescription>
            </Card>
          </FadeIn>

          {/* Lolo Boy */}
          <FadeIn direction="up" delay={0.3} className="h-full">
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
              <CardTitle className="text-xl mb-1">{t('family.boy.title')}</CardTitle>
              <p className="text-xs font-bold text-kasama-primary uppercase tracking-wider mb-3">{t('family.boy.role')}</p>
              <CardDescription className="text-sm">
                {t('family.boy.desc')}
              </CardDescription>
            </Card>
          </FadeIn>

          {/* Annie */}
          <FadeIn direction="up" delay={0.4} className="h-full">
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
              <CardTitle className="text-xl mb-1">{t('family.annie.title')}</CardTitle>
              <p className="text-xs font-bold text-kasama-secondary uppercase tracking-wider mb-3">{t('family.annie.role')}</p>
              <CardDescription className="text-sm">
                {t('family.annie.desc')}
              </CardDescription>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* 6. TRUST SECTION */}
      <Section className="bg-kasama-cream py-16">
        <FadeIn className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
            {t('trust.title')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-black/5">
              <CheckCircle2 className="h-6 w-6 text-kasama-primary shrink-0" />
              <span className="font-medium text-kasama-espresso">{t('trust.1')}</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-black/5">
              <CheckCircle2 className="h-6 w-6 text-kasama-primary shrink-0" />
              <span className="font-medium text-kasama-espresso">{t('trust.2')}</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-black/5">
              <CheckCircle2 className="h-6 w-6 text-kasama-primary shrink-0" />
              <span className="font-medium text-kasama-espresso">{t('trust.3')}</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-black/5">
              <CheckCircle2 className="h-6 w-6 text-kasama-primary shrink-0" />
              <span className="font-medium text-kasama-espresso">{t('trust.4')}</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 7. FAQ SECTION */}
      <Section className="bg-white">
        <FadeIn className="mx-auto max-w-3xl space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-kasama-espresso sm:text-4xl">
              {t('faq.title')}
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">{t('faq.1.q')}</h3>
              <p className="text-kasama-muted">{t('faq.1.a')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">{t('faq.2.q')}</h3>
              <p className="text-kasama-muted">{t('faq.2.a')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">{t('faq.3.q')}</h3>
              <p className="text-kasama-muted">{t('faq.3.a')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">{t('faq.4.q')}</h3>
              <p className="text-kasama-muted">{t('faq.4.a')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-kasama-espresso">{t('faq.5.q')}</h3>
              <p className="text-kasama-muted">{t('faq.5.a')}</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 8. EMOTIONAL CLOSE */}
      <Section className="bg-white overflow-hidden">
        <FadeIn className="relative rounded-3xl bg-kasama-primary/5 px-6 py-16 sm:px-12 sm:py-24 lg:px-16 border border-kasama-primary/10">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-kasama-espresso sm:text-5xl mb-6">
              {t('close.title')}
            </h2>
            <p className="text-xl text-kasama-muted mb-10">
              {t('close.subtitle')}
            </p>
            <Link href="/waitlist" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto text-lg px-10 h-14 shadow-[0_8px_20px_rgba(255,113,91,0.4)]">
                {t('close.cta')}
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
