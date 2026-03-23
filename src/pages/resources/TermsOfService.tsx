import ResourceLayout from "@/layouts/ResourceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing or using VaultBank's services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, do not use our services. You must be at least 18 years old to open an account." },
  { title: "2. Account Registration", content: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. Notify us immediately of any unauthorized use." },
  { title: "3. Banking Services", content: "VaultBank provides digital banking services including checking and savings accounts, fund transfers, bill payments, and card management. All deposits are FDIC-insured up to $250,000 per depositor. Services are subject to applicable banking regulations." },
  { title: "4. Fees and Charges", content: "Current fee schedules are available in your account settings and on our pricing page. We will provide 30 days' notice before implementing new fees or changing existing ones. Certain premium features require a paid subscription." },
  { title: "5. Prohibited Activities", content: "You may not use our services for money laundering, fraud, terrorist financing, or any illegal activity. You may not attempt to gain unauthorized access to our systems, interfere with other users' access, or reverse-engineer our software." },
  { title: "6. Intellectual Property", content: "All content, software, and materials on VaultBank are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works without our written permission. Your account data remains your property." },
  { title: "7. Limitation of Liability", content: "VaultBank is not liable for indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the fees you've paid in the 12 months preceding the claim. This does not limit liability for losses from unauthorized transactions where we are at fault." },
  { title: "8. Termination", content: "Either party may terminate this agreement at any time. We may suspend or close your account if we suspect fraud, violation of these terms, or as required by law. Upon termination, we will return your remaining balance via ACH transfer." },
  { title: "9. Governing Law", content: "These terms are governed by the laws of the State of Delaware, USA. Any disputes will be resolved through binding arbitration under the rules of the American Arbitration Association, except for claims eligible for small claims court." },
];

export default function TermsOfService() {
  return (
    <ResourceLayout title="Terms of Service" subtitle="Last updated: March 2026. Please read these terms carefully before using VaultBank.">
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
