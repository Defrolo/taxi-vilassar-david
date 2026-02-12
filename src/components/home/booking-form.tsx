"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar, Clock, MessageCircle, Navigation, Send } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function BookingForm() {
    const { t } = useLanguage()

    const [formData, setFormData] = useState({
        origin: "",
        destination: "",
        date: "",
        time: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const message = `Hola David! Me gustaría reservar un taxi.
📍 Origen: ${formData.origin || 'No especificado'}
🏁 Destino: ${formData.destination || 'No especificado'}
📅 Fecha: ${formData.date || 'No especificado'}
⏰ Hora: ${formData.time || 'No especificado'}`

        const whatsappUrl = `https://wa.me/34630449626?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <GlassCard className="p-8 md:p-10 border-white/10 relative overflow-hidden group">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="text-center mb-10 space-y-2">
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-lg">
                        {t('booking.title')}
                    </h3>
                    <p className="text-zinc-400 font-medium">
                        {t('booking.subtitle')}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Origin */}
                        <div className="space-y-2 group/input">
                            <label htmlFor="origin" className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {t('booking.origin')}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="origin"
                                    name="origin"
                                    value={formData.origin}
                                    onChange={handleChange}
                                    placeholder={t('booking.origin_placeholder')}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium group-hover/input:border-white/20"
                                    required
                                />
                                <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within/input:text-primary transition-colors" />
                            </div>
                        </div>

                        {/* Destination */}
                        <div className="space-y-2 group/input">
                            <label htmlFor="destination" className="text-sm font-bold text-secondary uppercase tracking-wider flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {t('booking.destination')}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="destination"
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    placeholder={t('booking.destination_placeholder')}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium group-hover/input:border-white/20"
                                />
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within/input:text-secondary transition-colors" />
                            </div>
                        </div>

                        {/* Date */}
                        <div className="space-y-2 group/input">
                            <label htmlFor="date" className="text-sm font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {t('booking.date')}
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white/90 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-medium group-hover/input:border-white/20 [color-scheme:dark]"
                                />
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within/input:text-white transition-colors" />
                            </div>
                        </div>

                        {/* Time */}
                        <div className="space-y-2 group/input">
                            <label htmlFor="time" className="text-sm font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {t('booking.time')}
                            </label>
                            <div className="relative">
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white/90 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-medium group-hover/input:border-white/20 [color-scheme:dark]"
                                />
                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within/input:text-white transition-colors" />
                            </div>
                        </div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-4"
                    >
                        <Button
                            type="submit"
                            className="w-full py-7 text-lg md:text-xl font-black bg-whatsapp hover:bg-whatsapp/90 text-white rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center gap-3 border-none ring-0"
                        >
                            <MessageCircle className="w-6 h-6 fill-current" />
                            {t('booking.submit')}
                            <Send className="w-5 h-5 ml-1 opacity-70" />
                        </Button>
                    </motion.div>
                </form>
            </div>
        </GlassCard>
    )
}
