"use client";

import { useState } from "react";
import { EarningsStats } from "./earnings-stats";
import { EarningsChart } from "./earnings-chart";
import { EarningsTrendChart } from "./earnings-trend-chart";
import { RecentTransactions } from "./recent-transactions";
import { ChevronDown, Calendar } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function EarningsOverview() {
  const [dateRange, setDateRange] = useState("This Week");

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Overview
        </h1>

        <div className="relative group">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 bg-white border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
              >
                <Calendar className="h-4 w-4 text-slate-500" />
                {dateRange}
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuItem onClick={() => setDateRange("This Week")}>
                This Week
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange("Last Week")}>
                Last Week
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange("Last Month")}>
                Last Month
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange("Custom Range")}>
                Custom Range...
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <EarningsStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <EarningsChart />
        <EarningsTrendChart />
      </div>

      <RecentTransactions />
    </div>
  );
}
