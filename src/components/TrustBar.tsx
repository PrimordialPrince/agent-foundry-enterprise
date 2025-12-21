export function TrustBar() {
  const companies = ["Microsoft", "Google Cloud", "AWS", "Salesforce", "SAP", "Oracle"];

  return (
    <div className="py-12 border-y border-border/30 bg-card/20">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((company) => (
            <div key={company} className="text-muted-foreground/50 hover:text-muted-foreground transition-colors text-lg font-semibold">
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}