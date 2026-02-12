"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Plane, Clock, ShieldCheck, Map as MapIcon, MessageCircle, Globe, Building2, Ship } from "lucide-react"
import { ServiceBookingModal } from "./service-booking-modal"
import { useLanguage } from "@/context/language-context"

export function ServicesSection() {
    const { t } = useLanguage()
    const [selectedService, setSelectedService] = useState<any>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const services = [
        {
            title: t('services.items.urban.title'),
            description: t('services.items.urban.description'),
            icon: MapIcon,
            whatsappMessage: "Hola David 👋! Me gustaría solicitar un taxi para un trayecto en **Vilassar de Mar / Maresme**."
        },
        {
            title: t('services.items.airport.title'),
            description: t('services.items.airport.description'),
            icon: Plane,
            whatsappMessage: "Hola David! ✈️ Necesito un taxi para el **Aeropuerto**."
        },
        {
            title: t('services.items.port.title'),
            description: t('services.items.port.description'),
            icon: Ship,
            whatsappMessage: "Hola David! 🚢 Necesito un taxi para ir al **Puerto / Terminal de Cruceros**."
        },
        {
            title: t('services.items.business.title'),
            description: t('services.items.business.description'),
            icon: Building2,
            whatsappMessage: "Hola David! Me gustaría solicitar información para un **servicio de empresa / mutua**."
        },
        {
            title: t('services.items.executive.title'),
            description: t('services.items.executive.description'),
            icon: ShieldCheck,
            whatsappMessage: "Hola David! 🌟 Me gustaría solicitar un **servicio ejecutivo / evento**."
        },
        {
            title: t('services.items.hospital.title'),
            description: t('services.items.hospital.description'),
            icon: Clock,
            whatsappMessage: "Hola David! Necesito un taxi para ir al **Hospital**."
        },
        {
            title: t('services.items.long_distance.title'),
            description: t('services.items.long_distance.description'),
            icon: Globe,
            whatsappMessage: "Hola David! Me gustaría pedir presupuesto para un **viaje de largo recorrido**."
        },
        {
            title: t('services.items.waiting.title'),
            description: t('services.items.waiting.description'),
            icon: Clock,
            whatsappMessage: "Hola David! Me gustaría contratar tu **servicio de espera** y retorno."
        }
    ]

    const handleServiceClick = (service: any) => {
        setSelectedService(service)
        setIsModalOpen(true)
    }

    return (
        <section id="servicios" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                        {t('services.title_prefix')} <span className="text-secondary tracking-tighter italic drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">{t('services.title_highlight')}</span>
                    </h2>
                    <p className="text-zinc-400 text-lg font-medium">
                        {t('services.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 1, y: 0 }}
                            className="h-full"
                        >
                            <button
                                onClick={() => handleServiceClick(service)}
                                className="block w-full h-full group text-left transition-all hover:-translate-y-2 active:scale-95 cursor-pointer"
                                aria-label={`Ver detalles y reservar servicio de ${service.title}`}
                            >
                                <GlassCard className="p-10 h-full group-hover:border-whatsapp/50 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <service.icon className="w-8 h-8" />
                                        </div>
                                        <a
                                            href={`https://wa.me/34630449626?text=${encodeURIComponent(service.whatsappMessage)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="h-12 w-12 rounded-full bg-whatsapp/20 flex items-center justify-center text-whatsapp hover:bg-whatsapp hover:text-white transition-all shadow-sm hover:shadow-whatsapp/20 active:scale-95"
                                            title="Reserva rápida por WhatsApp"
                                        >
                                            <MessageCircle className="w-6 h-6 fill-current" />
                                        </a>
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-4 leading-tight">{service.title}</h3>
                                    <p className="text-primary/80 leading-relaxed text-base font-medium">
                                        {service.description}
                                    </p>
                                </GlassCard>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ServiceBookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                service={selectedService}
            />
        </section>
    )
}
