import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Database, Shield, Zap, Globe, Lock, Server, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";

const coreTechnologies = [
  { icon: Brain, title: "Small Language Models (SLMs)", description: "Purpose-built models optimized for specific enterprise tasks. 10x more efficient than general-purpose LLMs." },
  { icon: Network, title: "Knowledge Graphs", description: "Dynamic knowledge representation that captures relationships across your enterprise data." },
  { icon: Shield, title: "Regulatory Engines", description: "Built-in compliance frameworks for GDPR, SOC 2, HIPAA, and industry-specific regulations." },
  { icon: Cpu, title: "Edge Processing", description: "Process sensitive data locally with our edge deployment options. Sub-10ms latency." },
];

const securityFeatures = [
  { title: "SOC 2 Type II Certified", description: "Annual third-party audits ensure security controls meet highest standards." },
  { title: "End-to-End Encryption", description: "AES-256 encryption at rest and TLS 1.3 in transit." },
  { title: "On-Premise Deployment", description: "Full deployment within your infrastructure." },
  { title: "Role-Based Access Control", description: "Granular permissions aligned with your security policies." },
];

export default function Framework() {
  return (
    <main className="flex flex-col pt-20">
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6 text-center">
          <span className="enterprise-badge mb-6">Our Proprietary Framework</span>
          <h1 className="text-display-lg text-foreground mt-4">The <span className="text-primary">InferenceAI™</span> Framework</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">A proprietary framework purpose-built for enterprise AI agents.</p>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Core Components" title="Built Different. Built Better." />
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {coreTechnologies.map((tech) => (
            <div key={tech.title} className="enterprise-card p-8">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6"><tech.icon className="h-6 w-6 text-primary" /></div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="section-gradient">
        <SectionHeader eyebrow="Security & Compliance" title="Enterprise Security, No Compromises" />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="enterprise-card p-6">
              <Lock className="h-5 w-5 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm text-foreground mb-4">See InferenceAI™ in Action</h2>
          <Link to="/contact"><Button variant="enterprise" size="lg">Request Technical Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
        </div>
      </Section>
    </main>
  );
}