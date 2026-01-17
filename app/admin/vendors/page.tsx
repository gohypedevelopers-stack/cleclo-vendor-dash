"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  MoreVertical,
  Eye,
  Star,
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  Ban,
  CreditCard,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const vendors = [
  {
    id: "VND-001",
    name: "Clean Express",
    owner: "Rajesh Kumar",
    phone: "+91 98765 43210",
    location: "Andheri West, Mumbai",
    status: "Active",
    rating: 4.8,
    completionRate: 96,
    totalOrders: 245,
    pendingPayout: "₹12,500",
    joinedDate: "Mar 15, 2024",
  },
  {
    id: "VND-002",
    name: "Sparkle Wash",
    owner: "Amit Patel",
    phone: "+91 87654 32109",
    location: "Bandra, Mumbai",
    status: "Active",
    rating: 4.6,
    completionRate: 94,
    totalOrders: 189,
    pendingPayout: "₹8,200",
    joinedDate: "May 20, 2024",
  },
  {
    id: "VND-003",
    name: "Fresh Laundry",
    owner: "Suman Singh",
    phone: "+91 76543 21098",
    location: "Powai, Mumbai",
    status: "Active",
    rating: 4.9,
    completionRate: 98,
    totalOrders: 312,
    pendingPayout: "₹15,800",
    joinedDate: "Jan 10, 2024",
  },
  {
    id: "VND-004",
    name: "Quick Clean",
    owner: "Neha Gupta",
    phone: "+91 65432 10987",
    location: "Juhu, Mumbai",
    status: "Suspended",
    rating: 3.2,
    completionRate: 78,
    totalOrders: 56,
    pendingPayout: "₹2,100",
    joinedDate: "Sep 5, 2024",
  },
  {
    id: "VND-005",
    name: "Fresh Fold Services",
    owner: "Vikram Rao",
    phone: "+91 54321 09876",
    location: "Thane, Mumbai",
    status: "Pending",
    rating: 0,
    completionRate: 0,
    totalOrders: 0,
    pendingPayout: "₹0",
    joinedDate: "Jan 14, 2026",
  },
  {
    id: "VND-006",
    name: "Urban Laundry Co",
    owner: "Priya Sharma",
    phone: "+91 43210 98765",
    location: "Malad, Mumbai",
    status: "Pending",
    rating: 0,
    completionRate: 0,
    totalOrders: 0,
    pendingPayout: "₹0",
    joinedDate: "Jan 13, 2026",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-amber-100 text-amber-700";
    case "Suspended":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function VendorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.location.toLowerCase().includes(searchQuery.toLowerCase());

    if (statusFilter === "all") return matchesSearch;
    return matchesSearch && vendor.status.toLowerCase() === statusFilter;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            Vendors
          </h1>
          <p className="text-slate-500 mt-1">
            Manage laundry service providers
          </p>
        </div>
        <Button className="gap-2 bg-[#3E8940] hover:bg-[#3E8940]/80" asChild>
          <Link href="/admin/finance/settlements">
            <CreditCard className="h-4 w-4" />
            Manage Settlements
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          {
            label: "Total Vendors",
            value: vendors.length,
            color: "text-slate-700",
          },
          {
            label: "Active",
            value: vendors.filter((v) => v.status === "Active").length,
            color: "text-green-600",
          },
          {
            label: "Pending Approval",
            value: vendors.filter((v) => v.status === "Pending").length,
            color: "text-amber-600",
          },
          {
            label: "Suspended",
            value: vendors.filter((v) => v.status === "Suspended").length,
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
            placeholder="Search by name, owner, or location..."
            className="pl-10 bg-slate-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Vendors Table */}
      <div className="bg-white rounded-xl shadow-sm border">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-[#fbfbfb] border-none bg-[#fbfbfb]">
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4 pl-6">
                Vendor
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Location
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Rating
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Completion
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Orders
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Pending Payout
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Status
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4 text-right pr-6">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVendors.map((vendor) => (
              <TableRow key={vendor.id} className="hover:bg-slate-50">
                <TableCell className="py-4 pl-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {vendor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-black">{vendor.name}</p>
                      <p className="text-xs text-slate-500">
                        {vendor.owner} • {vendor.phone}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    {vendor.location}
                  </div>
                </TableCell>
                <TableCell>
                  {vendor.rating > 0 ? (
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                      <span className="font-medium">{vendor.rating}</span>
                    </div>
                  ) : (
                    <span className="text-slate-400">N/A</span>
                  )}
                </TableCell>
                <TableCell>
                  {vendor.completionRate > 0 ? (
                    <span
                      className={`font-medium ${
                        vendor.completionRate >= 90
                          ? "text-green-600"
                          : vendor.completionRate >= 80
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {vendor.completionRate}%
                    </span>
                  ) : (
                    <span className="text-slate-400">N/A</span>
                  )}
                </TableCell>
                <TableCell className="font-medium">
                  {vendor.totalOrders}
                </TableCell>
                <TableCell className="font-bold text-[#3E8940]">
                  {vendor.pendingPayout}
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${getStatusColor(
                      vendor.status
                    )} border-none font-medium gap-1.5`}
                  >
                    {vendor.status === "Active" && (
                      <CheckCircle className="h-3 w-3" />
                    )}
                    {vendor.status === "Pending" && (
                      <Clock className="h-3 w-3" />
                    )}
                    {vendor.status === "Suspended" && (
                      <Ban className="h-3 w-3" />
                    )}
                    {vendor.status}
                  </Badge>
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
                      {vendor.status === "Pending" && (
                        <DropdownMenuItem className="gap-2 text-green-600">
                          <CheckCircle className="h-4 w-4" /> Approve Vendor
                        </DropdownMenuItem>
                      )}
                      {vendor.status === "Active" && (
                        <DropdownMenuItem className="gap-2 text-red-600">
                          <Ban className="h-4 w-4" /> Suspend Vendor
                        </DropdownMenuItem>
                      )}
                      {vendor.status === "Suspended" && (
                        <DropdownMenuItem className="gap-2 text-green-600">
                          <CheckCircle className="h-4 w-4" /> Reactivate Vendor
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="gap-2">
                        <CreditCard className="h-4 w-4" /> View Payouts
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-slate-500">
            Showing {filteredVendors.length} of {vendors.length} vendors
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

