"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Plus,
  Trash2,
  Edit,
  GripVertical,
  Save,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const icons = ["👔", "👗", "🧒", "🏠", "🏢", "📦", "👕", "👖", "🧥", "👟"];

const initialCategories = [
  {
    id: 1,
    name: "Men",
    icon: "👔",
    subCategoriesCount: 12,
    active: true,
    services: ["Wash", "Both", "Dry Clean"],
  },
  {
    id: 2,
    name: "Women",
    icon: "👗",
    subCategoriesCount: 15,
    active: true,
    services: ["Wash", "Both", "Dry Clean"],
  },
  {
    id: 3,
    name: "Kids",
    icon: "🧒",
    subCategoriesCount: 8,
    active: true,
    services: ["Wash", "Dry Clean"],
  },
  {
    id: 4,
    name: "Household",
    icon: "🏠",
    subCategoriesCount: 10,
    active: true,
    services: ["Wash", "Dry Clean"],
  },
  {
    id: 5,
    name: "Institutions",
    icon: "🏢",
    subCategoriesCount: 6,
    active: true,
    services: ["Wash", "Dry Clean"],
  },
  {
    id: 6,
    name: "Others",
    icon: "📦",
    subCategoriesCount: 4,
    active: true,
    services: ["Wash", "Dry Clean"],
  },
];

const serviceColors: Record<string, { bg: string; text: string }> = {
  Wash: { bg: "bg-blue-100", text: "text-blue-700" },
  "Dry Clean": { bg: "bg-purple-100", text: "text-purple-700" },
  Iron: { bg: "bg-amber-100", text: "text-amber-700" },
};

const serviceUrlColors: Record<string, string> = {
  Wash: "#3B82F6",
  "Wash & Iron": "#10B981",
  "Dry Clean": "#8B5CF6",
  "Iron Only": "#F59E0B",
};

export default function CategoriesPage() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service");

  const [categoryList, setCategoryList] = useState(initialCategories);
  const [saved, setSaved] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    icon: "👔",
    services: ["Wash", "Dry Clean"] as string[],
  });
  const [quickAddName, setQuickAddName] = useState("");

  const toggleNewCategoryService = (service: string) => {
    setNewCategory((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const toggleCategory = (id: number) => {
    setCategoryList((prev) =>
      prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
    );
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAddCategory = (
    name: string,
    icon: string,
    services: string[]
  ) => {
    if (!name.trim()) return;
    if (services.length === 0) return;

    const newId = Math.max(...categoryList.map((c) => c.id)) + 1;
    setCategoryList((prev) => [
      ...prev,
      {
        id: newId,
        name: name,
        icon: icon,
        subCategoriesCount: 0,
        active: true,
        services: services,
      },
    ]);
  };

  const handleDialogAdd = () => {
    handleAddCategory(newCategory.name, newCategory.icon, newCategory.services);
    setNewCategory({ name: "", icon: "👔", services: ["Wash", "Dry Clean"] });
    setIsDialogOpen(false);
  };

  const handleQuickAdd = () => {
    handleAddCategory(quickAddName, "📦", ["Wash", "Dry Clean"]);
    setQuickAddName("");
  };

  const serviceColor = serviceFromUrl
    ? serviceUrlColors[serviceFromUrl] || "#3E8940"
    : "#3E8940";

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-4xl space-y-6">
        {/* Breadcrumb */}
        {serviceFromUrl && (
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/admin/app/services/services"
              className="text-primary hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Services
            </Link>
            <span className="text-slate-400">/</span>
            <Badge
              className="border-none text-xs"
              style={{
                backgroundColor: serviceColor + "20",
                color: serviceColor,
              }}
            >
              {serviceFromUrl}
            </Badge>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl text-black font-bold tracking-tight">
              Categories {serviceFromUrl && `- ${serviceFromUrl}`}
            </h1>
            <p className="text-slate-500 mt-1">
              Click on a category to view its sub-categories
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setIsDialogOpen(true)}
            >
              <Plus className="h-4 w-4" />
              Add Category
            </Button>
            <Button
              className="gap-2 bg-[#3E8940] hover:bg-[#3E8940]/80"
              onClick={handleSave}
            >
              <Save className="h-4 w-4" />
              {saved ? "Saved!" : "Save"}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border p-5 text-center">
            <p className="text-3xl font-bold text-primary">
              {categoryList.length}
            </p>
            <p className="text-sm text-slate-500 mt-1">Total Categories</p>
          </div>
          <div className="bg-white rounded-2xl border p-5 text-center">
            <p className="text-3xl font-bold text-green-600">
              {categoryList.filter((c) => c.active).length}
            </p>
            <p className="text-sm text-slate-500 mt-1">Active</p>
          </div>
          <div className="bg-white rounded-2xl border p-5 text-center">
            <p className="text-3xl font-bold text-slate-400">
              {categoryList.filter((c) => !c.active).length}
            </p>
            <p className="text-sm text-slate-500 mt-1">Inactive</p>
          </div>
        </div>

        {/* Categories List */}
        <div className="bg-white rounded-2xl shadow-sm border divide-y">
          {categoryList.map((category) => (
            <div
              key={category.id}
              className={`flex items-center ${
                !category.active ? "opacity-60" : ""
              }`}
            >
              <div className="p-5 flex items-center gap-4 flex-1">
                <GripVertical className="h-5 w-5 text-slate-300 cursor-grab" />

                <div
                  className="h-14 w-14 rounded-xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: serviceColor + "15" }}
                >
                  {category.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-black text-lg">
                      {category.name}
                    </h3>
                    {!category.active && (
                      <Badge className="bg-slate-100 text-slate-600 border-none text-xs">
                        Hidden
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-sm text-slate-500">
                      {category.subCategoriesCount} sub-categories
                    </span>
                    <span className="text-slate-300">•</span>
                    <div className="flex gap-1.5 flex-wrap">
                      {category.services.map((service) => (
                        <Badge
                          key={service}
                          className={`border-none text-[10px] px-2 py-0.5 ${serviceColors[service]?.bg} ${serviceColors[service]?.text}`}
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Switch
                    checked={category.active}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Link
                href={`/admin/app/services/subcategories?category=${
                  category.name
                }${serviceFromUrl ? `&service=${serviceFromUrl}` : ""}`}
                className="px-6 py-5 border-l hover:bg-slate-50 transition-colors flex items-center gap-2 text-primary font-medium"
              >
                View
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Add */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h3 className="font-bold text-black mb-4">Quick Add Category</h3>
          <div className="flex gap-3">
            <Input
              placeholder="Category name"
              className="flex-1"
              value={quickAddName}
              onChange={(e) => setQuickAddName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleQuickAdd()}
            />
            <Button
              className="bg-[#3E8940] hover:bg-[#3E8940]/90 gap-2"
              onClick={handleQuickAdd}
            >
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </div>

      {/* Add Category Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Category Name
              </label>
              <Input
                placeholder="e.g., Pets"
                value={newCategory.name}
                onChange={(e) =>
                  setNewCategory({ ...newCategory, name: e.target.value })
                }
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Icon</label>
              <div className="flex gap-2 mt-1 flex-wrap">
                {icons.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => setNewCategory({ ...newCategory, icon })}
                    className={`h-10 w-10 rounded-lg text-xl flex items-center justify-center border-2 transition-all ${
                      newCategory.icon === icon
                        ? "border-primary bg-primary/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">
                Services
              </label>
              <p className="text-xs text-slate-500 mb-2">
                Select which services this category supports
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Wash", "Dry Clean", "Iron"].map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleNewCategoryService(service)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border-2 ${
                      newCategory.services.includes(service)
                        ? `${serviceColors[service]?.bg} ${serviceColors[service]?.text} border-current`
                        : "bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
              {newCategory.services.length === 0 && (
                <p className="text-xs text-red-500 mt-1">
                  Please select at least one service
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-[#3E8940] hover:bg-[#3E8940]/90"
              onClick={handleDialogAdd}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
