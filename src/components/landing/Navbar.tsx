import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <Shield className="h-4 w-4 text-primary-foreground" />
          </div>
          VaultBank
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/login">Get Started</Link>
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button className="p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-3 animate-fade-in">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
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
