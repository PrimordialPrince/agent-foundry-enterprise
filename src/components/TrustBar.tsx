import { cn } from "@/lib/utils";

interface TrustBarProps {
  className?: string;
}

const logos = [
  "Fortune 500 Companies",
  "Global Enterprises",
  "Industry Leaders",
  "Government Agencies",
  "Financial Institutions",
];

export function TrustBar({ className }: TrustBarProps) {
  return (
    <div className={cn("py-12 border-y border-border/50", className)}>
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading enterprises worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((name, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 px-6 rounded-lg bg-muted/30 border border-border/50"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
