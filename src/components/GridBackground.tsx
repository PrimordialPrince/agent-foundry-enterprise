import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function GridBackground({ className, children }: GridBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-pulse-glow" 
        style={{ animationDelay: "1.5s" }} 
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] animate-pulse-glow" 
        style={{ animationDelay: "2.5s" }} 
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 grid-pattern"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 70%)",
        }}
      />

      {/* Neural network lines decoration */}
      <svg 
        className="absolute top-20 right-0 w-1/2 h-full opacity-20 pointer-events-none"
        viewBox="0 0 400 600"
        fill="none"
      >
        <circle cx="350" cy="100" r="3" fill="hsl(var(--primary))" className="animate-pulse" />
        <circle cx="380" cy="150" r="2" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
        <circle cx="320" cy="200" r="4" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: "1s" }} />
        <circle cx="370" cy="280" r="2" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
        <circle cx="300" cy="350" r="3" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: "2s" }} />
        <path d="M350 100 L380 150 L320 200 L370 280 L300 350" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M350 100 L320 200" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M380 150 L370 280" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}