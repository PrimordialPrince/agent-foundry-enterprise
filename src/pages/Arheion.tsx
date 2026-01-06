import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, Database, Search, Network, FileText, Brain, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";

const capabilities = [
  {
    icon: FileText,
    title: "Intelligent Document Processing",
    description: "Extract structured data from any document format—PDFs, images, emails, contracts, and more.",
  },
  {
    icon: Network,
    title: "Knowledge Graph Construction",
    description: "Automatically build interconnected knowledge graphs that reveal hidden relationships in your data.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Find exactly what you need with natural language queries across all your enterprise data.",
  },
  {
    icon: Database,
    title: "Cross-System Integration",
    description: "Unify data from disparate systems into a single, searchable knowledge repository.",
  },
  {
    icon: Brain,
    title: "Contextual Understanding",
    description: "AI that understands context, relationships, and meaning—not just keywords.",
  },
];

const dataTypes = [
  "Contracts",
  "Invoices",
  "Emails",
  "Reports",
  "Policies",
  "Technical Docs",
  "Meeting Notes",
  "Research Papers",
];

const metrics = [
  { value: "95%", label: "Extraction Accuracy" },
  { value: "1M+", label: "Documents/Day" },
  { value: "0.3s", label: "Search Latency" },
  { value: "100+", label: "File Formats" },
];

export default function Arheion() {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="enterprise-badge mb-6">Enterprise AI Agent</span>
              <h1 className="text-display-lg text-foreground mt-4">Arheion</h1>
              <p className="text-xl text-primary mt-4 font-medium">
                Enterprise Knowledge Intelligence
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Arheion unlocks the value hidden in your enterprise data. It transforms unstructured documents into actionable intelligence through advanced AI processing.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From intelligent document processing to semantic search, Arheion makes your organization's collective knowledge instantly accessible and actionable.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="enterprise" size="lg">
                    Deploy Arheion <ArrowRight className="ml-2 h-4 w-4" />
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
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl" />
                <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-navy flex items-center justify-center border border-border/50">
                  <FileSearch className="w-32 h-32 lg:w-40 lg:h-40 text-primary" />
                </div>
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

      {/* Data Types Section */}
      <Section>
        <SectionHeader
          eyebrow="Universal Processing"
          title="Every Document, Every Format"
          description="Arheion processes any document type your enterprise generates, extracting structured data with exceptional accuracy."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {dataTypes.map((type) => (
            <div 
              key={type}
              className="enterprise-card p-4 text-center hover:border-primary/50 transition-colors"
            >
              <span className="font-semibold text-foreground">{type}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section className="section-gradient">
        <SectionHeader
          eyebrow="Key Capabilities"
          title="Transform Data Into Knowledge"
          description="Arheion goes beyond simple search—it understands, connects, and reveals insights hidden in your enterprise data."
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
          title="From Documents to Intelligence"
          description="Arheion's AI pipeline transforms raw documents into a connected knowledge ecosystem."
        />
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { step: "01", title: "Ingest", description: "Connect your document repositories, file shares, and enterprise systems." },
              { step: "02", title: "Process", description: "AI extracts text, tables, entities, and relationships from every document." },
              { step: "03", title: "Enrich", description: "Automatically classify, tag, and link related information." },
              { step: "04", title: "Index", description: "Build searchable knowledge graphs with semantic understanding." },
              { step: "05", title: "Discover", description: "Query with natural language and get instant, accurate answers." },
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

      {/* Use Cases */}
      <Section className="section-gradient">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="enterprise-badge mb-6">Use Cases</span>
            <h2 className="text-display-sm text-foreground mt-4">
              Knowledge at Your Fingertips
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Whether it's contract analysis, research discovery, or compliance verification, Arheion delivers the answers you need in seconds.
            </p>
          </div>
          <div className="enterprise-card p-8">
            <h3 className="text-lg font-semibold mb-6">Common Applications</h3>
            <ul className="space-y-4">
              {[
                "Contract analysis and obligation tracking",
                "Regulatory compliance verification",
                "Research and prior art discovery",
                "Customer support knowledge base",
                "M&A due diligence acceleration",
              ].map((useCase) => (
                <li key={useCase} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-navy-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm text-foreground mb-4">Ready to Unlock Your Enterprise Knowledge?</h2>
          <p className="text-muted-foreground mb-8">
            Deploy Arheion and transform your document chaos into structured intelligence.
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
