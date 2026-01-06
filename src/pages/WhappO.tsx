import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Mail, Phone, Mic, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import whappoLogo from "@/assets/whappo-logo.png";

const capabilities = [
  "Interprets informal messages with enterprise precision",
  "Automatically structures messages into workflows",
  "Understands context, urgency, and dependencies",
  "Connects seamlessly to ERP, CRM, and BPM systems",
  "Eliminates manual entry, miscommunication, and long response cycles",
];

const channels = [
  { icon: MessageSquare, name: "WhatsApp" },
  { icon: Mail, name: "Email" },
  { icon: Phone, name: "SMS" },
  { icon: Mic, name: "Voice" },
];

const metrics = [
  { value: "85%", label: "Query Resolution" },
  { value: "24/7", label: "Availability" },
  { value: "<2s", label: "Response Time" },
  { value: "50+", label: "Languages" },
];

export default function WhappO() {
  return (
    <main className="flex flex-col pt-20">
      <section className="min-h-[calc(100vh-5rem)] bg-navy-light relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Logo, Title, Description */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={whappoLogo} 
                  alt="WhappO" 
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                />
                <div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">Enterprise AI Agent</span>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground">WhappO</h1>
                </div>
              </div>
              
              <p className="text-lg text-primary font-medium mb-4">
                Conversational Intelligence for Enterprise Workflows
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                WhappO transforms every natural language conversation—WhatsApp, email, SMS, voice transcripts—into structured business intelligence. It identifies customer intentions, extracts key data, validates business rules, and generates structured objects like orders, requests, approvals, and tasks.
              </p>

              {/* Channels */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-muted-foreground">Channels:</span>
                <div className="flex gap-2">
                  {channels.map((channel) => (
                    <div 
                      key={channel.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-sm"
                      title={channel.name}
                    >
                      <channel.icon className="h-4 w-4 text-primary" />
                      <span className="text-foreground hidden sm:inline">{channel.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button variant="enterprise" size="lg">
                    Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>

            {/* Middle Column - Capabilities */}
            <div className="lg:col-span-4">
              <div className="enterprise-card p-6 h-full">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Key Capabilities</h3>
                <ul className="space-y-3">
                  {capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Metrics */}
            <div className="lg:col-span-3">
              <div className="enterprise-card p-6 h-full">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Performance</h3>
                <div className="space-y-4">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <span className="text-xl font-bold text-primary">{metric.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border mt-6 pt-6">
                  <p className="text-xs text-muted-foreground mb-3">Built on</p>
                  <Link to="/framework" className="text-sm text-primary hover:underline font-medium">
                    InferenceAI Framework →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
