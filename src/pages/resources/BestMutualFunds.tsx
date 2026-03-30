import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TrendingUp, BarChart3, Shield } from "lucide-react";

const funds = [
  { name: "AlliantCred Union S&P 500 Index", ticker: "VBSPX", expense: "0.03%", return5y: "12.4%", risk: "Moderate" },
  { name: "AlliantCred Union Total Bond Market", ticker: "VBTBM", expense: "0.05%", return5y: "4.2%", risk: "Low" },
  { name: "AlliantCred Union Growth Fund", ticker: "VBGRF", expense: "0.08%", return5y: "15.1%", risk: "High" },
];

export default function BestMutualFunds() {
  return (
    <ResourceLayout title="Best Mutual Funds of 2026" subtitle="Top-performing mutual funds with low expense ratios for long-term investors.">
      <div className="max-w-4xl mx-auto space-y-6">
        <ScrollReveal>
          <div className="rounded-2xl border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-semibold">Fund</th>
                  <th className="text-left p-4 font-semibold">Ticker</th>
                  <th className="text-left p-4 font-semibold">Expense Ratio</th>
                  <th className="text-left p-4 font-semibold">5Y Return</th>
                  <th className="text-left p-4 font-semibold">Risk</th>
                </tr>
              </thead>
              <tbody>
                {funds.map((f) => (
                  <tr key={f.ticker} className="border-b last:border-0">
                    <td className="p-4 font-medium">{f.name}</td>
                    <td className="p-4 text-muted-foreground">{f.ticker}</td>
                    <td className="p-4 text-primary font-semibold">{f.expense}</td>
                    <td className="p-4 text-success font-semibold">{f.return5y}</td>
                    <td className="p-4 text-muted-foreground">{f.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-bold mb-3">Mutual fund investing basics</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Mutual funds pool money from multiple investors to buy a diversified portfolio of stocks, bonds, or other securities. Look for funds with low expense ratios (under 0.10% for index funds) and consistent long-term performance. Past performance doesn't guarantee future results.</p>
          </div>
        </ScrollReveal>
      </div>
    </ResourceLayout>
  );
}
