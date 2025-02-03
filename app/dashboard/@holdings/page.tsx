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

export default function Holdings() {
  const holdings = [
    {
      symbol: "AAPL",
      qty: 2,
      currentPrice: 120,
      avgCost: 100,
      todayPL: 10,
      PL: 20,
    },
    {
      symbol: "QQQ",
      qty: 3,
      currentPrice: 400,
      avgCost: 100,
      todayPL: 10,
      PL: 800,
    },
    {
      symbol: "MU",
      qty: 3,
      currentPrice: 400,
      avgCost: 100,
      todayPL: 10,
      PL: 800,
    },
    {
      symbol: "NVDA",
      qty: 3,
      currentPrice: 400,
      avgCost: 100,
      todayPL: 10,
      PL: 800,
    },
  ];
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
          {holdings.map((holding) => (
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
                  <p className="md:hidden">
                    {holding.qty} | {holding.currentPrice}
                  </p>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {holding.qty}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {holding.currentPrice}
              </TableCell>
              <TableCell>{holding.avgCost}</TableCell>
              <TableCell>{holding.todayPL}</TableCell>
              <TableCell className="text-right">{holding.PL}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
