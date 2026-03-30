import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BookOpen, Lightbulb, TrendingUp, PiggyBank, BarChart3 } from "lucide-react";

const topics = [
  { icon: PiggyBank, title: "Start with an emergency fund", content: "Before investing, build 3–6 months of living expenses in a high-yield savings account. This protects you from having to sell investments at a loss during unexpected expenses." },
  { icon: TrendingUp, title: "Understand compound growth", content: "Investing $200/month starting at age 25 with an average 8% annual return could grow to over $500,000 by age 65. Starting 10 years later cuts that nearly in half — time is your greatest asset." },
  { icon: BarChart3, title: "Diversify your portfolio", content: "Spread your investments across different asset classes (stocks, bonds, real estate) and geographies. Index funds and ETFs make diversification simple and affordable." },
  { icon: Lightbulb, title: "Know your risk tolerance", content: "Younger investors can typically afford more risk (more stocks) because they have time to recover from downturns. As you approach retirement, gradually shift toward bonds and stable assets." },
  { icon: BookOpen, title: "Tax-advantaged accounts first", content: "Maximize contributions to 401(k)s and IRAs before investing in taxable accounts. Employer matches are essentially free money — always take full advantage of them." },
];

export default function Investing101() {
  return (
    <ResourceLayout title="Investing 101" subtitle="Everything you need to know to start investing with confidence, even as a complete beginner.">
      <div className="max-w-3xl mx-auto space-y-6">
        {topics.map((topic, i) => (
          <ScrollReveal key={topic.title} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <topic.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic.content}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
