import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    variant?: "default" | "solid" | "neon"
    intensity?: "low" | "medium" | "high"
}

export function GlassCard({
    children,
    className,
    variant = "default",
    intensity = "medium",
    ...props
}: GlassCardProps) {

    const intensityMap = {
        low: "bg-white/40 backdrop-blur-sm",
        medium: "bg-white/60 backdrop-blur-md",
        high: "bg-white/80 backdrop-blur-lg"
    }

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-primary/10 transition-all duration-300 shadow-sm",
                intensityMap[intensity],
                "hover:border-primary/30 hover:shadow-md",
                variant === "neon" && "border-primary/50 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)]",
                className
            )}
            {...props}
        >
            {/* Internal shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    )
}
