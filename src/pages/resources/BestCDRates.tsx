import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Percent } from "lucide-react";

const rates = [
  { term: "6 Months", apy: "4.75%", min: "$500" },
  { term: "1 Year", apy: "4.90%", min: "$500" },
  { term: "2 Years", apy: "4.60%", min: "$1,000" },
  { term: "5 Years", apy: "4.25%", min: "$1,000" },
];

export default function BestCDRates() {
  return (
    <ResourceLayout title="Best CD Rates of 2026" subtitle="Lock in the highest certificate of deposit rates available today.">
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <div className="rounded-2xl border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-semibold">Term</th>
                  <th className="text-left p-4 font-semibold">APY</th>
                  <th className="text-left p-4 font-semibold">Minimum Deposit</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r) => (
                  <tr key={r.term} className="border-b last:border-0">
                    <td className="p-4 font-medium">{r.term}</td>
                    <td className="p-4 text-primary font-bold">{r.apy}</td>
                    <td className="p-4 text-muted-foreground">{r.min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-bold mb-3">Understanding CDs</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">A certificate of deposit (CD) offers a fixed interest rate for a set term in exchange for leaving your money untouched. Early withdrawal typically incurs a penalty. CDs are ideal for money you won't need in the short term and want to earn a guaranteed return on. Consider a CD ladder strategy to balance liquidity with higher rates.</p>
          </div>
        </ScrollReveal>
      </div>
    </ResourceLayout>
  );
}
