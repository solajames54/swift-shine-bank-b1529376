import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { type ReactNode } from "react";

interface ResourceLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function ResourceLayout({ title, subtitle, children }: ResourceLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="hero-section pt-32 pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
            <p className="text-lg text-white/60 max-w-2xl">{subtitle}</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
      <Footer />
    </div>
  );
}
