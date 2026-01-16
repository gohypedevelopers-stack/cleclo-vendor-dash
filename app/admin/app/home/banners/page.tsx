"use client";

import { useState } from "react";
import {
  Plus,
  Upload,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Calendar,
  Link as LinkIcon,
  GripVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const banners = [
  {
    id: 1,
    title: "Summer Sale - 20% Off",
    image: "/banners/summer-sale.jpg",
    linkedTo: "Dry Clean Service",
    active: true,
    expiryDate: "Feb 28, 2026",
    clicks: 1245,
  },
  {
    id: 2,
    title: "New User Offer",
    image: "/banners/new-user.jpg",
    linkedTo: "All Services",
    active: true,
    expiryDate: "Mar 31, 2026",
    clicks: 892,
  },
  {
    id: 3,
    title: "Express Delivery",
    image: "/banners/express.jpg",
    linkedTo: "Express Services",
    active: false,
    expiryDate: "Jan 31, 2026",
    clicks: 567,
  },
];

export default function BannersPage() {
  const [bannerList, setBannerList] = useState(banners);

  const toggleBanner = (id: number) => {
    setBannerList((prev) =>
      prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            Banners
          </h1>
          <p className="text-slate-500 mt-1">
            Manage home screen promotional banners
          </p>
        </div>
        <Button className="gap-2 bg-[#3E8940] hover:bg-[#3E8940]/80">
          <Plus className="h-4 w-4" />
          Add Banner
        </Button>
      </div>

      {/* Banner List */}
      <div className="bg-white rounded-xl shadow-sm border divide-y">
        {bannerList.map((banner) => (
          <div key={banner.id} className="p-4 flex items-center gap-4">
            <GripVertical className="h-5 w-5 text-slate-300 cursor-grab" />

            {/* Image Preview */}
            <div className="w-32 h-20 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
              <div className="text-slate-400 text-xs text-center p-2">
                Banner Image
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-black truncate">
                  {banner.title}
                </h3>
                {!banner.active && (
                  <Badge className="bg-slate-100 text-slate-600 border-none text-xs">
                    Inactive
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <LinkIcon className="h-3.5 w-3.5" />
                  {banner.linkedTo}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Expires: {banner.expiryDate}
                </span>
                <span>{banner.clicks} clicks</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Switch
                checked={banner.active}
                onCheckedChange={() => toggleBanner(banner.id)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-slate-500 hover:text-slate-700"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Banner Tips</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Recommended size: 1080x540 pixels (2:1 ratio)</li>
          <li>• Use high-contrast text for better visibility</li>
          <li>• Drag banners to reorder them in the app</li>
        </ul>
      </div>
    </div>
  );
}
