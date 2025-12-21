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
        {/* Diagonal stripe accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 diagonal-stripes opacity-50" />
        
        {/* Angular shape overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-navy-light" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }} />
        
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
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-md text-foreground">
              Enterprise solutions, <span className="text-primary">at the ready</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Axiobit is architected to run your most critical journeys. Explore our key solutions:
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
