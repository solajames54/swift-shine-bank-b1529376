import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { getNotifications } from "@/services/dataService";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";
import type { Notification } from "@/types";
import { Bell, ShieldAlert, Info, ArrowLeftRight } from "lucide-react";
import { formatDate } from "@/utils/format";

const iconMap = {
  transaction: ArrowLeftRight,
  security: ShieldAlert,
  info: Info,
};

export default function NotificationsPage() {
  const { user } = useAuthContext();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getNotifications(user.id).then((data) => { setNotifications(data); setLoading(false); });
  }, [user]);

  if (loading) {
    return <div className="space-y-4"><Skeleton className="h-8 w-40" />{[1,2,3].map(i => <Skeleton key={i} className="h-20 rounded-xl" />)}</div>;
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <ScrollReveal>
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-muted-foreground text-sm">Stay updated on your account activity</p>
      </ScrollReveal>

      <div className="space-y-3">
        {notifications.map((n, i) => {
          const Icon = iconMap[n.type] || Bell;
          return (
            <ScrollReveal key={n.id} delay={i * 60}>
              <div className={`rounded-2xl border bg-card p-4 flex items-start gap-4 ${!n.read ? "border-primary/30 bg-primary/[0.02]" : ""}`}>
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0 ${n.type === "security" ? "bg-warning/10 text-warning" : n.type === "transaction" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{n.title}</p>
                    {!n.read && <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{n.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{formatDate(n.date)}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
