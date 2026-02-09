export function GridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
            {/* Minimal Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Subtle Glow */}
            <div className="absolute top-[-10%] left-[10%] right-[10%] h-[600px] rounded-full bg-primary/5 blur-[100px]" />

            {/* Bottom Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
    )
}
