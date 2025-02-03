"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function ChartPage() {
  return (
    <Tabs
      defaultValue="assetTrend"
      className="flex w-full flex-col items-center justify-center"
    >
      <TabsContent value="assetTrend">
        <AssetTrend />
      </TabsContent>
      <TabsContent value="pieChart">Pie Chart</TabsContent>

      <TabsList>
        <TabsTrigger value="assetTrend">Asset Trend</TabsTrigger>
        <TabsTrigger value="pieChart">Pie Chart</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

function AssetTrend() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
