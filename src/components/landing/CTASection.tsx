import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to take control of your finances?
            </h2>
            <p className="text-lg text-background/60 mb-10 max-w-xl mx-auto">
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
              <Button variant="outline" size="xl" asChild className="border-background/20 text-background hover:bg-background/10">
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
