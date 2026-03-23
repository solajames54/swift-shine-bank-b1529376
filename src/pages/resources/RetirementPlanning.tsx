import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Clock, PiggyBank, TrendingUp, Shield, Target, Calculator } from "lucide-react";

const steps = [
  { icon: Target, title: "Set your retirement goal", content: "Most financial advisors recommend aiming for 80% of your pre-retirement income annually. Use the rule of 25: multiply your desired annual retirement income by 25 to get your target savings number. For example, if you want $60,000/year, aim for $1.5 million." },
  { icon: Clock, title: "Start as early as possible", content: "Thanks to compound interest, starting 10 years earlier can nearly double your retirement savings. A 25-year-old investing $300/month at 8% returns will have ~$1M by 65. A 35-year-old needs $700/month to reach the same goal." },
  { icon: PiggyBank, title: "Max out tax-advantaged accounts", content: "In 2026, you can contribute up to $23,500 to a 401(k) and $7,000 to an IRA ($8,000 if 50+). Always contribute enough to get your employer's full match — that's an immediate 50-100% return on your money." },
  { icon: TrendingUp, title: "Invest according to your timeline", content: "With 20+ years to retirement, allocate heavily to stocks (80-90%). As you approach retirement, gradually shift to bonds and stable assets. Target-date funds automate this transition for you." },
  { icon: Shield, title: "Plan for healthcare costs", content: "The average couple retiring at 65 will need roughly $315,000 for healthcare in retirement. Consider an HSA (Health Savings Account) — it offers triple tax advantages and can be used as a supplemental retirement account." },
  { icon: Calculator, title: "Create a withdrawal strategy", content: "The 4% rule suggests withdrawing 4% of your portfolio in year one of retirement, then adjusting for inflation. This gives your money a high probability of lasting 30+ years. Consider Social Security timing — delaying until 70 increases your benefit by 24-32%." },
];

export default function RetirementPlanning() {
  return (
    <ResourceLayout title="Retirement Planning Guide" subtitle="A step-by-step roadmap to building the retirement you deserve, no matter where you're starting.">
      <div className="max-w-3xl mx-auto space-y-6">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border bg-card">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=300&fit=crop"
              alt="Retirement planning with notebook and charts"
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">Whether you're 25 or 55, it's never too early or too late to start planning for retirement. This guide breaks down the essential steps to build a secure financial future.</p>
            </div>
          </div>
        </ScrollReveal>

        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.content}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
