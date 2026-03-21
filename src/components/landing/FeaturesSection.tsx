import { ScrollReveal } from "@/components/ScrollReveal";
import { Zap, Receipt, BarChart3, ShieldCheck, Globe, Smartphone } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Transfers", desc: "Send money anywhere in seconds with zero fees on domestic transfers." },
  { icon: Receipt, title: "Bill Payments", desc: "Set up recurring payments and never miss a due date again." },
  { icon: BarChart3, title: "Smart Analytics", desc: "AI-powered insights break down spending patterns and suggest savings." },
  { icon: ShieldCheck, title: "Secure Transactions", desc: "Every transaction is protected with bank-grade encryption and OTP." },
  { icon: Globe, title: "Global Access", desc: "Use your account in 150+ countries with real-time currency conversion." },
  { icon: Smartphone, title: "Mobile First", desc: "Manage everything from your phone with our award-winning app." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 surface-sunken">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything you need to manage money
            </h2>
            <p className="text-muted-foreground text-lg">
              Built for people who want a smarter way to handle their finances.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="group rounded-2xl border bg-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
