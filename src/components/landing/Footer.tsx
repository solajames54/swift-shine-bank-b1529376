import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg gradient-primary">
                <Shield className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              VaultBank
            </Link>
            <p className="text-sm opacity-60 leading-relaxed">
              Modern banking for the digital age. Your money, your way.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-4">Product</p>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a></li>
              <li><a href="#security" className="hover:opacity-100 transition-opacity">Security</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm mb-4">Company</p>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm mb-4">Legal</p>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} VaultBank. All rights reserved. This is a demo project.
        </div>
      </div>
    </footer>
  );
}
