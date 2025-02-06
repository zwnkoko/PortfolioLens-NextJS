"use client";

import { useEffect, useState } from "react";
import { auth, provider } from "@/lib/firebaseClient";
import {
  User,
  signInWithPopup,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { logDev } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { UserInfo } from "firebase/auth";

// Dummy user object for demo mode
const DEMO_USER: User = {
  uid: "demo-user",
  email: "demo@portfoliolens.com",
  emailVerified: true,
  isAnonymous: false,
  displayName: "Demo User",
  photoURL: null,
  phoneNumber: null,
  providerData: [] as UserInfo[],
  metadata: {
    creationTime: new Date().toISOString(),
    lastSignInTime: new Date().toISOString(),
  },
  providerId: "demo",
  refreshToken: "demo-refresh-token",
  tenantId: null,
  delete: async () => {},
  getIdToken: async () => "demo-token",
  getIdTokenResult: async () => ({
    token: "demo-token",
    signInProvider: "demo",
    claims: {},
    authTime: new Date().toISOString(),
    issuedAtTime: new Date().toISOString(),
    expirationTime: new Date().toISOString(),
  }),
  reload: async () => {},
  toJSON: () => ({ uid: "demo-user" }),
} as User;

export function useAuth() {
  const pathName = usePathname();
  const redirectPath = pathName === "/login" ? "/dashboard" : pathName;
  const [user, setUser] = useState<User | null>(null);
  const [authenticating, setAuthenticating] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticating(false);
      setUser(user);
      if (user) {
        router.push(redirectPath);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      logDev(error);
    }
  };

  const signInWithDemo = () => {
    setUser(DEMO_USER);
    router.push(redirectPath);
  };
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      window.location.href = "/"; // reload to homepage to clear states
    } catch (error) {
      logDev(error);
    }
  };
  return {
    user,
    authenticating,
    signInWithGoogle,
    signInWithDemo,
    signOut,
  };
}
