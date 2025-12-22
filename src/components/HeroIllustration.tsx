import { Bot, MessageCircle, Leaf, FileText } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Animated Network Lines SVG */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Animated lines */}
        <g className="animate-pulse" style={{ animationDuration: '4s' }}>
          <line x1="10%" y1="20%" x2="45%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-[dash_3s_ease-in-out_infinite]" />
          <line x1="90%" y1="15%" x2="55%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-[dash_4s_ease-in-out_infinite_0.5s]" />
          <line x1="5%" y1="70%" x2="40%" y2="55%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-[dash_3.5s_ease-in-out_infinite_1s]" />
          <line x1="85%" y1="80%" x2="60%" y2="55%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-[dash_4.5s_ease-in-out_infinite_0.3s]" />
          <line x1="20%" y1="90%" x2="50%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-[dash_3s_ease-in-out_infinite_0.7s]" />
          <line x1="75%" y1="25%" x2="55%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-[dash_4s_ease-in-out_infinite_1.2s]" />
          <line x1="15%" y1="40%" x2="42%" y2="48%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-[dash_3.5s_ease-in-out_infinite_0.2s]" />
          <line x1="80%" y1="60%" x2="58%" y2="52%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-[dash_4s_ease-in-out_infinite_0.8s]" />
        </g>
        
        {/* Cross-connection lines */}
        <g style={{ opacity: 0.15 }}>
          <line x1="10%" y1="20%" x2="75%" y2="25%" stroke="hsl(var(--foreground))" strokeWidth="0.5" className="animate-[pulse_6s_ease-in-out_infinite]" />
          <line x1="5%" y1="70%" x2="85%" y2="80%" stroke="hsl(var(--foreground))" strokeWidth="0.5" className="animate-[pulse_5s_ease-in-out_infinite_1s]" />
          <line x1="20%" y1="90%" x2="90%" y2="15%" stroke="hsl(var(--foreground))" strokeWidth="0.5" className="animate-[pulse_7s_ease-in-out_infinite_0.5s]" />
        </g>
      </svg>
      
      {/* Animated floating dots */}
      <div className="absolute w-3 h-3 rounded-full bg-foreground/20 top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute w-2 h-2 rounded-full bg-foreground/30 top-[15%] right-[10%] animate-[float_5s_ease-in-out_infinite_0.5s]" />
      <div className="absolute w-4 h-4 rounded-full bg-foreground/15 bottom-[30%] left-[5%] animate-[float_7s_ease-in-out_infinite_1s]" />
      <div className="absolute w-2 h-2 rounded-full bg-foreground/25 bottom-[20%] right-[15%] animate-[float_4s_ease-in-out_infinite_0.3s]" />
      <div className="absolute w-3 h-3 rounded-full bg-foreground/20 top-[10%] left-[30%] animate-[float_5.5s_ease-in-out_infinite_0.7s]" />
      <div className="absolute w-2 h-2 rounded-full bg-foreground/30 bottom-[10%] left-[20%] animate-[float_6.5s_ease-in-out_infinite_1.2s]" />
      <div className="absolute w-3 h-3 rounded-full bg-foreground/20 top-[25%] right-[25%] animate-[float_4.5s_ease-in-out_infinite_0.2s]" />
      <div className="absolute w-2 h-2 rounded-full bg-foreground/25 bottom-[40%] right-[8%] animate-[float_5s_ease-in-out_infinite_0.8s]" />

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
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-muted-foreground">2M+ decisions/month</span>
      </div>
      
      <div className="absolute bottom-20 right-10 z-10 flex items-center gap-2 px-3 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-xs shadow-card">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-muted-foreground">99.9% uptime</span>
      </div>
    </div>
  );
}
