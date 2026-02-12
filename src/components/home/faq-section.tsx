"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, ChevronDown } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/language-context"



export function FaqSection() {
    const { t } = useLanguage()
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: t('faq.items.payment.q'),
            answer: t('faq.items.payment.a')
        },
        {
            question: t('faq.items.child_seat.q'),
            answer: t('faq.items.child_seat.a')
        },
        {
            question: t('faq.items.booking.q'),
            answer: t('faq.items.booking.a')
        },
        {
            question: t('faq.items.luggage.q'),
            answer: t('faq.items.luggage.a')
        }
    ]

    return (
        <section id="faq" className="py-24 bg-background/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="space-y-4 mb-16 text-center">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]">
                        <HelpCircle className="w-4 h-4" />
                        {t('faq.title_prefix')} {t('faq.title_highlight')}
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        {t('faq.subtitle')}
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <GlassCard
                            key={index}
                            className={cn(
                                "p-4 md:p-6 cursor-pointer transition-all duration-300 border-white/5",
                                activeIndex === index ? "border-primary/50 bg-white/5" : "hover:border-primary/20"
                            )}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h4 className="text-lg font-bold text-white tracking-tight">{faq.question}</h4>
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
                                        <div className="pt-4 text-zinc-400 font-medium leading-relaxed">
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
