import { Link } from "react-router-dom";
import { ArrowRight, Landmark, Factory, HeartPulse, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";

const caseStudies = [
  { id: "global-bank", industry: "Financial Services", icon: Landmark, company: "Global Investment Bank", title: "Reduced Support Costs by 60%", description: "Deployed WhappO to handle customer inquiries across 15 countries.", results: [{ metric: "60%", label: "Cost Reduction" }, { metric: "2M+", label: "Monthly Interactions" }], quote: "WhappO transformed our customer service.", quotee: "Chief Digital Officer" },
  { id: "fortune-100", industry: "Manufacturing", icon: Factory, company: "Fortune 100 Manufacturer", title: "Achieved Net Zero Tracking Across 50+ Facilities", description: "Implemented yCarbon for real-time carbon tracking.", results: [{ metric: "50+", label: "Facilities" }, { metric: "23%", label: "Emissions Reduction" }], quote: "yCarbon gave us visibility for sustainability goals.", quotee: "VP of Sustainability" },
  { id: "healthcare", industry: "Healthcare", icon: HeartPulse, company: "Regional Healthcare Network", title: "Streamlined Clinical Documentation", description: "Deployed Arheion to process clinical documents.", results: [{ metric: "40%", label: "Time Saved" }, { metric: "99.2%", label: "Accuracy" }], quote: "Our clinicians can focus on patients.", quotee: "Chief Medical Officer" },
  { id: "retail", industry: "Retail", icon: ShoppingCart, company: "Global E-commerce Platform", title: "Scaled to 10M+ Users", description: "WhappO provided real-time assistance throughout shopping journey.", results: [{ metric: "35%", label: "Cart Recovery" }, { metric: "$45M", label: "Revenue Impact" }], quote: "WhappO handles peak traffic effortlessly.", quotee: "Head of CX" },
];

export default function CaseStudies() {
  return (
    <main className="flex flex-col pt-20">
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6 text-center">
          <span className="enterprise-badge mb-6">Case Studies</span>
          <h1 className="text-display-lg text-foreground mt-4">Enterprise Success Stories</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">See how leading organizations are transforming with our AI agents.</p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="enterprise-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10"><study.icon className="h-5 w-5 text-primary" /></div>
                <div><span className="text-xs font-semibold uppercase text-muted-foreground">{study.industry}</span><p className="text-sm">{study.company}</p></div>
              </div>
              <h3 className="text-xl font-bold mb-3">{study.title}</h3>
              <p className="text-muted-foreground mb-6">{study.description}</p>
              <div className="flex gap-8 mb-6 py-4 border-y border-border">
                {study.results.map((r) => (<div key={r.label}><div className="text-lg font-bold text-primary">{r.metric}</div><div className="text-xs text-muted-foreground">{r.label}</div></div>))}
              </div>
              <blockquote className="border-l-2 border-primary/30 pl-4 italic text-muted-foreground">"{study.quote}"</blockquote>
              <p className="text-sm text-muted-foreground mt-2">— {study.quotee}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm text-foreground mb-4">Ready to Write Your Success Story?</h2>
          <Link to="/contact"><Button variant="enterprise" size="lg">Start Your Journey <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
        </div>
      </Section>
    </main>
  );
}