import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Plane, Star, Check, Globe } from "lucide-react";

const cards = [
  {
    name: "VaultBank Travel Elite",
    highlight: "5x points on flights & hotels",
    annual: "$95",
    features: ["5x points on travel purchases", "Airport lounge access (1,300+ lounges)", "No foreign transaction fees", "Trip cancellation insurance", "$200 annual travel credit"],
  },
  {
    name: "VaultBank World Explorer",
    highlight: "3x points on all travel & dining",
    annual: "$0",
    features: ["3x points on travel & dining", "No annual fee", "No foreign transaction fees", "Auto rental collision coverage", "Travel emergency assistance"],
  },
  {
    name: "VaultBank Premium Reserve",
    highlight: "10x points on hotels",
    annual: "$450",
    features: ["10x on hotel bookings", "5x on flights", "Global Entry/TSA PreCheck credit", "Priority Pass membership", "$300 annual travel credit", "Concierge service"],
  },
];

export default function BestTravelCards() {
  return (
    <ResourceLayout title="Best Travel Credit Cards" subtitle="Maximize your travel rewards with cards that earn points on every trip.">
      <div className="max-w-4xl mx-auto space-y-6">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border bg-card">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1200&h=300&fit=crop"
              alt="Travel destination with scenic views"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Travel smarter, not harder</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">The right travel card can save you hundreds — or even thousands — per year through points, lounge access, travel credits, and insurance. Whether you're a frequent flyer or an occasional vacationer, there's a card tailored to your travel style.</p>
            </div>
          </div>
        </ScrollReveal>

        {cards.map((card, i) => (
          <ScrollReveal key={card.name} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Plane className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{card.name}</h3>
                    <p className="text-xs text-muted-foreground">Annual fee: {card.annual}</p>
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
