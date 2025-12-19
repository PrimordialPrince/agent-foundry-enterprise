import { Link } from "react-router-dom";
import { ArrowRight, Bot, Brain, Shield, Zap, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { MetricCounter } from "@/components/MetricCounter";
import { TrustBar } from "@/components/TrustBar";
import { Section, SectionHeader } from "@/components/Section";
import { GridBackground } from "@/components/GridBackground";

const agents = [
  {
    name: "WhappO",
    description: "AI-powered customer engagement agent that transforms WhatsApp into your most powerful sales and support channel.",
    icon: Bot,
    color: "primary",
    features: ["24/7 Customer Support", "Lead Qualification", "Order Processing"],
  },
  {
    name: "yCarbon",
    description: "Autonomous carbon footprint tracking and ESG compliance agent for enterprise sustainability goals.",
    icon: BarChart3,
    color: "accent",
    features: ["Carbon Analytics", "ESG Reporting", "Compliance Automation"],
  },
  {
    name: "Arheion",
    description: "Intelligent document processing and knowledge management agent that understands your enterprise data.",
    icon: Brain,
    color: "primary",
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
    description: "Go from concept to production in days, not months. Pre-built integrations with 100+ enterprise tools.",
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Now Available: InferenceAI™ 2.0</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up animation-delay-200">
              We Build{" "}
              <span className="gradient-text">Enterprise AI Agents</span>
              <br />
              At Scale
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              The new generation of automation. Autonomous AI agents that understand your business, 
              integrate with your systems, and deliver measurable ROI from day one.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
              <Link to="/contact">
                <Button size="lg" className="glow-primary text-base px-8">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/technology">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Explore Technology
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </GridBackground>

      {/* Trust Bar */}
      <TrustBar />

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
          eyebrow="Our Agents"
          title="Purpose-Built AI for Enterprise"
          description="Each agent is designed to solve specific business challenges with domain expertise and seamless integration."
        />
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <GlowCard 
              key={agent.name} 
              className="group p-8"
              glowColor={agent.color as "primary" | "accent"}
            >
              <div className={`inline-flex p-3 rounded-xl bg-${agent.color}/10 mb-6`}>
                <agent.icon className={`h-8 w-8 text-${agent.color === 'primary' ? 'primary' : 'accent'}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{agent.name}</h3>
              <p className="text-muted-foreground mb-6">{agent.description}</p>
              <ul className="space-y-2">
                {agent.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                to="/agents" 
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Technology Section */}
      <Section className="bg-card/30">
        <SectionHeader
          eyebrow="Technology"
          title="The InferenceAI™ Framework"
          description="Our proprietary technology stack powers intelligent automation at enterprise scale."
        />
        
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex gap-6 p-6 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="p-3 rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
          <GlowCard className="p-8">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Financial Services</span>
            <h3 className="text-xl font-bold mt-3 mb-3">Global Bank Reduces Support Costs by 60%</h3>
            <p className="text-muted-foreground mb-6">
              Deployed WhappO to handle 2M+ customer interactions monthly, resulting in $12M annual savings.
            </p>
            <div className="flex gap-6">
              <div>
                <div className="text-2xl font-bold text-primary">60%</div>
                <div className="text-xs text-muted-foreground">Cost Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">2M+</div>
                <div className="text-xs text-muted-foreground">Monthly Interactions</div>
              </div>
            </div>
          </GlowCard>
          
          <GlowCard className="p-8" glowColor="accent">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Manufacturing</span>
            <h3 className="text-xl font-bold mt-3 mb-3">Fortune 100 Achieves Net Zero Tracking</h3>
            <p className="text-muted-foreground mb-6">
              yCarbon enabled real-time carbon tracking across 50+ facilities, accelerating sustainability goals.
            </p>
            <div className="flex gap-6">
              <div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-xs text-muted-foreground">Facilities Tracked</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-xs text-muted-foreground">Compliance Rate</div>
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
      <Section className="bg-gradient-to-b from-card/50 to-background">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-30" />
          <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 50+ Fortune 500 companies already using our AI agents to automate operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="glow-primary text-base px-8">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="ghost" className="text-base">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
