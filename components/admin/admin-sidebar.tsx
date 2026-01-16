"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/dashboard/sidebar-provider";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Store,
  Wallet,
  ImageIcon,
  Settings,
  Headphones,
  Package,
  LayoutGrid,
  CreditCard,
  MessageSquare,
} from "lucide-react";

const mainItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "App Content",
    href: "/admin/app",
    icon: ImageIcon,
  },
  {
    title: "Master Items",
    href: "/admin/master/items",
    icon: Package,
  },
];

const managementItems = [
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ClipboardList,
  },
  {
    title: "Vendors",
    href: "/admin/vendors",
    icon: Store,
  },
];

const financeItems = [
  {
    title: "Settlements",
    href: "/admin/finance/settlements",
    icon: CreditCard,
  },
];

const supportItems = [
  {
    title: "Feedback",
    href: "/admin/support/feedback",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();

  const renderNavItems = (items: typeof mainItems, sectionTitle?: string) => (
    <div className="space-y-1">
      {sectionTitle && !isCollapsed && (
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
          {sectionTitle}
        </p>
      )}
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center rounded-lg py-2 transition-all hover:text-primary group relative",
              isCollapsed ? "justify-center px-2" : "gap-3 px-3",
              isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
            )}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!isCollapsed && (
              <span className="text-sm font-medium whitespace-nowrap">
                {item.title}
              </span>
            )}
            {isCollapsed && (
              <div className="absolute left-full ml-4 rounded-md bg-primary px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                {item.title}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="flex h-full w-full flex-col justify-between border-r bg-card py-4 overflow-y-auto">
      <div className="space-y-6 px-3">
        <div className="py-2">
          <div
            className={cn(
              "flex items-center mb-8 h-12",
              isCollapsed ? "justify-center" : "gap-2"
            )}
          >
            {isCollapsed ? (
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">C</span>
              </div>
            ) : (
              <div className="flex flex-col gap-1 items-center w-full">
                <div className="h-12 flex items-center justify-center w-full">
                  <Image
                    src="/logo.png"
                    alt="Cleclo Logo"
                    width={140}
                    height={50}
                    className="h-10 w-auto object-contain"
                    priority
                  />
                </div>
                <span className="text-xs text-[#3E8940] font-bold tracking-wider uppercase text-center">
                  Admin Panel
                </span>
              </div>
            )}
          </div>

          {renderNavItems(mainItems)}
        </div>

        <div className="pt-2 border-t border-slate-100">
          {renderNavItems(managementItems, "Management")}
        </div>

        <div className="pt-2 border-t border-slate-100">
          {renderNavItems(financeItems, "Finance")}
        </div>
      </div>

      <div className="px-3 py-2 space-y-1 border-t border-slate-100 pt-4">
        {renderNavItems(supportItems)}
      </div>
    </div>
  );
}
