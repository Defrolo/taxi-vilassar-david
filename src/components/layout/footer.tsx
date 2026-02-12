"use client"

import { siteConfig } from "@/lib/seo/metadata"
import { Car, Instagram, Phone, MessageCircle, MapPin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-1 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="h-8 w-8 bg-primary rounded flex items-center justify-center shadow-[0_0_10px_rgba(0,242,255,0.4)] group-hover:scale-110 transition-transform">
                                <Car className="text-background w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white leading-none">
                                    Taxi <span className="text-secondary tracking-tighter italic">Vilassar de Mar</span>
                                </span>
                                <span className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mt-1">
                                    David
                                </span>
                            </div>
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black text-lg tracking-tight">{t('footer.quick_links')}</h4>
                        <ul className="space-y-3">
                            {[
                                { name: t('nav.home'), href: "#inicio" },
                                { name: t('nav.services'), href: "#servicios" },
                                { name: t('nav.gallery'), href: "#galeria" },
                                { name: t('nav.info'), href: "#informacion" },
                                { name: t('nav.contact'), href: "#contacto" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-zinc-400 text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black text-lg tracking-tight">{t('footer.contact')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group">
                                    <Phone className="w-5 h-5 text-secondary" />
                                </div>
                                <div className="flex flex-col">
                                    <a href="tel:+34630449626" className="text-white text-sm font-black hover:text-primary transition-colors">
                                        +34 630 449 626
                                    </a>
                                    <span className="text-xs text-zinc-500 font-bold">{t('footer.booking_notice')}</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white text-sm font-black">Vilassar de Mar</span>
                                    <span className="text-xs text-zinc-500 font-bold">{t('footer.region')}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black text-lg tracking-tight">{t('footer.follow_us')}</h4>
                        <div className="flex gap-4">
                            <a
                                href={siteConfig.links.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href={siteConfig.links.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-whatsapp hover:border-whatsapp hover:bg-whatsapp/5 hover:shadow-[0_0_15px_rgba(37,211,102,0.2)] transition-all"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-6 h-6" />
                            </a>
                        </div>
                        <p className="text-xs text-zinc-500 font-bold">
                            {t('footer.experience')}
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Taxi Vilassar de Mar - David.
                    </p>
                    <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-black">
                        {t('footer.coded_by')} <span className="text-primary opacity-80">Antigravity AI</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
