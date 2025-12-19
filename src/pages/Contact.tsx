import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GlowCard } from "@/components/GlowCard";
import { Section, SectionHeader } from "@/components/Section";
import { GridBackground } from "@/components/GridBackground";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Calendar,
    title: "Schedule a Demo",
    description: "See our AI agents in action with a personalized demonstration.",
    action: "Book Demo",
  },
  {
    icon: MessageSquare,
    title: "Sales Inquiry",
    description: "Talk to our sales team about your enterprise requirements.",
    action: "Contact Sales",
  },
  {
    icon: Building2,
    title: "Partnership",
    description: "Explore partnership and integration opportunities.",
    action: "Partner With Us",
  },
];

const offices = [
  {
    city: "San Francisco",
    address: "100 Market Street, Suite 300",
    region: "North America HQ",
  },
  {
    city: "London",
    address: "30 St Mary Axe",
    region: "EMEA HQ",
  },
  {
    city: "Singapore",
    address: "1 Raffles Place",
    region: "APAC HQ",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    employees: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your interest. Our team will be in touch within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      employees: "",
      interest: "",
      message: "",
    });
  };

  return (
    <main className="flex flex-col pt-20">
      {/* Hero */}
      <GridBackground className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Let's Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your enterprise with AI? Our team is here to help 
            you every step of the way.
          </p>
        </div>
      </GridBackground>

      {/* Contact Methods */}
      <Section className="py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <GlowCard key={method.title} className="p-6 text-center">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <method.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              <Button variant="outline" size="sm">
                {method.action}
              </Button>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-card/30">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Request a Demo</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="employees">Company Size</Label>
                <select
                  id="employees"
                  value={formData.employees}
                  onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Select...</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1,000 employees</option>
                  <option value="1001-5000">1,001-5,000 employees</option>
                  <option value="5000+">5,000+ employees</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interest">Area of Interest</Label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Select...</option>
                  <option value="whappo">WhappO - Customer Engagement</option>
                  <option value="ycarbon">yCarbon - ESG & Sustainability</option>
                  <option value="arheion">Arheion - Document Intelligence</option>
                  <option value="custom">Custom Agent Development</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project and requirements..."
                  className="bg-background"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full glow-primary">
                Submit Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-background/50 border border-border/50 rounded-xl p-8 mb-8">
              <h3 className="font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:enterprise@axiobit.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  enterprise@axiobit.com
                </a>
                <a 
                  href="tel:+1-888-555-0100"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  +1 (888) 555-0100
                </a>
              </div>
            </div>
            
            <h3 className="font-semibold mb-6">Global Offices</h3>
            <div className="space-y-4">
              {offices.map((office) => (
                <div 
                  key={office.city}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/50"
                >
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{office.city}</div>
                    <div className="text-sm text-muted-foreground">{office.address}</div>
                    <div className="text-xs text-primary mt-1">{office.region}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check out our resources section for documentation, FAQs, and more.
          </p>
          <Link to="/resources">
            <Button variant="outline">
              Browse Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </main>
  );
}
