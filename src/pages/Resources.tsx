import { Link } from "react-router-dom";
import { ArrowRight, FileText, BookOpen, Video, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section, SectionHeader } from "@/components/Section";

const resourceCategories = [
  { title: "Whitepapers", icon: FileText, items: [{ title: "The Enterprise AI Playbook", type: "PDF" }, { title: "SLMs vs LLMs", type: "PDF" }, { title: "ROI of AI Automation", type: "PDF" }] },
  { title: "Documentation", icon: BookOpen, items: [{ title: "Getting Started Guide", type: "Docs" }, { title: "API Reference", type: "Docs" }, { title: "Integration Guides", type: "Docs" }] },
  { title: "Videos", icon: Video, items: [{ title: "InferenceAI™ Deep Dive", type: "Video" }, { title: "Customer Success Stories", type: "Webinar" }, { title: "Building Custom Agents", type: "Video" }] },
];

export default function Resources() {
  return (
    <main className="flex flex-col pt-20">
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6 text-center">
          <span className="enterprise-badge mb-6">Resources</span>
          <h1 className="text-display-lg text-foreground mt-4">Learn, Explore, Build</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to understand enterprise AI.</p>
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-12 h-12" />
          </div>
        </div>
      </section>

      {resourceCategories.map((category, index) => (
        <Section key={category.title} className={index % 2 === 0 ? "" : "section-gradient"}>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-primary/10"><category.icon className="h-6 w-6 text-primary" /></div>
            <h2 className="text-2xl font-bold">{category.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <div key={item.title} className="enterprise-card p-6 cursor-pointer">
                <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">{item.type}</span>
                <h3 className="font-semibold mt-3">{item.title}</h3>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section className="bg-navy-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm text-foreground mb-4">Ready to Start Building?</h2>
          <Link to="/contact"><Button variant="enterprise" size="lg">Request API Access <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
        </div>
      </Section>
    </main>
  );
}