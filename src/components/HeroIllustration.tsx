import { Bot, MessageCircle, Leaf, FileText } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Teal Network Globe Background */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-[hsl(180,70%,45%)]" />
        
        {/* Network Globe SVG */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-60" 
          viewBox="0 0 400 400" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          
          {/* Globe outline curves */}
          <ellipse cx="200" cy="200" rx="150" ry="150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <ellipse cx="200" cy="200" rx="150" ry="80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <ellipse cx="200" cy="200" rx="80" ry="150" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          
          {/* Network connection lines */}
          {/* Top region */}
          <line x1="200" y1="50" x2="280" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
          <line x1="280" y1="100" x2="320" y2="160" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
          <line x1="200" y1="50" x2="140" y2="90" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <line x1="140" y1="90" x2="100" y2="140" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <line x1="280" y1="100" x2="140" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          
          {/* Middle region */}
          <line x1="100" y1="140" x2="80" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
          <line x1="320" y1="160" x2="340" y2="220" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
          <line x1="100" y1="140" x2="160" y2="180" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <line x1="160" y1="180" x2="240" y2="190" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <line x1="240" y1="190" x2="320" y2="160" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          
          {/* Lower region */}
          <line x1="80" y1="200" x2="110" y2="280" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
          <line x1="340" y1="220" x2="300" y2="300" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
          <line x1="110" y1="280" x2="180" y2="320" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <line x1="180" y1="320" x2="260" y2="330" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <line x1="260" y1="330" x2="300" y2="300" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <line x1="160" y1="180" x2="110" y2="280" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <line x1="240" y1="190" x2="300" y2="300" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          
          {/* Cross connections */}
          <line x1="140" y1="90" x2="160" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <line x1="280" y1="100" x2="240" y2="190" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <line x1="180" y1="320" x2="200" y2="350" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <line x1="260" y1="330" x2="200" y2="350" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          
          {/* Network nodes */}
          <circle cx="200" cy="50" r="4" fill="rgba(255,255,255,0.7)" />
          <circle cx="280" cy="100" r="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="140" cy="90" r="3" fill="rgba(255,255,255,0.5)" />
          <circle cx="100" cy="140" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="320" cy="160" r="3" fill="rgba(255,255,255,0.5)" />
          <circle cx="80" cy="200" r="3" fill="rgba(255,255,255,0.5)" />
          <circle cx="340" cy="220" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="160" cy="180" r="3" fill="rgba(255,255,255,0.4)" />
          <circle cx="240" cy="190" r="3" fill="rgba(255,255,255,0.4)" />
          <circle cx="110" cy="280" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="300" cy="300" r="3" fill="rgba(255,255,255,0.5)" />
          <circle cx="180" cy="320" r="3" fill="rgba(255,255,255,0.5)" />
          <circle cx="260" cy="330" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="200" cy="350" r="3" fill="rgba(255,255,255,0.5)" />
          
          {/* Additional scattered nodes */}
          <circle cx="60" cy="160" r="2" fill="rgba(255,255,255,0.3)" />
          <circle cx="350" cy="180" r="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="120" cy="240" r="2" fill="rgba(255,255,255,0.3)" />
          <circle cx="280" cy="260" r="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="220" cy="140" r="2" fill="rgba(255,255,255,0.3)" />
          <circle cx="180" cy="250" r="2" fill="rgba(255,255,255,0.3)" />
        </svg>
      </div>
      
      {/* Central AI Bot */}
      <div className="relative z-10">
        {/* Glow behind bot */}
        <div className="absolute inset-0 bg-background/20 rounded-full blur-3xl scale-150" />
        
        {/* Bot container */}
        <div className="relative w-40 h-40 bg-gradient-to-br from-background/30 to-background/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-foreground/20">
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
