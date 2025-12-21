import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Lightbulb, Shield, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We exist to make enterprise AI accessible, practical, and impactful." },
  { icon: Shield, title: "Trust & Security", description: "Enterprise data is sacred. Your data is yours alone." },
  { icon: Lightbulb, title: "Innovation", description: "We challenge assumptions and push boundaries." },
  { icon: Users, title: "Partnership", description: "We succeed when our customers succeed." },
];

const milestones = [
  { year: "2020", event: "Founded with a vision to democratize enterprise AI" },
  { year: "2021", event: "Launched InferenceAI™ framework" },
  { year: "2022", event: "Deployed first agents to Fortune 500 customers" },
  { year: "2023", event: "Expanded globally" },
  { year: "2024", event: "Crossed 500+ enterprise deployments" },
];

const leadership = [
  { name: "Dr. Sarah Chen", role: "CEO & Co-Founder", bio: "Former VP of AI at a Fortune 100 tech company." },
  { name: "Marcus Rodriguez", role: "CTO & Co-Founder", bio: "Previously led ML infrastructure at a major cloud provider." },
  { name: "Elena Kowalski", role: "Chief Product Officer", bio: "Former Product Director at enterprise software leader." },
  { name: "David Park", role: "Chief Revenue Officer", bio: "Built go-to-market at two successful AI startups." },
];

export default function About() {
  return (
    <main className="flex flex-col pt-20">
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6">
          <span className="enterprise-badge mb-6">About Us</span>
          <h1 className="text-display-lg text-foreground mt-4">Building the Future of <span className="text-primary">Enterprise AI</span></h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">We're on a mission to make AI practical, secure, and impactful for the world's largest organizations.</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader eyebrow="Our Mission" title="AI That Works for Enterprises" align="left" />
            <p className="mt-6 text-muted-foreground">We built Axiobit to bridge the gap between AI promise and enterprise reality.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value.title} className="enterprise-card p-6">
                <value.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="section-gradient">
        <SectionHeader eyebrow="Leadership" title="Built by Industry Veterans" />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person) => (
            <div key={person.name} className="enterprise-card p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{person.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="font-semibold">{person.name}</h3>
              <p className="text-sm text-primary mb-3">{person.role}</p>
              <p className="text-sm text-muted-foreground">{person.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm text-foreground mb-4">Join Us in Shaping the Future</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"><Button variant="enterprise" size="lg">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </Section>
    </main>
  );
}