"use client";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const { signInWithGoogle, signInWithDemo } = useAuth();

  return (
    <div className="flex h-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {" "}
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Welcome to Portfolio Lens{" "}
            </h4>
          </CardTitle>
          <CardDescription>
            Sign in to access & manage your portfolio
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={signInWithGoogle} className="w-full">
            <Image
              src="/logo/google.svg"
              alt="Google Logo"
              width={24}
              height={24}
            />
            Sign in with Google
          </Button>
          <Button onClick={signInWithDemo} className="w-full">
            Try Demo Account ✨
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
