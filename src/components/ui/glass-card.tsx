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
        low: "bg-white/5 backdrop-blur-sm",
        medium: "bg-white/10 backdrop-blur-md",
        high: "bg-white/20 backdrop-blur-lg"
    }

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 shadow-xl",
                intensityMap[intensity],
                "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,242,255,0.15)]",
                variant === "neon" && "border-primary/50 shadow-[0_0_25px_hsl(var(--primary)/0.2)]",
                className
            )}
            {...props}
        >
            <div className="relative z-10">{children}</div>
        </div>
    )
}
