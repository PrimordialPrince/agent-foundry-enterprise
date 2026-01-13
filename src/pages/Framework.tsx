import { Link } from "react-router-dom";
import { 
  ArrowRight, Brain, Cpu, Database, Shield, Zap, Lock, Network,
  Layers, FileInput, BookOpen, Cog, Bot, Cloud, CheckCircle, 
  Target, Scale, RefreshCw, Share2, ShieldCheck, Factory
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const architectureLayers = [
  { 
    icon: FileInput, 
    title: "Input & Ingestion Layer", 
    description: "Structured and unstructured data (documents, emails, WhatsApp, PDFs, spreadsheets, voice transcripts) are ingested, cleaned, and semantically chunked."
  },
  { 
    icon: BookOpen, 
    title: "Knowledge Processing Layer", 
    description: "Where the enterprise knowledge spine is built: Domain Ontologies, Knowledge Graphs, Taxonomies & ESRS/XBRL-based Data Points, Case-based reasoning structures, Expert feedback loops."
  },
  { 
    icon: Cog, 
    title: "Reasoning Layer", 
    description: "Multi-engine orchestration using LLMs for general reasoning, SLMs for domain-specific inference, Symbolic logic, Workflow engines, Business rules, and Compliance rulesets."
  },
  { 
    icon: Bot, 
    title: "Agentic Layer", 
    description: "Each enterprise agent operates with goal-oriented task decomposition, memory & retrieval, autonomous decision workflows, guardrails and explainability."
  },
  { 
    icon: Cloud, 
    title: "Deployment Layer", 
    description: "Cloud, private cloud, on-premises, and hybrid configurations with full enterprise governance."
  },
];

const slmBenefits = [
  "Cheaper to deploy on-prem or inside secure environments",
  "Easier to fine-tune with proprietary data",
  "Deterministic, interpretable, and governable",
  "Optimized for vertical domains (farming, carbon accounting, construction, finance)",
  "Compatible with legal/regulatory constraints (GDPR, ISO27001, sector-specific compliance)",
];

const slmUseCases = [
  { agent: "All Agents", use: "Domain-specific reasoning (e.g., ESRS DP logic, GHG Protocol rule application)" },
  { agent: "All Agents", use: "Workflow interpretation (BPMN, business rules)" },
  { agent: "WhappO", use: "Message classification" },
  { agent: "Arheion", use: "Document classification and extraction" },
  { agent: "yCarbon", use: "Carbon simulations and scenario interpretation" },
];

const tacitKnowledgeExamples = [
  "How they interpret documents",
  "How they make decisions",
  "How they apply rules",
  "How they escalate cases",
  "How they identify risks",
  "How they correct AI outputs",
];

const tacitCaptureSteps = [
  {
    title: "Expert-in-the-loop Feedback",
    description: "Each time a user corrects a classification, adjusts a calculation, reassigns a task, or rewrites an AI-generated summary — InferenceAI™ captures the pattern and translates it into rule refinements, knowledge graph updates, and SLM fine-tuning seeds."
  },
  {
    title: "Tacit Knowledge Templates",
    description: "Experts can validate business rules, decision pathways, edge cases, and risk profiles. These become structured nodes in the enterprise knowledge graph."
  },
  {
    title: "InferenceDB — The Tacit Knowledge Repository",
    description: "A specialized datastore for reasoning memory, domain insights, scenario patterns, expert heuristics, and decision logs. InferenceDB bridges explicit knowledge (documents, policies, regulations) with tacit knowledge (experience, judgment, heuristics)."
  },
];

const knowledgeCapabilities = [
  { icon: Database, title: "Knowledge Graphs with Versioning", description: "Track changes in rules, decisions, and interpretations." },
  { icon: Scale, title: "Regulatory Knowledge Modules", description: "ESRS, GHG Protocol, VERRA, ISO, NIS2 — all encoded as machine-interpretable structures." },
  { icon: Layers, title: "Domain Knowledge Packs", description: "For agriculture, energy, construction, sustainability, finance, and more." },
  { icon: RefreshCw, title: "Automated Knowledge Lifecycle", description: "Capture → Validate → Operationalize → Monitor → Update" },
  { icon: Share2, title: "Cross-Agent Knowledge Sharing", description: "What one agent learns informs others, creating collective intelligence across your enterprise." },
];

const guardrails = [
  "Role-based access",
  "Data minimization",
  "Policy binding",
  "Explainability layers",
  "Traceability",
  "Audit logs",
  "Model monitoring",
  "Risk controls",
  "GDPR, ISO27001, NIS2 alignment",
];

const agentResults = [
  "Learn continuously",
  "Reason with enterprise constraints",
  "Absorb human expertise",
  "Operate with a clear chain of logic",
  "Are audit-ready and compliance-aware",
  "Can be deployed in sensitive environments",
];

export default function Framework() {
  return (
    <main className="flex flex-col pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-navy-light">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <span className="enterprise-badge mb-6">Our Proprietary Framework</span>
          <h1 className="text-display-lg text-foreground mt-4">
            The <span className="text-primary">InferenceAI™</span> Framework
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-foreground font-medium">
            A Deep-Tech Infrastructure for Autonomous Enterprise Agents
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            InferenceAI™ is Axiobit's enterprise AI reasoning framework — the technological backbone for all our Enterprise AI agents. It blends LLMs, Small Language Models, knowledge graphs, business rules, and tacit knowledge capture into a unified cognitive architecture.
          </p>
          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-foreground">
              Transforms raw data, documents, conversations, and expert knowledge into <span className="text-primary font-semibold">actionable intelligence</span>, enabling agents like <span className="font-semibold">WhappO</span>, <span className="font-semibold">yCarbon</span>, and <span className="font-semibold">Arheion</span> to operate as trustworthy, autonomous digital co-workers.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="architecture" className="max-w-5xl mx-auto">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
              <TabsTrigger 
                value="architecture" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg border border-border data-[state=active]:border-primary"
              >
                <Layers className="h-4 w-4 mr-2" />
                Architecture
              </TabsTrigger>
              <TabsTrigger 
                value="slms" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg border border-border data-[state=active]:border-primary"
              >
                <Brain className="h-4 w-4 mr-2" />
                Small Language Models
              </TabsTrigger>
              <TabsTrigger 
                value="tacit" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg border border-border data-[state=active]:border-primary"
              >
                <Target className="h-4 w-4 mr-2" />
                Tacit Knowledge
              </TabsTrigger>
              <TabsTrigger 
                value="knowledge" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg border border-border data-[state=active]:border-primary"
              >
                <Network className="h-4 w-4 mr-2" />
                Knowledge Management
              </TabsTrigger>
              <TabsTrigger 
                value="governance" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg border border-border data-[state=active]:border-primary"
              >
                <Shield className="h-4 w-4 mr-2" />
                Governance
              </TabsTrigger>
            </TabsList>

            {/* Architecture Tab */}
            <TabsContent value="architecture" className="animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">A Layered Cognitive Stack</h2>
                <p className="text-muted-foreground mt-2">InferenceAI™ is organized in five interoperable layers</p>
              </div>
              <div className="space-y-4">
                {architectureLayers.map((layer, index) => (
                  <div 
                    key={layer.title} 
                    className="enterprise-card p-6 flex gap-6 items-start hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-2xl font-bold text-primary/30">{index + 1}</span>
                      <div className="p-3 rounded-xl bg-primary/10">
                        <layer.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{layer.title}</h3>
                      <p className="text-muted-foreground">{layer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* SLMs Tab */}
            <TabsContent value="slms" className="animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">SLMs as Enterprise Brains</h2>
                <p className="text-muted-foreground mt-2">Small Language Models (40M–1B parameters) power domain-specific reasoning</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="enterprise-card p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Brain className="h-5 w-5 text-primary" />
                    Why SLMs?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Unlike monolithic LLMs, Small Language Models are:
                  </p>
                  <ul className="space-y-3">
                    {slmBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="enterprise-card p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Cpu className="h-5 w-5 text-primary" />
                    SLMs inside InferenceAI™
                  </h3>
                  <div className="space-y-3">
                    {slmUseCases.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded shrink-0">
                          {item.agent}
                        </span>
                        <span className="text-sm text-foreground">{item.use}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    Each SLM becomes a "thinking module" — a reusable cognitive component.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Tacit Knowledge Tab */}
            <TabsContent value="tacit" className="animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tacit Knowledge Integration</h2>
                <p className="text-muted-foreground mt-2">A Unique Differentiator</p>
              </div>
              
              <div className="enterprise-card p-8 mb-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">What is Tacit Knowledge?</h3>
                <p className="text-muted-foreground mb-6">
                  Tacit knowledge is what employees know but rarely document:
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {tacitKnowledgeExamples.map((example, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {example}
                    </span>
                  ))}
                </div>
                <p className="text-lg font-semibold text-accent">
                  InferenceAI™ turns tacit knowledge into machine-readable, reusable intelligence.
                </p>
              </div>

              <h3 className="text-xl font-bold text-foreground text-center mb-6">How We Capture It</h3>
              <div className="space-y-4">
                {tacitCaptureSteps.map((step, index) => (
                  <div key={step.title} className="enterprise-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Knowledge Management Tab */}
            <TabsContent value="knowledge" className="animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">A Cognitive Operating System</h2>
                <p className="text-muted-foreground mt-2">Enterprise Knowledge Management reimagined</p>
              </div>

              <div className="p-8 rounded-xl bg-primary/5 border border-primary/20 text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Knowledge Is No Longer Stored — It Is <span className="text-primary">Activated</span>
                </h3>
                <p className="text-muted-foreground">
                  Enterprise knowledge is continuously evolving, operational, queryable, explainable, and shared across agents.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {knowledgeCapabilities.map((cap) => (
                  <div key={cap.title} className="enterprise-card p-6 text-center hover:border-primary/30 transition-colors">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <cap.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{cap.title}</h4>
                    <p className="text-sm text-muted-foreground">{cap.description}</p>
                  </div>
                ))}
              </div>

              <div className="enterprise-card p-6 text-center">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Example:</span> What Arheion learns about a contract can inform yCarbon's compliance analysis. What WhappO learns about client behavior can refine operational KPIs.
                </p>
                <p className="mt-2 text-primary font-semibold">
                  This creates a collective intelligence across your enterprise agents.
                </p>
              </div>
            </TabsContent>

            {/* Governance Tab */}
            <TabsContent value="governance" className="animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Enterprise-Grade Compliance</h2>
                <p className="text-muted-foreground mt-2">Guardrails, Governance & Trustworthy Results</p>
              </div>

              <div className="enterprise-card p-8 mb-8">
                <h3 className="text-xl font-bold text-foreground text-center mb-6">Built-in Guardrails</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {guardrails.map((item, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-lg bg-background border border-border text-foreground text-sm font-medium flex items-center gap-2"
                    >
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-center text-muted-foreground italic mt-6">
                  Tacit knowledge is anonymized, validated, and versioned to ensure high governance standards.
                </p>
              </div>

              <div className="enterprise-card p-8">
                <h3 className="text-xl font-bold text-foreground text-center mb-6">Trustworthy Enterprise AI Agents</h3>
                <p className="text-center text-muted-foreground mb-6">Agents built on InferenceAI™:</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {agentResults.map((result, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg bg-background flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <Factory className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-lg font-bold text-foreground">
                    This is what allows Axiobit to be not just an AI company, but an{" "}
                    <span className="text-primary">Enterprise AI Agents Factory</span>.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">See InferenceAI™ in Action</h2>
            <p className="text-muted-foreground mb-8">
              Discover how our proprietary framework can transform your enterprise operations.
            </p>
            <Link to="/contact">
              <Button variant="enterprise" size="lg">
                Request Technical Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
