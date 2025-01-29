import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
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
    <>
      <Button>Add Stock</Button>
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
    </>
  );
}
