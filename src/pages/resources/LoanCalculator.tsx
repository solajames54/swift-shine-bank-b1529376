import { useState } from "react";
import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Calculator, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(7.5);
  const [term, setTerm] = useState(36);

  const monthlyRate = rate / 100 / 12;
  const monthlyPayment = monthlyRate > 0
    ? (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    : amount / term;
  const totalPayment = monthlyPayment * term;
  const totalInterest = totalPayment - amount;

  return (
    <ResourceLayout title="Loan Calculator" subtitle="Calculate your monthly payment, total interest, and see how different terms affect your loan.">
      <div className="max-w-3xl mx-auto space-y-8">
        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold">Personal Loan Calculator</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Loan Amount: <span className="text-primary">${amount.toLocaleString()}</span></label>
                <input type="range" min={1000} max={100000} step={500} value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-[hsl(var(--primary))]" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>$1,000</span><span>$100,000</span></div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Interest Rate: <span className="text-primary">{rate}%</span></label>
                <input type="range" min={1} max={30} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-[hsl(var(--primary))]" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1%</span><span>30%</span></div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Loan Term: <span className="text-primary">{term} months</span></label>
                <input type="range" min={6} max={84} step={6} value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full accent-[hsl(var(--primary))]" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>6 mo</span><span>84 mo</span></div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-6 border-t">
              <div className="text-center p-4 rounded-xl bg-primary/10">
                <p className="text-xs text-muted-foreground mb-1">Monthly Payment</p>
                <p className="text-2xl font-bold text-primary">${monthlyPayment.toFixed(2)}</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted">
                <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                <p className="text-2xl font-bold">${totalInterest.toFixed(2)}</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted">
                <p className="text-xs text-muted-foreground mb-1">Total Payment</p>
                <p className="text-2xl font-bold">${totalPayment.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-bold mb-3">Tips for getting the best loan rate</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Check your credit score</strong> — a score above 740 qualifies you for the lowest rates.</li>
              <li>• <strong className="text-foreground">Compare multiple lenders</strong> — pre-qualify with at least 3 lenders to find the best deal.</li>
              <li>• <strong className="text-foreground">Choose the shortest term you can afford</strong> — shorter terms mean less total interest paid.</li>
              <li>• <strong className="text-foreground">Consider a co-signer</strong> — a creditworthy co-signer can help you secure a lower rate.</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </ResourceLayout>
  );
}
