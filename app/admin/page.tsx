"use client";

import {
  Users,
  ClipboardList,
  Store,
  Wallet,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

// Mock data
const stats = [
  {
    title: "Total Orders",
    value: "1,284",
    change: "+12%",
    trend: "up",
    icon: ClipboardList,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Users",
    value: "8,942",
    change: "+5.2%",
    trend: "up",
    icon: Users,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Active Vendors",
    value: "124",
    change: "+3",
    trend: "up",
    icon: Store,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Revenue",
    value: "₹4,82,500",
    change: "+18%",
    trend: "up",
    icon: Wallet,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const recentOrders = [
  {
    id: "ORD-8291",
    customer: "Alice Freeman",
    vendor: "Clean Express",
    status: "Processing",
    amount: "₹450",
    time: "5 min ago",
  },
  {
    id: "ORD-8292",
    customer: "Mark Wilson",
    vendor: "Sparkle Wash",
    status: "Pending",
    amount: "₹280",
    time: "12 min ago",
  },
  {
    id: "ORD-8293",
    customer: "Sarah Jenkins",
    vendor: "Fresh Laundry",
    status: "Delivered",
    amount: "₹620",
    time: "1 hour ago",
  },
  {
    id: "ORD-8294",
    customer: "James Doe",
    vendor: "Quick Clean",
    status: "Issue Reported",
    amount: "₹380",
    time: "2 hours ago",
  },
];

const pendingVendors = [
  { name: "Fresh Fold Services", location: "Mumbai", applied: "2 days ago" },
  { name: "Urban Laundry Co", location: "Delhi", applied: "3 days ago" },
];

const issueAlerts = [
  {
    orderId: "ORD-8294",
    type: "Customer No-Show",
    vendor: "Quick Clean",
    time: "2 hours ago",
  },
  {
    orderId: "ORD-8287",
    type: "Item Damaged",
    vendor: "Clean Express",
    time: "5 hours ago",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Processing":
      return "bg-yellow-100 text-yellow-700";
    case "Pending":
      return "bg-blue-100 text-blue-700";
    case "Delivered":
      return "bg-green-100 text-green-700";
    case "Issue Reported":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-primary mt-1">
            Overview of your platform&apos;s performance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 text-black">
            Generate Report
          </Button>
          <Button className="gap-2 bg-[#3E8940] hover:bg-[#3E8940]/80">
            View Analytics
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-sm border p-6"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <Badge
                variant="outline"
                className={`${
                  stat.trend === "up"
                    ? "text-green-600 bg-green-50"
                    : "text-red-600 bg-red-50"
                } border-none`}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </Badge>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-black">{stat.value}</h3>
              <p className="text-sm text-slate-500 mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-black">Recent Orders</h2>
            <Button
              variant="ghost"
              className="text-sm font-bold text-[#3E8940] hover:text-[#3E8940]/80 hover:bg-emerald-50"
              asChild
            >
              <Link href="/admin/orders">View All</Link>
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-[#fbfbfb] border-none bg-[#fbfbfb]">
                <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                  Order ID
                </TableHead>
                <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                  Customer
                </TableHead>
                <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                  Vendor
                </TableHead>
                <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                  Status
                </TableHead>
                <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4 text-right">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow
                  key={order.id}
                  className="hover:bg-slate-50 cursor-pointer"
                >
                  <TableCell className="font-semibold text-black">
                    #{order.id}
                  </TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="text-slate-600">
                    {order.vendor}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getStatusColor(
                        order.status
                      )} border-none font-medium`}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    {order.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Pending Vendor Approvals */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-black flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                Pending Approvals
              </h3>
              <Badge className="bg-amber-100 text-amber-700 border-none">
                {pendingVendors.length}
              </Badge>
            </div>
            <div className="space-y-3">
              {pendingVendors.map((vendor, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-sm text-black">
                      {vendor.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {vendor.location} • {vendor.applied}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#3E8940] hover:bg-[#3E8940]/90 h-7 text-xs"
                  >
                    Review
                  </Button>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              className="w-full mt-3 text-sm text-[#3E8940]"
              asChild
            >
              <Link href="/admin/vendors">View All Vendors</Link>
            </Button>
          </div>

          {/* Issue Alerts */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-black flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                Issue Alerts
              </h3>
              <Badge className="bg-red-100 text-red-700 border-none">
                {issueAlerts.length}
              </Badge>
            </div>
            <div className="space-y-3">
              {issueAlerts.map((issue, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-red-50 rounded-lg border border-red-100"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-red-700">
                      #{issue.orderId}
                    </span>
                    <span className="text-xs text-red-500">{issue.time}</span>
                  </div>
                  <p className="text-sm text-red-600">{issue.type}</p>
                  <p className="text-xs text-slate-500">
                    Vendor: {issue.vendor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
