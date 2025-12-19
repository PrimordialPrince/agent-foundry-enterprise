import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Landmark, HeartPulse, ShoppingCart, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { Section, SectionHeader } from "@/components/Section";
import { GridBackground } from "@/components/GridBackground";

const caseStudies = [
  {
    id: "global-bank",
    industry: "Financial Services",
    icon: Landmark,
    company: "Global Investment Bank",
    title: "Reduced Support Costs by 60% with AI-Powered Customer Service",
    description: "A top-10 global investment bank deployed WhappO to handle customer inquiries across 15 countries, transforming their support operations.",
    challenge: "The bank was struggling with rising support costs and inconsistent service quality across regions. Customer wait times averaged 12 minutes.",
    solution: "Deployed WhappO with custom training on banking products, compliance requirements, and multi-language support for 15 regional markets.",
    results: [
      { metric: "60%", label: "Cost Reduction" },
      { metric: "2M+", label: "Monthly Interactions" },
      { metric: "<30s", label: "Avg Response Time" },
      { metric: "$12M", label: "Annual Savings" },
    ],
    quote: "WhappO transformed our customer service from a cost center to a competitive advantage.",
    quotee: "Chief Digital Officer",
  },
  {
    id: "fortune-100",
    industry: "Manufacturing",
    icon: Factory,
    company: "Fortune 100 Manufacturer",
    title: "Achieved Net Zero Tracking Across 50+ Global Facilities",
    description: "A Fortune 100 manufacturing company implemented yCarbon to track and report carbon emissions in real-time across their global operations.",
    challenge: "Manual ESG reporting took 6 months annually and lacked the granularity needed for meaningful emissions reduction strategies.",
    solution: "yCarbon integrated with IoT sensors, ERP systems, and supply chain data to provide real-time carbon tracking and automated compliance reporting.",
    results: [
      { metric: "50+", label: "Facilities Tracked" },
      { metric: "100%", label: "Compliance Rate" },
      { metric: "3 weeks", label: "vs 6 months reporting" },
      { metric: "23%", label: "Emissions Reduction" },
    ],
    quote: "yCarbon gave us the visibility we needed to make meaningful progress on our sustainability goals.",
    quotee: "VP of Sustainability",
  },
  {
    id: "healthcare",
    industry: "Healthcare",
    icon: HeartPulse,
    company: "Regional Healthcare Network",
    title: "Streamlined Clinical Documentation with AI Document Intelligence",
    description: "A 12-hospital healthcare network deployed Arheion to process and analyze clinical documents, improving care coordination and compliance.",
    challenge: "Clinicians spent 40% of their time on documentation. Critical information was often siloed across disparate systems.",
    solution: "Arheion automated clinical document processing, extraction of key data points, and cross-system knowledge integration.",
    results: [
      { metric: "40%", label: "Time Saved on Docs" },
      { metric: "99.2%", label: "Extraction Accuracy" },
      { metric: "12", label: "Systems Integrated" },
      { metric: "HIPAA", label: "Fully Compliant" },
    ],
    quote: "Our clinicians can now focus on patients instead of paperwork. Arheion changed everything.",
    quotee: "Chief Medical Officer",
  },
  {
    id: "retail",
    industry: "Retail",
    icon: ShoppingCart,
    company: "Global E-commerce Platform",
    title: "Scaled Customer Engagement to 10M+ Users with Conversational AI",
    description: "One of the world's largest e-commerce platforms deployed WhappO to handle customer engagement across multiple channels.",
    challenge: "Peak shopping periods overwhelmed support teams. Cart abandonment rates were 73% due to unanswered customer questions.",
    solution: "WhappO provided real-time assistance throughout the shopping journey, from product discovery to post-purchase support.",
    results: [
      { metric: "10M+", label: "Users Engaged" },
      { metric: "35%", label: "Cart Recovery" },
      { metric: "4.8/5", label: "Customer Satisfaction" },
      { metric: "$45M", label: "Revenue Impact" },
    ],
    quote: "WhappO handles peak traffic effortlessly. Our customers love the instant, helpful responses.",
    quotee: "Head of Customer Experience",
  },
  {
    id: "aviation",
    industry: "Aviation",
    icon: Plane,
    company: "International Airline",
    title: "Automated Regulatory Compliance Documentation",
    description: "A major international airline deployed Arheion to manage and ensure compliance with aviation regulations across 40+ countries.",
    challenge: "Compliance teams struggled to keep up with constantly changing regulations. Manual processes led to audit findings.",
    solution: "Arheion monitors regulatory changes, updates documentation automatically, and ensures all compliance requirements are met.",
    results: [
      { metric: "40+", label: "Countries Covered" },
      { metric: "0", label: "Audit Findings" },
      { metric: "80%", label: "Time Saved" },
      { metric: "24/7", label: "Monitoring" },
    ],
    quote: "We went from constantly playing catch-up to being confidently ahead of regulatory requirements.",
    quotee: "VP of Compliance",
  },
  {
    id: "real-estate",
    industry: "Real Estate",
    icon: Building2,
    company: "Commercial Real Estate Firm",
    title: "Optimized Property Portfolio ESG Performance",
    description: "A leading commercial real estate firm deployed yCarbon to track and optimize sustainability metrics across their property portfolio.",
    challenge: "ESG performance data was scattered across property managers, utility providers, and various building systems.",
    solution: "yCarbon aggregated data from all sources, provided unified dashboards, and automated sustainability reporting for investors.",
    results: [
      { metric: "200+", label: "Properties Tracked" },
      { metric: "18%", label: "Energy Reduction" },
      { metric: "GRESB", label: "5-Star Rating" },
      { metric: "$8M", label: "Utility Savings" },
    ],
    quote: "yCarbon helped us achieve our first GRESB 5-star rating. Our investors are thrilled.",
    quotee: "Head of ESG",
  },
];

const industries = [
  { name: "Financial Services", icon: Landmark },
  { name: "Manufacturing", icon: Factory },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Retail", icon: ShoppingCart },
  { name: "Aviation", icon: Plane },
  { name: "Real Estate", icon: Building2 },
];

export default function CaseStudies() {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero */}
      <GridBackground className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Enterprise Success Stories
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading organizations across industries are transforming 
            their operations with our AI agents.
          </p>
        </div>
      </GridBackground>

      {/* Industry Filter */}
      <Section className="py-12 border-b border-border/50">
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <button
              key={industry.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <industry.icon className="h-4 w-4" />
              {industry.name}
            </button>
          ))}
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <GlowCard 
              key={study.id} 
              className="p-8"
              glowColor={index % 2 === 0 ? "primary" : "accent"}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  <study.icon className={`h-5 w-5 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {study.industry}
                  </span>
                  <p className="text-sm text-foreground">{study.company}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{study.title}</h3>
              <p className="text-muted-foreground mb-6">{study.description}</p>
              
              <div className="grid grid-cols-4 gap-4 mb-6 py-6 border-y border-border/50">
                {study.results.map((result) => (
                  <div key={result.label} className="text-center">
                    <div className={`text-lg font-bold ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                      {result.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">{result.label}</div>
                  </div>
                ))}
              </div>
              
              <blockquote className="border-l-2 border-primary/30 pl-4 italic text-muted-foreground mb-2">
                "{study.quote}"
              </blockquote>
              <p className="text-sm text-muted-foreground">— {study.quotee}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join these industry leaders in transforming your operations with AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="glow-primary">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/agents">
              <Button size="lg" variant="outline">
                Explore Our Agents
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
