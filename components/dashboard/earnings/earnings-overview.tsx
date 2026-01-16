"use client"

import { EarningsStats } from "./earnings-stats"
import { EarningsChart } from "./earnings-chart"
import { ChevronDown } from "lucide-react"

export function EarningsOverview() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Overview</h1>
        
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
            <span>This Week</span>
            <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </button>
        </div>
      </div>

      <EarningsStats />
      <EarningsChart />
    </div>
  )
}
