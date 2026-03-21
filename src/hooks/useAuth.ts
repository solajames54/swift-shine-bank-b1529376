import { useState, useCallback } from "react";
import type { AuthState, User } from "@/types";
import { getStoredAuth, loginUser, verifyOTP, logoutUser } from "@/services/authService";

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>(getStoredAuth);
  const [pendingUser, setPendingUser] = useState<User | null>(null);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);

  const login = useCallback((email: string, password: string) => {
    const result = loginUser(email, password);
    if (result.success && result.user && result.otp) {
      setPendingUser(result.user);
      setGeneratedOtp(result.otp);
      setAuthState((s) => ({ ...s, otpPending: true }));
    }
    return result;
  }, []);

  const verify = useCallback((code: string) => {
    const result = verifyOTP(code);
    if (result.success && result.user) {
      setAuthState({ user: result.user, isAuthenticated: true, otpPending: false, otp: null, otpExpiry: null });
      setPendingUser(null);
      setGeneratedOtp(null);
    }
    return result;
  }, []);

  const logout = useCallback(() => {
    logoutUser();
    setAuthState({ user: null, isAuthenticated: false, otpPending: false, otp: null, otpExpiry: null });
    setPendingUser(null);
    setGeneratedOtp(null);
  }, []);

  return { ...authState, pendingUser, generatedOtp, login, verify, logout };
}
