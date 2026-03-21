import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, TrendingUp, CreditCard, Shield } from "lucide-react";
import { formatCurrency } from "@/utils/format";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-6">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Trusted by 2M+ customers
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
                Banking that works{" "}
                <span className="gradient-text">for your future</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                Manage your money with confidence. Instant transfers, smart analytics, 
                and bank-grade security — all in one beautifully simple app.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/login">
                    Open Free Account
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl">
                  See How It Works
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border/50">
                <div>
                  <p className="text-2xl font-bold">$4.2B+</p>
                  <p className="text-sm text-muted-foreground">Transactions processed</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-bold">99.99%</p>
                  <p className="text-sm text-muted-foreground">Uptime guarantee</p>
                </div>
                <div className="w-px h-10 bg-border hidden sm:block" />
                <div className="hidden sm:block">
                  <p className="text-2xl font-bold">150+</p>
                  <p className="text-sm text-muted-foreground">Countries supported</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Dashboard mockup */}
          <ScrollReveal delay={200} direction="right">
            <div className="relative">
              <div className="rounded-2xl border bg-card shadow-2xl shadow-primary/5 p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Balance</p>
                    <p className="text-3xl font-bold tracking-tight">{formatCurrency(24817.43)}</p>
                  </div>
                  <div className="flex items-center gap-1 text-success text-sm font-medium">
                    <TrendingUp className="h-4 w-4" />
                    +12.5%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-secondary p-4">
                    <CreditCard className="h-5 w-5 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">Checking</p>
                    <p className="font-semibold">{formatCurrency(18450.68)}</p>
                  </div>
                  <div className="rounded-xl bg-secondary p-4">
                    <Shield className="h-5 w-5 text-accent mb-2" />
                    <p className="text-sm text-muted-foreground">Savings</p>
                    <p className="font-semibold">{formatCurrency(6366.75)}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium">Recent Activity</p>
                  {[
                    { desc: "Payroll - Acme Corp", amount: 4200, credit: true },
                    { desc: "Whole Foods Market", amount: -67.32, credit: false },
                    { desc: "Netflix Monthly", amount: -14.99, credit: false },
                  ].map((t, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <p className="text-sm">{t.desc}</p>
                      <p className={`text-sm font-medium ${t.credit ? "text-success" : ""}`}>
                        {t.credit ? "+" : ""}{formatCurrency(Math.abs(t.amount))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border bg-card shadow-lg p-3 flex items-center gap-3 animate-fade-up stagger-5">
                <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium">Transfer Complete</p>
                  <p className="text-xs text-muted-foreground">$500.00 sent successfully</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
