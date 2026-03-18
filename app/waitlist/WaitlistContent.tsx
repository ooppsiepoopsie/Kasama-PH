'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { WaitlistForm } from "@/components/forms/WaitlistForm"
import { useLanguage } from "@/lib/i18n"

export function WaitlistContent() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-kasama-cream">
      {/* 1. Minimal Header */}
      <header className="absolute top-0 z-50 w-full p-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary"
          aria-label={`Back to ${SITE_CONFIG.name} Home`}
        >
          <Heart className="h-8 w-8 fill-kasama-primary text-kasama-primary" aria-hidden="true" />
          <span className="font-display text-2xl font-bold tracking-tight text-kasama-espresso">
            {SITE_CONFIG.name}
          </span>
        </Link>
      </header>

      {/* 2. Split Layout */}
      <main className="flex flex-1 flex-col lg:flex-row">
        
        {/* Left Side: Illustration & Content */}
        <div className="relative flex flex-1 flex-col justify-center bg-kasama-primary/5 px-6 py-24 lg:px-16 xl:px-24 border-b lg:border-b-0 lg:border-r border-kasama-primary/10 overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-kasama-espresso sm:text-5xl lg:text-6xl mb-6">
              {t('waitlist.title')}
            </h1>
            <p className="text-xl text-kasama-muted">
              {t('waitlist.subtitle')}
            </p>
          </div>

          {/* Decorative Illustration */}
          <div className="relative mt-12 aspect-video w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-white/50 lg:mt-16">
            <Image
              src="/images/kasama/kasama-preparing-for-love.webp"
              alt="A warm group illustration of Lola Zeny, Leo, Lolo Boy, and Annie looking directly at the user, smiling"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          {/* Decorative background blob */}
          <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-kasama-primary/10 blur-3xl" aria-hidden="true" />
        </div>

        {/* Right Side: Form Container */}
        <div className="flex flex-1 items-center justify-center px-6 py-16 lg:px-16 xl:px-24 bg-white">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="font-display text-3xl font-bold text-kasama-espresso">
                {t('waitlist.form.title')}
              </h2>
              <p className="text-kasama-muted">
                {t('waitlist.form.subtitle')}
              </p>
            </div>
            
            {/* The Client-Side Form */}
            <WaitlistForm />
            
            {/* Trust Bullet Points */}
            <div className="pt-4 space-y-2 text-sm text-kasama-espresso font-medium">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-kasama-primary" />
                <span>{t('waitlist.trust.1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-kasama-primary" />
                <span>{t('waitlist.trust.2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-kasama-primary" />
                <span>{t('waitlist.trust.3')}</span>
              </div>
            </div>

            <p className="text-center text-sm text-kasama-muted lg:text-left mt-6">
              {t('waitlist.privacy').split('Privacy Policy')[0]}
              <Link href="#" className="underline underline-offset-4 hover:text-kasama-primary">
                Privacy Policy
              </Link>
              {t('waitlist.privacy').split('Privacy Policy')[1]}
            </p>
          </div>
        </div>

      </main>
    </div>
  )
}
