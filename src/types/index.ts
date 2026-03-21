export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  accountNumber: string;
  balance: number;
  avatar?: string;
  phone: string;
  joinDate: string;
}

export interface Account {
  id: number;
  userId: number;
  type: "Checking" | "Savings";
  accountNumber: string;
  balance: number;
  currency: string;
}

export interface Transaction {
  id: number;
  userId: number;
  type: "debit" | "credit";
  amount: number;
  category: string;
  description: string;
  date: string;
  status: "completed" | "pending" | "failed";
  recipient?: string;
}

export interface Card {
  id: number;
  userId: number;
  type: "Virtual Debit" | "Physical Debit" | "Credit";
  cardNumber: string;
  last4: string;
  expiry: string;
  cvv: string;
  frozen: boolean;
  limit: number;
  spent: number;
}

export interface Notification {
  id: number;
  userId: number;
  type: "transaction" | "security" | "info";
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  otpPending: boolean;
  otp: string | null;
  otpExpiry: number | null;
}
