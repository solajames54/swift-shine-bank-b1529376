import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BarChart3, Star, Check } from "lucide-react";

const brokers = [
  {
    name: "VaultBank Invest",
    rating: "4.9",
    commission: "$0",
    min: "$0",
    features: ["Commission-free stocks & ETFs", "Fractional shares from $1", "Robo-advisor option", "Tax-loss harvesting"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  },
  {
    name: "TradeWise Pro",
    rating: "4.7",
    commission: "$0",
    min: "$500",
    features: ["Advanced charting tools", "Options trading", "Margin accounts", "Research reports included"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop",
  },
  {
    name: "Horizon Wealth",
    rating: "4.6",
    commission: "$0",
    min: "$1,000",
    features: ["Managed portfolios", "Financial advisor access", "Retirement planning tools", "ESG investing options"],
    image: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?w=600&h=400&fit=crop",
  },
];

export default function BestBrokers() {
  return (
    <ResourceLayout title="Best Online Brokers of 2026" subtitle="Compare the top online brokers for stocks, ETFs, options, and more.">
      <div className="max-w-4xl mx-auto space-y-6">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border bg-card">
            <img
              src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=1200&h=300&fit=crop"
              alt="Stock market trading charts"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Choosing the right broker</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">The best broker depends on your investing style. Active traders need advanced tools and low-cost options trading. Buy-and-hold investors should prioritize index fund selection and low expense ratios. Beginners benefit from educational resources and intuitive interfaces.</p>
            </div>
          </div>
        </ScrollReveal>

        {brokers.map((broker, i) => (
          <ScrollReveal key={broker.name} delay={i * 80}>
            <div className="rounded-2xl border bg-card overflow-hidden">
              <div className="grid md:grid-cols-3">
                <img src={broker.image} alt={broker.name} className="w-full h-48 md:h-full object-cover" />
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg">{broker.name}</h3>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold"><Star className="h-4 w-4 fill-primary" /> {broker.rating}/5</div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">Commission: {broker.commission} · Minimum: {broker.min}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {broker.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-success shrink-0" /> {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
