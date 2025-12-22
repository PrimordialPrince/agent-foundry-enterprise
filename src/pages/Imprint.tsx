import { Helmet } from "react-helmet";

export default function Imprint() {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Imprint (Impressum) | Axiobit</title>
        <meta name="description" content="Legal information and company details for Axiobit as required by European regulations." />
      </Helmet>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-display-md text-foreground mb-8">Imprint</h1>
          <p className="text-muted-foreground mb-8 text-sm">(Impressum gemäß § 5 TMG / § 25 MStV)</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Company Information</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong className="text-foreground">Company Name:</strong> Axiobit GmbH</p>
                <p><strong className="text-foreground">Legal Form:</strong> Gesellschaft mit beschränkter Haftung (GmbH)</p>
                <p><strong className="text-foreground">Commercial Register:</strong> HRB XXXXX, Amtsgericht München</p>
                <p><strong className="text-foreground">VAT ID:</strong> DE XXXXXXXXX</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Registered Address</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>Axiobit GmbH</p>
                <p>Musterstraße 123</p>
                <p>80331 München</p>
                <p>Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact Information</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong className="text-foreground">Phone:</strong> +49 (0) 89 XXXXXXXX</p>
                <p><strong className="text-foreground">Email:</strong> info@axiobit.com</p>
                <p><strong className="text-foreground">Website:</strong> www.axiobit.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Management (Geschäftsführung)</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>Managing Director: [Name]</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Responsible for Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                (Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV)
              </p>
              <div className="text-muted-foreground leading-relaxed mt-2">
                <p>[Name]</p>
                <p>Axiobit GmbH</p>
                <p>Musterstraße 123</p>
                <p>80331 München</p>
                <p>Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Data Protection Officer</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong className="text-foreground">Name:</strong> [Data Protection Officer Name]</p>
                <p><strong className="text-foreground">Email:</strong> dpo@axiobit.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Professional Liability Insurance</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong className="text-foreground">Insurer:</strong> [Insurance Company Name]</p>
                <p><strong className="text-foreground">Address:</strong> [Insurance Company Address]</p>
                <p><strong className="text-foreground">Territorial Scope:</strong> European Union</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The European Commission provides a platform for online dispute resolution (OS): 
                <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Liability for Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 (1) TMG. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Liability for Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Copyright</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
