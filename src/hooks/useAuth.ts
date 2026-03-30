import { useState, useCallback } from "react";
import type { AuthState, User } from "@/types";
import { getStoredAuth, loginUser, verifyOTP, logoutUser } from "@/services/authService";

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>(getStoredAuth);
  const [pendingUser, setPendingUser] = useState<User | null>(null);

  const login = useCallback((email: string, password: string) => {
    const result = loginUser(email, password);
    if (result.success && result.user) {
      setPendingUser(result.user);
      setAuthState((s) => ({ ...s, otpPending: true }));
    }
    return result;
  }, []);

  const verify = useCallback((code: string) => {
    if (!pendingUser) return { success: false, error: "No pending session" };

    const result = verifyOTP(code, pendingUser.id);
    if (result.success && result.user) {
      setAuthState({ user: result.user, isAuthenticated: true, otpPending: false, otp: null, otpExpiry: null });
      setPendingUser(null);
    }
    return result;
  }, [pendingUser]);

  const logout = useCallback(() => {
    logoutUser();
    setAuthState({ user: null, isAuthenticated: false, otpPending: false, otp: null, otpExpiry: null });
    setPendingUser(null);
  }, []);

  return { ...authState, pendingUser, login, verify, logout };
}