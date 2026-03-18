'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  // Close mobile menu automatically when the route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tl' : 'en')
  }

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-black/5 bg-white/60 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary transition-opacity hover:opacity-90"
          aria-label={`${SITE_CONFIG.name} Home`}
        >
          <div className="relative h-10 w-10 shrink-0">
            <Image 
              src="/images/kasama/logo-icon.webp" 
              alt="Kasama PH Icon" 
              fill 
              className="object-contain" 
              sizes="40px"
              priority
            />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-kasama-espresso">
            Kasama PH
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname === link.href;
            // Map link labels to translation keys
            const getTranslationKey = (label: string) => {
              if (label === 'Features') return 'nav.features';
              if (label === 'How It Works') return 'nav.howItWorks';
              if (label === 'About') return 'nav.about';
              return label;
            };
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-2 py-1 text-sm font-medium tracking-widest uppercase transition-all hover:opacity-70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary",
                  isActive ? "text-kasama-primary font-bold" : "text-kasama-espresso"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {t(getTranslationKey(link.label) as any)}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-kasama-espresso hover:text-kasama-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kasama-secondary rounded-md px-2 py-1"
            aria-label="Toggle Language"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase">{language}</span>
          </button>
          
          <Link href="/waitlist" tabIndex={-1}>
            <Button variant="outline" className="border-kasama-primary text-kasama-primary hover:bg-kasama-primary hover:text-white px-6 rounded-full text-sm font-semibold transition-all">
              {t('nav.joinWaitlist')}
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center rounded-md p-2 text-kasama-espresso hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kasama-secondary"
            aria-label="Toggle Language"
          >
            <Globe className="h-5 w-5" />
            <span className="ml-1 text-xs font-bold uppercase">{language}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-kasama-espresso hover:bg-black/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary"
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
              const getTranslationKey = (label: string) => {
                if (label === 'Features') return 'nav.features';
                if (label === 'How It Works') return 'nav.howItWorks';
                if (label === 'About') return 'nav.about';
                return label;
              };
              
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
                  {t(getTranslationKey(link.label) as any)}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link href="/waitlist" tabIndex={-1} className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">{t('nav.joinWaitlist')}</Button>
              </Link>
            </div>
          </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
