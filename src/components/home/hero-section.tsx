"use client"

import { motion } from "framer-motion"
import { NeonButton } from "@/components/ui/neon-button"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, Car, Map as MapIcon, Shield, Zap } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-background to-transparent z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-5xl space-y-8 relative z-20 pt-32 md:pt-0"
            >
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-primary drop-shadow-sm">
                    Taxi en <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-primary">Vilassar de Mar</span>
                </h1>

                <p className="text-xl md:text-2xl font-medium text-primary/80 max-w-3xl mx-auto leading-relaxed">
                    Taxi David: servicios rápidos, puntuales y seguros en El Maresme, hospitales y aeropuertos. 10 años de experiencia a su servicio.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                    <NeonButton
                        size="lg"
                        className="w-full sm:w-auto h-16 px-10 group bg-whatsapp hover:bg-whatsapp/90 text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)] text-xl font-black"
                        onClick={() => window.open("https://wa.me/34630449626", "_blank")}
                        aria-label="Reservar taxi por WhatsApp"
                    >
                        Reservar por WhatsApp
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
                        Llamar al 630 449 626
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
                    <h3 className="text-xl font-bold text-primary mb-2">Años de Servicio</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Una década de experiencia garantizando traslados seguros en toda la comarca.
                    </p>
                </GlassCard>

                <GlassCard className="p-8 text-left hover:-translate-y-2 transition-transform duration-300 border-secondary/50" variant="default" intensity="high">
                    <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 text-primary">
                        <Car className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Vehículo Premium</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Viaja en un Toyota Prius híbrido, limpio, espacioso y respetuoso con el medio ambiente.
                    </p>
                </GlassCard>

                <GlassCard className="p-8 text-left hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                        <MapIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Todo El Maresme</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Llegamos a cualquier punto de la comarca, hospitales y aeropuertos las 24 horas.
                    </p>
                </GlassCard>
            </motion.div>
        </section>
    )
}
