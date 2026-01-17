"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  MoreVertical,
  Eye,
  RefreshCcw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Truck,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const orders = [
  {
    id: "ORD-8291",
    customer: "Alice Freeman",
    customerPhone: "+91 98765 43210",
    vendor: "Clean Express",
    items: "5kg Wash & Fold",
    status: "Processing",
    amount: "₹450",
    createdAt: "Jan 16, 2:30 PM",
    dueDate: "Today, 5:00 PM",
  },
  {
    id: "ORD-8292",
    customer: "Mark Wilson",
    customerPhone: "+91 87654 32109",
    vendor: "Sparkle Wash",
    items: "2 Suits Dry Clean",
    status: "Pending",
    amount: "₹280",
    createdAt: "Jan 16, 2:15 PM",
    dueDate: "Tomorrow, 10:00 AM",
  },
  {
    id: "ORD-8293",
    customer: "Sarah Jenkins",
    customerPhone: "+91 76543 21098",
    vendor: "Fresh Laundry",
    items: "10kg Mixed Load",
    status: "Delivered",
    amount: "₹620",
    createdAt: "Jan 15, 11:00 AM",
    dueDate: "Jan 16, 10:00 AM",
  },
  {
    id: "ORD-8294",
    customer: "James Doe",
    customerPhone: "+91 65432 10987",
    vendor: "Quick Clean",
    items: "Wedding Dress Clean",
    status: "Issue Reported",
    amount: "₹380",
    createdAt: "Jan 15, 9:30 AM",
    dueDate: "Jan 16, 2:00 PM",
  },
  {
    id: "ORD-8295",
    customer: "Priya Sharma",
    customerPhone: "+91 54321 09876",
    vendor: "Clean Express",
    items: "3 Shirts Iron",
    status: "Ready for Pickup",
    amount: "₹150",
    createdAt: "Jan 15, 8:00 AM",
    dueDate: "Jan 15, 5:00 PM",
  },
  {
    id: "ORD-8296",
    customer: "Rahul Verma",
    customerPhone: "+91 43210 98765",
    vendor: "Urban Laundry",
    items: "8kg Wash & Iron",
    status: "Cancelled",
    amount: "₹520",
    createdAt: "Jan 14, 4:00 PM",
    dueDate: "Jan 15, 4:00 PM",
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
    case "Ready for Pickup":
      return "bg-purple-100 text-purple-700";
    case "Cancelled":
      return "bg-slate-100 text-slate-600";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Processing":
      return <Clock className="h-3.5 w-3.5" />;
    case "Pending":
      return <Package className="h-3.5 w-3.5" />;
    case "Delivered":
      return <CheckCircle className="h-3.5 w-3.5" />;
    case "Issue Reported":
      return <AlertTriangle className="h-3.5 w-3.5" />;
    case "Ready for Pickup":
      return <Truck className="h-3.5 w-3.5" />;
    default:
      return null;
  }
};

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.vendor.toLowerCase().includes(searchQuery.toLowerCase());

    if (statusFilter === "all") return matchesSearch;
    return (
      matchesSearch &&
      order.status.toLowerCase().replace(" ", "-") === statusFilter
    );
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            Orders
          </h1>
          <p className="text-slate-500 mt-1">
            View and manage all platform orders
          </p>
        </div>
        <Button variant="outline" className="gap-2" asChild>
          <Link href="/admin/orders/settings">
            <RefreshCcw className="h-4 w-4" />
            Allocation Settings
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-5">
        {[
          { label: "Total", value: orders.length, color: "text-slate-700" },
          {
            label: "Pending",
            value: orders.filter((o) => o.status === "Pending").length,
            color: "text-blue-600",
          },
          {
            label: "Processing",
            value: orders.filter((o) => o.status === "Processing").length,
            color: "text-yellow-600",
          },
          {
            label: "Delivered",
            value: orders.filter((o) => o.status === "Delivered").length,
            color: "text-green-600",
          },
          {
            label: "Issues",
            value: orders.filter((o) => o.status === "Issue Reported").length,
            color: "text-red-600",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border p-4 text-center"
          >
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl border">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Search by order ID, customer, or vendor..."
            className="pl-10 bg-slate-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-44">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="ready-for-pickup">Ready for Pickup</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="issue-reported">Issue Reported</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-[#fbfbfb] border-none bg-[#fbfbfb]">
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4 pl-6">
                Order ID
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Customer
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Vendor
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Items
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Status
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Due Date
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4 text-right">
                Amount
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4 text-right pr-6">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id} className="hover:bg-slate-50">
                <TableCell className="font-bold text-black py-4 pl-6">
                  #{order.id}
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-xs text-slate-500">
                      {order.customerPhone}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">{order.vendor}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>
                  <Badge
                    className={`${getStatusColor(
                      order.status
                    )} border-none font-medium gap-1.5`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-600">
                  {order.dueDate}
                </TableCell>
                <TableCell className="text-right font-bold">
                  {order.amount}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Eye className="h-4 w-4" /> View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <RefreshCcw className="h-4 w-4" /> Reassign Vendor
                      </DropdownMenuItem>
                      {order.status === "Issue Reported" && (
                        <DropdownMenuItem className="gap-2 text-amber-600">
                          <AlertTriangle className="h-4 w-4" /> View Issue
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-slate-500">
            Showing {filteredOrders.length} of {orders.length} orders
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

