"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, ChevronDown } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "¿Se puede pagar con tarjeta?",
        answer: "Sí, aceptamos todas las tarjetas menos American Express. También puede pagar con Bizum para su comodidad."
    },
    {
        question: "¿Tiene silla para niños?",
        answer: "No disponemos de silla propia en el vehículo, pero puede aportar la suya y yo mismo me encargaré de instalarla de forma segura. Además, yo mismo se la entrego en el lugar que usted me diga."
    },
    {
        question: "¿Se puede reservar con días de antelación?",
        answer: "Sí, puede realizar sus reservas con total antelación para asegurar su trayecto en la fecha y hora que necesite."
    },
    {
        question: "¿El coche tiene mucho maletero?",
        answer: "Sí, el vehículo cuenta con un maletero espacioso con capacidad para 4 maletas grandes sin problemas."
    }
]

export function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="py-24 bg-background/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="space-y-4 mb-16 text-center">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        Preguntas Frecuentes
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                        Resolvemos tus <br />
                        <span className="text-secondary tracking-tighter italic text-5xl md:text-6xl">Dudas</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <GlassCard
                            key={index}
                            className={cn(
                                "p-4 md:p-6 cursor-pointer transition-all duration-300",
                                activeIndex === index ? "border-primary/50" : "border-primary/5 hover:border-primary/20"
                            )}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h4 className="text-lg font-bold text-primary">{faq.question}</h4>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <ChevronDown className="w-5 h-5 text-secondary" />
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
