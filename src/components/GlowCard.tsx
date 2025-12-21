import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "accent";
}

export function GlowCard({ children, className, glowColor = "primary" }: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-500",
        "bg-card/80 backdrop-blur-xl border border-border/50",
        "hover:border-transparent group",
        glowColor === "primary" 
          ? "hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.2)]"
          : "hover:shadow-[0_0_30px_hsl(var(--glow-accent)/0.2)]",
        className
      )}
    >
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]",
          glowColor === "primary" 
            ? "bg-gradient-to-br from-primary/50 via-primary/20 to-transparent"
            : "bg-gradient-to-br from-accent/50 via-accent/20 to-transparent"
        )}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}