import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";

import whappoIcon from "@/assets/whappo-icon.png";
import bizzfuseIcon from "@/assets/bizzfuse-icon.png";
import arheionIcon from "@/assets/arheion-icon.png";

const agents = [
  {
    id: "whappo", name: "WhappO", tagline: "AI-Powered Customer Engagement", logo: whappoIcon,
    description: "Transform WhatsApp into your most powerful sales and support channel.",
    capabilities: ["Intelligent conversation handling", "Automated lead qualification", "Multi-language support (50+ languages)", "Seamless handoff to human agents"],
    metrics: [{ value: "85%", label: "Query Resolution" }, { value: "24/7", label: "Availability" }, { value: "<2s", label: "Response Time" }],
  },
  {
    id: "bizzfuse", name: "Bizzfuse", tagline: "Predictability & Forecasting Intelligence", logo: bizzfuseIcon,
    description: "AI-powered business process automation focused on predictability, forecasting, and rational planning.",
    capabilities: ["Predictive analytics", "Demand forecasting", "Resource optimization", "Algorithmic decision support"],
    metrics: [{ value: "92%", label: "Forecast Accuracy" }, { value: "40%", label: "Cost Reduction" }, { value: "Real-time", label: "Insights" }],
  },
  {
    id: "arheion", name: "Arheion", tagline: "Enterprise Knowledge Intelligence", logo: arheionIcon,
    description: "Unlock the value hidden in your enterprise data.",
    capabilities: ["Intelligent document processing", "Knowledge graph construction", "Semantic search across all data", "Cross-system data integration"],
    metrics: [{ value: "95%", label: "Extraction Accuracy" }, { value: "1M+", label: "Documents/Day" }, { value: "0.3s", label: "Search Latency" }],
  },
];

const handleDownload = (logoUrl: string, name: string) => {
  const link = document.createElement('a');
  link.href = logoUrl;
  link.download = `${name.toLowerCase()}-logo.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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
              <div className="relative inline-block mb-6 group">
                <div className="p-2 rounded-xl bg-primary/10">
                  <img src={agent.logo} alt={`${agent.name} logo`} className="h-16 w-16 object-contain" />
                </div>
                <button
                  onClick={() => handleDownload(agent.logo, agent.name)}
                  className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-primary/90"
                  title={`Download ${agent.name} logo`}
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
              </div>
              <h2 className="text-display-sm text-foreground mb-2">{agent.name}</h2>
              <p className="text-lg text-primary mb-4">{agent.tagline}</p>
              <p className="text-muted-foreground mb-8">{agent.description}</p>
              <div className="flex gap-8 mb-8">
                {agent.metrics.map((m) => (
                  <div key={m.label}><div className="text-2xl font-bold text-primary">{m.value}</div><div className="text-xs text-muted-foreground">{m.label}</div></div>
                ))}
              </div>
              <Link to={`/agents/${agent.id}`}>
                <Button variant="enterprise">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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