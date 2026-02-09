"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Calendar, MapPin } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Service {
    title: string
    whatsappMessage: string
}

interface ServiceBookingModalProps {
    isOpen: boolean
    onClose: () => void
    service: Service | null
}

export function ServiceBookingModal({ isOpen, onClose, service }: ServiceBookingModalProps) {
    const [route, setRoute] = useState("")
    const [dateTime, setDateTime] = useState("")

    if (!service) return null

    const handleWhatsAppRedirect = () => {
        let message = service.whatsappMessage

        // Clean replacement: only replace if values exist
        if (route) {
            message = message.replace(/\[origen\]|\[origen\] hasta \[destino\]/g, route)
        }
        if (dateTime) {
            message = message.replace(/\[día y hora\]|\[día\] a las \[hora\]|\[hora\]|\[día\]/g, dateTime)
        }

        // Remove any remaining placeholders [anything]
        message = message.replace(/\[.*?\]/g, '...')

        // Final message construction
        let finalMessage = message
        if (route || dateTime) {
            finalMessage += `\n\n📌 Detalles adicionales:`
            if (route) finalMessage += `\n📍 Trayecto: ${route}`
            if (dateTime) finalMessage += `\n⏰ Fecha/Hora: ${dateTime}`
        }

        const whatsappUrl = `https://wa.me/34630449626?text=${encodeURIComponent(finalMessage)}`
        window.open(whatsappUrl, "_blank")
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-card w-full max-w-lg rounded-3xl border border-primary/20 shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary mb-1">
                                            Reserva: {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            Completa los detalles opcionales para tu mensaje.
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6 text-muted-foreground" />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {/* Route Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="route" className="text-sm font-semibold text-primary/80 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-secondary" />
                                            ¿Cuál es el trayecto?
                                        </label>
                                        <input
                                            id="route"
                                            type="text"
                                            placeholder="Ej: Vilassar a Aeropuerto"
                                            className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium"
                                            value={route}
                                            onChange={(e) => setRoute(e.target.value)}
                                        />
                                    </div>

                                    {/* Date/Time Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="dateTime" className="text-sm font-semibold text-primary/80 flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-secondary" />
                                            ¿Para qué día y hora?
                                        </label>
                                        <input
                                            id="dateTime"
                                            type="text"
                                            placeholder="Ej: Mañana a las 10:00"
                                            className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium"
                                            value={dateTime}
                                            onChange={(e) => setDateTime(e.target.value)}
                                        />
                                    </div>

                                    {/* Action Button */}
                                    <Button
                                        onClick={handleWhatsAppRedirect}
                                        className="w-full py-6 text-lg font-black flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp/90 border-none rounded-xl shadow-lg shadow-whatsapp/20"
                                    >
                                        <MessageCircle className="w-6 h-6 fill-current" />
                                        Confirmar Reserva
                                    </Button>

                                    <p className="text-center text-xs text-muted-foreground italic">
                                        Se abrirá WhatsApp con un mensaje personalizado.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
