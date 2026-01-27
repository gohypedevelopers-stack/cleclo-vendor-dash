"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", amount: 120, trend: 100 },
  { day: "Tue", amount: 180, trend: 160 },
  { day: "Wed", amount: 90, trend: 110 },
  { day: "Thu", amount: 200, trend: 190 },
  { day: "Fri", amount: 250, trend: 230 },
  { day: "Sat", amount: 135, active: true, trend: 150 },
  { day: "Sun", amount: 25, trend: 40 },
];

export function EarningsTrendChart() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100 transition-all hover:shadow-md h-[400px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Performance Trend
          </h3>
          <p className="text-sm text-slate-500 font-medium">
            Growth trajectory over the week
          </p>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#64748b" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#64748b" }}
              tickFormatter={(value) => `₹${value}`}
            />
            <Tooltip
              cursor={{
                stroke: "#3E8940",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg bg-slate-900 px-3 py-2 shadow-xl text-white font-bold text-sm border border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3E8940]"></span>
                        <span>Trend: ₹{payload[0].value}</span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="trend"
              stroke="#3E8940"
              strokeWidth={4}
              dot={{ r: 4, fill: "#fff", stroke: "#3E8940", strokeWidth: 2 }}
              activeDot={{
                r: 7,
                fill: "#3E8940",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
