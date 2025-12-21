import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/Section";
import { useToast } from "@/hooks/use-toast";

const offices = [
  { city: "San Francisco", address: "100 Market Street, Suite 300", region: "North America HQ" },
  { city: "London", address: "30 St Mary Axe", region: "EMEA HQ" },
  { city: "Singapore", address: "1 Raffles Place", region: "APAC HQ" },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Our team will be in touch within 24 hours." });
    setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" });
  };

  return (
    <main className="flex flex-col pt-20">
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6 text-center">
          <span className="enterprise-badge mb-6">Contact Us</span>
          <h1 className="text-display-lg text-foreground mt-4">Let's Build Something <span className="text-primary">Extraordinary</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Ready to transform your enterprise with AI?</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-2">Request a Demo</h2>
            <p className="text-muted-foreground mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label htmlFor="firstName">First Name *</Label><Input id="firstName" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} /></div>
                <div className="space-y-2"><Label htmlFor="lastName">Last Name *</Label><Input id="lastName" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="email">Work Email *</Label><Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
              <div className="space-y-2"><Label htmlFor="company">Company *</Label><Input id="company" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} /></div>
              <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." /></div>
              <Button type="submit" variant="enterprise" size="lg" className="w-full">Submit Request <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </form>
          </div>
          <div>
            <div className="enterprise-card p-8 mb-8">
              <h3 className="font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:enterprise@axiobit.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Mail className="h-5 w-5 text-primary" />enterprise@axiobit.com</a>
                <a href="tel:+1-888-555-0100" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Phone className="h-5 w-5 text-primary" />+1 (888) 555-0100</a>
              </div>
            </div>
            <h3 className="font-semibold mb-6">Global Offices</h3>
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.city} className="flex items-start gap-3 p-4 rounded-lg enterprise-card">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div><div className="font-medium">{office.city}</div><div className="text-sm text-muted-foreground">{office.address}</div><div className="text-xs text-primary mt-1">{office.region}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}