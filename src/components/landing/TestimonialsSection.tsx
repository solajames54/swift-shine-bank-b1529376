import { ScrollReveal } from "@/components/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Elena Vasquez",
    role: "Freelance Designer",
    text: "VaultBank completely changed how I manage my freelance income. The analytics are incredible — I finally understand where my money goes.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "David Park",
    role: "Small Business Owner",
    text: "Switching from my old bank was the best decision. Instant transfers and zero fees have saved me hundreds every month.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Amara Okafor",
    role: "Software Engineer",
    text: "The security features give me peace of mind. OTP on every login, instant fraud alerts — it feels like my money is actually protected.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 surface-sunken">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Loved by thousands of customers
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="rounded-2xl border bg-card p-6 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
