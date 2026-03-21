import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate API delay
    await new Promise((r) => setTimeout(r, 800));

    const result = login(email, password);
    setLoading(false);

    if (result.success) {
      navigate("/verify-otp");
    } else {
      setError(result.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-1 gradient-primary items-center justify-center p-12">
        <div className="max-w-md text-primary-foreground">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-8">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome back to VaultBank</h2>
          <p className="opacity-80 leading-relaxed">
            Access your accounts, track spending, and manage your finances — all in one secure place.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-10 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Shield className="h-4 w-4 text-primary-foreground" />
            </div>
            VaultBank
          </Link>

          <h1 className="text-2xl font-bold mb-2">Sign in to your account</h1>
          <p className="text-muted-foreground text-sm mb-8">Enter your credentials to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input
                type="email"
                placeholder="sarah@vaultbank.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl h-11"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <Input
                  type={showPw ? "text" : "password"}
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-xl h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl bg-destructive/10 text-destructive text-sm p-3">
                {error}
              </div>
            )}

            <Button variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Continue"}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </Button>
          </form>

          <div className="mt-6 p-4 rounded-xl bg-secondary text-sm">
            <p className="font-medium mb-1">Demo credentials:</p>
            <p className="text-muted-foreground">Email: sarah@vaultbank.com</p>
            <p className="text-muted-foreground">Password: 123456</p>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            <Link to="/" className="text-primary hover:underline">← Back to home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
