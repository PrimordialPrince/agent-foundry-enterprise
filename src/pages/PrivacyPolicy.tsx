import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Axiobit</title>
        <meta name="description" content="Axiobit's privacy policy explains how we collect, use, and protect your personal data in compliance with GDPR and other regulations." />
      </Helmet>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-display-md text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Axiobit ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Data Controller</h2>
              <p className="text-muted-foreground leading-relaxed">
                Axiobit is the data controller responsible for your personal data. If you have any questions about this Privacy Policy or our data practices, please contact us at: privacy@axiobit.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following types of personal data:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Identity Data:</strong> Name, job title, company name</li>
                <li><strong className="text-foreground">Contact Data:</strong> Email address, phone number, business address</li>
                <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, cookies</li>
                <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our website and services</li>
                <li><strong className="text-foreground">Marketing Data:</strong> Your preferences for receiving marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We process your personal data based on the following legal grounds:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Consent:</strong> Where you have given explicit consent</li>
                <li><strong className="text-foreground">Contract:</strong> Where processing is necessary for contract performance</li>
                <li><strong className="text-foreground">Legitimate Interests:</strong> For our business operations and improving our services</li>
                <li><strong className="text-foreground">Legal Obligation:</strong> Where we must comply with legal requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Rights Under GDPR</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Right of Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong className="text-foreground">Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong className="text-foreground">Right to Restrict Processing:</strong> Request limitation of data processing</li>
                <li><strong className="text-foreground">Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong className="text-foreground">Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Typically, we retain data for a maximum of 3 years after your last interaction with us, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions, to protect your data during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions about this Privacy Policy or to exercise your rights, please contact our Data Protection Officer at: dpo@axiobit.com
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You also have the right to lodge a complaint with your local supervisory authority if you believe your data protection rights have been violated.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
