import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { getAccounts } from "@/services/dataService";
import { formatCurrency, formatAccountNumber } from "@/utils/format";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";
import type { Account } from "@/types";
import { Wallet, PiggyBank } from "lucide-react";

export default function AccountsPage() {
  const { user } = useAuthContext();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getAccounts(user.id).then((data) => { setAccounts(data); setLoading(false); });
  }, [user]);

  if (loading) {
    return <div className="space-y-4"><Skeleton className="h-8 w-32" /><Skeleton className="h-40 rounded-2xl" /><Skeleton className="h-40 rounded-2xl" /></div>;
  }

  const icons: Record<string, typeof Wallet> = { Checking: Wallet, Savings: PiggyBank };

  return (
    <div className="space-y-6">
      <ScrollReveal>
        <h1 className="text-2xl font-bold">Accounts</h1>
        <p className="text-muted-foreground text-sm">Manage your bank accounts</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {accounts.map((acc, i) => {
          const Icon = icons[acc.type] || Wallet;
          return (
            <ScrollReveal key={acc.id} delay={i * 100}>
              <div className="rounded-2xl border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{acc.type} Account</p>
                    <p className="text-xs text-muted-foreground">{formatAccountNumber(acc.accountNumber)}</p>
                  </div>
                </div>
                <p className="text-3xl font-bold tabular-nums">{formatCurrency(acc.balance)}</p>
                <p className="text-xs text-muted-foreground mt-1">{acc.currency}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
