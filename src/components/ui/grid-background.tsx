export function GridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
            {/* Neon Cyan central glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,242,255,0.08),transparent_70%)]" />

            {/* Futuristic Grid */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #00f2ff 1px, transparent 1px),
            linear-gradient(to bottom, #00f2ff 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Side Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]" />

            {/* Bottom Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
    )
}
