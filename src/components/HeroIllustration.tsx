import { Bot, MessageCircle, Leaf, FileText } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Central AI Bot */}
      <div className="relative z-10">
        {/* Glow behind bot */}
        <div className="absolute inset-0 bg-background/30 rounded-full blur-3xl scale-150" />
        
        {/* Bot container */}
        <div className="relative w-40 h-40 bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-foreground/20 shadow-2xl">
          <Bot className="w-20 h-20 text-foreground" />
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
      </div>
      
      {/* Floating data points */}
      <div className="absolute top-10 left-10 z-10 flex items-center gap-2 px-3 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-xs shadow-card">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-muted-foreground">2M+ decisions/month</span>
      </div>
      
      <div className="absolute bottom-20 right-10 z-10 flex items-center gap-2 px-3 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-xs shadow-card">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-muted-foreground">99.9% uptime</span>
      </div>
    </div>
  );
}
