"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Phone, MessageSquare, MapPin, Instagram } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { BookingForm } from "@/components/home/booking-form"

export function ContactSection() {
    const { t } = useLanguage()

    const contactCards = [
        {
            title: t('contact.cards.call.title'),
            value: "+34 630 449 626",
            subtitle: t('contact.cards.call.subtitle'),
            href: "tel:+34630449626",
            icon: Phone,
            color: "bg-blue-500/20 text-blue-400"
        },
        {
            title: t('contact.cards.whatsapp.title'),
            value: t('contact.cards.whatsapp.value'),
            subtitle: t('contact.cards.whatsapp.subtitle'),
            href: "https://wa.me/34630449626",
            icon: MessageSquare,
            color: "bg-whatsapp/10 text-whatsapp"
        },
        {
            title: t('contact.cards.instagram.title'),
            value: "@taxinaom5",
            subtitle: t('contact.cards.instagram.subtitle'),
            href: "https://www.instagram.com/taxinaom5",
            icon: Instagram,
            color: "bg-pink-500/20 text-pink-400"
        },
        {
            title: t('contact.cards.zone.title'),
            value: "Vilassar de Mar",
            subtitle: t('contact.cards.zone.subtitle'),
            href: "#",
            icon: MapPin,
            color: "bg-yellow-500/20 text-yellow-400"
        }
    ]

    return (
        <section id="contacto" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                        {t('contact.title_prefix')} <span className="text-secondary tracking-tighter italic drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">{t('contact.title_highlight')}</span>
                    </h2>
                    <p className="text-zinc-400 text-lg font-medium">
                        {t('contact.description')}
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
                                <GlassCard className="p-10 h-full flex flex-col items-center text-center group-hover:border-primary/50 border-white/5 transition-all duration-300">
                                    <div className={`h-20 w-20 rounded-2xl ${card.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <card.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-white font-black text-2xl mb-3 tracking-tight">{card.title}</h3>
                                    <p className="text-primary font-black text-xl mb-2 tracking-tight drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]">{card.value}</p>
                                    <p className="text-zinc-500 text-base font-bold">{card.subtitle}</p>
                                </GlassCard>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 max-w-4xl mx-auto">
                    <BookingForm />
                </div>
            </div>
        </section>
    )
}
