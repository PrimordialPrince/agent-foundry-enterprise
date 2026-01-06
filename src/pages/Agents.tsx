import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Leaf, FileSearch, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";

const agents = [
  {
    id: "whappo", name: "WhappO", tagline: "AI-Powered Customer Engagement", icon: MessageSquare,
    description: "Transform WhatsApp into your most powerful sales and support channel.",
    capabilities: ["Intelligent conversation handling", "Automated lead qualification", "Multi-language support (50+ languages)", "Seamless handoff to human agents"],
    metrics: [{ value: "85%", label: "Query Resolution" }, { value: "24/7", label: "Availability" }, { value: "<2s", label: "Response Time" }],
  },
  {
    id: "ycarbon", name: "yCarbon", tagline: "Autonomous ESG & Carbon Intelligence", icon: Leaf,
    description: "The first AI agent purpose-built for enterprise sustainability.",
    capabilities: ["Real-time carbon emissions tracking", "Automated ESG report generation", "Regulatory compliance monitoring", "Supply chain carbon analysis"],
    metrics: [{ value: "99.5%", label: "Data Accuracy" }, { value: "10x", label: "Faster Reporting" }, { value: "100%", label: "Compliance" }],
  },
  {
    id: "arheion", name: "Arheion", tagline: "Enterprise Knowledge Intelligence", icon: FileSearch,
    description: "Unlock the value hidden in your enterprise data.",
    capabilities: ["Intelligent document processing", "Knowledge graph construction", "Semantic search across all data", "Cross-system data integration"],
    metrics: [{ value: "95%", label: "Extraction Accuracy" }, { value: "1M+", label: "Documents/Day" }, { value: "0.3s", label: "Search Latency" }],
  },
];

export default function Agents() {
  return (
    <main className="flex flex-col pt-20">
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6 text-center">
          <span className="enterprise-badge mb-6">Our AI Agents</span>
          <h1 className="text-display-lg text-foreground mt-4">Meet the Agents</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Purpose-built AI agents designed for enterprise.</p>
        </div>
      </section>

      {agents.map((agent, index) => (
        <Section key={agent.id} className={index % 2 === 0 ? "" : "section-gradient"}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                <agent.icon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-display-sm text-foreground mb-2">{agent.name}</h2>
              <p className="text-lg text-primary mb-4">{agent.tagline}</p>
              <p className="text-muted-foreground mb-8">{agent.description}</p>
              <div className="flex gap-8 mb-8">
                {agent.metrics.map((m) => (
                  <div key={m.label}><div className="text-2xl font-bold text-primary">{m.value}</div><div className="text-xs text-muted-foreground">{m.label}</div></div>
                ))}
              </div>
              <div className="flex gap-4">
                <Link to={agent.id === "whappo" ? "/agents/whappo" : "/contact"}>
                  <Button variant="enterprise">
                    {agent.id === "whappo" ? "Learn More" : "Deploy " + agent.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="enterprise-card p-8">
              <h3 className="text-lg font-semibold mb-6">Key Capabilities</h3>
              <ul className="space-y-4">
                {agent.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-0.5" /><span className="text-muted-foreground">{c}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <Section className="bg-navy-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm text-foreground mb-4">Need a Custom Agent?</h2>
          <p className="text-muted-foreground mb-8">Our team can build bespoke AI agents tailored to your requirements.</p>
          <Link to="/contact"><Button variant="enterprise" size="lg">Discuss Your Needs <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
        </div>
      </Section>
    </main>
  );
}