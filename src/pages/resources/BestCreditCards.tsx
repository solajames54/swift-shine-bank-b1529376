import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CreditCard, Star, Check } from "lucide-react";

const cards = [
  { name: "AlliantCred Union Rewards Card", type: "Cash Back", highlight: "3% back on dining & groceries", annual: "$0", features: ["No annual fee", "3% dining & groceries", "1.5% on everything else", "No foreign transaction fees"] },
  { name: "AlliantCred Union Travel Elite", type: "Travel", highlight: "5x points on travel", annual: "$95", features: ["5x points on flights & hotels", "Airport lounge access", "Travel insurance included", "$200 travel credit"] },
  { name: "AlliantCred Union Starter Card", type: "Student", highlight: "Build credit responsibly", annual: "$0", features: ["No credit history required", "1% cash back", "Free credit score monitoring", "Auto credit limit increases"] },
];

export default function BestCreditCards() {
  return (
    <ResourceLayout title="Best Credit Cards of 2026" subtitle="Compare top credit cards for cash back, travel rewards, and building credit.">
      <div className="max-w-4xl mx-auto space-y-6">
        {cards.map((card, i) => (
          <ScrollReveal key={card.name} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{card.name}</h3>
                    <p className="text-xs text-muted-foreground">{card.type} · Annual fee: {card.annual}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-primary font-semibold text-sm">
                  <Star className="h-4 w-4 fill-primary" /> {card.highlight}
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
