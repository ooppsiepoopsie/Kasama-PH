'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  // Close mobile menu automatically when the route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-kasama-cream/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary"
          aria-label={`${SITE_CONFIG.name} Home`}
        >
          <Heart className="h-8 w-8 fill-kasama-primary text-kasama-primary" aria-hidden="true" />
          <span className="font-display text-2xl font-bold tracking-tight text-kasama-espresso">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-2 py-1 text-base font-medium transition-colors hover:text-kasama-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary",
                pathname === link.href ? "text-kasama-primary font-bold" : "text-kasama-espresso"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link href="/waitlist" tabIndex={-1}>
            <Button>Join Waitlist</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-kasama-espresso hover:bg-black/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-t border-black/5 bg-kasama-cream px-4 pb-6 pt-4 shadow-xl md:hidden">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-md px-3 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary",
                  pathname === link.href 
                    ? "bg-kasama-primary/10 text-kasama-primary font-bold" 
                    : "text-kasama-espresso hover:bg-black/5"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/waitlist" tabIndex={-1} className="block w-full">
                <Button className="w-full">Join Waitlist</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
