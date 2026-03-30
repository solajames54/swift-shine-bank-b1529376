import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FileText, Calculator, Calendar, AlertTriangle, CheckCircle, DollarSign } from "lucide-react";

const topics = [
  { icon: Calendar, title: "Key tax deadlines for 2026", content: "April 15: Individual tax return deadline. June 15: Deadline for US citizens abroad. October 15: Extension deadline. January 31: Employers must send W-2s. Make sure to file or request an extension — late filing penalties are 5% per month, up to 25% of your unpaid taxes." },
  { icon: Calculator, title: "Tax brackets explained", content: "The US uses a progressive tax system — you only pay the higher rate on income above each threshold. For 2026, the brackets range from 10% (up to $11,600) to 37% (over $609,350). Understanding this prevents the common myth that earning more can result in taking home less." },
  { icon: DollarSign, title: "Deductions that save you money", content: "The standard deduction for 2026 is $14,600 (single) or $29,200 (married filing jointly). Itemize if your deductions exceed this — common itemized deductions include mortgage interest, state/local taxes (up to $10K), charitable donations, and medical expenses exceeding 7.5% of AGI." },
  { icon: CheckCircle, title: "Tax credits vs. deductions", content: "Tax credits directly reduce your tax bill dollar-for-dollar, making them more valuable than deductions. Key credits include the Child Tax Credit ($2,000/child), Earned Income Tax Credit (up to $7,430), and education credits like the American Opportunity Credit ($2,500)." },
  { icon: FileText, title: "Self-employment tax tips", content: "Self-employed individuals pay both employer and employee portions of Social Security and Medicare (15.3%). Reduce your tax burden by deducting home office expenses, health insurance premiums, retirement contributions (SEP IRA up to $69,000), and business-related travel and equipment." },
  { icon: AlertTriangle, title: "Common tax mistakes to avoid", content: "Missing the filing deadline, forgetting to report all income (including freelance and crypto), not contributing to retirement accounts, overlooking available credits, and failing to keep receipts for deductions. Consider using tax software or a CPA if your situation is complex." },
];

export default function Taxes() {
  return (
    <ResourceLayout title="Tax Guide for 2026" subtitle="Everything you need to know about filing taxes, maximizing deductions, and keeping more of your money.">
      <div className="max-w-3xl mx-auto space-y-6">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border bg-card">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=300&fit=crop"
              alt="Tax documents and calculator"
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">Taxes don't have to be intimidating. This guide covers the essential concepts, deadlines, and strategies to help you file confidently and keep more of your hard-earned money.</p>
            </div>
          </div>
        </ScrollReveal>

        {topics.map((topic, i) => (
          <ScrollReveal key={topic.title} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <topic.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic.content}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
