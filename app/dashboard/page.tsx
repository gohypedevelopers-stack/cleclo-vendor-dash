"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Plus, X, Bell, Package } from "lucide-react";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { NewOrderModal } from "@/components/dashboard/new-order-modal";
import { cn } from "@/lib/utils";

// Static notification data
const STATIC_NOTIFICATION = {
  id: "ORD-8292",
  customer: "Mark Wilson",
  items: "2 Suits Dry Clean",
  earning: "₹280",
  time: "Just now",
};

export default function DashboardPage() {
  const [showNewOrder, setShowNewOrder] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Show notification on page load (but NOT the popup)
  useEffect(() => {
    const notifTimer = setTimeout(() => {
      setShowNotification(true);
    }, 500);

    return () => clearTimeout(notifTimer);
  }, []);

  // Auto-hide notification after 2 minutes
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 20000); // 2 minutes
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div className="flex flex-col gap-8 relative">
      {/* Notification Toast */}
      <div
        className={cn(
          "fixed top-4 left-1/2 z-50 transition-all duration-500 transform -translate-x-1/2",
          showNotification
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-4 w-[380px] overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#3E8940]/10 flex items-center justify-center animate-pulse">
                <Bell className="h-5 w-5 text-[#3E8940]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  New Order Assigned!
                </h4>
                <p className="text-xs text-slate-500">
                  {STATIC_NOTIFICATION.time}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Order Details */}
          <div className="bg-slate-50 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase">
                Order {STATIC_NOTIFICATION.id}
              </span>
              <span className="text-lg font-black text-[#3E8940]">
                {STATIC_NOTIFICATION.earning}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-700">
                {STATIC_NOTIFICATION.items}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Customer: {STATIC_NOTIFICATION.customer}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 h-9 text-slate-700 border-slate-200"
              onClick={() => setShowNotification(false)}
            >
              Dismiss
            </Button>
            <Button
              size="sm"
              className="flex-1 h-9 bg-[#3E8940] hover:bg-[#3E8940]/90"
              onClick={() => {
                setShowNotification(false);
                setShowNewOrder(true);
              }}
            >
              View Details
            </Button>
          </div>

          {/* Progress bar animation */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
            <div
              className="h-full bg-[#3E8940] animate-shrink"
              style={{
                animation: "shrink 120s linear forwards",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-primary mt-1">
            Welcome back, here&apos;s what&apos;s happening today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="gap-2 text-black hover:text-black "
          >
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <StatsCards />

      <RecentOrders onOrderClick={() => setShowNewOrder(true)} />

      <NewOrderModal open={showNewOrder} onOpenChange={setShowNewOrder} />
    </div>
  );
}
