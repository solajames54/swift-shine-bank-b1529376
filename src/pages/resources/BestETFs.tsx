import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TrendingUp, Check } from "lucide-react";

const etfs = [
  { name: "VaultBank Total Market ETF", ticker: "VBTM", expense: "0.02%", assets: "$48B", return1y: "+18.2%" },
  { name: "VaultBank International ETF", ticker: "VBIX", expense: "0.06%", assets: "$12B", return1y: "+9.7%" },
  { name: "VaultBank Clean Energy ETF", ticker: "VBCE", expense: "0.12%", assets: "$3.2B", return1y: "+24.5%" },
];

export default function BestETFs() {
  return (
    <ResourceLayout title="Best ETFs of 2026" subtitle="Exchange-traded funds with the lowest fees and strongest performance across market sectors.">
      <div className="max-w-4xl mx-auto space-y-6">
        {etfs.map((etf, i) => (
          <ScrollReveal key={etf.ticker} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg">{etf.name}</h3>
                  <p className="text-sm text-muted-foreground">{etf.ticker} · Expense Ratio: {etf.expense}</p>
                </div>
                <div className="flex gap-6 text-right">
                  <div>
                    <p className="text-lg font-bold text-success">{etf.return1y}</p>
                    <p className="text-xs text-muted-foreground">1Y Return</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{etf.assets}</p>
                    <p className="text-xs text-muted-foreground">Total Assets</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
