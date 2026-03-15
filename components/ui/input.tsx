import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex min-h-[48px] w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-base text-kasama-espresso ring-offset-kasama-cream transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-kasama-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary/50 focus-visible:border-kasama-secondary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
