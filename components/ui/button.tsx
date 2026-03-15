import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold ring-offset-kasama-cream transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kasama-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] motion-reduce:transform-none min-h-[48px]",
  {
    variants: {
      variant: {
        default:
          "bg-kasama-primary text-white shadow-[0_8px_20px_rgba(255,113,91,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(255,113,91,0.4)] hover:bg-kasama-primary-hover",
        secondary:
          "bg-kasama-secondary text-white shadow-[0_8px_20px_rgba(42,157,143,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(42,157,143,0.4)] hover:bg-kasama-secondary-hover",
        outline:
          "border-2 border-kasama-secondary text-kasama-secondary bg-transparent hover:bg-kasama-secondary/5",
        ghost: 
          "text-kasama-espresso hover:bg-kasama-espresso/5",
        link: 
          "text-kasama-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 text-sm",
        lg: "h-14 px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
