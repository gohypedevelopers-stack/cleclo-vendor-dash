"use client";

import { useState } from "react";
import {
  Package,
  ToggleLeft,
  ToggleRight,
  AlertCircle,
  CheckCircle,
  Clock,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

// Services assigned by admin - vendors can ONLY toggle availability
const assignedServices = [
  {
    id: 1,
    name: "Wash & Fold",
    description: "Regular laundry with folding",
    basePrice: "₹80/kg",
    category: "Wash",
    available: true,
  },
  {
    id: 2,
    name: "Wash & Iron",
    description: "Laundry with ironing service",
    basePrice: "₹120/kg",
    category: "Wash",
    available: true,
  },
  {
    id: 3,
    name: "Dry Clean - Suit",
    description: "Premium dry cleaning for suits",
    basePrice: "₹350/piece",
    category: "Dry Clean",
    available: true,
  },
  {
    id: 4,
    name: "Dry Clean - Saree",
    description: "Specialized saree dry cleaning",
    basePrice: "₹250/piece",
    category: "Dry Clean",
    available: false,
  },
  {
    id: 5,
    name: "Iron Only",
    description: "Pressing and ironing service",
    basePrice: "₹15/piece",
    category: "Iron",
    available: true,
  },
  {
    id: 6,
    name: "Stain Removal",
    description: "Special stain treatment",
    basePrice: "₹100/item",
    category: "Special",
    available: true,
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Wash":
      return "bg-blue-100 text-blue-700";
    case "Dry Clean":
      return "bg-purple-100 text-purple-700";
    case "Iron":
      return "bg-amber-100 text-amber-700";
    case "Special":
      return "bg-pink-100 text-pink-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function ServicesPage() {
  const [services, setServices] = useState(assignedServices);

  const toggleAvailability = (id: number) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, available: !s.available } : s)),
    );
  };

  const availableCount = services.filter((s) => s.available).length;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">
            Service Catalog
          </h1>
          <p className="text-slate-500 mt-1">
            Services assigned to your outlet by Admin
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-700 border-none px-3 py-1">
            <CheckCircle className="h-3.5 w-3.5 mr-1.5" />
            {availableCount} Available
          </Badge>
          <Badge className="bg-slate-100 text-slate-600 border-none px-3 py-1">
            <Clock className="h-3.5 w-3.5 mr-1.5" />
            {services.length - availableCount} Unavailable
          </Badge>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-blue-800">Read-Only Service Catalog</p>
          <p className="text-sm text-blue-700 mt-1">
            Services are assigned and priced by Admin. You can only toggle
            availability (e.g., mark as &quot;Temporarily Unavailable&quot; if
            equipment is broken). Contact Admin to add new services or change
            prices.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-white rounded-xl shadow-sm border p-5 transition-all ${
              !service.available ? "opacity-60" : ""
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-lg ${
                    service.available ? "bg-primary/10" : "bg-slate-100"
                  }`}
                >
                  <Package
                    className={`h-5 w-5 ${
                      service.available ? "text-primary" : "text-slate-400"
                    }`}
                  />
                </div>
                <Badge
                  className={`${getCategoryColor(
                    service.category,
                  )} border-none text-xs`}
                >
                  {service.category}
                </Badge>
              </div>
              <Switch
                checked={service.available}
                onCheckedChange={() => toggleAvailability(service.id)}
              />
            </div>

            <h3 className="font-bold text-black text-lg mb-1">
              {service.name}
            </h3>
            <p className="text-sm text-slate-500 mb-3">{service.description}</p>

            <div className="flex items-center justify-end pt-3 border-t">
              <Badge
                className={`${
                  service.available
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } border-none`}
              >
                {service.available ? (
                  <>
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Available
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Unavailable
                  </>
                )}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Admin */}
      <div className="bg-slate-50 rounded-xl border p-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-black">
            Need to add or modify services?
          </p>
          <p className="text-sm text-slate-500">
            Contact Admin to request changes to your service catalog
          </p>
        </div>
        <Button
          variant="outline"
          className="text-primary border-primary hover:bg-primary/10"
        >
          Contact Admin
        </Button>
      </div>
    </div>
  );
}
