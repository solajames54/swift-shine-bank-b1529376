import usersData from "@/data/users.json";
import type { User, AuthState } from "@/types";
import { generateOTP } from "@/utils/format";

const AUTH_KEY = "vault_auth";
const OTP_KEY = "vault_otp";

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

export function loginUser(email: string, password: string): { success: boolean; user?: User; otp?: string; error?: string } {
  const user = (usersData as User[]).find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) return { success: false, error: "Invalid email or password" };

  const otp = generateOTP();
  const otpData = { otp, expiry: Date.now() + 60000, userId: user.id };
  localStorage.setItem(OTP_KEY, JSON.stringify(otpData));

  return { success: true, user, otp };
}

export function verifyOTP(code: string): { success: boolean; user?: User; error?: string } {
  try {
    const stored = localStorage.getItem(OTP_KEY);
    if (!stored) return { success: false, error: "No OTP session found" };

    const otpData = JSON.parse(stored);
    if (Date.now() > otpData.expiry) {
      localStorage.removeItem(OTP_KEY);
      return { success: false, error: "OTP has expired" };
    }
    if (otpData.otp !== code) {
      return { success: false, error: "Invalid OTP code" };
    }

    const user = (usersData as User[]).find((u) => u.id === otpData.userId);
    if (!user) return { success: false, error: "User not found" };

    localStorage.removeItem(OTP_KEY);
    const authState: AuthState = { user, isAuthenticated: true, otpPending: false, otp: null, otpExpiry: null };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authState));

    return { success: true, user };
  } catch {
    return { success: false, error: "Verification failed" };
  }
}

export function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(OTP_KEY);
}
