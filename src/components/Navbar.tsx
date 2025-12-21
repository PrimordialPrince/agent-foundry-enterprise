import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Agents", href: "/agents" },
  { name: "Technology", href: "/technology" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled 
          ? "bg-background border-b border-border shadow-card" 
          : "bg-background border-b border-border/50"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo - AXIOBIT styled */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-primary">△</span>
            <span className="text-primary">X</span>
            <span className="text-primary">I</span>
            <span className="text-primary">O</span>
            <span className="text-accent">B</span>
            <span className="text-foreground">I</span>
            <span className="text-foreground">T</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-4 py-3 text-sm font-medium transition-colors rounded",
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-secondary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
