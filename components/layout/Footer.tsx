import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants"
import { useLanguage } from "@/lib/i18n"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  // Helper to get translation key for footer links
  const getTranslationKey = (label: string) => {
    const keyMap: Record<string, string> = {
      "Home": "nav.home",
      "Features": "nav.features",
      "How It Works": "nav.howItWorks",
      "About Us": "nav.about",
      "Waitlist": "nav.waitlist"
    };
    return keyMap[label] || label;
  };

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          
          {/* Brand & Tagline */}
          <div className="flex max-w-xs flex-col items-center text-center md:items-start md:text-left">
            <Link 
              href="/" 
              className="mb-4 flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary"
              aria-label={`${SITE_CONFIG.name} Home`}
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-md">
                <Image 
                  src="/images/kasama/logo-icon.webp" 
                  alt="Kasama PH Icon" 
                  fill 
                  className="object-contain" 
                  sizes="32px"
                />
              </div>
              <div className="relative h-6 w-24">
                <Image 
                  src="/images/kasama/kasama-logo.webp" 
                  alt="Kasama PH Logo" 
                  fill 
                  className="object-contain object-left" 
                  sizes="96px"
                />
              </div>
            </Link>
            <p className="text-base text-kasama-muted">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:justify-end" aria-label="Footer Navigation">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-1 text-base font-medium text-kasama-espresso transition-colors hover:text-kasama-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary"
                data-scroll-behavior="smooth"
              >
                {t(getTranslationKey(link.label) as any)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 md:flex-row">
          <p className="text-center text-sm text-kasama-muted md:text-left">
            &copy; {currentYear} {SITE_CONFIG.name}. {t('footer.rights')}
          </p>
          <p className="text-center text-sm text-kasama-muted md:text-right">
            {t('footer.designed')} ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
