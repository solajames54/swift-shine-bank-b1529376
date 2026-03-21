import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { getTransactions } from "@/services/dataService";
import { formatCurrency, formatDate } from "@/utils/format";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";
import type { Transaction } from "@/types";
import { ArrowUpRight, ArrowDownRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function TransactionsPage() {
  const { user } = useAuthContext();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!user) return;
    getTransactions(user.id).then((data) => { setTransactions(data); setLoading(false); });
  }, [user]);

  const filtered = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter((t) => t.description.toLowerCase().includes(search.toLowerCase()));

  if (loading) {
    return <div className="space-y-4"><Skeleton className="h-8 w-40" />{[1,2,3,4,5].map(i => <Skeleton key={i} className="h-16 rounded-xl" />)}</div>;
  }

  return (
    <div className="space-y-6">
      <ScrollReveal>
        <h1 className="text-2xl font-bold">Transactions</h1>
        <p className="text-muted-foreground text-sm">View your transaction history</p>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 rounded-xl h-10"
            />
          </div>
          <div className="flex gap-1 rounded-xl bg-secondary p-1">
            {["all", "credit", "debit"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-sm capitalize transition-all ${filter === f ? "bg-card shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <div className="rounded-2xl border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-secondary/50">
                  <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Transaction</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden sm:table-cell">Category</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden md:table-cell">Date</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3 hidden md:table-cell">Status</th>
                  <th className="text-right text-xs font-medium text-muted-foreground px-5 py-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((t) => (
                  <tr key={t.id} className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${t.type === "credit" ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`}>
                          {t.type === "credit" ? <ArrowDownRight className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
                        </div>
                        <span className="text-sm font-medium">{t.description}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 hidden sm:table-cell">
                      <span className="text-xs rounded-full bg-secondary px-2.5 py-1">{t.category}</span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground hidden md:table-cell">{formatDate(t.date)}</td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <span className={`text-xs font-medium ${t.status === "completed" ? "text-success" : t.status === "pending" ? "text-warning" : "text-destructive"}`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className={`text-sm font-medium tabular-nums ${t.type === "credit" ? "text-success" : ""}`}>
                        {t.type === "credit" ? "+" : "-"}{formatCurrency(t.amount)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground text-sm">
              No transactions found
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
