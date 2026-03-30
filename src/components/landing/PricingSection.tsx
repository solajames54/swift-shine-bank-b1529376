import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "Free",
    desc: "Get started with essential banking features.",
    features: ["Free checking account", "Debit card", "Up to 5 transfers/month", "Mobile app access", "Basic analytics"],
    cta: "Open Free Account",
    featured: false,
  },
  {
    name: "Plus",
    price: "$9.99",
    desc: "More features for those who want to do more.",
    features: ["Everything in Basic", "Unlimited transfers", "Virtual cards", "Advanced analytics", "Priority support", "No foreign exchange fees"],
    cta: "Upgrade to Plus",
    featured: true,
  },
  {
    name: "Premium",
    price: "$24.99",
    desc: "The ultimate banking experience.",
    features: ["Everything in Plus", "Concierge support", "Travel insurance", "Cashback rewards", "Higher ATM limits", "Family accounts"],
    cta: "Go Premium",
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-muted-foreground text-lg">No hidden fees. Choose a plan that fits your lifestyle.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div className={`rounded-2xl border p-6 h-full flex flex-col ${p.featured ? "border-primary shadow-lg shadow-primary/10 relative" : "bg-card"}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{p.price}</span>
                    {p.price !== "Free" && <span className="text-muted-foreground text-sm">/month</span>}
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={p.featured ? "hero" : "outline"} className="w-full" asChild>
                  <Link to="/login">{p.cta}</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
