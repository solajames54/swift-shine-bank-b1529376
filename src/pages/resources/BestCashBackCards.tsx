import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CreditCard, Star, Check, DollarSign } from "lucide-react";

const cards = [
  {
    name: "VaultBank Cash Back Plus",
    cashback: "5% rotating categories",
    annual: "$0",
    features: ["5% on quarterly rotating categories", "1% on all other purchases", "$200 welcome bonus", "No annual fee ever"],
  },
  {
    name: "VaultBank Flat Rate Card",
    cashback: "2% on everything",
    annual: "$0",
    features: ["2% cash back on all purchases", "No category tracking needed", "Automatic statement credits", "No minimum redemption"],
  },
  {
    name: "VaultBank Grocery Rewards",
    cashback: "6% on groceries",
    annual: "$95",
    features: ["6% at US supermarkets (up to $6K/yr)", "3% on streaming services", "3% on transit", "$300 annual grocery credit"],
  },
];

export default function BestCashBackCards() {
  return (
    <ResourceLayout title="Best Cash Back Credit Cards" subtitle="Earn money back on every purchase with these top-rated cash back credit cards.">
      <div className="max-w-4xl mx-auto space-y-6">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border bg-card">
            <img
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&h=300&fit=crop"
              alt="Credit cards and cash back rewards"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">How cash back cards work</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">Cash back credit cards return a percentage of your spending as a statement credit, direct deposit, or check. The best cards offer between 1.5% and 6% back depending on the spending category. With disciplined use and full monthly payments, cash back cards are essentially free money.</p>
            </div>
          </div>
        </ScrollReveal>

        {cards.map((card, i) => (
          <ScrollReveal key={card.name} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{card.name}</h3>
                    <p className="text-xs text-muted-foreground">Annual fee: {card.annual}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-primary font-semibold text-sm">
                  <Star className="h-4 w-4 fill-primary" /> {card.cashback}
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {card.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
