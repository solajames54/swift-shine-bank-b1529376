import { useAuthContext } from "@/hooks/useAuthContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function SettingsPage() {
  const { user } = useAuthContext();
  const [tab, setTab] = useState<"profile" | "security" | "preferences">("profile");

  const tabs = ["profile", "security", "preferences"] as const;

  return (
    <div className="space-y-6 max-w-2xl">
      <ScrollReveal>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your account preferences</p>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div className="flex gap-1 rounded-xl bg-secondary p-1 w-fit">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm capitalize transition-all ${tab === t ? "bg-card shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <div className="rounded-2xl border bg-card p-6">
          {tab === "profile" && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                  {user?.name?.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-lg">{user?.name}</p>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                <Input defaultValue={user?.name} className="rounded-xl h-11" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <Input defaultValue={user?.email} className="rounded-xl h-11" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone</label>
                <Input defaultValue={user?.phone} className="rounded-xl h-11" />
              </div>
              <Button variant="hero" onClick={() => toast.success("Profile updated!")}>Save Changes</Button>
            </div>
          )}

          {tab === "security" && (
            <div className="space-y-4">
              <h3 className="font-semibold">Change Password</h3>
              <Input type="password" placeholder="Current password" className="rounded-xl h-11" />
              <Input type="password" placeholder="New password" className="rounded-xl h-11" />
              <Input type="password" placeholder="Confirm new password" className="rounded-xl h-11" />
              <Button variant="hero" onClick={() => toast.success("Password updated!")}>Update Password</Button>
            </div>
          )}

          {tab === "preferences" && (
            <div className="space-y-4">
              <h3 className="font-semibold">Notification Preferences</h3>
              <div className="space-y-3">
                {["Email notifications", "Push notifications", "Transaction alerts", "Security alerts"].map((pref) => (
                  <label key={pref} className="flex items-center justify-between py-2">
                    <span className="text-sm">{pref}</span>
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-primary" />
                  </label>
                ))}
              </div>
              <Button variant="hero" onClick={() => toast.success("Preferences saved!")}>Save Preferences</Button>
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
