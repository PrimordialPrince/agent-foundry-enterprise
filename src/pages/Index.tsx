import { Link } from "react-router-dom";
import { ArrowRight, Bot, Brain, Shield, Zap, Globe, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SolutionCard } from "@/components/SolutionCard";
import { HeroIllustration } from "@/components/HeroIllustration";
import networkGlobeBg from "@/assets/network-globe-bg.png";
import { useEffect, useState } from "react";

import whappoIcon from "@/assets/whappo-logo-blue.png";
import bizzfuseIcon from "@/assets/bizzfuse-icon.png";
import arheionIcon from "@/assets/arheion-icon.png";

const solutions = [
  {
    title: "WhappO",
    description: "AI-powered customer engagement that transforms WhatsApp into your most powerful sales and support channel.",
    href: "/agents",
    logo: whappoIcon,
    accentColor: "indigo" as const,
  },
  {
    title: "Bizzfuse",
    description: "AI-powered business process automation that seamlessly connects your enterprise systems and workflows.",
    href: "/agents",
    logo: bizzfuseIcon,
    accentColor: "primary" as const,
  },
  {
    title: "Arheion",
    description: "Intelligent document processing and knowledge management that understands your enterprise data.",
    href: "/agents",
    logo: arheionIcon,
    accentColor: "accent" as const,
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset - moves slower than scroll
  const parallaxOffset = scrollY * 0.3;

  return (
    <main className="flex flex-col">
      {/* Hero Section - Pega inspired */}
      <section id="hero" className="relative min-h-[85vh] flex items-center bg-navy-light lg:bg-background overflow-hidden">
        {/* Left dark background with angular clip - hidden on mobile */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[55%] bg-navy-light z-[1]" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }} />
        
        {/* Right teal network globe background - full width on mobile, positioned right on desktop */}
        <div className="absolute inset-0 lg:right-0 lg:top-0 lg:bottom-0 lg:w-full overflow-hidden">
          {/* Gradient background - more subtle on mobile */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent lg:from-primary lg:via-primary/90 lg:to-[hsl(180,70%,45%)]" />
          
          {/* Parallax network globe image */}
          <div 
            className="absolute inset-0 will-change-transform mix-blend-overlay"
            style={{
              backgroundImage: `url(${networkGlobeBg})`,
              backgroundSize: '120% auto',
              backgroundPosition: 'center top',
              transform: `translateY(${parallaxOffset * 0.5}px)`,
              opacity: 0.4,
            }}
          />
          
          {/* Subtle animated nodes overlay - hidden on mobile for cleaner look */}
          <div className="hidden lg:block absolute inset-0 opacity-60">
            {/* Floating connection points */}
            <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-white/50 animate-pulse" />
            <div className="absolute top-[35%] right-[35%] w-2 h-2 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-[55%] right-[15%] w-4 h-4 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-[25%] right-[45%] w-2 h-2 rounded-full bg-white/35 animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-[65%] right-[40%] w-3 h-3 rounded-full bg-white/45 animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="animate-fade-in-up">
              <h1 className="text-display-lg lg:text-display-xl text-foreground leading-tight">
                We Build Enterprise AI Agents.<br />
                <span className="text-primary">At Scale.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
                Power enterprises with AI agents built to streamline workflows, strengthen compliance, and support critical decisions using real data in real operational environments.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/agents">
                  <Button variant="enterprise" size="lg">
                    Explore our Agents
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
        
        {/* Scroll navigation bullets - positioned at bottom of hero */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          <a href="#solutions" className="w-3 h-3 rounded-full bg-white hover:bg-accent hover:scale-125 transition-all duration-300" aria-label="Go to Solutions" />
          <a href="#capabilities" className="w-3 h-3 rounded-full bg-white/40 hover:bg-accent hover:scale-125 transition-all duration-300" aria-label="Go to Capabilities" />
          <a href="#case-studies" className="w-3 h-3 rounded-full bg-white/40 hover:bg-accent hover:scale-125 transition-all duration-300" aria-label="Go to Case Studies" />
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-background relative overflow-hidden scroll-mt-20">
        {/* Parallax background layer */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none will-change-transform"
          style={{
            backgroundImage: `url(${networkGlobeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${-parallaxOffset}px)`,
            height: '150%',
            top: '-25%',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-foreground/90">
              <span className="text-accent font-bold">Axiobot is an Enterprise AI Agents Factory.</span> We design, build, and deploy autonomous agents that transform processes, accelerate compliance, and unlock high-value decision intelligence across entire organizations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                imagePlaceholder={solution.logo}
                accentColor={solution.accentColor}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              />
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/agents">
              <Button variant="outline" size="lg">
                View All Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="enterprise" size="lg">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-16 bg-navy-light border-y border-border scroll-mt-20">
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
      <section id="clients" className="py-12 bg-background border-b border-border scroll-mt-20">
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
      <section id="capabilities" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="enterprise-badge mb-6">Our Proprietary Framework</span>
              <h2 className="text-display-md text-foreground mt-4">
                The InferenceAI™ <span className="text-primary">Framework</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our proprietary framework powers intelligent automation at enterprise scale, 
                delivering results that transform operations.
              </p>
              <div className="mt-8">
                <Link to="/framework">
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
      <section id="case-studies" className="py-20 section-gradient scroll-mt-20">
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
      <section id="cta" className="py-20 bg-navy-light relative overflow-hidden scroll-mt-20">
        {/* Parallax background layer */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none will-change-transform"
          style={{
            backgroundImage: `url(${networkGlobeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            transform: `translateY(${-parallaxOffset * 0.2}px)`,
            height: '150%',
            top: '-25%',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
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
