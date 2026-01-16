"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Zap,
  Shirt,
  Clock,
  Calendar,
  MapPin,
  Banknote,
  ArrowRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import { useState } from "react";

interface NewOrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SAMPLE_ITEMS = [
  {
    id: 1,
    name: "Men's Cotton Shirt",
    service: "Wash & Iron",
    type: "Wash",
    count: 3,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=150&q=80",
      "https://images.unsplash.com/photo-1620012253295-c15cc3ef1887?w=150&q=80",
    ],
  },
  {
    id: 2,
    name: "Pyjama",
    service: "Wash & Fold",
    type: "Wash",
    count: 2,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=150&q=80",
      "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?w=150&q=80",
    ],
  },
  {
    id: 3,
    name: "Shorts",
    service: "Wash & Fold",
    type: "Wash",
    count: 2,
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=150&q=80",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=150&q=80",
    ],
  },
  {
    id: 4,
    name: "T-Shirt",
    service: "Wash & Iron",
    type: "Wash",
    count: 4,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=150&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=150&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=150&q=80",
    ],
  },
  {
    id: 5,
    name: "Denim Jeans",
    service: "Dry Clean",
    type: "Dry Clean",
    count: 2,
    images: [
      "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=150&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=150&q=80",
    ],
  },
];

const getBadgeColor = (type: string) => {
  switch (type) {
    case "Wash":
      return "bg-[#A8E6A1] text-[#2d5c2a]";
    case "Dry Clean":
      return "bg-[#F6A6A6] text-[#6b3434]";
    case "Both":
      return "bg-[#FFD580] text-[#7c5e10]";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

export function NewOrderModal({ open, onOpenChange }: NewOrderModalProps) {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const toggleImageSelection = (imgUrl: string) => {
    setSelectedImages((prev) =>
      prev.includes(imgUrl)
        ? prev.filter((url) => url !== imgUrl)
        : [...prev, imgUrl]
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-[#F8F9FB] border-none shadow-2xl gap-0">
        {/* Custom Header */}
        <div className="bg-white p-5 pb-4 border-b border-dashed border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#3E8940]/10 flex items-center justify-center text-[#3E8940]">
              <Bell className="h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900 leading-tight">
                New Order Assigned
              </DialogTitle>
              <p className="text-sm font-medium text-slate-500">
                Order #284-9321
              </p>
            </div>
          </div>
          <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-100 border-none px-3 py-1 text-xs font-bold uppercase tracking-wider gap-1 rounded-full">
            <Zap className="h-3 w-3 fill-orange-600" /> EXPRESS
          </Badge>
        </div>

        {/* Content Scrollable */}
        <div className="p-5 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Items Summary */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Items Summary (
                {SAMPLE_ITEMS.reduce((acc, item) => acc + item.count, 0)})
              </h3>
              <button
                onClick={() => setShowDetails(true)}
                className="text-xs font-bold text-[#3E8940] cursor-pointer hover:underline outline-none"
              >
                View details
              </button>
            </div>
            {/* Item List Box */}
            <div className="bg-white rounded-xl p-2 border border-slate-100 space-y-1">
              {SAMPLE_ITEMS.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setShowDetails(true)}
                  className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="relative shrink-0">
                    <div className="h-12 w-12 rounded-lg flex items-center justify-center overflow-hidden relative bg-slate-100">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 p-0 flex items-center justify-center rounded-full bg-white border shadow-sm text-[10px] text-slate-700 z-10">
                      x{item.count}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {item.name}
                    </p>
                    <Badge
                      className={cn(
                        "mt-1 border-0 px-1.5 py-0 text-[10px] uppercase font-bold tracking-wide rounded-md",
                        getBadgeColor(item.type)
                      )}
                    >
                      {item.service}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Dialog */}
          <Dialog open={showDetails} onOpenChange={setShowDetails}>
            <DialogContent className="sm:max-w-[500px] bg-white p-0 gap-0 overflow-hidden shadow-2xl transition-all">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-20">
                <DialogTitle className="text-xl font-bold text-slate-900">
                  Order Items (
                  {SAMPLE_ITEMS.reduce((acc, item) => acc + item.count, 0)})
                </DialogTitle>
              </div>
              <div className="p-6 max-h-[70vh] overflow-y-auto bg-slate-50/30 scrollbar-primary">
                <div className="space-y-6 pb-4">
                  {Object.entries(
                    SAMPLE_ITEMS.reduce((acc, item) => {
                      if (!acc[item.type]) acc[item.type] = [];
                      acc[item.type].push(item);
                      return acc;
                    }, {} as Record<string, typeof SAMPLE_ITEMS>)
                  ).map(([type, items]) => (
                    <div key={type} className="space-y-3">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider pl-1">
                        {type}
                      </h4>
                      <div className="space-y-3">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex flex-col gap-4 p-5 bg-white hover:bg-slate-50/50 rounded-2xl transition-all border border-slate-100 shadow-sm"
                          >
                            {/* Header: Title/Service & Badge */}
                            <div className="flex items-start justify-between">
                              <div>
                                <h5 className="text-base font-bold text-slate-900 leading-tight">
                                  {item.name}
                                </h5>
                                <p className="text-sm text-slate-500 font-medium mt-1">
                                  {item.service}
                                </p>
                              </div>
                              <Badge
                                className={cn(
                                  "border-0 px-3 py-1 text-[11px] uppercase font-bold tracking-wider rounded-full",
                                  getBadgeColor(item.type)
                                )}
                              >
                                {item.type.toUpperCase()}
                              </Badge>
                            </div>

                            {/* Images Grid */}
                            <div className="flex flex-wrap gap-3">
                              {item.images.map((img, idx) => {
                                const isSelected = selectedImages.includes(img);
                                return (
                                  <div
                                    key={idx}
                                    onClick={() => toggleImageSelection(img)}
                                    className={cn(
                                      "group relative h-16 w-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm cursor-pointer transition-all",
                                      isSelected &&
                                        "ring-2 ring-[#3E8940] ring-offset-2"
                                    )}
                                  >
                                    <img
                                      src={img}
                                      alt={`${item.name} ${idx + 1}`}
                                      className="h-full w-full object-cover"
                                    />
                                    {/* Selection indicator overlay */}
                                    <div
                                      className={cn(
                                        "absolute inset-0 transition-colors flex items-center justify-center",
                                        isSelected
                                          ? "bg-black/20"
                                          : "bg-black/0 group-hover:bg-black/5"
                                      )}
                                    >
                                      {isSelected && (
                                        <div className="bg-[#3E8940] rounded-full p-1 shadow-sm">
                                          <Check
                                            className="h-4 w-4 text-white"
                                            strokeWidth={3}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-slate-100 bg-white sticky bottom-0 z-20">
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-200 text-slate-700 font-bold h-12 rounded-xl text-base hover:bg-slate-50 hover:text-slate-900"
                    onClick={() => setShowDetails(false)}
                  >
                    Close
                  </Button>
                  <Button
                    className="flex-1 bg-[#3E8940] text-white font-bold h-12 rounded-xl text-base hover:bg-[#3E8940]/90 shadow-lg shadow-emerald-500/20"
                    onClick={() => {
                      setShowDetails(false);
                      onOpenChange(false);
                      router.push("/dashboard/schedule");
                    }}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                <Shirt className="h-3.5 w-3.5" /> SERVICE
              </div>
              <p className="font-bold text-slate-900 text-sm">Wash & Fold</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                <Clock className="h-3.5 w-3.5" /> PICKUP
              </div>
              <p className="font-bold text-slate-900 text-sm">
                Today, 2pm - 4pm
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                <Calendar className="h-3.5 w-3.5" /> DEADLINE
              </div>
              <p className="font-bold text-slate-900 text-sm">Tomorrow, 10am</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5" /> DISTANCE
              </div>
              <p className="font-bold text-slate-900 text-sm">2.4 miles away</p>
            </div>
          </div>

          {/* Address & Map */}
          <div className="bg-white rounded-xl border border-slate-100 overflow-hidden flex h-18 shadow-sm">
            <div className="flex-1 p-3 pl-4 flex flex-col justify-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                PICKUP ADDRESS
              </p>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    452 Maple Ave, Apt 4B
                  </p>
                  <p className="text-[11px] text-slate-400">
                    San Francisco, CA 94110
                  </p>
                </div>
              </div>
            </div>
            <div className="w-28 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px] bg-white relative flex items-center justify-center border-l border-slate-100">
              <div className="relative flex items-center justify-center translate-y-[-4px]">
                <MapPin
                  className="h-14 w-14 text-[#1a1f1c]"
                  strokeWidth={1.5}
                />
                <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <MapPin className="h-4 w-4 text-[#3E8940] fill-[#3E8940]" />
                </div>
              </div>
            </div>
          </div>

          {/* Earning */}
          <div className="bg-[#3E8940]/5 rounded-xl border border-[#3E8940]/10 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#3E8940]/10 flex items-center justify-center text-[#3E8940]">
                <Banknote className="h-5 w-5" />
              </div>
              <span className="font-bold text-slate-700">Your Earning</span>
            </div>
            <span className="text-2xl font-black text-[#3E8940] tracking-tight">
              $24.50
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-white p-5 pt-2 pb-5 border-t border-slate-50 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-12 border-slate-200 text-slate-700 font-bold text-base hover:bg-slate-50 hover:text-slate-900 rounded-xl"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button className="h-12 bg-[#3E8940] hover:bg-[#3E8940]/90 text-white font-bold text-base shadow-lg shadow-emerald-500/20 rounded-xl">
              Accept Order <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-center text-[10px] text-slate-400 font-medium">
            By accepting, you agree to fulfill the order within the specified
            window.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
