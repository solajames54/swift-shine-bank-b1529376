import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import OTPPage from "./pages/auth/OTPPage";
import DashboardLayout from "./layouts/DashboardLayout";
import OverviewPage from "./pages/dashboard/OverviewPage";
import AccountsPage from "./pages/dashboard/AccountsPage";
import TransactionsPage from "./pages/dashboard/TransactionsPage";
import TransferPage from "./pages/dashboard/TransferPage";
import CardsPage from "./pages/dashboard/CardsPage";
import AnalyticsPage from "./pages/dashboard/AnalyticsPage";
import NotificationsPage from "./pages/dashboard/NotificationsPage";
import SettingsPage from "./pages/dashboard/SettingsPage";

// Resource pages
import BestSavingsAccounts from "./pages/resources/BestSavingsAccounts";
import BestCheckingAccounts from "./pages/resources/BestCheckingAccounts";
import BestCDRates from "./pages/resources/BestCDRates";
import BestCreditCards from "./pages/resources/BestCreditCards";
import BestPersonalLoans from "./pages/resources/BestPersonalLoans";
import BestMortgageLenders from "./pages/resources/BestMortgageLenders";
import BestMutualFunds from "./pages/resources/BestMutualFunds";
import BestETFs from "./pages/resources/BestETFs";
import Investing101 from "./pages/resources/Investing101";
import SavingAndBudgeting from "./pages/resources/SavingAndBudgeting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verify-otp" element={<OTPPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route index element={<OverviewPage />} />
              <Route path="accounts" element={<AccountsPage />} />
              <Route path="transactions" element={<TransactionsPage />} />
              <Route path="transfer" element={<TransferPage />} />
              <Route path="cards" element={<CardsPage />} />
              <Route path="analytics" element={<AnalyticsPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            {/* Resource pages */}
            <Route path="/resources/best-savings-accounts" element={<BestSavingsAccounts />} />
            <Route path="/resources/best-checking-accounts" element={<BestCheckingAccounts />} />
            <Route path="/resources/best-cd-rates" element={<BestCDRates />} />
            <Route path="/resources/best-online-banks" element={<BestSavingsAccounts />} />
            <Route path="/resources/best-credit-cards" element={<BestCreditCards />} />
            <Route path="/resources/best-cash-back-cards" element={<BestCreditCards />} />
            <Route path="/resources/best-travel-cards" element={<BestCreditCards />} />
            <Route path="/resources/best-personal-loans" element={<BestPersonalLoans />} />
            <Route path="/resources/best-mortgage-lenders" element={<BestMortgageLenders />} />
            <Route path="/resources/loan-calculator" element={<BestPersonalLoans />} />
            <Route path="/resources/best-mutual-funds" element={<BestMutualFunds />} />
            <Route path="/resources/best-etfs" element={<BestETFs />} />
            <Route path="/resources/best-brokers" element={<BestETFs />} />
            <Route path="/resources/investing-101" element={<Investing101 />} />
            <Route path="/resources/saving-and-budgeting" element={<SavingAndBudgeting />} />
            <Route path="/resources/retirement-planning" element={<SavingAndBudgeting />} />
            <Route path="/resources/taxes" element={<SavingAndBudgeting />} />
            <Route path="/resources/debt-management" element={<SavingAndBudgeting />} />
            <Route path="/resources/privacy-policy" element={<Investing101 />} />
            <Route path="/resources/terms-of-service" element={<Investing101 />} />
            <Route path="/resources/cookie-policy" element={<Investing101 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
