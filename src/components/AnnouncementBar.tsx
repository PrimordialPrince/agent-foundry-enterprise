import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <span>Build your AI roadmap at AxioWorld 2026.</span>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-1 underline underline-offset-2 hover:no-underline font-semibold"
        >
          Registration now open
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
