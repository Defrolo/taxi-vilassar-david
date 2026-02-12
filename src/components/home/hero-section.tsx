"use client"

import { motion } from "framer-motion"
import { NeonButton } from "@/components/ui/neon-button"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, Car, Map as MapIcon, Phone } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function HeroSection() {
    const { t } = useLanguage()

    return (
        <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Light Source */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl space-y-8 relative z-20"
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-white drop-shadow-[0_0_25px_rgba(0,242,255,0.5)]">
                        {t('hero.title_prefix')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-pulse-slow text-glow-strong filter drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]">{t('hero.title_highlight')}</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-zinc-400 max-w-3xl leading-relaxed">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                        <NeonButton
                            size="lg"
                            className="w-full sm:w-auto h-16 px-10 group bg-whatsapp hover:bg-whatsapp/90 text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)] text-xl font-black"
                            onClick={() => window.open("https://wa.me/34630449626", "_blank")}
                            aria-label="Reservar taxi por WhatsApp"
                        >
                            {t('hero.whatsapp_btn')}
                            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </NeonButton>
                        <NeonButton
                            variant="outline"
                            size="lg"
                            glow={false}
                            className="w-full sm:w-auto h-16 px-10 border-2 border-primary text-primary text-xl font-black hover:bg-primary/5"
                            onClick={() => window.open("tel:+34630449626")}
                            aria-label="Llamar al taxista David"
                        >
                            <Phone className="mr-3 w-6 h-6 fill-current" />
                            {t('hero.call_btn')}
                        </NeonButton>
                    </div>
                </motion.div>

                {/* Floating Cards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-20"
                >
                    <GlassCard className="p-8 text-left hover:-translate-y-2 transition-transform duration-300">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold">
                            10+
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">{t('hero.cards.experience.title')}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {t('hero.cards.experience.desc')}
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8 text-left hover:-translate-y-2 transition-transform duration-300 border-secondary/50" variant="default" intensity="high">
                        <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 text-primary">
                            <Car className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">{t('hero.cards.vehicle.title')}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {t('hero.cards.vehicle.desc')}
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8 text-left hover:-translate-y-2 transition-transform duration-300">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <MapIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">{t('hero.cards.coverage.title')}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {t('hero.cards.coverage.desc')}
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    )
}
