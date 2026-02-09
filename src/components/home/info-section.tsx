"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { BadgeCheck, Clock, Sparkles, Star } from "lucide-react"

const stats = [
    { label: "Años de Experiencia", value: "10+", icon: Star },
    { label: "Puntualidad Especialista", value: "Asegurada", icon: Clock },
    { label: "Vehículo Higienizado", value: "Garantizado", icon: Sparkles },
    { label: "Seguridad Máxima", value: "100%", icon: BadgeCheck }
]

export function InfoSection() {
    return (
        <section id="informacion" className="py-24 bg-background/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left side: Stats & Experience */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Trayectoria Profesional</h3>
                            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                                10 Años de <br />
                                <span className="text-secondary tracking-tighter italic">Experiencia</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Soy David, tu taxista de confianza en Vilassar de Mar. Llevo una década ofreciendo un servicio confiable, puntual y profesional a los vecinos de la comarca del Maresme.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <GlassCard key={stat.label} className="p-6 text-center group">
                                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">{stat.label}</div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Vehicle info */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="relative rounded-3xl overflow-hidden border border-primary/20 aspect-video">
                            <Image
                                src="/images/taxi.jpg"
                                alt="Taxi David"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent opacity-90" />
                            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                                <h4 className="text-white font-black text-xl md:text-2xl mb-1 md:mb-2 drop-shadow-md leading-tight">Vehículo Híbrido Premium</h4>
                                <p className="text-zinc-100 text-sm md:text-base font-bold leading-relaxed drop-shadow-sm line-clamp-2 md:line-clamp-none">Toyota Prius blanco: cómodo, espacioso e impecable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
