"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Package,
  Truck,
  CheckCircle2,
  Timer,
  ArrowRight,
  Phone,
  Navigation,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SCHEDULE_DATA = [
  {
    id: "PU-001",
    orderId: "#284-9321",
    customer: "Sarah Johnson",
    phone: "+1 (555) 123-4567",
    address: "452 Maple Ave, Apt 4B",
    city: "San Francisco, CA 94110",
    timeSlot: "9:00 AM - 11:00 AM",
    items: 5,
    status: "scheduled",
    type: "pickup",
  },
  {
    id: "PU-002",
    orderId: "#284-9318",
    customer: "Michael Chen",
    phone: "+1 (555) 234-5678",
    address: "789 Oak Street, Suite 12",
    city: "San Francisco, CA 94102",
    timeSlot: "11:00 AM - 1:00 PM",
    items: 3,
    status: "in_progress",
    type: "pickup",
  },
  {
    id: "DL-001",
    orderId: "#284-9310",
    customer: "Emily Davis",
    phone: "+1 (555) 345-6789",
    address: "156 Pine Road",
    city: "San Francisco, CA 94108",
    timeSlot: "2:00 PM - 4:00 PM",
    items: 8,
    status: "completed",
    type: "delivery",
  },
  {
    id: "PU-003",
    orderId: "#284-9325",
    customer: "James Wilson",
    phone: "+1 (555) 456-7890",
    address: "321 Cedar Lane, Unit 5",
    city: "San Francisco, CA 94114",
    timeSlot: "4:00 PM - 6:00 PM",
    items: 4,
    status: "scheduled",
    type: "pickup",
  },
  {
    id: "DL-002",
    orderId: "#284-9305",
    customer: "Lisa Anderson",
    phone: "+1 (555) 567-8901",
    address: "888 Birch Boulevard",
    city: "San Francisco, CA 94117",
    timeSlot: "6:00 PM - 8:00 PM",
    items: 6,
    status: "scheduled",
    type: "delivery",
  },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "scheduled":
      return {
        label: "Scheduled",
        className: "bg-blue-100 text-blue-700 border-blue-200",
        icon: Timer,
      };
    case "in_progress":
      return {
        label: "In Progress",
        className: "bg-orange-100 text-orange-700 border-orange-200",
        icon: Truck,
      };
    case "completed":
      return {
        label: "Completed",
        className: "bg-green-100 text-green-700 border-green-200",
        icon: CheckCircle2,
      };
    default:
      return {
        label: "Unknown",
        className: "bg-gray-100 text-gray-700 border-gray-200",
        icon: Clock,
      };
  }
};

const getTypeConfig = (type: string) => {
  switch (type) {
    case "pickup":
      return {
        label: "Pickup",
        className: "bg-purple-50 text-purple-700",
      };
    case "delivery":
      return {
        label: "Delivery",
        className: "bg-emerald-50 text-emerald-700",
      };
    default:
      return {
        label: type,
        className: "bg-gray-50 text-gray-700",
      };
  }
};

export function PickupSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const todayPickups = SCHEDULE_DATA.filter((s) => s.type === "pickup").length;
  const todayDeliveries = SCHEDULE_DATA.filter(
    (s) => s.type === "delivery"
  ).length;
  const completed = SCHEDULE_DATA.filter(
    (s) => s.status === "completed"
  ).length;
  const pending = SCHEDULE_DATA.filter((s) => s.status !== "completed").length;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const navigateDate = (direction: "prev" | "next") => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1));
      return newDate;
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            Pickup Schedule
          </h1>
          <p className="text-primary mt-1">
            Manage your pickups and deliveries for today
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10"
            onClick={() => navigateDate("prev")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-black hover:text-black min-w-[200px] justify-center"
          >
            <Calendar className="h-4 w-4" />
            {formatDate(selectedDate)}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10"
            onClick={() => navigateDate("next")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Truck className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {todayPickups}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Pickups Today
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Package className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {todayDeliveries}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Deliveries Today
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Timer className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{pending}</p>
              <p className="text-xs text-slate-500 font-medium">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{completed}</p>
              <p className="text-xs text-slate-500 font-medium">Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Today's Schedule</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <div className="col-span-2">Time Slot</div>
          <div className="col-span-3">Customer</div>
          <div className="col-span-3">Address</div>
          <div className="col-span-1 text-center">Items</div>
          <div className="col-span-1 text-center">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-slate-100">
          {SCHEDULE_DATA.map((schedule, index) => {
            const statusConfig = getStatusConfig(schedule.status);
            const typeConfig = getTypeConfig(schedule.type);
            const StatusIcon = statusConfig.icon;

            return (
              <div
                key={schedule.id}
                className={cn(
                  "group px-6 py-4 hover:bg-slate-50/80 transition-all cursor-pointer",
                  schedule.status === "completed" && "opacity-60"
                )}
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  {/* Time Slot */}
                  <div className="col-span-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-10 w-10 rounded-lg flex items-center justify-center shrink-0",
                          schedule.type === "pickup"
                            ? "bg-purple-50"
                            : "bg-emerald-50"
                        )}
                      >
                        {schedule.type === "pickup" ? (
                          <Truck className="h-5 w-5 text-purple-600" />
                        ) : (
                          <Package className="h-5 w-5 text-emerald-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm whitespace-nowrap">
                          {schedule.timeSlot.split(" - ")[0]}
                        </p>
                        <p className="text-xs text-slate-400">
                          {schedule.timeSlot.split(" - ")[1]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Customer */}
                  <div className="col-span-3">
                    <p className="font-semibold text-slate-900">
                      {schedule.customer}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge
                        className={cn(
                          "border-0 px-2 py-0 text-[10px] uppercase font-bold",
                          typeConfig.className
                        )}
                      >
                        {typeConfig.label}
                      </Badge>
                      <span className="text-xs text-slate-400">
                        {schedule.orderId}
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="col-span-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-slate-700 leading-tight">
                          {schedule.address}
                        </p>
                        <p className="text-xs text-slate-400">
                          {schedule.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="col-span-1 text-center">
                    <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                      {schedule.items}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="col-span-1 flex justify-center">
                    <Badge
                      className={cn(
                        "gap-1 px-2.5 py-1 text-[11px] font-semibold border whitespace-nowrap",
                        statusConfig.className
                      )}
                    >
                      <StatusIcon className="h-3 w-3" />
                      {statusConfig.label}
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="col-span-2 flex items-center justify-end gap-2">
                    {schedule.status !== "completed" && (
                      <Button
                        size="sm"
                        className="h-8 px-4 bg-[#3E8940] hover:bg-[#3E8940]/90 text-xs font-semibold"
                      >
                        {schedule.status === "in_progress"
                          ? "Complete"
                          : "Start"}
                        <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    )}
                    {schedule.status === "completed" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-4 text-xs font-semibold text-green-600 border-green-200 hover:bg-green-50"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                        Done
                      </Button>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-10 w-10 rounded-lg flex items-center justify-center",
                          schedule.type === "pickup"
                            ? "bg-purple-50"
                            : "bg-emerald-50"
                        )}
                      >
                        {schedule.type === "pickup" ? (
                          <Truck className="h-5 w-5 text-purple-600" />
                        ) : (
                          <Package className="h-5 w-5 text-emerald-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {schedule.timeSlot}
                        </p>
                        <Badge
                          className={cn(
                            "mt-1 border-0 px-2 py-0 text-[10px] uppercase font-bold",
                            typeConfig.className
                          )}
                        >
                          {typeConfig.label}
                        </Badge>
                      </div>
                    </div>
                    <Badge
                      className={cn(
                        "gap-1 px-2 py-1 text-[10px] font-semibold border",
                        statusConfig.className
                      )}
                    >
                      <StatusIcon className="h-3 w-3" />
                      {statusConfig.label}
                    </Badge>
                  </div>

                  <div className="pl-13">
                    <p className="font-semibold text-slate-900">
                      {schedule.customer}
                    </p>
                    <p className="text-sm text-slate-500 mt-0.5">
                      {schedule.address}, {schedule.city}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Package className="h-3.5 w-3.5" />
                        {schedule.items} items
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5" />
                        {schedule.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-9 gap-1.5"
                    >
                      <Navigation className="h-4 w-4" />
                      Navigate
                    </Button>
                    {schedule.status !== "completed" && (
                      <Button
                        size="sm"
                        className="flex-1 h-9 bg-[#3E8940] hover:bg-[#3E8940]/90 gap-1.5"
                      >
                        {schedule.status === "in_progress"
                          ? "Complete"
                          : "Start"}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
