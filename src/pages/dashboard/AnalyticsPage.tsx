import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { getTransactions } from "@/services/dataService";
import { formatCurrency } from "@/utils/format";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";
import type { Transaction } from "@/types";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

const COLORS = [
  "hsl(221, 83%, 53%)", "hsl(263, 70%, 50%)", "hsl(142, 71%, 45%)",
  "hsl(38, 92%, 50%)", "hsl(0, 72%, 51%)", "hsl(220, 9%, 46%)",
];

export default function AnalyticsPage() {
  const { user } = useAuthContext();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getTransactions(user.id).then((data) => { setTransactions(data); setLoading(false); });
  }, [user]);

  if (loading) {
    return <div className="space-y-4"><Skeleton className="h-8 w-40" /><Skeleton className="h-64 rounded-2xl" /></div>;
  }

  // Category spending
  const categoryMap = new Map<string, number>();
  transactions.filter(t => t.type === "debit").forEach(t => {
    categoryMap.set(t.category, (categoryMap.get(t.category) || 0) + t.amount);
  });
  const categoryData = Array.from(categoryMap, ([name, value]) => ({ name, value: Math.round(value * 100) / 100 }))
    .sort((a, b) => b.value - a.value);

  // Monthly data
  const monthlyMap = new Map<string, { income: number; expenses: number }>();
  transactions.forEach(t => {
    const month = new Date(t.date).toLocaleDateString("en-US", { month: "short" });
    const existing = monthlyMap.get(month) || { income: 0, expenses: 0 };
    if (t.type === "credit") existing.income += t.amount;
    else existing.expenses += t.amount;
    monthlyMap.set(month, existing);
  });
  const monthlyData = Array.from(monthlyMap, ([month, data]) => ({ month, ...data }));

  return (
    <div className="space-y-6">
      <ScrollReveal>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-muted-foreground text-sm">Track your spending patterns</p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-6">
        <ScrollReveal delay={80}>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="font-semibold mb-4">Income vs Expenses</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220, 13%, 91%)" />
                  <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                  <Tooltip formatter={(v: number) => formatCurrency(v)} />
                  <Bar dataKey="income" fill="hsl(142, 71%, 45%)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="expenses" fill="hsl(221, 83%, 53%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="font-semibold mb-4">Spending by Category</h2>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
                    {categoryData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={(v: number) => formatCurrency(v)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
              {categoryData.map((c, i) => (
                <div key={c.name} className="flex items-center gap-1.5 text-xs">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
