import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CreditCard, Check } from "lucide-react";

const accounts = [
  { name: "AlliantCred Union Essential Checking", fee: "Free", features: ["No minimum balance", "Free debit card", "Mobile check deposit", "2 free ATM withdrawals/month"] },
  { name: "AlliantCred Union Premium Checking", fee: "$9.99/mo", features: ["Unlimited ATM refunds", "Early paycheck (2 days)", "Overdraft protection", "Priority support", "Free cashier's checks"] },
  { name: "AlliantCred Union Student Checking", fee: "Free", features: ["No fees until age 25", "Budgeting tools", "Parental oversight option", "Free debit card"] },
];

export default function BestCheckingAccounts() {
  return (
    <ResourceLayout title="Best Checking Accounts of 2026" subtitle="Find the right checking account with no hidden fees, great perks, and easy access to your money.">
      <div className="max-w-4xl mx-auto space-y-6">
        {accounts.map((acc, i) => (
          <ScrollReveal key={acc.name} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{acc.name}</h3>
                  <p className="text-sm text-muted-foreground">Monthly fee: <span className="font-semibold text-foreground">{acc.fee}</span></p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {acc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-bold mb-3">How to choose a checking account</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Consider your monthly transaction volume, ATM usage, and whether you need features like early direct deposit or overdraft protection. Students and young professionals may benefit from fee-free accounts, while frequent travelers should look for accounts with ATM fee refunds.</p>
          </div>
        </ScrollReveal>
      </div>
    </ResourceLayout>
  );
}
