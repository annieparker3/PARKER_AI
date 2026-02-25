"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="p-2 w-10 h-10" />
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            className="flex items-center justify-center overflow-hidden rounded-full hover:bg-muted relative h-10 w-10 min-h-0"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme === "light" ? "light" : "dark"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === "light" ? (
                        <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
                    ) : (
                        <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
                    )}
                </motion.div>
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
