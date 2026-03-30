import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Send, CheckCircle, X } from "lucide-react";
import { toast } from "sonner";

export default function TransferPage() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setError(true);
    toast.error(`Your account has been disabled from sending money, please contact suppport for help`);
    setTimeout(() => {
      setError(false);
      setRecipient("");
      setAmount("");
      setDescription("");
    }, 5000);
  };

  return (
    <div className="space-y-6 max-w-lg">
      <ScrollReveal>
        <h1 className="text-2xl font-bold">Transfer Money</h1>
        <p className="text-muted-foreground text-sm">Send money to anyone, instantly</p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="rounded-2xl border bg-card p-6">
          {error ? (
            <div className="text-center py-8 animate-fade-up">
              <X className="h-16 w-16 text-red mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Transfer failed!</h2>
              <p className="text-muted-foreground text-sm">Your account has been disabled from sending money, please contact suppport for help.</p>
            </div>
          ) : (
            <form onSubmit={handleTransfer} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Recipient</label>
                <Input placeholder="Account number or email" value={recipient} onChange={(e) => setRecipient(e.target.value)} required className="rounded-xl h-11" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input type="number" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} required min="0.01" step="0.01" className="rounded-xl h-11 pl-7" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Description (optional)</label>
                <Input placeholder="What's this for?" value={description} onChange={(e) => setDescription(e.target.value)} className="rounded-xl h-11" />
              </div>
              <Button variant="hero" size="lg" className="w-full mt-2" disabled={loading}>
                {loading ? "Processing..." : "Proceed"}
                {!loading && <Send className="h-4 w-4" />}
              </Button>
            </form>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
