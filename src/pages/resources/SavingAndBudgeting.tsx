import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PiggyBank, Target, TrendingDown, Lightbulb, Calculator } from "lucide-react";

const tips = [
  { icon: Target, title: "The 50/30/20 Rule", content: "Allocate 50% of income to needs (rent, groceries, utilities), 30% to wants (dining, entertainment), and 20% to savings and debt repayment. It's simple, flexible, and effective." },
  { icon: PiggyBank, title: "Automate your savings", content: "Set up automatic transfers to your savings account on payday. When saving is automatic, you spend what's left instead of saving what's left — a powerful mindset shift." },
  { icon: TrendingDown, title: "Track every expense", content: "Use AlliantCred Union's built-in analytics to categorize spending. Most people are surprised by how much they spend on subscriptions, coffee, and impulse purchases." },
  { icon: Calculator, title: "Build a zero-based budget", content: "Assign every dollar a job. Income minus expenses should equal zero. This forces intentionality with your money and eliminates wasteful spending." },
  { icon: Lightbulb, title: "Use the 24-hour rule", content: "For any non-essential purchase over $50, wait 24 hours before buying. This simple delay eliminates most impulse purchases and can save thousands annually." },
];

export default function SavingAndBudgeting() {
  return (
    <ResourceLayout title="Saving & Budgeting Guide" subtitle="Practical strategies to spend less, save more, and take control of your financial future.">
      <div className="max-w-3xl mx-auto space-y-6">
        {tips.map((tip, i) => (
          <ScrollReveal key={tip.title} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <tip.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.content}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
