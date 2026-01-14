import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MessageSquare, Mail, Phone, Mic, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import whappoLogo from "@/assets/whappo-logo-blue.png";

export default function WhappO() {
  return (
    <main className="flex flex-col">
      {/* Hero Section - Full bleed with logo */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99, 102, 241) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text content */}
            <div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy font-medium leading-[1.05] mb-8">
                Turn conversations<br />
                <span className="text-indigo-500">into workflows.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-navy/70 leading-relaxed mb-10 max-w-2xl">
                Only WhappO interprets natural language with enterprise precision—transforming WhatsApp, email, SMS, and voice into structured business intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="enterprise" size="lg" className="text-base px-8 py-6">
                    Request a demo
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-base px-8 py-6 border-navy/20 text-navy hover:bg-navy/5">
                    Contact sales
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right - Logo display */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-indigo-400/30 via-blue-400/20 to-transparent rounded-full scale-110" />
                <img 
                  src={whappoLogo} 
                  alt="WhappO Logo" 
                  className="relative w-72 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section - Two column italic style */}
      <section className="bg-background py-16 lg:py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight italic">
                No manual entry.<br />
                No miscommunication.<br />
                No delays.
              </h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you rely on humans to interpret messages and key in data, you end up with errors, delays, and frustrated customers. WhappO uses governed AI to understand intent, extract entities, validate against business rules, and generate structured objects—orders, requests, approvals, tasks—automatically and at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities + Stats Grid */}
      <section className="bg-navy-light py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Channels */}
            <div className="bg-navy/50 border border-border rounded-2xl p-8">
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-6">Channels</h3>
              <div className="space-y-4">
                {[
                  { icon: MessageSquare, name: "WhatsApp Business" },
                  { icon: Mail, name: "Email" },
                  { icon: Phone, name: "SMS" },
                  { icon: Mic, name: "Voice Transcripts" },
                ].map((ch) => (
                  <div key={ch.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      <ch.icon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <span className="text-foreground">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="bg-navy/50 border border-border rounded-2xl p-8">
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-6">Capabilities</h3>
              <ul className="space-y-3">
                {[
                  "Intent recognition & entity extraction",
                  "Business rule validation",
                  "Workflow object generation",
                  "Context & urgency understanding",
                  "ERP/CRM/BPM integration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance */}
            <div className="bg-navy/50 border border-border rounded-2xl p-8">
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-6">Performance</h3>
              <div className="space-y-6">
                {[
                  { value: "85%", label: "Auto-resolution rate" },
                  { value: "<2s", label: "Average response time" },
                  { value: "50+", label: "Languages supported" },
                  { value: "24/7", label: "Always available" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-baseline justify-between border-b border-border/50 pb-3">
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                    <span className="text-2xl font-bold text-indigo-400">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + CTA Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Trust signals */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Enterprise Ready</h3>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {["SOC 2 Type II", "GDPR Compliant", "Enterprise SLA", "SSO Support"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border">
                    <Shield className="h-4 w-4 text-indigo-400" />
                    <span className="text-sm text-foreground">{badge}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 mt-8">Integrates With</h3>
              <div className="flex flex-wrap gap-2">
                {["SAP", "Salesforce", "Microsoft Dynamics", "Oracle", "ServiceNow", "Workday"].map((name) => (
                  <span key={name} className="px-3 py-1.5 text-xs font-medium bg-secondary/30 border border-border rounded text-muted-foreground">
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent border border-indigo-500/20 rounded-2xl p-8">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                Ready to automate your conversations?
              </h2>
              <p className="text-muted-foreground mb-6">
                Get a personalized demo and see how WhappO transforms customer communications into structured workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="flex-1">
                  <Button variant="enterprise" className="w-full">
                    Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/framework" className="flex-1">
                  <Button variant="outline" className="w-full">
                    View Framework
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Built on <Link to="/framework" className="text-indigo-400 hover:underline">InferenceAI</Link> — our proprietary enterprise AI framework
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
