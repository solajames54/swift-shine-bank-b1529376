import { Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const footerSections = [
  {
    title: "SAVINGS & CHECKING",
    links: [
      { label: "Best Savings Accounts", to: "/resources/best-savings-accounts" },
      { label: "Best Checking Accounts", to: "/resources/best-checking-accounts" },
      { label: "Best CD Rates", to: "/resources/best-cd-rates" },
      { label: "Best Online Banks", to: "/resources/best-online-banks" },
    ],
  },
  {
    title: "CREDIT CARDS",
    links: [
      { label: "Best Credit Cards", to: "/resources/best-credit-cards" },
      { label: "Best Cash Back Cards", to: "/resources/best-cash-back-cards" },
      { label: "Best Travel Cards", to: "/resources/best-travel-cards" },
    ],
  },
  {
    title: "LOANS",
    links: [
      { label: "Best Personal Loans", to: "/resources/best-personal-loans" },
      { label: "Best Mortgage Lenders", to: "/resources/best-mortgage-lenders" },
      { label: "Loan Calculator", to: "/resources/loan-calculator" },
    ],
  },
  {
    title: "INVESTING",
    links: [
      { label: "Best Mutual Funds", to: "/resources/best-mutual-funds" },
      { label: "Best ETFs", to: "/resources/best-etfs" },
      { label: "Best Brokers", to: "/resources/best-brokers" },
      { label: "Investing 101", to: "/resources/investing-101" },
    ],
  },
  {
    title: "PERSONAL FINANCE",
    links: [
      { label: "Saving & Budgeting", to: "/resources/saving-and-budgeting" },
      { label: "Retirement Planning", to: "/resources/retirement-planning" },
      { label: "Taxes", to: "/resources/taxes" },
      { label: "Debt Management", to: "/resources/debt-management" },
    ],
  },
];

function ScrollToTopLink({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 pb-10 border-b border-background/10">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg gradient-primary">
                <Shield className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              VaultBank
            </Link>
            <p className="text-sm opacity-60 leading-relaxed">
              Modern banking for the digital age. Your money, your way. Trusted by over 2 million customers worldwide.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#features" className="opacity-60 hover:opacity-100 transition-opacity">Features</a>
            <a href="#security" className="opacity-60 hover:opacity-100 transition-opacity">Security</a>
            <a href="#testimonials" className="opacity-60 hover:opacity-100 transition-opacity">Testimonials</a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="font-bold text-xs tracking-wider mb-4">{section.title}</p>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <ScrollToTopLink to={link.to} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                      {link.label}
                    </ScrollToTopLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} VaultBank. All rights reserved. This is a demo project.</p>
          <div className="flex gap-4">
            <ScrollToTopLink to="/resources/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</ScrollToTopLink>
            <ScrollToTopLink to="/resources/terms-of-service" className="hover:opacity-100 transition-opacity">Terms of Service</ScrollToTopLink>
            <ScrollToTopLink to="/resources/cookie-policy" className="hover:opacity-100 transition-opacity">Cookie Policy</ScrollToTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
