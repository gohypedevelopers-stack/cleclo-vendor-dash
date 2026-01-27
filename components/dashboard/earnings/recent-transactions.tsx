"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const transactions = [
  {
    id: "ORD-8291",
    customer: "Alice Freeman",
    service: "Wash & Fold",
    date: "Oct 24, 2024",
    amount: "₹1,240.50",
    status: "Completed",
    type: "Order Payment",
  },
  {
    id: "PAY-8831",
    customer: "Platform Payout",
    service: "Weekly Settlement",
    date: "Oct 23, 2024",
    amount: "₹2,450.00",
    status: "Processed",
    type: "Payout",
  },
  {
    id: "ORD-8290",
    customer: "Mark Wilson",
    service: "Dry Clean",
    date: "Oct 22, 2024",
    amount: "₹890.00",
    status: "Completed",
    type: "Order Payment",
  },
  {
    id: "ORD-8288",
    customer: "Sarah Jenkins",
    service: "Ironing",
    date: "Oct 21, 2024",
    amount: "₹450.00",
    status: "Completed",
    type: "Order Payment",
  },
  {
    id: "ORD-8285",
    customer: "James Doe",
    service: "Premium Wash",
    date: "Oct 20, 2024",
    amount: "₹1,100.00",
    status: "Pending",
    type: "Order Payment",
  },
];

export function RecentTransactions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Transactions
          </h2>
          <p className="text-sm text-slate-500">
            Real-time update of your earnings and payouts
          </p>
        </div>
        <Button variant="outline" className="gap-2 text-slate-600">
          <Download className="h-4 w-4" /> Download Statement
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
            <TableHead className="font-semibold text-slate-600">
              Transaction ID
            </TableHead>
            <TableHead className="font-semibold text-slate-600">
              Customer / Type
            </TableHead>
            <TableHead className="font-semibold text-slate-600">
              Service
            </TableHead>
            <TableHead className="font-semibold text-slate-600">Date</TableHead>
            <TableHead className="font-semibold text-slate-600">
              Status
            </TableHead>
            <TableHead className="text-right font-semibold text-slate-600">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((txn) => (
            <TableRow key={txn.id} className="hover:bg-slate-50">
              <TableCell className="font-medium text-slate-900">
                {txn.id}
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-slate-900">
                    {txn.customer}
                  </span>
                  <span className="text-xs text-slate-500">{txn.type}</span>
                </div>
              </TableCell>
              <TableCell className="text-slate-600">{txn.service}</TableCell>
              <TableCell className="text-slate-600">{txn.date}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={
                    txn.status === "Completed" || txn.status === "Processed"
                      ? "bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
                      : "bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200"
                  }
                >
                  {txn.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-bold text-slate-900">
                {txn.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
