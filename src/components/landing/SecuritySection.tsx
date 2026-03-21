import { ScrollReveal } from "@/components/ScrollReveal";
import { Lock, Eye, KeyRound, Fingerprint } from "lucide-react";

const items = [
  { icon: Lock, title: "256-bit Encryption", desc: "All data is encrypted at rest and in transit using AES-256 encryption." },
  { icon: Eye, title: "Fraud Detection", desc: "Machine learning monitors transactions 24/7 for suspicious activity." },
  { icon: KeyRound, title: "OTP Authentication", desc: "Every login is verified with a time-based one-time password." },
  { icon: Fingerprint, title: "Biometric Access", desc: "Use fingerprint or face recognition for quick, secure access." },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Security</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Your money is safe with us
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We use the same security infrastructure as the world's largest banks, 
                combined with modern authentication to keep your account protected.
              </p>
              <div className="space-y-4">
                {items.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 100} direction="left">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative rounded-2xl gradient-primary p-8 text-primary-foreground">
              <div className="space-y-6">
                <Shield className="h-12 w-12 opacity-90" />
                <h3 className="text-2xl font-bold">Bank-grade protection for every account</h3>
                <p className="opacity-80 leading-relaxed">
                  Your deposits are insured up to $250,000 through our banking partners. 
                  We never share your data with third parties.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                  <div>
                    <p className="text-2xl font-bold">0</p>
                    <p className="text-xs opacity-70">Fraud incidents</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-xs opacity-70">Monitoring</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">SOC2</p>
                    <p className="text-xs opacity-70">Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    </svg>
  );
}
