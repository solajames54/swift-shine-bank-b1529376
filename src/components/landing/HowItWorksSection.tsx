import { ScrollReveal } from "@/components/ScrollReveal";
import { UserPlus, CreditCard, TrendingUp, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up in minutes with just your email. No paperwork, no branch visits required.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Link Your Cards",
    description: "Connect your existing accounts or get a free virtual debit card instantly.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Track & Grow",
    description: "Monitor spending, set budgets, and watch your savings grow with smart analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Bank with Confidence",
    description: "Every transaction is protected with bank-grade encryption and real-time fraud alerts.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&q=80",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get started in 4 simple steps</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Opening an account takes less time than making a cup of coffee.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 100}>
              <div className="relative text-center group">
                <div className="rounded-xl overflow-hidden mb-4 h-36">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="text-5xl font-black text-primary/10 mb-2">{s.step}</div>
                <div className="h-14 w-14 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
