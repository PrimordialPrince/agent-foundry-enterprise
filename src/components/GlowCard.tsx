import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "accent" | "success";
  hover?: boolean;
}

export function GlowCard({ 
  children, 
  className, 
  glowColor = "primary",
  hover = true 
}: GlowCardProps) {
  const glowClasses = {
    primary: "hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.2)]",
    accent: "hover:shadow-[0_0_30px_hsl(var(--glow-accent)/0.2)]",
    success: "hover:shadow-[0_0_30px_hsl(var(--glow-success)/0.2)]",
  };

  const borderClasses = {
    primary: "before:from-primary before:to-accent",
    accent: "before:from-accent before:to-primary",
    success: "before:from-glow-success before:to-primary",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl bg-card border border-border/50 overflow-hidden transition-all duration-300",
        hover && glowClasses[glowColor],
        hover && "hover:border-primary/30 hover:-translate-y-1",
        className
      )}
    >
      {/* Gradient border effect */}
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
        hover && "group-hover:opacity-100",
        "before:absolute before:inset-0 before:rounded-xl before:p-[1px]",
        "before:bg-gradient-to-br",
        borderClasses[glowColor],
        "before:-z-10"
      )} />
      {children}
    </div>
  );
}
