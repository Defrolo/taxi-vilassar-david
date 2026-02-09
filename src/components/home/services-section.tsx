"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Plane, Clock, ShieldCheck, Map as MapIcon, MessageCircle, Globe, Building2, Ship } from "lucide-react"
import { ServiceBookingModal } from "./service-booking-modal"

const services = [
    {
        title: "Transporte Urbano",
        description: "Viajes dentro de Vilassar de Mar y El Maresme con rapidez y eficiencia. Llegamos a cualquier punto en el menor tiempo posible.",
        icon: MapIcon,
        whatsappMessage: "Hola David 👋! Me gustaría solicitar un taxi para un trayecto en **Vilassar de Mar / Maresme**. Por favor, dime si hay disponibilidad para [día y hora]."
    },
    {
        title: "Traslado Aeropuerto",
        description: "Servicio puntual al Aeropuerto de Barcelona-El Prat. Seguimiento de vuelos para recogidas sin esperas.",
        icon: Plane,
        whatsappMessage: "Hola David! ✈️ Necesito un taxi para el **Aeropuerto**. Recogida el [día] a las [hora]. ¿Confirmas disponibilidad? Gracias!"
    },
    {
        title: "Traslados a Puertos",
        description: "Servicio especializado para traslados a la Terminal de Cruceros del Puerto de Barcelona y puertos deportivos.",
        icon: Ship,
        whatsappMessage: "Hola David! 🚢 Necesito un taxi para ir al **Puerto / Terminal de Cruceros**. Recogida el [día] a las [hora]. ¿Confirmas?"
    },
    {
        title: "Servicio Empresas",
        description: "Soluciones de movilidad para empresas, mutuas y traslados de personal con facturación mensual disponible.",
        icon: Building2,
        whatsappMessage: "Hola David! Me gustaría solicitar información para un **servicio de empresa / mutua** para el día [día]. ¿Me contactas?"
    },
    {
        title: "Servicios Ejecutivos",
        description: "Transporte discreto y profesional para eventos, cenas o traslados corporativos con la máxima seriedad.",
        icon: ShieldCheck,
        whatsappMessage: "Hola David! 🌟 Me gustaría solicitar un **servicio ejecutivo / evento** para el día [día] a las [hora]. ¿Me das presupuesto?"
    },
    {
        title: "Servicio Hospital",
        description: "Traslados seguros y cómodos a hospitales de El Maresme y Barcelona. Puntualidad máxima para sus citas médicas.",
        icon: Clock,
        whatsappMessage: "Hola David! Necesito un taxi para ir al **Hospital**. Recogida el [día] a las [hora]. Gracias!"
    },
    {
        title: "Largo Recorrido",
        description: "Desplazamientos nacionales e internacionales con tarifas cerradas y máxima comodidad en el trayecto.",
        icon: Globe,
        whatsappMessage: "Hola David! Me gustaría pedir presupuesto para un **viaje de largo recorrido** desde [origen] hasta [destino]."
    },
    {
        title: "Servicio de Espera",
        description: "Para todos sus trayectos contamos con servicio de espera y retorno para su mayor tranquilidad.",
        icon: Clock,
        whatsappMessage: "Hola David! Me gustaría contratar tu **servicio de espera** y retorno para [destino] el día [día] a las [hora]."
    }
]

export function ServicesSection() {
    const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleServiceClick = (service: (typeof services)[0]) => {
        setSelectedService(service)
        setIsModalOpen(true)
    }

    return (
        <section id="servicios" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                        Nuestros <span className="text-secondary italic">Servicios</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Ofrecemos soluciones de transporte personalizadas para que llegues a tu destino con total tranquilidad.
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
                                            href={`https://wa.me/34630449626?text=${encodeURIComponent(service.whatsappMessage.replace(/\[.*?\]/g, '...'))}`}
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
