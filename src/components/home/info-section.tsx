"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { BadgeCheck, Globe, Star, Users } from "lucide-react"

const languages = [
    { name: "Español", flag: "https://flagcdn.com/w40/es.png" },
    { name: "Catalán", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/40px-Flag_of_Catalonia.svg.png" },
    { name: "Inglés", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "Francés", flag: "https://flagcdn.com/w40/fr.png" }
]

const stats = [
    { label: "Años de Experiencia", value: "10+", icon: Star },
    { label: "Viajes Realizados", value: "50k+", icon: Globe },
    { label: "Clientes Felices", value: "100%", icon: Users },
    { label: "Seguridad Garantizada", value: "Max", icon: BadgeCheck }
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
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Vehicle info & Languages */}
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

                        <GlassCard className="p-8">
                            <h4 className="text-primary font-bold text-xl mb-6 flex items-center gap-3">
                                <Globe className="text-secondary w-6 h-6" />
                                Idiomas Disponibles
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {languages.map((lang) => (
                                    <div key={lang.name} className="flex flex-col items-center gap-2 group">
                                        <div className="w-12 h-8 relative rounded-sm overflow-hidden border border-white/10 group-hover:scale-110 transition-all duration-300">
                                            <Image
                                                src={lang.flag}
                                                alt={lang.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-xs text-muted-foreground font-medium">{lang.name}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    )
}
