import Link from "next/link";
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
import { MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const orders = [
  {
    id: "#ORD-8291",
    customer: "Alice Freeman",
    type: "Regular",
    avatar: "/avatars/alice.png",
    items: "5kg Wash & Fold",
    status: "Processing",
    dueDate: "Today, 5:00 PM",
  },
  {
    id: "#ORD-8292",
    customer: "Mark Wilson",
    type: "New Customer",
    avatar: "/avatars/mark.png",
    items: "2 Suits Dry Clean",
    status: "Assigned",
    dueDate: "Tomorrow, 10:00 AM",
  },
  {
    id: "#ORD-8288",
    customer: "Sarah Jenkins",
    type: "VIP",
    avatar: "/avatars/sarah.png",
    items: "10kg Mixed Load",
    status: "Ready",
    dueDate: "Yesterday",
  },
  {
    id: "#ORD-8293",
    customer: "James Doe",
    type: "Regular",
    avatar: "/avatars/james.png",
    items: "Wedding Dress Clean",
    status: "Pending Pickup",
    dueDate: "Oct 24, 2:00 PM",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Processing":
      return "bg-yellow-100 text-yellow-600 hover:bg-yellow-200 border-none px-3 font-semibold";
    case "Assigned":
      return "bg-blue-100 text-blue-600 hover:bg-blue-200 border-none px-3 font-semibold";
    case "Ready":
      return "bg-green-100 text-green-600 hover:bg-green-200 border-none px-3 font-semibold";
    case "Pending Pickup":
      return "bg-gray-100 text-gray-600 hover:bg-gray-200 border-none px-3 font-semibold";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

interface RecentOrdersProps {
  onOrderClick?: (orderId: string) => void;
}

export function RecentOrders({ onOrderClick }: RecentOrdersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 w-fit min-w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-black">Recent Orders</h2>
        <Button
          variant="ghost"
          className="text-sm font-bold text-[#3E8940] hover:text-[#3E8940]/80 hover:bg-emerald-50"
          asChild
        >
          <Link href="/dashboard/orders">View All</Link>
        </Button>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-[#fbfbfb] border-none bg-[#fbfbfb]">
              <TableHead className="w-[100px] text-xs font-bold uppercase text-[#4FA851] py-3 pl-4">
                Order ID
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-3">
                Customer
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-3">
                Items
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-3">
                Status
              </TableHead>
              <TableHead className="text-xs font-bold uppercase text-[#4FA851] py-3">
                Due Date
              </TableHead>
              <TableHead className="text-right text-xs font-bold uppercase text-[#4FA851] py-3 pr-4">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="hover:bg-slate-50 border-b cursor-pointer transition-colors"
                onClick={() => onOrderClick?.(order.id)}
              >
                <TableCell className="font-semibold text-black py-3 pl-4">
                  {order.id}
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={order.avatar} alt={order.customer} />
                      <AvatarFallback>
                        {order.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-black">
                        {order.customer}
                      </span>
                      <span className="text-xs text-[#3E8940] font-medium">
                        {order.type}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium py-3">
                  {order.items}
                </TableCell>
                <TableCell className="py-3">
                  <Badge
                    variant="outline"
                    className={getStatusColor(order.status)}
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-current" />
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium py-3">
                  {order.dueDate}
                </TableCell>
                <TableCell className="text-right py-3 pr-4">
                  {order.status === "Assigned" ? (
                    <Button
                      size="sm"
                      className="bg-[#3E8940] hover:bg-[#3E8940]/90 h-8 px-4 font-bold"
                      onClick={() => onOrderClick?.(order.id)}
                    >
                      Accept
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-[#3E8940] hover:text-[#3E8940] hover:bg-[#3E8940]/10"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between mt-4 pt-3 border-t">
          <p className="text-sm text-[#3E8940]">Showing 4 of 12 new orders</p>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[#3E8940] hover:bg-[#3E8940]/10"
            >
              <span className="sr-only">Previous page</span>
              <span className="text-lg">‹</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[#3E8940] hover:bg-[#3E8940]/10"
            >
              <span className="sr-only">Next page</span>
              <span className="text-lg">›</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
