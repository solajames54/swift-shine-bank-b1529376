import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
          alt="Financial planning workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to take control of your finances?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Join over 2 million people who trust VaultBank for smarter, faster, 
              and more secure banking. Open your free account today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/login">
                  Open Free Account
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
