import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Shield, TrendingUp, Percent, Landmark } from "lucide-react";

const accounts = [
  { name: "AlliantCred Union High-Yield Savings", apy: "4.50%", min: "$0", icon: TrendingUp, highlight: true, desc: "No minimum balance. No monthly fees. Earn 10x the national average." },
  { name: "AlliantCred Union Money Market", apy: "4.25%", min: "$1,000", icon: Landmark, highlight: false, desc: "Higher rates for larger balances with check-writing privileges." },
  { name: "AlliantCred Union Kids Savings", apy: "3.75%", min: "$0", icon: Shield, highlight: false, desc: "Teach kids to save with parental controls and milestone rewards." },
];

export default function BestSavingsAccounts() {
  return (
    <ResourceLayout title="Best Savings Accounts of 2026" subtitle="Compare high-yield savings accounts with the best APY rates, no fees, and FDIC insurance.">
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">What to look for in a savings account</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Percent, label: "High APY", desc: "Look for rates above 4% to beat inflation." },
                { icon: Shield, label: "FDIC Insured", desc: "Your deposits are protected up to $250,000." },
                { icon: Landmark, label: "No Fees", desc: "Avoid accounts with monthly maintenance fees." },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {accounts.map((acc, i) => (
          <ScrollReveal key={acc.name} delay={i * 80}>
            <div className={`rounded-2xl border p-6 ${acc.highlight ? "border-primary shadow-lg shadow-primary/10" : "bg-card"}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
                    <acc.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{acc.name}</h3>
                    <p className="text-sm text-muted-foreground">{acc.desc}</p>
                  </div>
                </div>
                <div className="flex gap-6 text-center sm:text-right">
                  <div>
                    <p className="text-2xl font-bold text-primary">{acc.apy}</p>
                    <p className="text-xs text-muted-foreground">APY</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{acc.min}</p>
                    <p className="text-xs text-muted-foreground">Minimum</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <div className="prose prose-sm max-w-none">
            <h2 className="text-xl font-bold mb-3">How we pick the best savings accounts</h2>
            <p className="text-muted-foreground leading-relaxed">We evaluate savings accounts based on APY, fees, minimum balance requirements, accessibility, mobile app quality, and customer service. Our rankings are updated monthly to reflect current rates and any changes in account terms. All accounts featured are FDIC-insured and available nationwide.</p>
          </div>
        </ScrollReveal>
      </div>
    </ResourceLayout>
  );
}
