import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "/logo.png";

const navLinks = [
  { label: "Features", href: "#features" },
  {
    label: "Products",
    href: "#",
    children: [
      { label: "Savings Accounts", to: "/resources/best-savings-accounts" },
      { label: "Checking Accounts", to: "/resources/best-checking-accounts" },
      { label: "Credit Cards", to: "/resources/best-credit-cards" },
      { label: "Personal Loans", to: "/resources/best-personal-loans" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Investing 101", to: "/resources/investing-101" },
      { label: "Saving & Budgeting", to: "/resources/saving-and-budgeting" },
      { label: "Retirement Planning", to: "/resources/retirement-planning" },
      { label: "Best ETFs", to: "/resources/best-etfs" },
    ],
  },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "/contact", isRoute: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isLanding && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent ? "bg-transparent" : "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm"}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <img src={logoImg} alt="AlliantCred Union" className="h-8 w-8 rounded-lg" />
          <span className={isTransparent ? "text-white" : "text-foreground"}>AlliantCred Union</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) =>
            l.children ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(l.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg ${isTransparent ? "text-white/70 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {activeDropdown === l.label && (
                  <div className="absolute top-full left-0 pt-1 animate-fade-in">
                    <div className="w-56 rounded-xl border bg-popover shadow-xl p-2">
                      {l.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          onClick={() => { setActiveDropdown(null); window.scrollTo(0, 0); }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : "isRoute" in l ? (
              <Link
                key={l.href}
                to={l.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${isTransparent ? "text-white/70 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${isTransparent ? "text-white/70 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
              >
                {l.label}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className={isTransparent ? "text-white/70 hover:text-white hover:bg-white/10" : ""}>
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/login">Get Started</Link>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-1">
          <button className="p-2" onClick={() => setOpen(!open)}>
            {open ? <X className={`h-5 w-5 ${isTransparent ? "text-white" : ""}`} /> : <Menu className={`h-5 w-5 ${isTransparent ? "text-white" : ""}`} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background px-4 py-4 space-y-1 animate-fade-in">
          {navLinks.map((l) =>
            l.children ? (
              <div key={l.label}>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-3 pt-3 pb-1">{l.label}</p>
                {l.children.map((child) => (
                  <Link key={child.to} to={child.to} className="block text-sm text-foreground py-2 px-3 rounded-lg hover:bg-muted" onClick={() => { setOpen(false); window.scrollTo(0, 0); }}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              "isRoute" in l ? (
                <Link key={l.href} to={l.href} className="block text-sm text-foreground py-2 px-3 rounded-lg hover:bg-muted" onClick={() => { setOpen(false); window.scrollTo(0, 0); }}>
                  {l.label}
                </Link>
              ) : (
                <a key={l.href} href={l.href} className="block text-sm text-foreground py-2 px-3 rounded-lg hover:bg-muted" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              )
            )
          )}
          <div className="flex gap-2 pt-3 border-t mt-2">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link to="/login">Log in</Link>
            </Button>
            <Button variant="hero" size="sm" asChild className="flex-1">
              <Link to="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
