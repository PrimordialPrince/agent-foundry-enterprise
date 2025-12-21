import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnnouncementBar } from "./AnnouncementBar";

const navigation = [
  { 
    name: "Platform", 
    href: "/technology",
    hasDropdown: true,
    dropdownItems: [
      { name: "InferenceAI™ Framework", href: "/technology", description: "Our proprietary AI engine" },
      { name: "Enterprise Security", href: "/technology", description: "SOC 2 Type II compliant" },
      { name: "Integration Hub", href: "/technology", description: "100+ enterprise connectors" },
    ]
  },
  { 
    name: "Solutions", 
    href: "/agents",
    hasDropdown: true,
    dropdownItems: [
      { name: "WhappO", href: "/agents", description: "Conversational AI for WhatsApp" },
      { name: "yCarbon", href: "/agents", description: "Sustainability intelligence" },
      { name: "Arheion", href: "/agents", description: "Document intelligence" },
    ]
  },
  { name: "Customers", href: "/case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <header 
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled 
            ? "bg-background border-b border-border shadow-card" 
            : "bg-background/95 border-b border-border/50"
        )}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">Axiobit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-72 bg-card border border-border rounded-lg shadow-enterprise-lg p-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-3 rounded-md hover:bg-secondary transition-colors"
                        >
                          <div className="text-sm font-medium text-foreground">{dropdownItem.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{dropdownItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <User className="h-5 w-5" />
            </button>
            <Link to="/contact">
              <Button variant="enterprise" size="sm">
                Try Axiobit
              </Button>
            </Link>
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
                <div key={item.name}>
                  <Link
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
                  {item.hasDropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="enterprise" className="w-full">Try Axiobit</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
