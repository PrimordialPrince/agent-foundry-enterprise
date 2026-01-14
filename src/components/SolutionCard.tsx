import { cn } from "@/lib/utils";
import React from "react";

interface SolutionCardProps {
  title: string;
  description: string;
  imagePlaceholder?: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export function SolutionCard({ title, description, imagePlaceholder, href, className, style }: SolutionCardProps) {
  return (
    <a 
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-enterprise",
        className
      )}
      style={style}
    >
      {/* Image placeholder */}
      <div className="aspect-[16/10] bg-secondary relative overflow-hidden flex items-center justify-center">
        {imagePlaceholder ? (
          <img 
            src={imagePlaceholder} 
            alt={title} 
            className="w-32 h-32 object-contain drop-shadow-[0_8px_24px_rgba(15,167,184,0.3)] group-hover:drop-shadow-[0_12px_32px_rgba(233,30,140,0.4)] transition-all duration-500" 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/5">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/40" />
            </div>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
}
