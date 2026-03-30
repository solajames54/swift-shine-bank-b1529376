import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: "2M+", label: "Active Users", description: "Trust VaultBank daily" },
  { value: "$4.2B", label: "Processed", description: "In secure transactions" },
  { value: "150+", label: "Countries", description: "Worldwide coverage" },
  { value: "99.99%", label: "Uptime", description: "Guaranteed availability" },
];

export function StatsSection() {
  return (
    <section className="py-20 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                <p className="text-lg font-semibold text-primary-foreground/90">{stat.label}</p>
                <p className="text-sm text-primary-foreground/60">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
