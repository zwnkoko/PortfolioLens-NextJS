"use client";

import { useEffect, useState } from "react";
import { auth, provider } from "@/lib/firebaseClient";
import { User, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { logDevError } from "@/lib/utils";

export function useAuth(redirectPath = "/dashboard") {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

  return {
    user,
    signInWithGoogle,
  };
}
