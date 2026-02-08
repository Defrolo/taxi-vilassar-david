import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg"
    glow?: boolean
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ className, variant = "primary", size = "md", glow = true, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                    "disabled:pointer-events-none disabled:opacity-50",

                    // Sizes
                    size === "sm" && "h-9 px-4 text-sm",
                    size === "md" && "h-11 px-8 text-base",
                    size === "lg" && "h-14 px-10 text-lg",

                    // Variants
                    variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
                    variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    variant === "outline" && "border border-primary text-primary hover:bg-primary/10",
                    variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",

                    // Glow Effect (Only for primary and outline usually, but sticking to primary for strong glow)
                    glow && variant === "primary" && "shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] hover:-translate-y-0.5",

                    className
                )}
                {...props}
            />
        )
    }
)
NeonButton.displayName = "NeonButton"
