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

interface Holding {
  symbol: string;
  qty: number;
  pricePerShare: number;
}

export default function Holdings() {
  const { user } = useAuth();
  const { data, isLoading } = useHoldingData(user?.uid);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
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
          {data.holdings.map((holding: Holding) => (
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
