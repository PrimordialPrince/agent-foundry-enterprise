import { cn } from "@/lib/utils";
import React from "react";

interface SolutionCardProps {
  title: string;
  description: string;
  imagePlaceholder?: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  accentColor?: "primary" | "indigo" | "accent";
}

export function SolutionCard({ title, description, imagePlaceholder, href, className, style, accentColor = "primary" }: SolutionCardProps) {
  const accentClasses = {
    primary: {
      border: "hover:border-primary/40",
      overlay: "bg-primary/10",
      gradient: "from-primary/10 to-accent/5",
      circle: "bg-primary/20",
      innerCircle: "bg-primary/40",
      title: "group-hover:text-primary",
    },
    indigo: {
      border: "hover:border-indigo-500/40",
      overlay: "bg-indigo-500/10",
      gradient: "from-indigo-500/10 to-indigo-400/5",
      circle: "bg-indigo-500/20",
      innerCircle: "bg-indigo-500/40",
      title: "group-hover:text-indigo-400",
    },
    accent: {
      border: "hover:border-accent/40",
      overlay: "bg-accent/10",
      gradient: "from-accent/10 to-primary/5",
      circle: "bg-accent/20",
      innerCircle: "bg-accent/40",
      title: "group-hover:text-accent",
    },
  };

  const colors = accentClasses[accentColor];

  return (
    <a 
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-enterprise",
        colors.border,
        className
      )}
      style={style}
    >
      {/* Image placeholder */}
      <div className="aspect-[16/10] bg-secondary relative overflow-hidden">
        {imagePlaceholder ? (
          <img src={imagePlaceholder} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className={cn("absolute inset-0 flex items-center justify-center bg-gradient-to-br", colors.gradient)}>
            <div className={cn("w-20 h-20 rounded-full flex items-center justify-center", colors.circle)}>
              <div className={cn("w-10 h-10 rounded-full", colors.innerCircle)} />
            </div>
          </div>
        )}
        {/* Overlay on hover */}
        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity", colors.overlay)} />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className={cn("text-lg font-semibold text-foreground transition-colors", colors.title)}>
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
}
