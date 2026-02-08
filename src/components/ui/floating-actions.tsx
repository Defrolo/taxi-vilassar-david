"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    className="fixed bottom-6 left-6 z-40 md:hidden"
                >
                    <a
                        href="tel:+34630449626"
                        className="flex items-center gap-3 bg-primary text-white pl-4 pr-6 py-4 rounded-full shadow-[0_8px_30px_rgb(46,63,143,0.4)] border-2 border-white/20 active:scale-95 transition-transform"
                        aria-label="Llamar a David"
                    >
                        <div className="bg-secondary text-primary rounded-full p-2">
                            <Phone className="w-5 h-5 fill-current" />
                        </div>
                        <span className="font-bold text-lg whitespace-nowrap">Llamar a David</span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
