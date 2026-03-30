import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TrendingDown, Target, CreditCard, AlertTriangle, CheckCircle, ArrowDownRight } from "lucide-react";

const strategies = [
  { icon: Target, title: "The Debt Avalanche Method", content: "Pay minimums on all debts, then put extra money toward the debt with the highest interest rate. This saves the most money mathematically. Once the highest-rate debt is paid off, roll that payment into the next-highest rate debt. Best for: people motivated by saving money on interest." },
  { icon: ArrowDownRight, title: "The Debt Snowball Method", content: "Pay minimums on all debts, then attack the smallest balance first. Quick wins build momentum and motivation. Once the smallest debt is gone, add that payment to the next-smallest. Studies show this method leads to higher completion rates. Best for: people who need psychological wins." },
  { icon: CreditCard, title: "Balance transfer strategy", content: "Transfer high-interest credit card debt to a 0% APR balance transfer card. You'll typically get 12-21 months of 0% interest, letting every payment go directly to principal. Watch for transfer fees (usually 3-5%) and have a payoff plan before the promotional period ends." },
  { icon: TrendingDown, title: "Debt consolidation loans", content: "Combine multiple debts into a single personal loan with a lower interest rate. This simplifies payments and can reduce total interest. You'll need a credit score of 670+ for the best rates. Make sure the loan term doesn't extend so long that you pay more total interest." },
  { icon: AlertTriangle, title: "When to seek professional help", content: "If your total debt (excluding mortgage) exceeds 40% of your annual income, or you can only make minimum payments, consider nonprofit credit counseling. They can negotiate lower rates and create a debt management plan. Avoid for-profit debt settlement companies — they often charge high fees and damage your credit." },
  { icon: CheckCircle, title: "Staying debt-free after payoff", content: "Build a 3-6 month emergency fund to avoid future debt from unexpected expenses. Use the 24-hour rule for purchases over $50. Automate savings on payday. Keep 1-2 credit cards for building credit but pay the full balance monthly. Track spending with AlliantCred Union's built-in analytics." },
];

export default function DebtManagement() {
  return (
    <ResourceLayout title="Debt Management Guide" subtitle="Proven strategies to pay off debt faster, save on interest, and build a debt-free future.">
      <div className="max-w-3xl mx-auto space-y-6">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border bg-card">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=300&fit=crop"
              alt="Financial planning and debt management"
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">The average American carries $6,365 in credit card debt. Whether you're dealing with student loans, credit cards, or personal loans, this guide provides actionable strategies to get out of debt and stay out.</p>
            </div>
          </div>
        </ScrollReveal>

        {strategies.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
