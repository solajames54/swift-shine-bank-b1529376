import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, ArrowDown, TrendingUp, CreditCard, Shield } from "lucide-react";
import { formatCurrency } from "@/utils/format";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-section">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Trusted by 2M+ customers worldwide
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Your trusted{" "}
              <span className="gradient-text">banking</span>
              <br />
              partner
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
              We deliver instant transfers, smart analytics, and bank-grade 
              security to make the most impact on your finances.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/login">
                  Open Free Account
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats strip */}
        <ScrollReveal delay={320}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
            {[
              { value: "$4.2B+", label: "Transactions processed" },
              { value: "99.99%", label: "Uptime guarantee" },
              { value: "150+", label: "Countries supported" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal delay={500}>
          <div className="flex justify-center pb-8">
            <a href="#features" className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </ScrollReveal>

        {/* Value propositions bar */}
        <ScrollReveal delay={600}>
          <div className="border-t border-white/10 pt-6 pb-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-xs md:text-sm font-bold tracking-wider text-white/60 uppercase">
              <span>/ Instant Transfers</span>
              <span>/ Smart Analytics</span>
              <span>/ Bank-Grade Security</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
