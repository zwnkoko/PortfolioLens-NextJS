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
  const { signInWithGoogle } = useAuth();

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
          <Button onClick={signInWithGoogle} className="w-full">
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
