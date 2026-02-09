"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Phone, MessageSquare, MapPin, Instagram, MessageCircle } from "lucide-react"

const contactCards = [
    {
        title: "Llamada Directa",
        value: "+34 630 449 626",
        subtitle: "Con reserva previa de 24h",
        href: "tel:+34630449626",
        icon: Phone,
        color: "bg-blue-500/20 text-blue-400"
    },
    {
        title: "WhatsApp",
        value: "Respuesta Rápida",
        subtitle: "Reservas por chat",
        href: "https://wa.me/34630449626",
        icon: MessageSquare,
        color: "bg-whatsapp/10 text-whatsapp"
    },
    {
        title: "Instagram",
        value: "@taxinaom5",
        subtitle: "Sígueme para novedades",
        href: "https://www.instagram.com/taxinaom5",
        icon: Instagram,
        color: "bg-pink-500/20 text-pink-400"
    },
    {
        title: "Zona de Servicio",
        value: "Vilassar de Mar",
        subtitle: "Comarca del Maresme",
        href: "#",
        icon: MapPin,
        color: "bg-yellow-500/20 text-yellow-400"
    }
]

export function ContactSection() {
    return (
        <section id="contacto" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary leading-tight">
                        ¿Necesitas un <span className="text-secondary italic">Taxi ahora?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Estamos disponibles para atender tus solicitudes de transporte. Te recomendamos reservar con 24 horas de antelación.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <a
                                href={card.href}
                                className="block group h-full"
                                aria-label={`${card.title}: ${card.value}. ${card.subtitle}`}
                            >
                                <GlassCard className="p-10 h-full flex flex-col items-center text-center group-hover:border-primary/50 transition-all duration-300">
                                    <div className={`h-20 w-20 rounded-2xl ${card.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                        <card.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-primary font-black text-2xl mb-3">{card.title}</h3>
                                    <p className="text-primary font-black text-xl mb-2 tracking-tight">{card.value}</p>
                                    <p className="text-primary/70 text-base font-bold">{card.subtitle}</p>
                                </GlassCard>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 max-w-3xl mx-auto text-center bg-primary/5 border border-primary/20 rounded-[2.5rem] p-12 backdrop-blur-sm"
                >
                    <h3 className="text-3xl font-black text-primary mb-8">Reserva tu viaje en segundos</h3>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="https://wa.me/34630449626?text=Hola David, necesito un taxi ahora mismo."
                            className="bg-whatsapp text-white px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-[0_15px_30px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3"
                            aria-label="Pedir taxi por WhatsApp ahora mismo"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Pedir por WhatsApp
                        </a>
                        <a
                            href="tel:+34630449626"
                            className="bg-primary text-white px-10 py-5 rounded-full font-black text-xl hover:bg-primary/90 transition-all shadow-[0_15px_30px_rgba(46,63,143,0.3)] flex items-center justify-center gap-3"
                            aria-label="Llamar a David por teléfono"
                        >
                            <MessageCircle className="w-6 h-6 fill-current" />
                            Llamar a David
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
