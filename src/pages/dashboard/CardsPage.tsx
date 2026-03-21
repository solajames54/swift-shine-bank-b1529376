import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { getCards } from "@/services/dataService";
import { formatCurrency } from "@/utils/format";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";
import type { Card } from "@/types";
import { Wifi, Snowflake, Shield } from "lucide-react";

export default function CardsPage() {
  const { user } = useAuthContext();
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getCards(user.id).then((data) => { setCards(data); setLoading(false); });
  }, [user]);

  if (loading) {
    return <div className="space-y-4"><Skeleton className="h-8 w-32" /><Skeleton className="h-52 rounded-2xl" /></div>;
  }

  return (
    <div className="space-y-6">
      <ScrollReveal>
        <h1 className="text-2xl font-bold">Cards</h1>
        <p className="text-muted-foreground text-sm">Manage your debit and credit cards</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <ScrollReveal key={card.id} delay={i * 120}>
            <div className="rounded-2xl gradient-primary p-6 text-primary-foreground aspect-[1.6/1] flex flex-col justify-between shadow-xl shadow-primary/20 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -right-4 -bottom-12 w-24 h-24 rounded-full bg-white/5" />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 opacity-80" />
                  <span className="text-sm font-medium opacity-90">VaultBank</span>
                </div>
                <Wifi className="h-5 w-5 opacity-70" />
              </div>

              <div className="relative z-10">
                <p className="text-lg font-mono tracking-widest mb-4">{card.cardNumber}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs opacity-60 mb-0.5">Card Holder</p>
                    <p className="text-sm font-medium">{user?.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-60 mb-0.5">Expires</p>
                    <p className="text-sm font-medium">{card.expiry}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card details */}
            <div className="rounded-2xl border bg-card p-4 mt-3 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{card.type}</span>
                <span className="font-medium">•••• {card.last4}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Spent</span>
                <span className="font-medium tabular-nums">{formatCurrency(card.spent)} / {formatCurrency(card.limit)}</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full gradient-primary transition-all duration-500"
                  style={{ width: `${(card.spent / card.limit) * 100}%` }}
                />
              </div>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Snowflake className="h-3.5 w-3.5" />
                {card.frozen ? "Unfreeze card" : "Freeze card"}
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
