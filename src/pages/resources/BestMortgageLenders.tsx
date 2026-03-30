import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Landmark, Check } from "lucide-react";

const lenders = [
  { name: "AlliantCred Union Home Loans", rate: "6.25%", type: "30-Year Fixed", features: ["No lender fees", "Rate lock for 60 days", "Online application in 15 min", "First-time buyer programs"] },
  { name: "AlliantCred Union Refi", rate: "5.99%", type: "15-Year Fixed", features: ["Lower monthly payments", "Cash-out refinance available", "No appraisal fee", "Close in 21 days"] },
];

export default function BestMortgageLenders() {
  return (
    <ResourceLayout title="Best Mortgage Lenders of 2026" subtitle="Compare mortgage rates and find the right lender for your home purchase or refinance.">
      <div className="max-w-4xl mx-auto space-y-6">
        {lenders.map((l, i) => (
          <ScrollReveal key={l.name} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center">
                  <Landmark className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{l.name}</h3>
                  <p className="text-sm text-muted-foreground">{l.type} · Starting at <span className="text-primary font-semibold">{l.rate}</span></p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {l.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
