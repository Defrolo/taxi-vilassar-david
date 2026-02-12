"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Car, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/seo/metadata"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/language-context"
import { Language } from "@/lib/i18n/translations"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { language, setLanguage, t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const languages: { name: Language; flag: string; fullName: string }[] = [
        { name: "es", flag: "https://flagcdn.com/w40/es.png", fullName: "Español" },
        { name: "ca", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/40px-Flag_of_Catalonia.svg.png", fullName: "Català" },
        { name: "en", flag: "https://flagcdn.com/w40/gb.png", fullName: "English" },
        { name: "fr", flag: "https://flagcdn.com/w40/fr.png", fullName: "Français" }
    ]

    const navLinks = [
        { name: t('nav.home'), href: "#inicio" },
        { name: t('nav.services'), href: "#servicios" },
        { name: t('nav.gallery'), href: "#galeria" },
        { name: t('nav.info'), href: "#informacion" },
        { name: t('nav.contact'), href: "#contacto" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500",
                scrolled
                    ? "bg-background/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            )}
        >
            {/* Top Bar */}
            <div className={cn(
                "border-b transition-all duration-500 py-2",
                scrolled
                    ? "border-primary/10 bg-white/40 hidden md:block"
                    : "border-primary/5 bg-primary/5"
            )}>
                <div className="container mx-auto px-6 flex justify-end gap-6 items-center">
                    <div className="flex items-center gap-4">
                        {languages.map((lang) => (
                            <button
                                key={lang.name}
                                onClick={() => setLanguage(lang.name)}
                                className="flex items-center gap-1.5 group cursor-pointer bg-transparent border-none p-0"
                            >
                                <div className={cn(
                                    "w-5 h-3.5 relative rounded-[2px] overflow-hidden border transition-transform",
                                    language === lang.name ? "border-primary scale-110" : "border-primary/10 group-hover:scale-110"
                                )}>
                                    <img
                                        src={lang.flag}
                                        alt={lang.fullName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className={cn(
                                    "text-[10px] font-black tracking-wider transition-colors uppercase",
                                    language === lang.name ? "text-primary" : "text-primary/60 group-hover:text-primary"
                                )}>
                                    {lang.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cn(
                "container mx-auto px-6 flex items-center justify-between transition-all duration-500",
                scrolled ? "py-3" : "py-6"
            )}>
                <Link href="/" className="flex items-center gap-3 group">
                    <div className={cn(
                        "h-10 w-10 rounded-lg flex items-center justify-center transition-all",
                        scrolled ? "bg-primary text-white" : "bg-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                    )}>
                        <Car className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className={cn(
                            "text-xl font-black tracking-tight leading-none transition-colors",
                            scrolled ? "text-primary" : "text-primary"
                        )}>
                            Taxi <span className="text-secondary italic">Vilassar de Mar</span>
                        </span>
                        <span className={cn(
                            "text-xs font-bold uppercase tracking-[0.2em] mt-1",
                            scrolled ? "text-primary/60" : "text-muted-foreground"
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
                                "text-sm font-black uppercase tracking-widest transition-colors relative group",
                                scrolled ? "text-primary/80 hover:text-primary" : "text-primary hover:text-primary"
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <a
                        href={`tel:+34630449626`}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-black transition-all",
                            scrolled
                                ? "bg-primary text-white hover:bg-primary/90"
                                : "bg-primary text-white hover:bg-primary/90 shadow-xl"
                        )}
                    >
                        <Phone className="w-4 h-4 fill-current" />
                        {t('nav.call')}
                    </a>
                </nav>

                <button
                    className={cn(
                        "md:hidden transition-colors p-2 rounded-lg",
                        scrolled ? "text-primary hover:bg-primary/5" : "text-primary hover:bg-primary/5"
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
                        className="md:hidden bg-background/98 backdrop-blur-xl border-b border-primary/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-10 flex flex-col gap-6">
                            {/* Mobile Languages */}
                            <div className="flex justify-center gap-6 pb-6 border-b border-primary/5">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.name}
                                        onClick={() => setLanguage(lang.name)}
                                        className="flex flex-col items-center gap-2 bg-transparent border-none p-0"
                                    >
                                        <div className={cn(
                                            "w-10 h-6 relative rounded-sm overflow-hidden border transition-all",
                                            language === lang.name ? "border-primary ring-2 ring-primary/20" : "border-primary/10"
                                        )}>
                                            <img
                                                src={lang.flag}
                                                alt={lang.fullName}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <span className={cn(
                                            "text-[10px] font-bold uppercase",
                                            language === lang.name ? "text-primary" : "text-primary/60"
                                        )}>{lang.name}</span>
                                    </button>
                                ))}
                            </div>

                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-black text-primary border-b border-primary/5 pb-4 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href={siteConfig.links.whatsapp}
                                className="bg-whatsapp text-white text-center py-4 rounded-xl font-black text-lg shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                <MessageCircle className="w-6 h-6" />
                                WhatsApp
                            </a>
                            <a
                                href="tel:+34630449626"
                                className="bg-primary text-white text-center py-4 rounded-xl font-black text-lg shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                <Phone className="w-6 h-6 fill-current" />
                                {t('nav.call')}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
