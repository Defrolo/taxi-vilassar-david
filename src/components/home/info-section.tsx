"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { BadgeCheck, Clock, Sparkles, Star } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function InfoSection() {
    const { t } = useLanguage()

    const stats = [
        { label: t('info.stats.years'), value: "10+", icon: Star },
        { label: t('info.stats.punctuality'), value: t('info.stats.punctuality_val'), icon: Clock },
        { label: t('info.stats.hygiene'), value: t('info.stats.hygiene_val'), icon: Sparkles },
        { label: t('info.stats.security'), value: "100%", icon: BadgeCheck }
    ]

    return (
        <section id="informacion" className="py-24 bg-background/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left side: Stats & Experience */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-primary font-bold uppercase tracking-widest text-sm drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]">{t('info.title')}</h3>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                {t('info.experience_prefix')} <br />
                                <span className="text-secondary tracking-tighter italic drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">{t('info.experience_highlight')}</span>
                            </h2>
                            <p className="text-zinc-400 text-lg font-medium leading-relaxed">
                                {t('info.description')}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <GlassCard key={stat.label} className="p-6 text-center group border-white/5 hover:border-primary/50 transition-all duration-500">
                                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]" />
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">{stat.label}</div>
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
                                <h4 className="text-white font-black text-xl md:text-2xl mb-1 md:mb-2 drop-shadow-md leading-tight">{t('info.vehicle.title')}</h4>
                                <p className="text-zinc-100 text-sm md:text-base font-bold leading-relaxed drop-shadow-sm line-clamp-2 md:line-clamp-none">{t('info.vehicle.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
