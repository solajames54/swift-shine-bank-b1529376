import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, RotateCw } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function OTPPage() {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { verify, pendingUser, login, otpPending } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!otpPending) {
      navigate("/login");
      return;
    }
  }, [otpPending, navigate]);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setDigits(pasted.split(""));
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = digits.join("");
    if (code.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));

    const result = verify(code);
    setLoading(false);

    if (result.success) {
      toast.success("Welcome to AlliantCred Union!");
      navigate("/dashboard");
    } else {
      setError(result.error || "Verification failed");
      setDigits(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
  };

  const handleResend = () => {
    if (countdown > 0 || !pendingUser) return;
    login(pendingUser.email, pendingUser.password);
    setCountdown(60);
    setDigits(["", "", "", "", "", ""]);
    toast.info(`New OTP code resent`, { duration: 10000 });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 surface-sunken">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border bg-card p-8 shadow-xl shadow-primary/5">
          <div className="text-center mb-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary mb-4">
              <Shield className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Verify your identity</h1>
            <p className="text-muted-foreground text-sm">
              We sent a 6-digit code to your registered device.
              {pendingUser && <span className="block mt-1 font-medium text-foreground">{pendingUser.email}</span>}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-2" onPaste={handlePaste}>
              {digits.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-12 h-14 text-center text-xl font-bold rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              ))}
            </div>

            {error && (
              <div className="rounded-xl bg-destructive/10 text-destructive text-sm p-3 text-center">
                {error}
              </div>
            )}

            <Button variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Verifying..." : "Verify & Continue"}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </Button>
          </form>

          <div className="text-center mt-6">
            {countdown > 0 ? (
              <p className="text-sm text-muted-foreground">
                Resend code in <span className="font-medium text-foreground">{countdown}s</span>
              </p>
            ) : (
              <button onClick={handleResend} className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                <RotateCw className="h-3 w-3" /> Resend code
              </button>
            )}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            <Link to="/login" className="text-primary hover:underline">← Back to login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
