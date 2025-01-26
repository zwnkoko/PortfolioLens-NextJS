import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center size-full space-y-8 text-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Portfolio Lens
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-sm">
        A minimalistic portfolio tracking app. Monitor your investments, analyze
        performance, and make informed decisions.
      </p>

      <div className="flex flex-row gap-4">
        <Link href="/dashboard">
          <Button>
            Get Started
            <ArrowRight />
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="outline">Learn More</Button>
        </Link>
      </div>
    </div>
  );
}
