import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import axiobitLogo from "@/assets/axiobit-logo.png";

const agents = [
  { name: "WhappO", href: "/agents/whappo" },
  { name: "yCarbon", href: "/agents/ycarbon" },
  { name: "Arheion", href: "/agents/arheion" },
];

const navigation = [
  { name: "About", href: "/about" },
  { name: "Agents", href: "/agents", hasDropdown: true },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Our Proprietary Framework", href: "/framework" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [agentsDropdownOpen, setAgentsDropdownOpen] = useState(false);
  const [mobileAgentsOpen, setMobileAgentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setAgentsDropdownOpen(false);
    if (agentsDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [agentsDropdownOpen]);

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
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={axiobitLogo} alt="Axiobit" className="h-5" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            item.hasDropdown ? (
              <div key={item.name} className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setAgentsDropdownOpen(!agentsDropdownOpen);
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors flex items-center gap-1",
                    location.pathname.startsWith("/agents")
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  )}
                >
                  {item.name}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", agentsDropdownOpen && "rotate-180")} />
                </button>
                
                {agentsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                    <Link
                      to="/agents"
                      className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                      onClick={() => setAgentsDropdownOpen(false)}
                    >
                      All Agents
                    </Link>
                    <div className="border-t border-border my-1" />
                    {agents.map((agent) => (
                      <Link
                        key={agent.name}
                        to={agent.href}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          location.pathname === agent.href
                            ? "text-accent bg-accent/10"
                            : "text-foreground hover:text-accent hover:bg-accent/10"
                        )}
                        onClick={() => setAgentsDropdownOpen(false)}
                      >
                        {agent.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {item.name}
              </Link>
            )
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
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileAgentsOpen(!mobileAgentsOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors rounded",
                      location.pathname.startsWith("/agents")
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:text-accent hover:bg-accent/10"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileAgentsOpen && "rotate-180")} />
                  </button>
                  {mobileAgentsOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link
                        to="/agents"
                        className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-accent/10 rounded transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All Agents
                      </Link>
                      {agents.map((agent) => (
                        <Link
                          key={agent.name}
                          to={agent.href}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors rounded",
                            location.pathname === agent.href
                              ? "text-accent bg-accent/10"
                              : "text-foreground hover:text-accent hover:bg-accent/10"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {agent.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium transition-colors rounded",
                    location.pathname === item.href
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/10"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
