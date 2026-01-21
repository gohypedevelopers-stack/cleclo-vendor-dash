"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Package,
  Star,
  Clock,
  Truck,
  CheckCircle2,
  Timer,
  Navigation,
  Calendar,
  User,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Mock data - in real app this would come from API
const SCHEDULE_DATA = [
  {
    id: "PU-001",
    orderId: "#284-9321",
    customer: "Sarah Johnson",
    phone: "+1 (555) 123-4567",
    address: "452 Maple Ave, Apt 4B",
    city: "San Francisco, CA 94110",
    date: "Jan 21, 2026",
    items: 5,
    status: "scheduled",
    type: "pickup",
    rating: 4.8,
    note: "Coffee stain on front",
    deliveryType: "Standard",
    driver: "John Doe",
    orderItems: [
      {
        name: "White Shirt",
        quantity: 2,
        image: "https://picsum.photos/seed/shirt1/200/200",
      },
      {
        name: "Black Trousers",
        quantity: 3,
        image: "https://picsum.photos/seed/trouser1/200/200",
      },
    ],
  },
  {
    id: "PU-002",
    orderId: "#284-9318",
    customer: "Michael Chen",
    phone: "+1 (555) 234-5678",
    address: "789 Oak Street, Suite 12",
    city: "San Francisco, CA 94102",
    date: "Jan 21, 2026",
    items: 3,
    status: "in_progress",
    type: "pickup",
    rating: 4.9,
    note: "Oil stain on white shirt collar",
    deliveryType: "Express 24h",
    driver: "Mike Smith",
    orderItems: [
      {
        name: "White Shirt",
        quantity: 3,
        image: "https://picsum.photos/seed/shirt2/200/200",
      },
    ],
  },
  {
    id: "PU-003",
    orderId: "#284-9325",
    customer: "James Wilson",
    phone: "+1 (555) 456-7890",
    address: "321 Cedar Lane, Unit 5",
    city: "San Francisco, CA 94114",
    date: "Jan 21, 2026",
    items: 4,
    status: "scheduled",
    type: "pickup",
    rating: 5.0,
    note: "Delicate silk items",
    deliveryType: "Express 48h",
    driver: "Sarah Wilson",
    orderItems: [
      {
        name: "Silk Blouse",
        quantity: 2,
        image: "https://picsum.photos/seed/blouse1/200/200",
      },
      {
        name: "Silk Scarf",
        quantity: 2,
        image: "https://picsum.photos/seed/scarf1/200/200",
      },
    ],
  },
  {
    id: "PU-005",
    orderId: "#284-9330",
    customer: "Michael Brown",
    rating: 4.7,
    phone: "+1 (555) 456-7890",
    address: "220 Elm St, Apt 5C",
    city: "San Francisco, CA 94103",
    date: "Jan 21, 2026",
    items: 2,
    status: "not_scheduled",
    type: "pickup",
    note: "Color bleed risk on red dress",
    deliveryType: "Standard",
    orderItems: [
      {
        name: "Red Dress",
        quantity: 1,
        image: "https://picsum.photos/seed/dress1/200/200",
      },
      {
        name: "Cotton T-Shirt",
        quantity: 1,
        image: "https://picsum.photos/seed/tshirt1/200/200",
      },
    ],
  },
  {
    id: "PU-006",
    orderId: "#284-9335",
    customer: "David Lee",
    rating: 4.5,
    phone: "+1 (555) 987-6543",
    address: "789 Pine St",
    city: "San Francisco, CA 94108",
    date: "Jan 21, 2026",
    items: 7,
    status: "not_scheduled",
    type: "pickup",
    note: "Grass stains on knees",
    deliveryType: "Express 24h",
    orderItems: [
      {
        name: "Blue Jeans",
        quantity: 4,
        image: "https://picsum.photos/seed/jeans1/200/200",
      },
      {
        name: "Kids T-Shirt",
        quantity: 3,
        image: "https://picsum.photos/seed/kidstshirt1/200/200",
      },
    ],
  },
];

const getStatusConfig = (status: string, type: string) => {
  switch (status) {
    case "scheduled":
      return {
        label: type === "pickup" ? "Pickup Scheduled" : "Delivery Scheduled",
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
    case "not_scheduled":
      return {
        label: "Not Scheduled",
        className: "bg-gray-100 text-gray-700 border-gray-200",
        icon: Clock,
      };
    default:
      return {
        label: "Unknown",
        className: "bg-gray-100 text-gray-700 border-gray-200",
        icon: Clock,
      };
  }
};

const getDeliveryBadgeColor = (type?: string) => {
  switch (type) {
    case "Express 24h":
      return "bg-red-100 text-red-700 border-red-200";
    case "Express 48h":
      return "bg-orange-100 text-orange-700 border-orange-200";
    default:
      return "bg-blue-50 text-blue-700 border-blue-200";
  }
};

export default function ScheduleDetailPage() {
  const params = useParams();
  const router = useRouter();

  const schedule = SCHEDULE_DATA.find((s) => s.id === params.id);

  // Create flattened items first so we can use it for initial state
  const flattenedItems =
    schedule?.orderItems?.flatMap((item) =>
      Array.from({ length: item.quantity }).map((_, i) => ({
        ...item,
        uniqueId: `${item.name}-${i}`,
      })),
    ) || [];

  // Delivery partner items are only pre-verified if pickup has happened (in_progress or completed)
  const isPickupDone =
    schedule?.status === "in_progress" || schedule?.status === "completed";
  const deliveryVerifiedItems: { [key: string]: boolean } = {};
  if (isPickupDone) {
    flattenedItems.forEach((item) => {
      deliveryVerifiedItems[item.uniqueId] = true;
    });
  }

  const [vendorVerifiedItems, setVendorVerifiedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({});

  if (!schedule) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-slate-500">Order not found</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Go Back
        </Button>
      </div>
    );
  }

  const statusConfig = getStatusConfig(schedule.status, schedule.type);
  const StatusIcon = statusConfig.icon;

  // Toggle selection of an item (for items not yet verified)
  const handleSelectItem = (itemId: string) => {
    if (vendorVerifiedItems[itemId]) return; // Already verified, can't select
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // Verify only the selected items
  const handleVerifySelectedItems = () => {
    setVendorVerifiedItems((prev) => ({
      ...prev,
      ...selectedItems,
    }));
    setSelectedItems({}); // Clear selection after verification
  };

  // Verify all remaining items at once
  const handleVerifyAllVendorItems = () => {
    const allVerified: { [key: string]: boolean } = {};
    flattenedItems.forEach((item) => {
      allVerified[item.uniqueId] = true;
    });
    setVendorVerifiedItems(allVerified);
    setSelectedItems({});
  };

  const deliveryVerifiedCount = Object.values(deliveryVerifiedItems).filter(
    Boolean,
  ).length;
  const vendorVerifiedCount =
    Object.values(vendorVerifiedItems).filter(Boolean).length;
  const selectedCount = Object.values(selectedItems).filter(Boolean).length;
  const totalItems = flattenedItems.length;

  return (
    <div className="flex flex-col gap-6 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">
                {schedule.orderId}
              </h1>
              <Badge
                className={cn(
                  "gap-1 px-2.5 py-1 text-xs font-semibold border",
                  statusConfig.className,
                )}
              >
                <StatusIcon className="h-3 w-3" />
                {statusConfig.label}
              </Badge>
            </div>
            <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {schedule.date}
              </span>
              <span className="flex items-center gap-1">
                <Package className="h-3.5 w-3.5" />
                {schedule.items} items
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Package className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{totalItems}</p>
              <p className="text-xs text-slate-500 font-medium">Total Items</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Truck className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {deliveryVerifiedCount}/{totalItems}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Delivery Verified
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {vendorVerifiedCount}/{totalItems}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Vendor Verified
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Star className="h-5 w-5 text-amber-600 fill-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {schedule.rating}
              </p>
              <p className="text-xs text-slate-500 font-medium">Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Delivery Partner Verification */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div
              className={cn(
                "p-4 border-b border-slate-100",
                isPickupDone ? "bg-blue-50" : "bg-slate-50",
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center",
                      isPickupDone ? "bg-blue-500" : "bg-slate-400",
                    )}
                  >
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Delivery Partner Verification
                    </h2>
                    <p className="text-xs text-slate-500">
                      {isPickupDone
                        ? "Items verified at pickup from customer"
                        : "Waiting for pickup from customer"}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "text-sm font-semibold",
                    isPickupDone ? "text-blue-600" : "text-slate-400",
                  )}
                >
                  {deliveryVerifiedCount}/{totalItems}
                </span>
              </div>
            </div>
            <div className="p-4">
              {!isPickupDone && (
                <div className="mb-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
                  <p className="text-xs text-amber-700 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Items will be verified when delivery partner picks them up
                  </p>
                </div>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {flattenedItems.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative flex flex-col items-center border-2 rounded-xl p-3",
                      isPickupDone
                        ? "border-blue-500 bg-blue-50 shadow-sm"
                        : "border-slate-200 bg-slate-50",
                    )}
                  >
                    {item.image && (
                      <div
                        className={cn(
                          "h-16 w-16 rounded-lg overflow-hidden mb-2 shadow-sm",
                          !isPickupDone && "opacity-60",
                        )}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <p
                      className={cn(
                        "font-medium text-xs text-center",
                        isPickupDone ? "text-slate-900" : "text-slate-500",
                      )}
                    >
                      {item.name}
                    </p>
                    {isPickupDone && (
                      <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Verification */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-green-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Vendor Verification
                    </h2>
                    <p className="text-xs text-slate-500">
                      Items verified upon receiving at vendor
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-green-600">
                  {vendorVerifiedCount}/{totalItems}
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-500 mb-3">
                Click items to select, then verify with the button below
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {flattenedItems.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative flex flex-col items-center border-2 rounded-xl p-3 transition-all",
                      vendorVerifiedItems[item.uniqueId]
                        ? "border-green-500 bg-green-50 shadow-sm"
                        : selectedItems[item.uniqueId]
                          ? "border-blue-500 bg-blue-50 shadow-sm cursor-pointer"
                          : "border-slate-200 bg-white cursor-pointer hover:border-slate-300 hover:shadow-md",
                    )}
                    onClick={() => handleSelectItem(item.uniqueId)}
                  >
                    {item.image && (
                      <div
                        className={cn(
                          "h-16 w-16 rounded-lg overflow-hidden mb-2 shadow-sm",
                          vendorVerifiedItems[item.uniqueId] &&
                            "ring-2 ring-green-500",
                          selectedItems[item.uniqueId] &&
                            !vendorVerifiedItems[item.uniqueId] &&
                            "ring-2 ring-blue-500",
                        )}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <p className="font-medium text-xs text-slate-900 text-center">
                      {item.name}
                    </p>
                    {vendorVerifiedItems[item.uniqueId] && (
                      <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center shadow-md">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                    )}
                    {selectedItems[item.uniqueId] &&
                      !vendorVerifiedItems[item.uniqueId] && (
                        <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                      )}
                  </div>
                ))}
              </div>

              {/* Buttons Section */}
              {vendorVerifiedCount < totalItems && (
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                  {/* Verify Selected Button - only show if items are selected */}
                  {selectedCount > 0 && (
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold"
                      onClick={handleVerifySelectedItems}
                    >
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      Verify Selected ({selectedCount} items)
                    </Button>
                  )}

                  {/* Verify All Button */}
                  <Button
                    className={cn(
                      "w-full h-12 text-base font-semibold",
                      selectedCount > 0
                        ? "bg-slate-200 hover:bg-slate-300 text-slate-700"
                        : "bg-[#3E8940] hover:bg-[#3E8940]/90",
                    )}
                    onClick={handleVerifyAllVendorItems}
                  >
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    Verify All Items ({totalItems - vendorVerifiedCount}{" "}
                    remaining)
                  </Button>
                </div>
              )}

              {vendorVerifiedCount === totalItems && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-center gap-2 p-3 bg-green-50 rounded-xl border border-green-200">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">
                      All items verified successfully!
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Row */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Special Note Card */}
        {schedule.note && (
          <div className="relative overflow-hidden bg-linear-to-br from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-5 shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-200/50">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-900 text-base">
                  Special Note
                </h3>
                <p className="text-amber-700 text-sm mt-1 leading-relaxed">
                  {schedule.note}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Assigned Driver Card */}
        {schedule.driver && (
          <div className="relative overflow-hidden bg-linear-to-br from-slate-50 to-slate-100 border border-slate-200/50 rounded-2xl p-5 shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200/50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-200/50">
                <User className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Assigned Driver
                </p>
                <p className="font-bold text-slate-900 text-lg mt-0.5">
                  {schedule.driver}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Delivery Status Timeline */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-linear-to-r from-slate-50 to-white">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Truck className="h-5 w-5 text-purple-600" />
            Delivery Status
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Track the journey of your items
          </p>
        </div>

        <div className="p-5">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div
              className={cn(
                "absolute left-6 top-8 bottom-8 w-0.5",
                schedule.status === "not_scheduled"
                  ? "bg-linear-to-b from-green-500 to-slate-200"
                  : schedule.status === "scheduled"
                    ? "bg-linear-to-b from-green-500 via-green-500 to-slate-200"
                    : schedule.status === "in_progress"
                      ? "bg-linear-to-b from-green-500 via-blue-500 to-slate-200"
                      : "bg-green-500",
              )}
            />

            {/* Timeline Items */}
            <div className="space-y-6">
              {/* Order Placed - Always Complete */}
              <div className="relative flex gap-4">
                <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200/50 z-10">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900">
                      Order Placed
                    </h4>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                      {schedule.date}, 10:30 AM
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    Customer placed the order for {totalItems} items
                  </p>
                </div>
              </div>

              {/* Driver Assignment Step */}
              <div className="relative flex gap-4">
                {schedule.driver ? (
                  <>
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200/50 z-10">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          Driver Assigned
                        </h4>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          Assigned
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        {schedule.driver} has been assigned to pickup
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-200/50 z-10 animate-pulse">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-amber-700">
                          Waiting for Driver Assignment
                        </h4>
                        <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full font-medium">
                          Pending
                        </span>
                      </div>
                      <p className="text-sm text-amber-600 mt-1">
                        No delivery partner assigned yet
                      </p>
                      <div className="mt-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
                        <p className="text-xs text-amber-700">
                          ⏳ Waiting for a delivery partner to accept this
                          pickup
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Picked Up from Customer */}
              <div className="relative flex gap-4">
                {schedule.status === "in_progress" ||
                schedule.status === "completed" ? (
                  <>
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200/50 z-10">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          Picked Up from Customer
                        </h4>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                          {schedule.date}, 11:45 AM
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        {schedule.driver} collected items from customer
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {flattenedItems.slice(0, 3).map((item, i) => (
                          <span
                            key={i}
                            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                          >
                            ✓ {item.name}
                          </span>
                        ))}
                        {flattenedItems.length > 3 && (
                          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                            +{flattenedItems.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                ) : schedule.driver ? (
                  <>
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-200/50 z-10">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          Pickup Scheduled
                        </h4>
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full font-medium">
                          Scheduled
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        {schedule.driver} will pickup items soon
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                      <Package className="h-6 w-6 text-slate-400" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-semibold text-slate-400">
                        Pickup from Customer
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        Waiting for driver assignment
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* In Transit to Vendor */}
              <div className="relative flex gap-4">
                {vendorVerifiedCount === totalItems ? (
                  <>
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200/50 z-10">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          Delivered to Vendor
                        </h4>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          Delivered
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        Items delivered to vendor location
                      </p>
                    </div>
                  </>
                ) : schedule.status === "in_progress" ? (
                  <>
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-200/50 z-10 animate-pulse">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          In Transit to Vendor
                        </h4>
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full font-medium">
                          In Transit
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        Items are on the way to your location
                      </p>
                      <div className="mt-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center">
                            <Clock className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-900">
                              Estimated Arrival
                            </p>
                            <p className="text-xs text-blue-600">
                              Today, 12:30 PM - 1:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : schedule.status === "completed" ? (
                  <>
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200/50 z-10">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          Delivered to Vendor
                        </h4>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                          {schedule.date}, 12:15 PM
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        Items delivered successfully
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                      <Truck className="h-6 w-6 text-slate-400" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-semibold text-slate-400">
                        In Transit to Vendor
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        Pending pickup
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Received at Vendor */}
              <div className="relative flex gap-4">
                {vendorVerifiedCount === totalItems ? (
                  <>
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200/50 z-10">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          Received at Vendor
                        </h4>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full font-medium">
                          Verified ✓
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        All {totalItems} items verified and received by vendor
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {flattenedItems.slice(0, 3).map((item, i) => (
                          <span
                            key={i}
                            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                          >
                            ✓ {item.name}
                          </span>
                        ))}
                        {flattenedItems.length > 3 && (
                          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                            +{flattenedItems.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                ) : schedule.status === "completed" ? (
                  <>
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200/50 z-10">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          Received at Vendor
                        </h4>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                          {schedule.date}, 12:20 PM
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        Items verified and received
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                      <Package className="h-6 w-6 text-slate-400" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-semibold text-slate-400">
                        Received at Vendor
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        Waiting for delivery
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Processing */}
              <div className="relative flex gap-4">
                {vendorVerifiedCount === totalItems ? (
                  <>
                    <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-200/50 z-10 animate-pulse">
                      <Timer className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          Processing
                        </h4>
                        <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full font-medium">
                          In Progress
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        Laundry service in progress for {totalItems} items
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                      <Timer className="h-6 w-6 text-slate-400" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-semibold text-slate-400">
                        Processing
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        Laundry service will begin after receiving
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Ready for Delivery */}
              <div className="relative flex gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                  <Package className="h-6 w-6 text-slate-400" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-400">
                      Ready for Delivery
                    </h4>
                    <span className="text-xs text-slate-400">
                      Tomorrow, 10:00 AM
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Items cleaned and ready for pickup
                  </p>
                </div>
              </div>

              {/* Delivery Driver Assigned */}
              <div className="relative flex gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                  <User className="h-6 w-6 text-slate-400" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-400">
                      Delivery Driver Assigned
                    </h4>
                    <span className="text-xs text-slate-400">
                      Tomorrow, 10:30 AM
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Waiting for driver assignment
                  </p>
                </div>
              </div>

              {/* Picked Up from Vendor */}
              <div className="relative flex gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                  <Truck className="h-6 w-6 text-slate-400" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-400">
                      Picked Up from Vendor
                    </h4>
                    <span className="text-xs text-slate-400">
                      Tomorrow, 11:00 AM
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Driver will pickup items for delivery
                  </p>
                </div>
              </div>

              {/* Verified by Delivery Driver */}
              <div className="relative flex gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                  <CheckCircle2 className="h-6 w-6 text-slate-400" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-400">
                      Verified by Delivery Driver
                    </h4>
                    <span className="text-xs text-slate-400">
                      Tomorrow, 11:15 AM
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Items will be verified before delivery
                  </p>
                </div>
              </div>

              {/* Out for Delivery */}
              <div className="relative flex gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                  <Truck className="h-6 w-6 text-slate-400" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-400">
                      Out for Delivery
                    </h4>
                    <span className="text-xs text-slate-400">
                      Tomorrow, 11:30 AM
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    On the way to customer
                  </p>
                </div>
              </div>

              {/* Delivered to Customer */}
              <div className="relative flex gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center z-10">
                  <CheckCircle2 className="h-6 w-6 text-slate-400" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-400">
                      Delivered to Customer
                    </h4>
                    <span className="text-xs text-slate-400">
                      Tomorrow, 12:00 PM
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">Order completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
