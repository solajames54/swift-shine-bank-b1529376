import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Cookie, Shield, BarChart3, Settings } from "lucide-react";

const cookieTypes = [
  { icon: Shield, title: "Essential Cookies", required: true, content: "These cookies are necessary for the website to function. They enable core features like secure login, account access, and transaction processing. You cannot opt out of essential cookies as they are required for service delivery." },
  { icon: BarChart3, title: "Analytics Cookies", required: false, content: "We use analytics cookies to understand how visitors interact with our website. This helps us improve our services, identify popular features, and fix issues. Data is aggregated and anonymized. We use first-party analytics — no third-party trackers." },
  { icon: Settings, title: "Preference Cookies", required: false, content: "These cookies remember your settings such as language preference, theme (dark/light mode), and dashboard layout. Without them, you'll need to re-enter preferences each visit." },
  { icon: Cookie, title: "Marketing Cookies", required: false, content: "We use limited marketing cookies to measure the effectiveness of our advertising campaigns. We do not sell data to advertisers or use invasive tracking. You can opt out of marketing cookies without affecting your banking experience." },
];

export default function CookiePolicy() {
  return (
    <ResourceLayout title="Cookie Policy" subtitle="Last updated: March 2026. How we use cookies and similar technologies.">
      <div className="max-w-3xl mx-auto space-y-6">
        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-bold mb-2">What are cookies?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use the service. AlliantCred Union uses cookies to keep you securely logged in, remember your settings, and improve our services.</p>
          </div>
        </ScrollReveal>

        {cookieTypes.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">{c.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${c.required ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {c.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.content}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-bold mb-2">Managing your cookies</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may prevent you from using AlliantCred Union's services. For questions about our cookie practices, contact privacy@vaultbank.com.</p>
          </div>
        </ScrollReveal>
      </div>
    </ResourceLayout>
  );
}
