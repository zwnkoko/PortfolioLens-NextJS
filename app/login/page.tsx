"use client";

import { useEffect, useState } from "react";
import { auth, provider } from "@/lib/firebaseClient";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in");
        router.push("/dashboard");
      } else {
        console.log("User is signed out");
      }
    });

    console.log("executing");
    return () => unsubscribe();
  }, []);
  const handleGoogleSignIn = async () => {
    try {
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle> Welcome to Portfolio Lens </CardTitle>
          <CardDescription>
            Sign in to access & manage your portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGoogleSignIn} className="w-full">
            <Image
              src="/logo/google.svg"
              alt="Google Logo"
              width={24}
              height={24}
            />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
