import { Link } from "react-router-dom";
import { ArrowRight, Bot, Brain, Shield, Zap, BarChart3, Globe, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { MetricCounter } from "@/components/MetricCounter";
import { TrustBar } from "@/components/TrustBar";
import { Section, SectionHeader } from "@/components/Section";
import { GridBackground } from "@/components/GridBackground";

const agents = [
  {
    name: "WhappO",
    tagline: "Conversational AI",
    description: "AI-powered customer engagement that transforms WhatsApp into your most powerful sales and support channel.",
    color: "primary" as const,
    features: ["24/7 Customer Support", "Lead Qualification", "Order Processing"],
  },
  {
    name: "yCarbon",
    tagline: "Sustainability Intelligence",
    description: "Autonomous carbon footprint tracking and ESG compliance for enterprise sustainability goals.",
    color: "accent" as const,
    features: ["Carbon Analytics", "ESG Reporting", "Compliance Automation"],
  },
  {
    name: "Arheion",
    tagline: "Document Intelligence",
    description: "Intelligent document processing and knowledge management that understands your enterprise data.",
    color: "primary" as const,
    features: ["Document Intelligence", "Knowledge Graphs", "Semantic Search"],
  },
];

const metrics = [
  { value: 500, suffix: "+", label: "Agents Deployed" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 2, prefix: "$", suffix: "B+", label: "Decisions Processed" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
];

const features = [
  {
    icon: Brain,
    title: "InferenceAI™ Framework",
    description: "Proprietary small language models optimized for enterprise-specific tasks with unmatched efficiency.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with end-to-end encryption and on-premise deployment options.",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Go from concept to production in days. Pre-built integrations with 100+ enterprise tools.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Multi-region infrastructure with automatic failover and sub-100ms response times worldwide.",
  },
];

export default function Index() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <GridBackground className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground/90">Now Available: InferenceAI™ 2.0</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-display-lg font-bold tracking-tight animate-fade-in-up animation-delay-200">
              We Build{" "}
              <span className="gradient-text">Enterprise AI Agents.</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-display-lg font-bold tracking-tight mt-2 animate-fade-in-up animation-delay-300">
              <span className="text-foreground">At Scale.</span>
            </h2>
            
            {/* Subheadline */}
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Axiobit is an Enterprise AI Agents Factory. We design, build, and deploy autonomous agents 
              that transform processes, accelerate compliance, and unlock high-value decision intelligence 
              across entire organizations.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-500">
              <Link to="/agents">
                <Button size="xl" variant="outline" className="min-w-[180px]">
                  Explore Our Agents
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="xl" variant="glow" className="min-w-[180px]">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="xl" variant="outline" className="min-w-[180px]">
                  Ask for a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-700">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </GridBackground>

      {/* Trust Bar */}
      <TrustBar />

      {/* Mission Section */}
      <Section className="section-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Our Mission
            </span>
            <h2 className="text-display-sm md:text-display-md font-bold mb-6">
              A New Generation of{" "}
              <span className="gradient-text-reverse">Enterprise Automation</span>
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
            Enterprises today face an explosion of complexity: regulations increase, data multiplies, 
            communication channels diversify, and workflows become harder to manage. Traditional automation cannot keep up.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Automate manual, repetitive workflows with high accuracy",
              "Embed intelligence into carbon management, sustainability & documentation",
              "Reduce cost and operational errors by delegating reasoning to advanced agents",
              "Enable faster decision-making through AI-assisted insights",
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Metrics Section */}
      <Section className="bg-card/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <MetricCounter
              key={index}
              value={metric.value}
              suffix={metric.suffix}
              prefix={metric.prefix}
              label={metric.label}
            />
          ))}
        </div>
      </Section>

      {/* Agents Section */}
      <Section>
        <SectionHeader
          eyebrow="Meet Our Agents"
          title="Enterprise AI Agents Designed for Real Work"
          description="Each agent is built to solve specific business challenges with domain expertise and seamless integration."
        />
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <GlowCard 
              key={agent.name} 
              className="group p-8 hover:-translate-y-2 transition-all duration-500"
              glowColor={agent.color}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                agent.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
              }`}>
                {agent.tagline}
              </span>
              <h3 className="text-2xl font-bold mb-3">{agent.name}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{agent.description}</p>
              <ul className="space-y-3 mb-6">
                {agent.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      agent.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                to="/agents" 
                className={`inline-flex items-center gap-2 text-sm font-semibold ${
                  agent.color === 'primary' ? 'text-primary' : 'text-accent'
                } hover:gap-3 transition-all`}
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Technology Section */}
      <Section className="section-gradient">
        <SectionHeader
          eyebrow="Technology"
          title="The InferenceAI™ Framework"
          description="Our proprietary technology stack powers intelligent automation at enterprise scale."
        />
        
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex gap-6 p-6 rounded-2xl glass-card-hover group"
            >
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/technology">
            <Button variant="outline" size="lg">
              Explore Our Technology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Case Studies Preview */}
      <Section>
        <SectionHeader
          eyebrow="Case Studies"
          title="Enterprise Success Stories"
          description="See how leading organizations are transforming their operations with our AI agents."
        />
        
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <GlowCard className="p-8 group">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Financial Services</span>
            <h3 className="text-xl font-bold mt-3 mb-3 group-hover:text-primary transition-colors">
              Global Bank Reduces Support Costs by 60%
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Deployed WhappO to handle 2M+ customer interactions monthly, resulting in $12M annual savings.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">60%</div>
                <div className="text-sm text-muted-foreground mt-1">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2M+</div>
                <div className="text-sm text-muted-foreground mt-1">Monthly Interactions</div>
              </div>
            </div>
          </GlowCard>
          
          <GlowCard className="p-8 group" glowColor="accent">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Manufacturing</span>
            <h3 className="text-xl font-bold mt-3 mb-3 group-hover:text-accent transition-colors">
              Fortune 100 Achieves Net Zero Tracking
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              yCarbon enabled real-time carbon tracking across 50+ facilities, accelerating sustainability goals.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Facilities Tracked</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Compliance Rate</div>
              </div>
            </div>
          </GlowCard>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/case-studies">
            <Button variant="outline" size="lg">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2rem] blur-2xl opacity-40" />
            
            {/* Card */}
            <div className="relative glass-card rounded-3xl p-12 md:p-16">
              <h2 className="text-display-sm md:text-display-md font-bold mb-4">
                Ready to Transform Your{" "}
                <span className="gradient-text">Enterprise?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 50+ Fortune 500 companies already using our AI agents to automate operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="xl" variant="glow">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="xl" variant="ghost">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}