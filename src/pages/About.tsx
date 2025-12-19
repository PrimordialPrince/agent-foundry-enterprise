import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Lightbulb, Shield, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { Section, SectionHeader } from "@/components/Section";
import { GridBackground } from "@/components/GridBackground";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We exist to make enterprise AI accessible, practical, and impactful. Every decision is guided by this purpose.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Enterprise data is sacred. We've built our entire platform around the principle that your data is yours alone.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We challenge assumptions and push boundaries. Our SLM approach came from questioning industry conventions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We succeed when our customers succeed. Every engagement is a true partnership toward shared goals.",
  },
];

const milestones = [
  { year: "2020", event: "Founded with a vision to democratize enterprise AI" },
  { year: "2021", event: "Launched InferenceAI™ framework, first SLM for enterprise" },
  { year: "2022", event: "Deployed first agents to Fortune 500 customers" },
  { year: "2023", event: "Expanded globally, opened offices in EU and APAC" },
  { year: "2024", event: "Crossed 500+ enterprise deployments worldwide" },
];

const leadership = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of AI at a Fortune 100 tech company. PhD in Machine Learning from Stanford.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Previously led ML infrastructure at a major cloud provider. MS from MIT.",
  },
  {
    name: "Elena Kowalski",
    role: "Chief Product Officer",
    bio: "Former Product Director at enterprise software leader. 15+ years in B2B tech.",
  },
  {
    name: "David Park",
    role: "Chief Revenue Officer",
    bio: "Built go-to-market at two successful AI startups. Former McKinsey consultant.",
  },
];

const awards = [
  "Gartner Cool Vendor 2024",
  "Forbes AI 50 2024",
  "Fast Company Most Innovative",
  "CB Insights AI 100",
];

export default function About() {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero */}
      <GridBackground className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Building the Future of{" "}
              <span className="gradient-text">Enterprise AI</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
              We're on a mission to make AI practical, secure, and impactful for 
              the world's largest organizations. Founded by industry veterans who 
              saw the gap between AI promise and enterprise reality.
            </p>
          </div>
        </div>
      </GridBackground>

      {/* Mission */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Our Mission"
              title="AI That Works for Enterprises"
              description="Most AI fails in enterprise because it wasn't built for enterprise. We're changing that."
              align="left"
            />
            <p className="mt-6 text-muted-foreground">
              The AI revolution promised transformation, but delivered complexity. 
              General-purpose models are too slow, too expensive, and too risky for 
              enterprise-critical applications.
            </p>
            <p className="mt-4 text-muted-foreground">
              We built Axiobit to bridge this gap. Our small language models are 
              purpose-built for specific business tasks, delivering 10x better 
              performance at a fraction of the cost—all while keeping your data 
              secure and compliant.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {values.map((value) => (
              <GlowCard key={value.title} className="p-6">
                <value.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Journey */}
      <Section className="bg-card/30">
        <SectionHeader
          eyebrow="Our Journey"
          title="From Vision to Global Impact"
          description="A timeline of building enterprise AI that actually works."
        />
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
            
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative pl-12 pb-12 last:pb-0">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{milestone.year.slice(2)}</span>
                </div>
                <div className="text-sm text-primary font-semibold">{milestone.year}</div>
                <div className="mt-1 text-foreground">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section>
        <SectionHeader
          eyebrow="Leadership"
          title="Built by Industry Veterans"
          description="Our team brings decades of experience from the world's leading technology companies."
        />
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person) => (
            <GlowCard key={person.name} className="p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-semibold">{person.name}</h3>
              <p className="text-sm text-primary mb-3">{person.role}</p>
              <p className="text-sm text-muted-foreground">{person.bio}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Recognition */}
      <Section className="bg-card/30">
        <SectionHeader
          eyebrow="Recognition"
          title="Industry Acknowledged"
        />
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {awards.map((award) => (
            <div 
              key={award}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-background/50 border border-border/50"
            >
              <Award className="h-5 w-5 text-primary" />
              <span className="font-medium">{award}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Global Presence */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Global Presence"
              title="Serving Enterprises Worldwide"
              align="left"
            />
            <p className="mt-6 text-muted-foreground">
              With offices in North America, Europe, and Asia-Pacific, we provide 
              local support with global expertise. Our distributed infrastructure 
              ensures your data stays where you need it.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold gradient-text">3</div>
                <div className="text-sm text-muted-foreground">Global Regions</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support Coverage</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50">
              <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 text-primary/30" />
              <div className="absolute top-[20%] left-[30%] w-3 h-3 rounded-full bg-primary animate-pulse" />
              <div className="absolute top-[40%] right-[25%] w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-[30%] left-[40%] w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Shaping the Future
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether as a customer, partner, or team member—we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="glow-primary">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline">
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
