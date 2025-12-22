import { Helmet } from "react-helmet";

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Accessibility Statement | Axiobit</title>
        <meta name="description" content="Axiobit's commitment to digital accessibility and our efforts to ensure our website and services are accessible to all users." />
      </Helmet>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-display-md text-foreground mb-8">Accessibility Statement</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Axiobit is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards to ensure we provide equal access to all users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Conformance Status</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Accessibility Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We have implemented the following accessibility features:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Keyboard Navigation:</strong> All interactive elements are accessible via keyboard</li>
                <li><strong className="text-foreground">Screen Reader Support:</strong> Content is structured for compatibility with screen readers</li>
                <li><strong className="text-foreground">Text Alternatives:</strong> Images include descriptive alt text</li>
                <li><strong className="text-foreground">Color Contrast:</strong> Text and background colors meet WCAG contrast requirements</li>
                <li><strong className="text-foreground">Resizable Text:</strong> Content remains readable when text is resized up to 200%</li>
                <li><strong className="text-foreground">Focus Indicators:</strong> Visible focus indicators for keyboard navigation</li>
                <li><strong className="text-foreground">Semantic HTML:</strong> Proper use of headings, landmarks, and ARIA attributes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Known Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive for full accessibility, some areas may have limitations. We are actively working to identify and resolve these issues. If you encounter any barriers, please let us know so we can address them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Assistive Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Our website is designed to be compatible with the following assistive technologies:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Browser Compatibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                For the best accessibility experience, we recommend using the latest versions of modern browsers including Chrome, Firefox, Safari, and Edge, along with current versions of assistive technologies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Feedback and Contact</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong> info@axiobit.com
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Enforcement Procedure</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are not satisfied with our response to your accessibility concern, you may escalate the issue to your local equality body or accessibility regulatory authority.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
