import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ChartPage() {
  return (
    <Tabs
      defaultValue="assetTrend"
      className="flex w-full flex-col items-center justify-center"
    >
      <TabsContent value="assetTrend">Asset Trend</TabsContent>
      <TabsContent value="pieChart">Pie Chart</TabsContent>

      <TabsList>
        <TabsTrigger value="assetTrend">Asset Trend</TabsTrigger>
        <TabsTrigger value="pieChart">Pie Chart</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
