"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchUserHoldings } from "@/services/dashboard-service";

export function useHoldingData(userId: string | undefined) {
  return useQuery({
    queryKey: ["holdings", userId],
    queryFn: () => {
      if (userId) {
        return fetchUserHoldings(userId);
      }
    },
    enabled: Boolean(userId),
  });
}
