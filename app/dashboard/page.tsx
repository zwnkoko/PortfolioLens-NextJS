"use client";

import { useHoldingData } from "@/hooks/dashboard/use-holdings";
import { useAuth } from "@/hooks/use-auth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddTransaction } from "@/components/dashboard/add-transaction";
import Image from "next/image";
import { Button } from "@/components/ui/button/button";
import Link from "next/link";
import { logDev } from "@/lib/utils";

interface Holding {
  symbol: string;
  qty: number;
  pricePerShare: number;
}

export default function Holdings() {
  const { user, authenticating } = useAuth();
  const { data, isLoading, error } = useHoldingData(user?.uid);
  logDev(
    "user " +
      user +
      " authenticating " +
      authenticating +
      " data " +
      data +
      " isLoading " +
      isLoading,
  );
  if (isLoading || authenticating) {
    return (
      <div className="flex h-full items-center justify-center">
        {/* Add  loading spinner/state here */}
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>Something went wrong! Please try again later.</p>
      </div>
    );
  }
  if (!user && !authenticating && !data) {
    return (
      <div className="flex h-full flex-col items-center justify-center space-y-6 px-4 text-center">
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight sm:text-2xl">
          Hey there, looks like you haven&apos;t logged in yet! 👋
        </h3>
        <p className="max-w-md text-sm leading-7 sm:text-base">
          No worries—jump into our{" "}
          <span className="inline-block animate-pulse rounded-md border border-primary/20 bg-primary/10 px-2 py-1 font-bold text-primary shadow-sm shadow-primary/20">
            Demo Mode
          </span>{" "}
          to explore all the cool features without any commitment! 🚀
        </p>
        <Button>
          <Link href={"/login"}>Jump Right In ✨</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end">
        <AddTransaction />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead className="hidden md:table-cell">Qty</TableHead>
            <TableHead className="hidden md:table-cell">Price/Share</TableHead>
            <TableHead>Avg Cost</TableHead>
            <TableHead>P/L</TableHead>
            <TableHead className="text-right">Portfolio %</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.holdings.map((holding: Holding) => (
              <TableRow key={holding.symbol}>
                <TableCell className="flex space-x-2">
                  <Image
                    src={`/api/image?ticker=${holding.symbol}`}
                    alt={holding.symbol}
                    width={40}
                    height={40}
                    className="rounded-full bg-white"
                  />

                  <div className="flex flex-col justify-center">
                    <p>{holding.symbol}</p>
                    <p className="md:hidden">{holding.qty} | $400</p>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {holding.qty}
                </TableCell>
                <TableCell className="hidden md:table-cell">$5000</TableCell>
                <TableCell>{holding.pricePerShare}</TableCell>
                <TableCell>+99</TableCell>
                <TableCell className="text-right">-44</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
