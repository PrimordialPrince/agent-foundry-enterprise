import { Link } from "react-router-dom";
import { ArrowRight, FileText, BookOpen, Video, Download, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlowCard } from "@/components/GlowCard";
import { Section, SectionHeader } from "@/components/Section";
import { GridBackground } from "@/components/GridBackground";

const resourceCategories = [
  {
    title: "Whitepapers",
    icon: FileText,
    description: "In-depth research and analysis on enterprise AI",
    items: [
      {
        title: "The Enterprise AI Playbook",
        description: "A comprehensive guide to implementing AI agents at scale",
        type: "PDF",
        readTime: "25 min read",
      },
      {
        title: "SLMs vs LLMs: A Technical Comparison",
        description: "Why small language models outperform for enterprise tasks",
        type: "PDF",
        readTime: "15 min read",
      },
      {
        title: "ROI of AI Automation",
        description: "Framework for calculating AI investment returns",
        type: "PDF",
        readTime: "20 min read",
      },
    ],
  },
  {
    title: "Documentation",
    icon: BookOpen,
    description: "Technical guides and API references",
    items: [
      {
        title: "Getting Started Guide",
        description: "Quick start guide for deploying your first AI agent",
        type: "Docs",
        readTime: "10 min read",
      },
      {
        title: "API Reference",
        description: "Complete REST API documentation",
        type: "Docs",
        readTime: "Reference",
      },
      {
        title: "Integration Guides",
        description: "Connect with Salesforce, SAP, and 100+ tools",
        type: "Docs",
        readTime: "Varies",
      },
    ],
  },
  {
    title: "Videos & Webinars",
    icon: Video,
    description: "Watch demos and expert discussions",
    items: [
      {
        title: "InferenceAI™ Deep Dive",
        description: "Technical overview of our AI framework",
        type: "Video",
        readTime: "45 min",
      },
      {
        title: "Customer Success Stories",
        description: "Hear from enterprises using our AI agents",
        type: "Webinar",
        readTime: "60 min",
      },
      {
        title: "Building Custom Agents",
        description: "Step-by-step tutorial for custom agent development",
        type: "Video",
        readTime: "30 min",
      },
    ],
  },
];

const featuredResources = [
  {
    title: "2024 Enterprise AI Report",
    description: "Our annual analysis of AI adoption trends, challenges, and opportunities across industries.",
    image: "📊",
    tag: "New",
  },
  {
    title: "Security & Compliance Guide",
    description: "Everything you need to know about our security practices, certifications, and compliance frameworks.",
    image: "🔒",
    tag: "Essential",
  },
];

const blogPosts = [
  {
    title: "Why We Built Small Language Models",
    description: "The story behind our decision to challenge LLM conventions",
    date: "Dec 15, 2024",
    category: "Engineering",
  },
  {
    title: "Enterprise AI in 2025: Predictions",
    description: "What to expect in the year ahead for enterprise AI",
    date: "Dec 10, 2024",
    category: "Industry",
  },
  {
    title: "Case Study: Fortune 500 Manufacturing",
    description: "How a manufacturing giant achieved 40% efficiency gains",
    date: "Dec 5, 2024",
    category: "Case Study",
  },
  {
    title: "The True Cost of AI Hallucinations",
    description: "Why accuracy matters more than capability in enterprise",
    date: "Nov 28, 2024",
    category: "Research",
  },
];

export default function Resources() {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero */}
      <GridBackground className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Learn, Explore, Build
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand enterprise AI and get the most 
            from our platform.
          </p>
          
          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search resources..." 
              className="pl-12 h-12 bg-background/50 border-border/50"
            />
          </div>
        </div>
      </GridBackground>

      {/* Featured Resources */}
      <Section className="py-12 border-b border-border/50">
        <div className="grid md:grid-cols-2 gap-6">
          {featuredResources.map((resource) => (
            <GlowCard key={resource.title} className="p-6 flex gap-6">
              <div className="text-5xl">{resource.image}</div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-xs font-semibold rounded bg-primary/10 text-primary">
                    {resource.tag}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Resource Categories */}
      {resourceCategories.map((category, index) => (
        <Section key={category.title} className={index % 2 === 0 ? "" : "bg-card/30"}>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <category.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <div 
                key={item.title}
                className="group p-6 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                    {item.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.readTime}</span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Resource
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* Blog */}
      <Section>
        <SectionHeader
          eyebrow="Blog"
          title="Latest Insights"
          description="Thoughts on enterprise AI from our team of experts."
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.title}
              className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">{post.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Developer CTA */}
      <Section className="bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Access our documentation and start integrating AI agents today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="glow-primary">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open Developer Docs
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Request API Access
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
