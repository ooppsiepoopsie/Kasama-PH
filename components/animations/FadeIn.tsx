"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  const directionOffset = {
    up: 20,
    down: -20,
    left: 20,
    right: -20,
    none: 0,
  }

  const yOffset = direction === "up" || direction === "down" ? directionOffset[direction] : 0
  const xOffset = direction === "left" || direction === "right" ? directionOffset[direction] : 0

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: shouldReduceMotion ? 0 : yOffset,
        x: shouldReduceMotion ? 0 : xOffset
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Soft ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FloatProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Float({ children, className, delay = 0 }: FloatProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
