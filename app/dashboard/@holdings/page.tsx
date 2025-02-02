import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddTransaction } from "@/components/dashboard/add-transaction";

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
      symbol: "MU",
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
            <TableHead>Avg Cost</TableHead>
            <TableHead>Today P/L</TableHead>
            <TableHead>P/L</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holdings.map((holding) => (
            <TableRow key={holding.symbol}>
              <TableCell className="flex flex-col">
                <p>{holding.symbol}</p>
                <p>
                  {holding.qty} | {holding.currentPrice}
                </p>
              </TableCell>
              <TableCell>{holding.avgCost}</TableCell>
              <TableCell>{holding.todayPL}</TableCell>
              <TableCell>{holding.PL}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
