import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check } from "lucide-react";

const loans = [
  { name: "VaultBank Personal Loan", apr: "6.99% – 14.99%", amounts: "$1,000 – $50,000", terms: "12 – 60 months", features: ["No origination fee", "Fixed rates", "Same-day funding available"] },
  { name: "VaultBank Debt Consolidation", apr: "7.49% – 15.99%", amounts: "$5,000 – $100,000", terms: "24 – 84 months", features: ["Direct creditor payment", "Lower monthly payments", "Single payment simplicity"] },
];

export default function BestPersonalLoans() {
  return (
    <ResourceLayout title="Best Personal Loans of 2026" subtitle="Find low-rate personal loans for debt consolidation, home improvement, and more.">
      <div className="max-w-4xl mx-auto space-y-6">
        {loans.map((loan, i) => (
          <ScrollReveal key={loan.name} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-bold text-lg mb-3">{loan.name}</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div><p className="text-xs text-muted-foreground">APR Range</p><p className="font-semibold text-primary">{loan.apr}</p></div>
                <div><p className="text-xs text-muted-foreground">Loan Amount</p><p className="font-semibold">{loan.amounts}</p></div>
                <div><p className="text-xs text-muted-foreground">Term Length</p><p className="font-semibold">{loan.terms}</p></div>
              </div>
              <ul className="flex flex-wrap gap-3">
                {loan.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-success" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-bold mb-3">How to qualify for a personal loan</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Lenders typically look at your credit score, income, debt-to-income ratio, and employment history. A credit score of 670+ generally qualifies you for the best rates. Consider pre-qualifying with multiple lenders to compare offers without affecting your credit score.</p>
          </div>
        </ScrollReveal>
      </div>
    </ResourceLayout>
  );
}
