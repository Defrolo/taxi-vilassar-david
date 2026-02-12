"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/language-context"

export function GallerySection() {
    const { t } = useLanguage()

    const photos = [
        {
            src: "/images/taxi.jpg",
            alt: "Taxi David - Vehículo Toyota Prius",
            title: t('gallery.items.taxi.title'),
            description: t('gallery.items.taxi.description'),
            whatsappMessage: "Hola David! Me gustaría reservar un servicio con tu **coche híbrido premium**."
        },
        {
            src: "/images/aeropuerto.jpg",
            alt: "Servicio de Taxi al Aeropuerto",
            title: t('gallery.items.airport.title'),
            description: t('gallery.items.airport.description'),
            whatsappMessage: "Hola David! ✈️ Necesito un taxi para el **Aeropuerto**."
        },
        {
            src: "/images/hospital.jpg",
            alt: "Servicio de Taxi a Hospitales",
            title: t('gallery.items.hospital.title'),
            description: t('gallery.items.hospital.description'),
            whatsappMessage: "Hola David! Necesito un taxi para un **traslado a Hospital**."
        },
        {
            src: "/images/estacion.jpg",
            alt: "Servicio de Taxi a Estaciones de Tren",
            title: t('gallery.items.station.title'),
            description: t('gallery.items.station.description'),
            whatsappMessage: "Hola David! Me gustaría reservar un taxi para ir a la **Estación de Tren**."
        }
    ]

    return (
        <section id="galeria" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                        {t('gallery.title_prefix')} <span className="text-secondary tracking-tighter italic drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">{t('gallery.title_highlight')}</span>
                    </h2>
                    <p className="text-zinc-400 text-lg font-medium">
                        {t('gallery.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative h-[400px] overflow-hidden rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className={cn(
                                    "object-cover transition-transform duration-700 group-hover:scale-110",
                                    photo.title === t('gallery.items.hospital.title') ? "object-[center_30%]" : "object-center"
                                )}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 group-hover:text-secondary transition-colors leading-tight">{photo.title}</h4>
                                <p className="text-sm md:text-base text-zinc-100 mb-0 opacity-0 group-hover:opacity-100 transition-opacity delay-100 font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                                    {photo.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-white font-bold bg-white/5 border border-white/10 rounded-full py-3 px-8 inline-block shadow-lg">
                        {t('gallery.vehicle_info')}
                    </p>
                </div>
            </div>
        </section>
    )
}
