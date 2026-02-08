"use client"

import { siteConfig } from "@/lib/seo/metadata"
import { Car, Instagram, Phone, MessageCircle, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-primary pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-1 space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                                <Car className="text-background w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white leading-none">
                                    Taxi <span className="text-secondary italic">Vilassar de Mar</span>
                                </span>
                                <span className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em] mt-1">
                                    David
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Transporte confiable y seguro desde hace 10 años. Tu satisfacción y seguridad en cada trayecto son mi compromiso.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            {["Inicio", "Servicios", "Galería", "Información", "Contacto"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white/70 text-sm hover:text-secondary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+34630449626" className="text-white text-sm font-bold hover:text-secondary transition-colors">
                                        +34 630 449 626
                                    </a>
                                    <span className="text-xs text-white/60">Disponible 24/7</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-white text-sm font-bold">Vilassar de Mar</span>
                                    <span className="text-xs text-white/60">Comarca del Maresme</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg">Síguenos</h4>
                        <div className="flex gap-4">
                            <a
                                href={siteConfig.links.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={siteConfig.links.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-full bg-whatsapp/10 flex items-center justify-center text-whatsapp hover:bg-whatsapp hover:text-white transition-all"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-xs text-white/50">
                            Taxista autorizado con 10 años de experiencia en el sector.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-white/50 text-xs">
                        &copy; {new Date().getFullYear()} Taxi Vilassar de Mar - David. Todos los derechos reservados.
                    </p>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest">
                        Diseñado por <span className="text-secondary">Javier R. L</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
