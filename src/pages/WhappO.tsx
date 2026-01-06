import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Mail, Phone, Mic, CheckCircle, Zap, Settings, Link2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import whappoLogo from "@/assets/whappo-logo.png";

const capabilities = [
  {
    icon: MessageSquare,
    title: "Interprets Informal Messages",
    description: "Enterprise precision for natural language—understanding slang, abbreviations, and context.",
  },
  {
    icon: Settings,
    title: "Structures Into Workflows",
    description: "Automatically converts messages into orders, requests, approvals, and actionable tasks.",
  },
  {
    icon: Zap,
    title: "Understands Context & Urgency",
    description: "Identifies customer intentions, dependencies, and priority levels in real-time.",
  },
  {
    icon: Link2,
    title: "Seamless System Integration",
    description: "Connects directly to ERP, CRM, and BPM systems for end-to-end automation.",
  },
  {
    icon: Clock,
    title: "Eliminates Manual Entry",
    description: "No more miscommunication or long response cycles—instant structured output.",
  },
];

const channels = [
  { icon: MessageSquare, name: "WhatsApp" },
  { icon: Mail, name: "Email" },
  { icon: Phone, name: "SMS" },
  { icon: Mic, name: "Voice Transcripts" },
];

const metrics = [
  { value: "85%", label: "Query Resolution" },
  { value: "24/7", label: "Availability" },
  { value: "<2s", label: "Response Time" },
  { value: "50+", label: "Languages" },
];

export default function WhappO() {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="enterprise-badge mb-6">Enterprise AI Agent</span>
              <h1 className="text-display-lg text-foreground mt-4">WhappO</h1>
              <p className="text-xl text-primary mt-4 font-medium">
                Conversational Intelligence for Enterprise Workflows
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                WhappO is an Enterprise AI agent built on the InferenceAI framework, enabling governed interpretation of conversational data within enterprise workflows.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Transform every natural language conversation—WhatsApp, email, SMS, voice transcripts—into structured business intelligence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="enterprise" size="lg">
                    Deploy WhappO <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/framework">
                  <Button variant="outline" size="lg">
                    Learn About InferenceAI
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
                <img 
                  src={whappoLogo} 
                  alt="WhappO Logo" 
                  className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-background border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{metric.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <Section>
        <SectionHeader
          eyebrow="Multi-Channel"
          title="One Agent, Every Conversation Channel"
          description="WhappO processes natural language from all your customer communication channels into actionable business intelligence."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {channels.map((channel) => (
            <div 
              key={channel.name}
              className="enterprise-card p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4">
                <channel.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{channel.name}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section className="section-gradient">
        <SectionHeader
          eyebrow="Key Capabilities"
          title="Enterprise-Grade Conversational AI"
          description="WhappO identifies customer intentions, extracts key data, validates business rules, and generates structured objects like orders, requests, approvals, and tasks."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div 
              key={capability.title}
              className="enterprise-card p-8"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <capability.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{capability.title}</h3>
              <p className="text-muted-foreground">{capability.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <SectionHeader
          eyebrow="How It Works"
          title="From Conversation to Action"
          description="WhappO transforms unstructured messages into structured business outputs in real-time."
        />
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { step: "01", title: "Capture", description: "Receive messages from WhatsApp, email, SMS, or voice transcripts." },
              { step: "02", title: "Interpret", description: "AI analyzes intent, extracts entities, and understands context." },
              { step: "03", title: "Validate", description: "Business rules are applied to ensure data integrity." },
              { step: "04", title: "Structure", description: "Generate orders, tasks, approvals, or requests automatically." },
              { step: "05", title: "Integrate", description: "Push structured data to ERP, CRM, or BPM systems." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-navy-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm text-foreground mb-4">Ready to Transform Your Customer Communications?</h2>
          <p className="text-muted-foreground mb-8">
            Deploy WhappO and turn every conversation into structured business intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="enterprise" size="lg">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/agents">
              <Button variant="outline" size="lg">
                View All Agents
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
