import { Helmet } from "react-helmet";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | Axiobit</title>
        <meta name="description" content="Read Axiobit's terms of service governing the use of our enterprise AI agent solutions and website." />
      </Helmet>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-display-md text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Axiobit's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Axiobit provides enterprise AI agent solutions, including but not limited to WhappO, Bizzfuse, and Arheion. Our services are designed to help organizations automate processes, improve compliance, and enhance decision-making capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. User Obligations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When using our services, you agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, and intellectual property on our website and services, including the InferenceAI™ framework, are owned by Axiobit or our licensors. You may not copy, modify, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We understand that our enterprise clients share sensitive business information with us. We maintain strict confidentiality protocols and will not disclose your confidential information to third parties except as required by law or as necessary to provide our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Service Level Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise clients are subject to separate Service Level Agreements (SLAs) that define uptime guarantees, support response times, and other service commitments. The specific terms of your SLA will be outlined in your enterprise agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Axiobit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Axiobit and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time for violation of these terms or for any other reason at our discretion. Upon termination, your right to use our services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the European Union and the applicable member state where Axiobit is established, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at: legal@axiobit.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
