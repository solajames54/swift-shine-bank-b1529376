import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { getTransactions, getAccounts } from "@/services/dataService";
import { formatCurrency, formatDate } from "@/utils/format";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";
import type { Transaction, Account } from "@/types";
import {
  TrendingUp, ArrowUpRight, ArrowDownRight, Send, Receipt, UserPlus,
  CreditCard
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export default function OverviewPage() {
  const { user } = useAuthContext();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    Promise.all([getTransactions(user.id), getAccounts(user.id)]).then(([txns, accs]) => {
      setTransactions(txns);
      setAccounts(accs);
      setLoading(false);
    });
  }, [user]);

  const totalBalance = accounts.reduce((s, a) => s + a.balance, 0);
  const income = transactions.filter((t) => t.type === "credit").reduce((s, t) => s + t.amount, 0);
  const expenses = transactions.filter((t) => t.type === "debit").reduce((s, t) => s + t.amount, 0);

  // Simple chart data from transactions
  const chartData = transactions.slice(0, 10).reverse().map((t) => ({
    date: new Date(t.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    amount: t.type === "credit" ? t.amount : -t.amount,
  }));

  const quickActions = [
    { label: "Transfer", icon: Send, path: "/dashboard/transfer" },
    { label: "Pay Bills", icon: Receipt, path: "/dashboard/transfer" },
    { label: "Add Beneficiary", icon: UserPlus, path: "/dashboard/settings" },
    { label: "Cards", icon: CreditCard, path: "/dashboard/cards" },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => <Skeleton key={i} className="h-28 rounded-2xl" />)}
        </div>
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ScrollReveal>
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {user?.name?.split(" ")[0]}</h1>
          <p className="text-muted-foreground text-sm">Here's your financial overview</p>
        </div>
      </ScrollReveal>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Total Balance", value: totalBalance, icon: TrendingUp, trend: "+72.5%", color: "text-primary" },
          { label: "Income", value: income, icon: ArrowUpRight, trend: "+72.2%", color: "text-success" },
          { label: "Expenses", value: expenses, icon: ArrowDownRight, trend: "-3.1%", color: "text-destructive" },
        ].map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <s.icon className={`h-4 w-4 ${s.color}`} />
              </div>
              <p className="text-2xl font-bold">{formatCurrency(s.value)}</p>
              <p className={`text-xs mt-1 ${s.color}`}>{s.trend} this month</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Quick Actions */}
      <ScrollReveal delay={100}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickActions.map((a) => (
            <Link
              key={a.label}
              to={a.path}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl border bg-card hover:shadow-md transition-shadow active:scale-[0.97]"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <a.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">{a.label}</p>
            </Link>
          ))}
        </div>
      </ScrollReveal>

      {/* Chart */}
      <ScrollReveal delay={160}>
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="font-semibold mb-4">Spending Overview</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip formatter={(v: number) => formatCurrency(v)} />
                <Area type="monotone" dataKey="amount" stroke="hsl(221, 83%, 53%)" fill="url(#colorAmount)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </ScrollReveal>

      {/* Recent Transactions */}
      <ScrollReveal delay={200}>
        <div className="rounded-2xl border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Recent Transactions</h2>
            <Link to="/dashboard/transactions" className="text-sm text-primary hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {transactions.slice(0, 5).map((t) => (
              <div key={t.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${t.type === "credit" ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`}>
                    {t.type === "credit" ? <ArrowDownRight className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.description}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(t.date)}</p>
                  </div>
                </div>
                <p className={`text-sm font-medium tabular-nums ${t.type === "credit" ? "text-success" : ""}`}>
                  {t.type === "credit" ? "+" : "-"}{formatCurrency(t.amount)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
