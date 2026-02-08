"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Car, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/seo/metadata"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Galería", href: "#galeria" },
    { name: "Información", href: "#informacion" },
    { name: "Contacto", href: "#contacto" },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500",
                scrolled
                    ? "bg-primary shadow-lg py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className={cn(
                        "h-10 w-10 rounded-lg flex items-center justify-center transition-all",
                        scrolled ? "bg-white text-primary" : "bg-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                    )}>
                        <Car className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className={cn(
                            "text-xl font-bold tracking-tight leading-none transition-colors",
                            scrolled ? "text-white" : "text-primary"
                        )}>
                            Taxi <span className={scrolled ? "text-secondary" : "text-primary"}>Vilassar de Mar</span>
                        </span>
                        <span className={cn(
                            "text-xs font-semibold uppercase tracking-widest mt-1",
                            scrolled ? "text-white/80" : "text-muted-foreground"
                        )}>
                            David
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-base font-extrabold transition-colors relative group",
                                scrolled ? "text-white hover:text-secondary" : "text-primary hover:text-secondary"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full",
                                scrolled ? "bg-secondary" : "bg-primary"
                            )} />
                        </Link>
                    ))}
                    <a
                        href={`tel:${siteConfig.links.whatsapp.split('me/')[1]}`}
                        className={cn(
                            "flex items-center gap-2 px-8 py-3 rounded-full text-base font-black transition-all",
                            scrolled
                                ? "bg-secondary text-primary hover:bg-white"
                                : "bg-primary text-white hover:bg-primary/90 shadow-xl scale-110 ml-4"
                        )}
                    >
                        <Phone className="w-5 h-5 fill-current" />
                        Llamar a David
                    </a>
                </nav>

                <button
                    className={cn(
                        "md:hidden transition-colors p-2 rounded-lg",
                        scrolled ? "text-white hover:bg-white/10" : "text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-primary/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-black text-primary border-b border-primary/5 pb-4 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href={siteConfig.links.whatsapp}
                                className="bg-whatsapp text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                <MessageCircle className="w-6 h-6" />
                                Reservar por WhatsApp
                            </a>
                            <a
                                href="tel:+34630449626"
                                className="bg-primary text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                <Phone className="w-6 h-6 fill-current" />
                                Llamar a David
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
