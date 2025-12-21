import { Bot, MessageCircle, Leaf, FileText, ArrowRight } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Central AI Bot */}
      <div className="relative">
        {/* Glow behind bot */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />
        
        {/* Bot container */}
        <div className="relative w-40 h-40 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full flex items-center justify-center border border-primary/30">
          <Bot className="w-20 h-20 text-primary" />
        </div>
        
        {/* Orbiting elements */}
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-card border border-border rounded-xl flex items-center justify-center shadow-card animate-fade-in-up">
          <MessageCircle className="w-8 h-8 text-primary" />
        </div>
        
        <div className="absolute -bottom-6 -left-10 w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center shadow-card animate-fade-in-up animation-delay-200">
          <Leaf className="w-7 h-7 text-green-500" />
        </div>
        
        <div className="absolute top-1/2 -right-16 w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center shadow-card animate-fade-in-up animation-delay-400">
          <FileText className="w-6 h-6 text-accent" />
        </div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ transform: 'scale(2)' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Floating data points */}
      <div className="absolute top-10 left-10 flex items-center gap-2 px-3 py-2 bg-card/80 border border-border rounded-lg text-xs">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-muted-foreground">2M+ decisions/month</span>
      </div>
      
      <div className="absolute bottom-20 right-10 flex items-center gap-2 px-3 py-2 bg-card/80 border border-border rounded-lg text-xs">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-muted-foreground">99.9% uptime</span>
      </div>
    </div>
  );
}
