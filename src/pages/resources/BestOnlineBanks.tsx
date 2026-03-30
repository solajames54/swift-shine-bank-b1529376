import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Globe, Check, Star, Smartphone } from "lucide-react";

const banks = [
  {
    name: "AlliantCred Union Digital",
    rating: "4.9",
    features: ["No monthly fees", "4.50% APY savings", "Free ATM network (55,000+)", "24/7 customer support"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
    desc: "A fully digital banking experience with industry-leading savings rates and zero hidden fees.",
  },
  {
    name: "NeoBank Plus",
    rating: "4.7",
    features: ["Early direct deposit", "Budgeting tools built-in", "Instant card freezing", "Round-up savings"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    desc: "Designed for millennials and Gen Z with powerful spending insights and automated savings features.",
  },
  {
    name: "Horizon Online Banking",
    rating: "4.6",
    features: ["Joint accounts available", "Wire transfers included", "FDIC insured to $250K", "Multi-currency support"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    desc: "A mature online bank offering comprehensive banking services with international capabilities.",
  },
];

export default function BestOnlineBanks() {
  return (
    <ResourceLayout title="Best Online Banks of 2026" subtitle="Discover the top digital-first banks offering higher rates, lower fees, and better technology.">
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border bg-card">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop"
              alt="Person banking on laptop"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Why choose an online bank?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">Online banks operate without physical branches, passing the savings on to you through higher interest rates and lower fees. They offer full FDIC insurance, robust mobile apps, and 24/7 support — making them ideal for anyone comfortable managing money digitally.</p>
            </div>
          </div>
        </ScrollReveal>

        {banks.map((bank, i) => (
          <ScrollReveal key={bank.name} delay={i * 80}>
            <div className="rounded-2xl border bg-card overflow-hidden">
              <div className="grid md:grid-cols-3">
                <img src={bank.image} alt={bank.name} className="w-full h-48 md:h-full object-cover" />
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{bank.name}</h3>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                      <Star className="h-4 w-4 fill-primary" /> {bank.rating}/5
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{bank.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {bank.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-success shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-bold mb-3">How to switch to an online bank</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">1. Open your new account</p>
                <p>Most online banks let you open an account in under 10 minutes with just a government ID.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">2. Move your direct deposits</p>
                <p>Update your paycheck deposit to your new routing and account numbers.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">3. Set up bill payments</p>
                <p>Transfer automatic payments, then close your old account once everything has moved.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </ResourceLayout>
  );
}
