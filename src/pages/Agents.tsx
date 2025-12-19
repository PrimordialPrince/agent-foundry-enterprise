import { Link } from "react-router-dom";
import { ArrowRight, Bot, BarChart3, Brain, MessageSquare, Leaf, FileSearch, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { Section, SectionHeader } from "@/components/Section";
import { GridBackground } from "@/components/GridBackground";

const agents = [
  {
    id: "whappo",
    name: "WhappO",
    tagline: "AI-Powered Customer Engagement",
    description: "Transform WhatsApp into your most powerful sales and support channel with an AI agent that understands context, handles complex queries, and never sleeps.",
    icon: MessageSquare,
    color: "primary",
    capabilities: [
      "Intelligent conversation handling with context retention",
      "Automated lead qualification and scoring",
      "Order processing and payment integration",
      "Multi-language support (50+ languages)",
      "Seamless handoff to human agents when needed",
      "Rich media support (images, documents, voice)",
    ],
    metrics: [
      { value: "85%", label: "Query Resolution" },
      { value: "24/7", label: "Availability" },
      { value: "<2s", label: "Response Time" },
    ],
    useCases: [
      "Customer support automation",
      "Sales and lead generation",
      "Appointment scheduling",
      "Order status and tracking",
    ],
  },
  {
    id: "ycarbon",
    name: "yCarbon",
    tagline: "Autonomous ESG & Carbon Intelligence",
    description: "The first AI agent purpose-built for enterprise sustainability. Track, analyze, and report your carbon footprint with unprecedented accuracy and automation.",
    icon: Leaf,
    color: "accent",
    capabilities: [
      "Real-time carbon emissions tracking",
      "Automated ESG report generation",
      "Regulatory compliance monitoring",
      "Supply chain carbon analysis",
      "Predictive sustainability modeling",
      "Integration with IoT sensors and ERP systems",
    ],
    metrics: [
      { value: "99.5%", label: "Data Accuracy" },
      { value: "10x", label: "Faster Reporting" },
      { value: "100%", label: "Compliance" },
    ],
    useCases: [
      "ESG reporting and compliance",
      "Carbon footprint optimization",
      "Sustainability goal tracking",
      "Supply chain emissions analysis",
    ],
  },
  {
    id: "arheion",
    name: "Arheion",
    tagline: "Enterprise Knowledge Intelligence",
    description: "Unlock the value hidden in your enterprise data. Arheion processes, understands, and connects information across your entire organization.",
    icon: FileSearch,
    color: "primary",
    capabilities: [
      "Intelligent document processing and OCR",
      "Knowledge graph construction and reasoning",
      "Semantic search across all data sources",
      "Automatic classification and tagging",
      "Policy and compliance document analysis",
      "Cross-system data integration",
    ],
    metrics: [
      { value: "95%", label: "Extraction Accuracy" },
      { value: "1M+", label: "Documents/Day" },
      { value: "0.3s", label: "Search Latency" },
    ],
    useCases: [
      "Contract analysis and management",
      "Research and due diligence",
      "Regulatory compliance review",
      "Knowledge base automation",
    ],
  },
];

export default function Agents() {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero */}
      <GridBackground className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            Our AI Agents
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Meet the Agents
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built AI agents designed for enterprise. Each agent combines 
            domain expertise with cutting-edge AI to solve real business challenges.
          </p>
        </div>
      </GridBackground>

      {/* Agent Details */}
      {agents.map((agent, index) => (
        <Section 
          key={agent.id} 
          id={agent.id}
          className={index % 2 === 0 ? "" : "bg-card/30"}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className={`inline-flex p-3 rounded-xl ${agent.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} mb-6`}>
                <agent.icon className={`h-8 w-8 ${agent.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{agent.name}</h2>
              <p className={`text-lg ${agent.color === 'primary' ? 'text-primary' : 'text-accent'} mb-4`}>
                {agent.tagline}
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                {agent.description}
              </p>
              
              {/* Metrics */}
              <div className="flex gap-8 mb-8">
                {agent.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className={`text-2xl font-bold ${agent.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <Link to="/contact">
                <Button className={agent.color === 'primary' ? 'glow-primary' : 'glow-accent'}>
                  Deploy {agent.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Capabilities Card */}
            <GlowCard 
              className="p-8"
              glowColor={agent.color as "primary" | "accent"}
            >
              <h3 className="text-lg font-semibold mb-6">Key Capabilities</h3>
              <ul className="space-y-4">
                {agent.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${agent.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="text-sm font-semibold mb-4">Common Use Cases</h4>
                <div className="flex flex-wrap gap-2">
                  {agent.useCases.map((useCase) => (
                    <span 
                      key={useCase}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Agent?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team can build bespoke AI agents tailored to your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="glow-primary">
                Discuss Your Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/technology">
              <Button size="lg" variant="outline">
                Explore Our Technology
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
