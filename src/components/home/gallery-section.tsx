"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

const photos = [
    {
        src: "/images/taxi.jpg",
        alt: "Taxi David - Vehículo Toyota Prius",
        title: "Nuestro Vehículo",
        description: "Comodidad y seguridad en cada trayecto.",
        whatsappMessage: "Hola David! Me gustaría reservar un servicio con tu **coche híbrido premium** para el día [día] a las [hora]."
    },
    {
        src: "/images/aeropuerto.jpg",
        alt: "Servicio de Taxi al Aeropuerto",
        title: "Traslados al Aeropuerto",
        description: "Puntualidad para tus vuelos nacionales e internacionales.",
        whatsappMessage: "Hola David! ✈️ Necesito un taxi para el **Aeropuerto**. Recogida el [día] a las [hora]. ¿Confirmas disponibilidad? Gracias!"
    },
    {
        src: "/images/hospital.jpg",
        alt: "Servicio de Taxi a Hospitales",
        title: "Citas Médicas y Hospitales",
        description: "Servicio prioritario para traslados sanitarios.",
        whatsappMessage: "Hola David! Necesito un taxi para un **traslado a Hospital**. Me gustaría reservar el servicio para el día [día] a las [hora]. Gracias!"
    },
    {
        src: "/images/estacion.jpg",
        alt: "Servicio de Taxi a Estaciones de Tren",
        title: "Estación de Tren",
        description: "Conexiones rápidas con estaciones de tren y autobús.",
        whatsappMessage: "Hola David! Me gustaría reservar un taxi para ir a la **Estación de Tren** el día [día] a las [hora]. Recogida en: [dirección]."
    }
]

export function GallerySection() {
    return (
        <section id="galeria" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary leading-tight">
                        Nuestro Servicio en <span className="text-secondary italic">Imágenes</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Conozca el vehículo y los destinos más frecuentes de nuestro servicio en Vilassar de Mar.
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
                            className="group relative h-[400px] overflow-hidden rounded-2xl border border-primary/10"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 group-hover:text-secondary transition-colors leading-tight">{photo.title}</h4>
                                <p className="text-sm md:text-base text-zinc-100 mb-6 md:mb-8 opacity-0 group-hover:opacity-100 transition-opacity delay-100 font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                                    {photo.description}
                                </p>
                                <a
                                    href={`https://wa.me/34630449626?text=${encodeURIComponent(photo.whatsappMessage)}`}
                                    className="inline-flex items-center gap-3 bg-whatsapp text-white px-6 md:px-8 py-3 md:py-4 h-12 md:h-14 rounded-full font-black text-base md:text-lg shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-105 transition-all w-full sm:w-auto justify-center"
                                >
                                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                                    Reservar por WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-primary font-bold bg-primary/5 border border-primary/10 rounded-full py-3 px-8 inline-block">
                        Nuestro vehículo cuenta con capacidad para 4 pasajeros y amplio maletero.
                    </p>
                </div>
            </div>
        </section>
    )
}
