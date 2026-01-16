"use client";

import { useState } from "react";
import { Eye, EyeOff, Palette, GripVertical, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const services = [
  {
    id: 1,
    name: "Wash & Fold",
    icon: "🧺",
    color: "#3E8940",
    visible: true,
    order: 1,
  },
  {
    id: 2,
    name: "Wash & Iron",
    icon: "👔",
    color: "#4A90D9",
    visible: true,
    order: 2,
  },
  {
    id: 3,
    name: "Dry Clean",
    icon: "🧥",
    color: "#9B59B6",
    visible: true,
    order: 3,
  },
  {
    id: 4,
    name: "Iron Only",
    icon: "🔥",
    color: "#E67E22",
    visible: true,
    order: 4,
  },
  {
    id: 5,
    name: "Premium Care",
    icon: "✨",
    color: "#F1C40F",
    visible: false,
    order: 5,
  },
  {
    id: 6,
    name: "Shoe Cleaning",
    icon: "👟",
    color: "#1ABC9C",
    visible: false,
    order: 6,
  },
];

export default function ServicesGridPage() {
  const [serviceList, setServiceList] = useState(services);
  const [saved, setSaved] = useState(false);

  const toggleVisibility = (id: number) => {
    setServiceList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, visible: !s.visible } : s))
    );
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            Services Grid
          </h1>
          <p className="text-slate-500 mt-1">
            Control which services appear on the home screen
          </p>
        </div>
        <Button
          className="gap-2 bg-[#3E8940] hover:bg-[#3E8940]/80"
          onClick={handleSave}
        >
          <Save className="h-4 w-4" />
          {saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>

      {/* Services Grid */}
      <div className="bg-white rounded-xl shadow-sm border divide-y">
        {serviceList.map((service) => (
          <div key={service.id} className="p-4 flex items-center gap-4">
            <GripVertical className="h-5 w-5 text-slate-300 cursor-grab" />

            {/* Icon Preview */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: service.color + "20" }}
            >
              {service.icon}
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-black">{service.name}</h3>
                {!service.visible && (
                  <Badge className="bg-slate-100 text-slate-600 border-none text-xs">
                    Hidden
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: service.color }}
                  />
                  <span className="text-xs text-slate-500">
                    {service.color}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {service.visible ? (
                  <Eye className="h-4 w-4 text-green-600" />
                ) : (
                  <EyeOff className="h-4 w-4 text-slate-400" />
                )}
                <Switch
                  checked={service.visible}
                  onCheckedChange={() => toggleVisibility(service.id)}
                />
              </div>
              <Button variant="outline" size="sm" className="gap-1.5">
                <Palette className="h-4 w-4" />
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Tips</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Drag services to reorder them on the home screen</li>
          <li>• Hidden services won&apos;t appear to users</li>
          <li>• Click Edit to change icon and color</li>
        </ul>
      </div>
    </div>
  );
}
