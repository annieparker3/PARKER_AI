"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "brand"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const variants = {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
            destructive: "bg-red-500 text-white hover:bg-red-600 shadow-md",
            outline: "border border-input bg-transparent hover:bg-muted hover:text-muted-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
            ghost: "hover:bg-muted hover:text-muted-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            brand: "bg-gradient-to-r from-electric-blue via-royal-purple to-vibrant-pink text-white hover:opacity-90 shadow-lg shadow-primary/20",
        }

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8 text-lg",
            icon: "h-10 w-10",
        }

        const baseClassName = cn(
            "inline-flex items-center justify-center rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation min-h-[44px]",
            variants[variant],
            sizes[size],
            className
        )

        if (asChild) {
            return (
                <Slot
                    ref={ref}
                    className={baseClassName}
                    {...props}
                />
            )
        }

        return (
            <motion.button
                ref={ref}
                className={baseClassName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                {...(props as HTMLMotionProps<"button">)}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
