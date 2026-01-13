import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, TrendingDown, Clock, Target, DollarSign, Users, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";

const agroPanCaseStudy = {
  client: "AgroPan",
  industry: "Food Manufacturing",
  tagline: "Large-scale food producer operating high-volume daily order flows across retail and distribution.",
  title: "AI-Driven Order Automation in Food Manufacturing",
  problem: {
    intro: "AgroPan's customers placed orders primarily via WhatsApp using informal, unstructured language.",
    context: "This created systemic operational friction:",
    points: [
      "Orders arrived as free text with inconsistent naming, quantities, and timing",
      "Messages had to be manually interpreted and re-entered into internal systems",
      "A dedicated team of ~15 people was required solely for order translation",
      "The process was slow, error-prone, and difficult to scale",
    ],
    critical: "Critically, AgroPan did not want to change customer behaviour. WhatsApp was already the fastest and most natural interface for their clients.",
  },
  constraint: {
    intro: "Any solution had to:",
    points: [
      "Accept natural language orders as-is",
      "Integrate directly into existing operational workflows",
      "Preserve human oversight for exceptions",
      "Scale without proportional headcount growth",
    ],
  },
  solution: {
    intro: "Axiobit deployed WhappO, an enterprise AI agent designed to translate natural language into structured, system-ready orders.",
    context: "WhappO was embedded directly into AgroPan's operational flow:",
    points: [
      "Ingested WhatsApp messages in real time",
      "Interpreted intent, products, quantities, and delivery constraints",
      "Validated orders against internal rules and data",
      "Generated standardized digital orders automatically",
      "Routed exceptions to human operators for review",
    ],
    closing: "No change to customer behaviour. No new interfaces. No retraining required.",
  },
  impact: {
    operational: [
      { metric: "~15 → 2", label: "Manual processing staff reduced" },
      { metric: "Minutes → Real-time", label: "Order processing time" },
      { metric: "95–98%", label: "Automated translation accuracy" },
      { metric: ">85%", label: "Reduction in operational workload" },
    ],
    business: [
      { metric: "~800%", label: "ROI in first year" },
      { metric: "~2 months", label: "Full payback achieved" },
      { metric: "Significant", label: "Reduction in operational risk" },
      { metric: "High", label: "Scalability without added headcount" },
    ],
  },
  whyItMatters: {
    intro: "This was not automation for efficiency alone.",
    body: "WhappO adapted to how customers already communicated, rather than forcing them into forms, portals, or rigid systems. Intelligence was embedded directly into the operational backbone, where it could compound over time.",
    principle: "AI should fit human behaviour, not the other way around.",
  },
  axiobitRole: {
    intro: "This engagement illustrates how Axiobit designs enterprise AI agents:",
    points: [
      "Embedded in real workflows, not demos",
      "Focused on decision translation, not conversation",
      "Measured by operational and financial impact",
    ],
    closing: "WhappO at AgroPan is AI as infrastructure, not experimentation.",
  },
};

export default function UseCases() {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
          
          <span className="enterprise-badge mb-6">Case Study</span>
          <h1 className="text-display-lg text-foreground mt-4 max-w-4xl">
            {agroPanCaseStudy.title}
          </h1>
          
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">A</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{agroPanCaseStudy.client}</p>
                <p className="text-sm text-muted-foreground">{agroPanCaseStudy.industry}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <p className="text-muted-foreground max-w-xl">{agroPanCaseStudy.tagline}</p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <Section>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-destructive/10">
              <Target className="h-5 w-5 text-destructive" />
            </div>
            <h2 className="text-display-sm text-foreground">The Problem</h2>
          </div>
          
          <p className="text-lg text-foreground mb-4">{agroPanCaseStudy.problem.intro}</p>
          <p className="text-muted-foreground mb-6">{agroPanCaseStudy.problem.context}</p>
          
          <ul className="space-y-3 mb-8">
            {agroPanCaseStudy.problem.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/60 shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
            <p className="text-foreground font-medium">{agroPanCaseStudy.problem.critical}</p>
          </div>
        </div>
      </Section>

      {/* The Constraint */}
      <Section className="bg-navy-light">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Zap className="h-5 w-5 text-amber-500" />
            </div>
            <h2 className="text-display-sm text-foreground">The Constraint</h2>
          </div>
          
          <p className="text-lg text-foreground mb-6">{agroPanCaseStudy.constraint.intro}</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {agroPanCaseStudy.constraint.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The Solution */}
      <Section>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-display-sm text-foreground">The Solution</h2>
          </div>
          
          <p className="text-lg text-foreground mb-4">{agroPanCaseStudy.solution.intro}</p>
          <p className="text-muted-foreground mb-6">{agroPanCaseStudy.solution.context}</p>
          
          <div className="space-y-3 mb-8">
            {agroPanCaseStudy.solution.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">{index + 1}</span>
                </div>
                <span className="text-foreground">{point}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg font-semibold text-accent">{agroPanCaseStudy.solution.closing}</p>
        </div>
      </Section>

      {/* The Impact */}
      <Section className="bg-navy-light">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <TrendingDown className="h-5 w-5 text-emerald-500" />
            </div>
            <h2 className="text-display-sm text-foreground">The Impact</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Operational Metrics */}
            <div className="enterprise-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Operational Metrics</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {agroPanCaseStudy.impact.operational.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-background">
                    <div className="text-2xl font-bold text-primary mb-1">{item.metric}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Business Outcomes */}
            <div className="enterprise-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <DollarSign className="h-5 w-5 text-emerald-500" />
                <h3 className="font-semibold text-foreground">Business Outcomes</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {agroPanCaseStudy.impact.business.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-background">
                    <div className="text-2xl font-bold text-emerald-500 mb-1">{item.metric}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why This Matters */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="text-display-sm text-foreground mb-6">Why This Matters</h2>
          
          <p className="text-lg text-foreground mb-4">{agroPanCaseStudy.whyItMatters.intro}</p>
          <p className="text-muted-foreground mb-8">{agroPanCaseStudy.whyItMatters.body}</p>
          
          <blockquote className="p-6 rounded-xl bg-accent/10 border-l-4 border-accent">
            <p className="text-xl font-semibold text-foreground italic">
              "{agroPanCaseStudy.whyItMatters.principle}"
            </p>
          </blockquote>
        </div>
      </Section>

      {/* Axiobit's Role */}
      <Section className="bg-navy-light">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-display-sm text-foreground">Axiobit's Role</h2>
          </div>
          
          <p className="text-lg text-foreground mb-6">{agroPanCaseStudy.axiobitRole.intro}</p>
          
          <ul className="space-y-3 mb-8">
            {agroPanCaseStudy.axiobitRole.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-lg font-semibold text-accent">{agroPanCaseStudy.axiobitRole.closing}</p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm text-foreground mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-muted-foreground mb-8">
            See how our AI agents can deliver similar results for your organization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="enterprise" size="lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/agents/whappo">
              <Button variant="outline" size="lg">
                Learn About WhappO
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
