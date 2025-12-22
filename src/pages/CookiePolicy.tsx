import { Helmet } from "react-helmet";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Cookie Policy | Axiobit</title>
        <meta name="description" content="Learn how Axiobit uses cookies and similar technologies on our website in compliance with GDPR and ePrivacy regulations." />
      </Helmet>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-display-md text-foreground mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-2">Functional Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies are used to track visitors across websites to display relevant advertisements. They are typically set by third-party advertising networks with our permission.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Cookie List</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-foreground font-medium">Cookie Name</th>
                      <th className="text-left py-3 text-foreground font-medium">Purpose</th>
                      <th className="text-left py-3 text-foreground font-medium">Duration</th>
                      <th className="text-left py-3 text-foreground font-medium">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3">_session</td>
                      <td className="py-3">Session management</td>
                      <td className="py-3">Session</td>
                      <td className="py-3">Essential</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">cookie_consent</td>
                      <td className="py-3">Stores cookie preferences</td>
                      <td className="py-3">1 year</td>
                      <td className="py-3">Essential</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">_ga</td>
                      <td className="py-3">Google Analytics</td>
                      <td className="py-3">2 years</td>
                      <td className="py-3">Analytics</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">_gid</td>
                      <td className="py-3">Google Analytics</td>
                      <td className="py-3">24 hours</td>
                      <td className="py-3">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can manage your cookie preferences at any time through our cookie consent banner or by adjusting your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, if you block all cookies, some features of our website may not work properly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some cookies on our website are set by third-party services that appear on our pages. We do not control these cookies. Please refer to the respective third-party privacy policies for more information about their use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies, please contact us at: privacy@axiobit.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
