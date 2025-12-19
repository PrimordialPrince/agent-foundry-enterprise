import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Database, Shield, Zap, Globe, Lock, Server, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { Section, SectionHeader } from "@/components/Section";
import { GridBackground } from "@/components/GridBackground";

const coreTechnologies = [
  {
    icon: Brain,
    title: "Small Language Models (SLMs)",
    description: "Purpose-built models optimized for specific enterprise tasks. 10x more efficient than general-purpose LLMs with superior accuracy in domain-specific applications.",
  },
  {
    icon: Network,
    title: "Knowledge Graphs",
    description: "Dynamic knowledge representation that captures relationships across your enterprise data, enabling contextual reasoning and intelligent decision-making.",
  },
  {
    icon: Shield,
    title: "Regulatory Engines",
    description: "Built-in compliance frameworks for GDPR, SOC 2, HIPAA, and industry-specific regulations. Your data never leaves your control.",
  },
  {
    icon: Cpu,
    title: "Edge Processing",
    description: "Process sensitive data locally with our edge deployment options. Sub-10ms latency for real-time applications.",
  },
];

const architectureFeatures = [
  {
    icon: Database,
    title: "Data Layer",
    items: ["Multi-source connectors", "Real-time sync", "Schema inference", "Data versioning"],
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    items: ["SLM ensemble", "Knowledge graphs", "Reasoning engine", "Context management"],
  },
  {
    icon: Server,
    title: "Orchestration Layer",
    items: ["Workflow automation", "Event processing", "State management", "Load balancing"],
  },
  {
    icon: Globe,
    title: "Integration Layer",
    items: ["REST & GraphQL APIs", "Webhook support", "Enterprise SSO", "Audit logging"],
  },
];

const securityFeatures = [
  {
    title: "SOC 2 Type II Certified",
    description: "Annual third-party audits ensure our security controls meet the highest standards.",
  },
  {
    title: "End-to-End Encryption",
    description: "AES-256 encryption at rest and TLS 1.3 in transit for all data.",
  },
  {
    title: "On-Premise Deployment",
    description: "Full deployment within your infrastructure for maximum data sovereignty.",
  },
  {
    title: "Role-Based Access Control",
    description: "Granular permissions aligned with your organization's security policies.",
  },
  {
    title: "Audit Trails",
    description: "Complete logging of all agent actions and decisions for compliance.",
  },
  {
    title: "Data Residency",
    description: "Choose where your data lives with regional deployment options.",
  },
];

export default function Technology() {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero */}
      <GridBackground className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            Our Technology
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            The <span className="gradient-text">InferenceAI™</span> Framework
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A proprietary technology stack purpose-built for enterprise AI agents. 
            Combining small language models, knowledge graphs, and regulatory engines 
            for unmatched performance and compliance.
          </p>
        </div>
      </GridBackground>

      {/* Core Technologies */}
      <Section>
        <SectionHeader
          eyebrow="Core Components"
          title="Built Different. Built Better."
          description="Every component of InferenceAI™ is engineered for enterprise requirements."
        />
        
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {coreTechnologies.map((tech) => (
            <GlowCard key={tech.title} className="p-8">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                <tech.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Architecture */}
      <Section className="bg-card/30">
        <SectionHeader
          eyebrow="Architecture"
          title="Enterprise-Grade Stack"
          description="A modular architecture designed for scalability, security, and seamless integration."
        />
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative p-6 rounded-xl bg-background/50 border border-border/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              {index < architectureFeatures.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Security */}
      <Section>
        <SectionHeader
          eyebrow="Security & Compliance"
          title="Enterprise Security, No Compromises"
          description="Built with security at its core, not as an afterthought."
        />
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <Lock className="h-5 w-5 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Performance */}
      <Section className="bg-card/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
              Performance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Speed Meets Intelligence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our SLM architecture delivers the perfect balance of speed and accuracy. 
              Process millions of requests with consistent sub-100ms response times.
            </p>
            <ul className="space-y-4">
              {[
                "10x faster than general-purpose LLMs",
                "95%+ accuracy on domain-specific tasks",
                "Horizontal scaling to millions of requests",
                "99.99% uptime SLA",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <GlowCard className="p-8">
            <h3 className="text-lg font-semibold mb-6">Benchmark Comparison</h3>
            <div className="space-y-6">
              {[
                { label: "Response Time", ours: "45ms", others: "450ms" },
                { label: "Cost per 1M Tokens", ours: "$0.50", others: "$5.00" },
                { label: "Domain Accuracy", ours: "96.2%", others: "78.5%" },
                { label: "Data Privacy", ours: "Full Control", others: "Cloud Only" },
              ].map((metric) => (
                <div key={metric.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                  <div className="flex gap-8">
                    <span className="text-sm font-semibold text-primary">{metric.ours}</span>
                    <span className="text-sm text-muted-foreground">{metric.others}</span>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-border/50 flex justify-end gap-8 text-xs text-muted-foreground">
                <span className="text-primary">InferenceAI™</span>
                <span>Industry Average</span>
              </div>
            </div>
          </GlowCard>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See InferenceAI™ in Action
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a technical deep-dive with our solutions architects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="glow-primary">
                Request Technical Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline">
                Download Whitepaper
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
