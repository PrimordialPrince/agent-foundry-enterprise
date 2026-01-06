import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Mail, Phone, Mic, CheckCircle, Building2, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import whappoLogo from "@/assets/whappo-logo.png";

export default function WhappO() {
  return (
    <main className="flex flex-col pt-20 bg-background">
      {/* Hero - Compact, Impactful */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-center gap-6">
              <img src={whappoLogo} alt="WhappO" className="w-20 h-20 lg:w-24 lg:h-24 object-contain" />
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground">WhappO</h1>
                  <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded">Enterprise</span>
                </div>
                <p className="text-lg text-muted-foreground">Conversational AI Agent for Workflow Automation</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/contact">
                <Button variant="enterprise" size="lg">Request Demo</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-navy-light border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-xs text-muted-foreground">Auto-Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">&lt;2s</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Availability</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>SOC 2 Compliant</span>
              <span className="mx-2">•</span>
              <span>GDPR Ready</span>
              <span className="mx-2">•</span>
              <span>Enterprise SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left - Overview */}
          <div className="lg:col-span-2 space-y-8">
            {/* What it does */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                WhappO is an Enterprise AI agent built on the <Link to="/framework" className="text-primary hover:underline">InferenceAI framework</Link>, enabling governed interpretation of conversational data within enterprise workflows. It transforms natural language conversations into structured business intelligence—identifying intentions, extracting data, validating rules, and generating actionable objects.
              </p>
            </div>

            {/* Channels */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Supported Channels</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: MessageSquare, name: "WhatsApp Business" },
                  { icon: Mail, name: "Email" },
                  { icon: Phone, name: "SMS" },
                  { icon: Mic, name: "Voice Transcripts" },
                ].map((ch) => (
                  <div key={ch.name} className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border">
                    <ch.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities Grid */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Intent Recognition", desc: "Interprets informal messages with enterprise-grade NLU" },
                  { icon: Building2, title: "Workflow Generation", desc: "Auto-creates orders, requests, approvals, tasks" },
                  { icon: Globe, title: "Context Awareness", desc: "Understands urgency, dependencies, and history" },
                  { icon: Shield, title: "Business Rules", desc: "Validates against your compliance requirements" },
                ].map((cap) => (
                  <div key={cap.title} className="flex gap-3 p-4 bg-secondary/30 rounded-lg border border-border/50">
                    <cap.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground text-sm">{cap.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{cap.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {["SAP", "Salesforce", "Microsoft Dynamics", "Oracle", "ServiceNow", "Workday", "HubSpot", "Zendesk"].map((name) => (
                  <span key={name} className="px-3 py-1.5 text-xs font-medium bg-background border border-border rounded-full text-muted-foreground">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Action Panel */}
          <div className="space-y-6">
            {/* Primary CTA Card */}
            <div className="bg-navy-light border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Deploy WhappO</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get started with a personalized demo and deployment plan for your organization.
              </p>
              <div className="space-y-3">
                <Link to="/contact" className="block">
                  <Button variant="enterprise" className="w-full">
                    Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button variant="outline" className="w-full">Talk to an Expert</Button>
                </Link>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Business Impact</h3>
              <ul className="space-y-3">
                {[
                  "Eliminate manual data entry errors",
                  "Reduce response cycles by 90%",
                  "24/7 automated customer handling",
                  "Full audit trail & compliance",
                  "Seamless ERP/CRM integration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Link */}
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Technical Foundation</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Built on our proprietary InferenceAI framework for enterprise-grade governance and scale.
              </p>
              <Link to="/framework" className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1">
                View Framework Documentation <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
