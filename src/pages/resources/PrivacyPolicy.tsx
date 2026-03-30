import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

const sections = [
  { title: "Information We Collect", content: "We collect information you provide directly, such as your name, email address, phone number, and financial details when you create an account. We also automatically collect device information, IP addresses, browser type, and usage data when you interact with our services." },
  { title: "How We Use Your Information", content: "We use your information to provide, maintain, and improve our banking services; process transactions; send you important account notifications; detect and prevent fraud; comply with legal obligations; and personalize your experience." },
  { title: "Information Sharing", content: "We do not sell your personal information. We may share data with service providers who help us operate (payment processors, cloud hosting), when required by law, or with your explicit consent. All third-party partners are contractually bound to protect your data." },
  { title: "Data Security", content: "We employ industry-standard security measures including AES-256 encryption for data at rest, TLS 1.3 for data in transit, multi-factor authentication, and regular security audits. Our systems are monitored 24/7 for unauthorized access attempts." },
  { title: "Your Rights", content: "You have the right to access, correct, or delete your personal data; opt out of marketing communications; request a copy of your data in a portable format; and lodge a complaint with a supervisory authority. To exercise these rights, contact privacy@alliantcu.com." },
  { title: "Cookies and Tracking", content: "We use essential cookies for authentication and security, analytics cookies to understand how you use our services, and preference cookies to remember your settings. You can manage cookie preferences through your browser settings." },
  { title: "Data Retention", content: "We retain your account data for the duration of your account relationship plus 7 years as required by financial regulations. Transaction records are retained for 10 years. You may request earlier deletion of non-regulatory data." },
  { title: "Changes to This Policy", content: "We may update this policy periodically. We will notify you of material changes via email or in-app notification at least 30 days before they take effect. Continued use after changes constitutes acceptance." },
];

export default function PrivacyPolicy() {
  return (
    <ResourceLayout title="Privacy Policy" subtitle="Last updated: March 2026. Your privacy matters to us — here's how we protect it.">
      <div className="max-w-3xl mx-auto space-y-6">
        {sections.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 50}>
            <div className="rounded-2xl border bg-card p-6">
              <h2 className="font-bold text-lg mb-2">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ResourceLayout>
  );
}
