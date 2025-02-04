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
import { logDevError } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
      logDevError(error);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      window.location.href = "/"; // reload to homepage to clear states
    } catch (error) {
      logDevError(error);
    }
  };
  return {
    user,
    authenticating,
    signInWithGoogle,
    signOut,
  };
}
