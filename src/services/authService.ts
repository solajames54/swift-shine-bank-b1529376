import usersData from "@/data/users.json";
import type { User, AuthState } from "@/types";

const AUTH_KEY = "vault_auth";
const OTP_POOL: string[] = ["123456", "234567", "345678", "456789", "567890"];

export function getStoredAuth(): AuthState {
  try {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.isAuthenticated && parsed.user) {
        return { ...parsed, otpPending: false, otp: null, otpExpiry: null };
      }
    }
  } catch {}
  return { user: null, isAuthenticated: false, otpPending: false, otp: null, otpExpiry: null };
}

export function loginUser(
  email: string,
  password: string
): { success: boolean; user?: User; error?: string } {
  const user = (usersData as User[]).find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) return { success: false, error: "Invalid email or password" };

  return { success: true, user };
}

export function verifyOTP(
  code: string,
  userId: number
): { success: boolean; user?: User; error?: string } {
  if (!OTP_POOL.includes(code)) {
    return { success: false, error: "Invalid OTP code" };
  }

  const user = (usersData as User[]).find((u) => u.id === userId);
  if (!user) return { success: false, error: "User not found" };

  const authState: AuthState = {
    user,
    isAuthenticated: true,
    otpPending: false,
    otp: null,
    otpExpiry: null,
  };
  localStorage.setItem(AUTH_KEY, JSON.stringify(authState));

  return { success: true, user };
}

export function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
}
