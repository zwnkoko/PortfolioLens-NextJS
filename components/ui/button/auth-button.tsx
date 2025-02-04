"use client";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const router = useRouter();
  const { user, authenticating, signOut } = useAuth();

  if (authenticating)
    return (
      <Button variant="secondary" className="w-full md:w-24" disabled>
        Loading...
      </Button>
    );

  return user ? (
    <Button variant="secondary" className="w-full md:w-24" onClick={signOut}>
      Sign Out
    </Button>
  ) : (
    <Button
      variant="secondary"
      className="w-full md:w-24"
      onClick={() => router.push("/login")}
    >
      Sign In
    </Button>
  );
}
