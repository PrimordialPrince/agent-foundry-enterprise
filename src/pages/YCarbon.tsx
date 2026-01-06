import { Link } from "react-router-dom";
import { ArrowRight, Leaf, BarChart3, FileText, Shield, Globe, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";

const capabilities = [
  {
    icon: BarChart3,
    title: "Real-Time Emissions Tracking",
    description: "Monitor carbon emissions across all operations with live data feeds and automated calculations.",
  },
  {
    icon: FileText,
    title: "Automated ESG Reporting",
    description: "Generate comprehensive ESG reports automatically, aligned with GRI, SASB, and TCFD frameworks.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Stay ahead of evolving environmental regulations with proactive monitoring and alerts.",
  },
  {
    icon: Globe,
    title: "Supply Chain Analysis",
    description: "Track Scope 3 emissions across your entire supply chain with supplier integration.",
  },
  {
    icon: TrendingUp,
    title: "Reduction Pathways",
    description: "AI-generated recommendations for carbon reduction strategies and net-zero roadmaps.",
  },
];

const frameworks = [
  "GRI Standards",
  "SASB",
  "TCFD",
  "CDP",
  "EU Taxonomy",
  "CSRD",
];

const metrics = [
  { value: "99.5%", label: "Data Accuracy" },
  { value: "10x", label: "Faster Reporting" },
  { value: "100%", label: "Compliance" },
  { value: "Scope 1-3", label: "Coverage" },
];

export default function YCarbon() {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="enterprise-badge mb-6">Enterprise AI Agent</span>
              <h1 className="text-display-lg text-foreground mt-4">yCarbon</h1>
              <p className="text-xl text-primary mt-4 font-medium">
                Autonomous ESG & Carbon Intelligence
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                yCarbon is the first AI agent purpose-built for enterprise sustainability. It autonomously tracks, analyzes, and reports on your organization's environmental impact.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From real-time carbon emissions monitoring to automated ESG reporting, yCarbon transforms sustainability from a compliance burden into a strategic advantage.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="enterprise" size="lg">
                    Deploy yCarbon <ArrowRight className="ml-2 h-4 w-4" />
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
                <div className="absolute inset-0 bg-green-500/20 rounded-3xl blur-3xl" />
                <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-navy flex items-center justify-center border border-border/50">
                  <Leaf className="w-32 h-32 lg:w-40 lg:h-40 text-primary" />
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

      {/* Frameworks Section */}
      <Section>
        <SectionHeader
          eyebrow="Compliance Ready"
          title="All Major ESG Frameworks Supported"
          description="yCarbon automatically aligns your reporting with global sustainability standards and regulatory requirements."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {frameworks.map((framework) => (
            <div 
              key={framework}
              className="enterprise-card p-4 text-center hover:border-primary/50 transition-colors"
            >
              <span className="font-semibold text-foreground">{framework}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section className="section-gradient">
        <SectionHeader
          eyebrow="Key Capabilities"
          title="Complete Sustainability Intelligence"
          description="yCarbon provides end-to-end visibility into your environmental impact with AI-powered automation."
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

      {/* Benefits Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="enterprise-badge mb-6">Why yCarbon</span>
            <h2 className="text-display-sm text-foreground mt-4">
              Turn Sustainability Into Strategic Value
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              While competitors struggle with manual data collection and spreadsheet-based reporting, yCarbon gives you real-time visibility and automated compliance.
            </p>
          </div>
          <div className="enterprise-card p-8">
            <h3 className="text-lg font-semibold mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {[
                "Reduce reporting time by 90%",
                "Eliminate manual data collection errors",
                "Proactive regulatory compliance",
                "Identify cost-saving reduction opportunities",
                "Stakeholder-ready reports in minutes",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-navy-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm text-foreground mb-4">Ready to Automate Your Sustainability Journey?</h2>
          <p className="text-muted-foreground mb-8">
            Deploy yCarbon and transform environmental compliance into competitive advantage.
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
