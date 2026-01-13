import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import agroPanLogo from "@/assets/agropan-logo.png";

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
      <section className="py-12 md:py-16 bg-navy-light">
        <div className="container mx-auto px-6 text-center">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
          
          <div className="flex justify-center">
            <span className="enterprise-badge mb-4">Case Study</span>
          </div>
          <h1 className="text-display-lg text-foreground mt-3 max-w-4xl mx-auto">
            {agroPanCaseStudy.title}
          </h1>
          
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={agroPanLogo} 
                alt="AgroPan" 
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">{agroPanCaseStudy.client}</p>
                <p className="text-xs text-muted-foreground">{agroPanCaseStudy.industry}</p>
              </div>
            </div>
            <div className="h-6 w-px bg-border hidden sm:block" />
            <p className="text-muted-foreground text-base max-w-xl text-left">{agroPanCaseStudy.tagline}</p>
          </div>
        </div>
      </section>

      {/* The Problem & The Constraint - Side by Side */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* The Problem - Left */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">The Problem</h2>
                
                <p className="text-base text-foreground mb-3">{agroPanCaseStudy.problem.intro}</p>
                <p className="text-base font-semibold text-foreground mb-4">{agroPanCaseStudy.problem.context}</p>
                
                <ul className="space-y-2 mb-5">
                  {agroPanCaseStudy.problem.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/60 shrink-0" />
                      <span className="text-base text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-base text-accent font-medium">{agroPanCaseStudy.problem.critical}</p>
              </div>

              {/* The Constraint - Right */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">The Constraint</h2>
                
                <p className="text-base text-foreground mb-4">{agroPanCaseStudy.constraint.intro}</p>
                
                <div className="space-y-3">
                  {agroPanCaseStudy.constraint.points.map((point, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-navy-light border border-border">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-base text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution & Impact - Side by Side */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* The Solution - Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">The Solution</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium">
                    WhappO
                  </span>
                </div>
                
                <p className="text-base text-foreground mb-3">{agroPanCaseStudy.solution.intro}</p>
                <p className="text-base text-foreground mb-4">{agroPanCaseStudy.solution.context}</p>
                
                <div className="space-y-2 mb-5">
                  {agroPanCaseStudy.solution.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <span className="text-base text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-base font-semibold text-accent">{agroPanCaseStudy.solution.closing}</p>
              </div>

              {/* The Impact - Right */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">The Impact</h2>
                
                <div className="space-y-4">
                  {/* Operational Metrics */}
                  <div className="enterprise-card p-4">
                    <h3 className="font-semibold text-foreground text-base mb-3">Operational Metrics</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {agroPanCaseStudy.impact.operational.map((item, index) => (
                        <div key={index} className="p-3 rounded-lg bg-background">
                          <div className="text-lg font-bold text-primary mb-0.5">{item.metric}</div>
                          <div className="text-base text-muted-foreground">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Business Outcomes */}
                  <div className="enterprise-card p-4">
                    <h3 className="font-semibold text-foreground text-base mb-3">Business Outcomes</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {agroPanCaseStudy.impact.business.map((item, index) => (
                        <div key={index} className="p-3 rounded-lg bg-background">
                          <div className="text-lg font-bold text-emerald-500 mb-0.5">{item.metric}</div>
                          <div className="text-base text-muted-foreground">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Why This Matters</h2>
            
            <p className="text-base text-foreground mb-3">{agroPanCaseStudy.whyItMatters.intro}</p>
            <p className="text-base text-foreground mb-5">{agroPanCaseStudy.whyItMatters.body}</p>
            
            <blockquote className="p-4 rounded-lg bg-accent/10 border-l-4 border-accent max-w-2xl mx-auto text-left">
              <p className="text-base font-semibold text-foreground italic">
                "{agroPanCaseStudy.whyItMatters.principle}"
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Axiobit's Role */}
      <section className="py-10 md:py-14 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Axiobit's Role</h2>
            
            <p className="text-base text-foreground mb-4">{agroPanCaseStudy.axiobitRole.intro}</p>
            
            <ul className="space-y-2 mb-5 inline-block text-left">
              {agroPanCaseStudy.axiobitRole.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{point}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-base font-semibold text-accent">{agroPanCaseStudy.axiobitRole.closing}</p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center relative px-8 md:px-16 py-8">
            {/* Decorative opening quote - top left */}
            <Quote className="absolute -top-2 left-0 w-12 h-12 md:w-16 md:h-16 text-accent/20 rotate-180" />
            
            {/* Decorative closing quote - bottom right */}
            <Quote className="absolute -bottom-2 right-0 w-12 h-12 md:w-16 md:h-16 text-accent/20" />
            
            <p className="text-lg md:text-xl text-accent font-medium italic mb-6 relative z-10">
              We were especially impressed with the short deployment time, the system's accuracy, as well as with Axiobit's team relentless support throughout the whole project.
            </p>
            
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-accent/40"></div>
              <p className="text-base text-foreground font-semibold">Liviu Balanici, Group CEO</p>
              <div className="h-px w-8 bg-accent/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Ready to Transform Your Operations?</h2>
            <p className="text-base text-muted-foreground mb-5">
              See how our AI agents can deliver similar results for your organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact">
                <Button variant="enterprise" size="default">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/agents/whappo">
                <Button variant="outline" size="default">
                  Learn About WhappO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
