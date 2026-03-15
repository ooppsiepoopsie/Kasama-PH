'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Heart } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
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
    <header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-black/5 bg-kasama-cream/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary"
          aria-label={`${SITE_CONFIG.name} Home`}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-md">
            <Image 
              src="/images/kasama/logo-icon.webp" 
              alt="Kasama PH Icon" 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="relative h-6 w-24 hidden sm:block">
            <Image 
              src="/images/kasama/kasama-logo.webp" 
              alt="Kasama PH Logo" 
              fill 
              className="object-contain object-left" 
            />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-kasama-espresso sm:hidden">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-2 py-1 text-base font-medium transition-colors hover:text-kasama-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary",
                  isActive ? "text-kasama-primary font-bold" : "text-kasama-espresso"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-kasama-primary rounded-full" />
                )}
              </Link>
            );
          })}
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
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-black/5 bg-kasama-cream px-4 pb-6 pt-4 shadow-xl md:hidden"
          >
            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-md px-4 py-3 text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary",
                    isActive 
                      ? "bg-kasama-primary/10 text-kasama-primary font-bold border-l-4 border-kasama-primary" 
                      : "text-kasama-espresso hover:bg-black/5 border-l-4 border-transparent"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link href="/waitlist" tabIndex={-1} className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Join Waitlist</Button>
              </Link>
            </div>
          </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
