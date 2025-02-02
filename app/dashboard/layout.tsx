import React from "react";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  chart,
  holdings,
}: {
  chart: React.ReactNode;
  holdings: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      {chart}
      <Separator className="my-4" />
      {holdings}
    </div>
  );
}
