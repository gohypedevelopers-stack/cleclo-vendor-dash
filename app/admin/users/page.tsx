"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Wallet,
  Ban,
  Eye,
  Pencil,
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const users = [
  {
    id: "USR-001",
    name: "Alice Freeman",
    email: "alice@example.com",
    phone: "+91 98765 43210",
    walletBalance: "₹1,250",
    totalOrders: 28,
    status: "Active",
    type: "VIP",
    joinedDate: "Jan 12, 2024",
  },
  {
    id: "USR-002",
    name: "Mark Wilson",
    email: "mark.w@example.com",
    phone: "+91 87654 32109",
    walletBalance: "₹500",
    totalOrders: 5,
    status: "Active",
    type: "New",
    joinedDate: "Jan 14, 2025",
  },
  {
    id: "USR-003",
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    phone: "+91 76543 21098",
    walletBalance: "₹3,800",
    totalOrders: 45,
    status: "Active",
    type: "Top Spender",
    joinedDate: "Mar 5, 2023",
  },
  {
    id: "USR-004",
    name: "James Doe",
    email: "james.doe@example.com",
    phone: "+91 65432 10987",
    walletBalance: "₹0",
    totalOrders: 12,
    status: "Blocked",
    type: "Regular",
    joinedDate: "Aug 20, 2024",
  },
  {
    id: "USR-005",
    name: "Priya Sharma",
    email: "priya.s@example.com",
    phone: "+91 54321 09876",
    walletBalance: "₹750",
    totalOrders: 18,
    status: "Active",
    type: "Regular",
    joinedDate: "Nov 8, 2024",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Blocked":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "VIP":
      return "bg-purple-100 text-purple-700";
    case "Top Spender":
      return "bg-amber-100 text-amber-700";
    case "New":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

export default function UsersPage() {
  const [userList, setUserList] = useState(users);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<(typeof users)[0] | null>(
    null,
  );
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    walletBalance: "",
  });

  const handleEditClick = (user: (typeof users)[0]) => {
    setSelectedUser(user);
    setEditForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      walletBalance: user.walletBalance,
    });
    setIsEditOpen(true);
  };

  const handleSaveEdit = () => {
    if (!selectedUser) return;

    setUserList((prev) =>
      prev.map((u) =>
        u.id === selectedUser.id
          ? {
              ...u,
              name: editForm.name,
              email: editForm.email,
              phone: editForm.phone,
              walletBalance: editForm.walletBalance,
            }
          : u,
      ),
    );
    setIsEditOpen(false);
  };

  const filteredUsers = userList.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery);

    if (filterType === "all") return matchesSearch;
    if (filterType === "top-spenders")
      return matchesSearch && user.type === "Top Spender";
    if (filterType === "new") return matchesSearch && user.type === "New";
    if (filterType === "blocked")
      return matchesSearch && user.status === "Blocked";
    return matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            Users
          </h1>
          <p className="text-slate-500 mt-1">
            Manage customer accounts and profiles
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl border">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Search by name, email, or phone..."
            className="pl-10 bg-slate-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="top-spenders">Top Spenders</SelectItem>
              <SelectItem value="new">New Users</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-[#fbfbfb] border-none bg-[#fbfbfb]">
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4 pl-6">
                User
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Contact
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Wallet
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Orders
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-4">
                Type
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
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className="hover:bg-slate-50">
                <TableCell className="py-4 pl-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-black">{user.name}</p>
                      <p className="text-xs text-slate-500">
                        Joined {user.joinedDate}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="text-sm flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-slate-400" />
                      {user.email}
                    </p>
                    <p className="text-sm flex items-center gap-1.5 text-slate-600">
                      <Phone className="h-3.5 w-3.5 text-slate-400" />
                      {user.phone}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="font-bold text-[#3E8940]">
                  {user.walletBalance}
                </TableCell>
                <TableCell className="font-medium">
                  {user.totalOrders}
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${getTypeColor(
                      user.type,
                    )} border-none font-medium`}
                  >
                    {user.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${getStatusColor(
                      user.status,
                    )} border-none font-medium`}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-500 hover:text-[#3E8940] hover:bg-[#3E8940]/10"
                      onClick={() => handleEditClick(user)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-500 hover:text-black"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2">
                          <Eye className="h-4 w-4" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Wallet className="h-4 w-4" /> Manage Wallet
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <MapPin className="h-4 w-4" /> View Addresses
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-red-600">
                          <Ban className="h-4 w-4" />{" "}
                          {user.status === "Blocked" ? "Unblock" : "Block"} User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-slate-500">
            Showing {filteredUsers.length} of {users.length} users
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

      {/* Edit User Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit User Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <Input
                id="name"
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={editForm.email}
                onChange={(e) =>
                  setEditForm({ ...editForm, email: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input
                  id="phone"
                  value={editForm.phone}
                  onChange={(e) =>
                    setEditForm({ ...editForm, phone: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="wallet" className="text-sm font-medium">
                  Wallet Balance
                </label>
                <Input
                  id="wallet"
                  value={editForm.walletBalance}
                  onChange={(e) =>
                    setEditForm({ ...editForm, walletBalance: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-[#3E8940] hover:bg-[#3E8940]/90"
              onClick={handleSaveEdit}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
