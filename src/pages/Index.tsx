import { Link } from "react-router-dom";
import { ArrowRight, Bot, Brain, Shield, Zap, Globe, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SolutionCard } from "@/components/SolutionCard";
import { HeroIllustration } from "@/components/HeroIllustration";

const solutions = [
  {
    title: "WhappO",
    description: "AI-powered customer engagement that transforms WhatsApp into your most powerful sales and support channel.",
    href: "/agents",
  },
  {
    title: "Bizzfuse",
    description: "AI-powered business process automation that seamlessly connects your enterprise systems and workflows.",
    href: "/agents",
  },
  {
    title: "Arheion",
    description: "Intelligent document processing and knowledge management that understands your enterprise data.",
    href: "/agents",
  },
];

const metrics = [
  { value: "500+", label: "Agents Deployed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "$2B+", label: "Decisions Processed" },
  { value: "50+", label: "Enterprise Clients" },
];

const capabilities = [
  {
    icon: Brain,
    title: "InferenceAI™ Framework",
    description: "Proprietary small language models optimized for enterprise-specific tasks.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with end-to-end encryption.",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Go from concept to production in days, not months.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Multi-region infrastructure with sub-100ms response times.",
  },
];

const clientLogos = [
  "Fortune 500 Bank",
  "Global Manufacturer",
  "Energy Leader",
  "Tech Enterprise",
  "Insurance Giant",
  "Retail Chain",
];

export default function Index() {
  return (
    <main className="flex flex-col">
      {/* Hero Section - Pega inspired */}
      <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden">
        {/* Left dark background with angular clip */}
        <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-navy-light z-[1]" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }} />
        
        {/* Right teal network globe background - extends behind the angular overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-full overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-[hsl(180,70%,45%)]" />
          
          {/* Network Globe SVG */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-60" 
            viewBox="0 0 400 500" 
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Globe outline curves */}
            <ellipse cx="200" cy="250" rx="180" ry="180" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <ellipse cx="200" cy="250" rx="180" ry="100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            <ellipse cx="200" cy="250" rx="100" ry="180" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            
            {/* Network connection lines - top */}
            <line x1="200" y1="70" x2="300" y2="130" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            <line x1="300" y1="130" x2="350" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            <line x1="200" y1="70" x2="120" y2="110" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            <line x1="120" y1="110" x2="70" y2="180" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            <line x1="300" y1="130" x2="120" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            
            {/* Middle region */}
            <line x1="70" y1="180" x2="50" y2="250" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            <line x1="350" y1="200" x2="380" y2="280" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            <line x1="70" y1="180" x2="150" y2="230" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            <line x1="150" y1="230" x2="260" y2="240" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="260" y1="240" x2="350" y2="200" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            
            {/* Lower region */}
            <line x1="50" y1="250" x2="90" y2="340" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            <line x1="380" y1="280" x2="330" y2="370" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            <line x1="90" y1="340" x2="170" y2="400" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            <line x1="170" y1="400" x2="270" y2="410" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="270" y1="410" x2="330" y2="370" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            <line x1="150" y1="230" x2="90" y2="340" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            <line x1="260" y1="240" x2="330" y2="370" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            
            {/* Cross connections */}
            <line x1="120" y1="110" x2="150" y2="230" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="300" y1="130" x2="260" y2="240" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="170" y1="400" x2="200" y2="430" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            <line x1="270" y1="410" x2="200" y2="430" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            
            {/* Network nodes */}
            <circle cx="200" cy="70" r="5" fill="rgba(255,255,255,0.7)" />
            <circle cx="300" cy="130" r="4" fill="rgba(255,255,255,0.6)" />
            <circle cx="120" cy="110" r="4" fill="rgba(255,255,255,0.5)" />
            <circle cx="70" cy="180" r="5" fill="rgba(255,255,255,0.6)" />
            <circle cx="350" cy="200" r="4" fill="rgba(255,255,255,0.5)" />
            <circle cx="50" cy="250" r="4" fill="rgba(255,255,255,0.5)" />
            <circle cx="380" cy="280" r="5" fill="rgba(255,255,255,0.6)" />
            <circle cx="150" cy="230" r="4" fill="rgba(255,255,255,0.4)" />
            <circle cx="260" cy="240" r="4" fill="rgba(255,255,255,0.4)" />
            <circle cx="90" cy="340" r="5" fill="rgba(255,255,255,0.6)" />
            <circle cx="330" cy="370" r="4" fill="rgba(255,255,255,0.5)" />
            <circle cx="170" cy="400" r="4" fill="rgba(255,255,255,0.5)" />
            <circle cx="270" cy="410" r="5" fill="rgba(255,255,255,0.6)" />
            <circle cx="200" cy="430" r="4" fill="rgba(255,255,255,0.5)" />
            
            {/* Additional scattered nodes */}
            <circle cx="30" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
            <circle cx="390" cy="230" r="3" fill="rgba(255,255,255,0.4)" />
            <circle cx="100" cy="290" r="3" fill="rgba(255,255,255,0.3)" />
            <circle cx="310" cy="310" r="3" fill="rgba(255,255,255,0.4)" />
            <circle cx="230" cy="170" r="3" fill="rgba(255,255,255,0.3)" />
            <circle cx="180" cy="300" r="3" fill="rgba(255,255,255,0.3)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="animate-fade-in-up">
              <h1 className="text-display-lg lg:text-display-xl text-foreground leading-tight">
                Transformation,{" "}
                <span className="text-primary">accelerated</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
                Reimagine legacy systems and rev up automated workflows with 
                the AI-powered platform for enterprise-grade transformation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/agents">
                  <Button variant="enterprise" size="lg">
                    Explore the Platform
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="enterprise-outline" size="lg">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right illustration */}
            <div className="hidden lg:block animate-fade-in-up animation-delay-300">
              <HeroIllustration />
            </div>
          </div>
        </div>
        
        {/* Carousel bullets - positioned at bottom of hero */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          <button className="w-3 h-3 rounded-full bg-white transition-all duration-300" aria-label="Slide 1" />
          <button className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300" aria-label="Slide 2" />
          <button className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300" aria-label="Slide 3" />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-md text-foreground">
              We Build Enterprise AI Agents.<br />
              <span className="text-primary">At Scale.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Axiobot is an Enterprise AI Agents Factory. We design, build, and deploy autonomous agents that transform processes, accelerate compliance, and unlock high-value decision intelligence across entire organizations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/agents">
              <Button variant="outline" size="lg">
                View All Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-navy-light border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{metric.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar - Client Logos */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by leading enterprises worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="px-6 py-3 text-muted-foreground/50 text-sm font-medium"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="enterprise-badge mb-6">Technology</span>
              <h2 className="text-display-md text-foreground mt-4">
                The InferenceAI™ <span className="text-primary">Framework</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our proprietary technology stack powers intelligent automation at enterprise scale, 
                delivering results that transform operations.
              </p>
              <div className="mt-8">
                <Link to="/technology">
                  <Button variant="enterprise-outline" size="lg">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right - Capabilities grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div 
                  key={capability.title}
                  className="enterprise-card p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="enterprise-badge mb-6">Case Studies</span>
            <h2 className="text-display-md text-foreground mt-4">
              Enterprise <span className="text-primary">Success Stories</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              See how leading organizations are transforming their operations with our AI agents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="enterprise-card p-8">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Financial Services
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-3">
                Global Bank Reduces Support Costs by 60%
              </h3>
              <p className="mt-3 text-muted-foreground">
                Deployed WhappO to handle 2M+ customer interactions monthly, 
                resulting in $12M annual savings.
              </p>
              <div className="flex gap-8 mt-6">
                <div>
                  <div className="text-2xl font-bold text-primary">60%</div>
                  <div className="text-xs text-muted-foreground mt-1">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">2M+</div>
                  <div className="text-xs text-muted-foreground mt-1">Monthly Interactions</div>
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="enterprise-card p-8">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Manufacturing
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-3">
                Fortune 100 Achieves Net Zero Tracking
              </h3>
              <p className="mt-3 text-muted-foreground">
                Bizzfuse enabled seamless integration across 50+ enterprise systems, 
                accelerating sustainability goals.
              </p>
              <div className="flex gap-8 mt-6">
                <div>
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-xs text-muted-foreground mt-1">Facilities Tracked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-md text-foreground">
              Ready to Transform Your <span className="text-primary">Enterprise?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join 50+ Fortune 500 companies already using our AI agents 
              to automate operations and drive growth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="enterprise" size="xl">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="enterprise-outline" size="xl">
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Enterprise SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
