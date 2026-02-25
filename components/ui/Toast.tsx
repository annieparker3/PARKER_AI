"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

type ToastType = "default" | "success" | "error" | "info"

interface Toast {
    id: string
    title?: string
    description?: string
    type?: ToastType
}

interface ToastContextType {
    toasts: Toast[]
    toast: (props: Omit<Toast, "id">) => void
    dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = React.useState<Toast[]>([])

    const toast = React.useCallback(({ title, description, type = "default" }: Omit<Toast, "id">) => {
        const id = Math.random().toString(36).substring(2, 9)
        setToasts((prev) => [...prev, { id, title, description, type }])
        setTimeout(() => dismiss(id), 5000)
    }, [])

    const dismiss = React.useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ toasts, toast, dismiss }}>
            {children}
            <div className="fixed bottom-0 right-0 z-[100] flex flex-col p-4 w-full md:max-w-[420px] gap-2">
                <AnimatePresence mode="popLayout">
                    {toasts.map((t) => (
                        <motion.div
                            key={t.id}
                            layout
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                            className={cn(
                                "group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-2xl border p-6 pr-8 shadow-2xl transition-all",
                                "glass bg-card/80 backdrop-blur-xl border-border",
                                t.type === "success" && "border-green-500/50 bg-green-500/5",
                                t.type === "error" && "border-red-500/50 bg-red-500/5",
                                t.type === "info" && "border-primary/50 bg-primary/5"
                            )}
                        >
                            <div className="flex gap-4">
                                {t.type === "success" && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                                {t.type === "error" && <AlertCircle className="h-5 w-5 text-red-500" />}
                                {t.type === "info" && <Info className="h-5 w-5 text-primary" />}
                                <div className="grid gap-1">
                                    {t.title && <div className="text-sm font-black uppercase tracking-tight">{t.title}</div>}
                                    {t.description && <div className="text-sm text-muted-foreground font-sans">{t.description}</div>}
                                </div>
                            </div>
                            <button
                                onClick={() => dismiss(t.id)}
                                className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    )
}

export function useToast() {
    const context = React.useContext(ToastContext)
    if (!context) throw new Error("useToast must be used within ToastProvider")
    return context
}
