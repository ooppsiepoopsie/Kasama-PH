import * as React from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

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
              <Heart className="h-6 w-6 fill-kasama-primary text-kasama-primary" aria-hidden="true" />
              <span className="font-display text-xl font-bold tracking-tight text-kasama-espresso">
                {SITE_CONFIG.name}
              </span>
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
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 md:flex-row">
          <p className="text-center text-sm text-kasama-muted md:text-left">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-center text-sm text-kasama-muted md:text-right">
            Designed with ❤️ for Filipino families.
          </p>
        </div>
      </div>
    </footer>
  )
}
