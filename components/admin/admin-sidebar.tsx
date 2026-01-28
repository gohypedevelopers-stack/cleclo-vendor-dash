"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/dashboard/sidebar-provider";
import { useState } from "react";
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
  CreditCard,
  MessageSquare,
  ChevronDown,
  Bike,
  User,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: any;
  subItems?: NavItem[];
}

const mainItems: NavItem[] = [
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

const managementItems: NavItem[] = [
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
    subItems: [
      {
        title: "All",
        href: "/admin/users",
        icon: Users,
      },
      {
        title: "Customer",
        href: "/admin/users?role=customer",
        icon: Users,
      },
      {
        title: "Vendor",
        href: "/admin/vendors",
        icon: Store,
      },
      {
        title: "Rider",
        href: "/admin/riders",
        icon: Bike,
      },
    ],
  },
  {
    title: "Customer",
    href: "/admin/customer",
    icon: User,
  },
  {
    title: "Vendor",
    href: "/admin/vendor",
    icon: Store,
    subItems: [
      {
        title: "All",
        href: "/admin/vendor",
        icon: Users,
      },
      {
        title: "Vendors",
        href: "/admin/vendor/all",
        icon: Users,
      },
      {
        title: "New verification",
        href: "/admin/vendor/verification",
        icon: Store,
      },
      {
        title: "Outlets",
        href: "/admin/vendor/outlets",
        icon: Bike,
      },
      {
        title: "Vendor analytics",
        href: "/admin/vendor/analytics",
        icon: Bike,
      },
      {
        title: "Payments",
        href: "/admin/vendor/payments",
        icon: CreditCard,
      },
      {
        title: "Support",
        href: "/admin/vendor/support",
        icon: Bike,
      },
    ],
  },
  {
    title: "Rider",
    href: "/admin/rider",
    icon: Bike,
    subItems: [
      {
        title: "All",
        href: "/admin/rider",
        icon: Users,
      },
      {
        title: "Riders",
        href: "/admin/rider/all",
        icon: Users,
      },
      {
        title: "New verification",
        href: "/admin/rider/verification",
        icon: Store,
      },

      {
        title: "Rider analytics",
        href: "/admin/rider/analytics",
        icon: Bike,
      },
      {
        title: "Payments",
        href: "/admin/rider/payments",
        icon: CreditCard,
      },
      {
        title: "Support",
        href: "/admin/rider/support",
        icon: Bike,
      },
    ],
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ClipboardList,
  },
];

const financeItems: NavItem[] = [
  {
    title: "Settlements",
    href: "/admin/finance/settlements",
    icon: CreditCard,
  },
];

const supportItems: NavItem[] = [
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
  const searchParams = useSearchParams();
  const { isCollapsed } = useSidebar();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  const renderNavItems = (items: NavItem[], sectionTitle?: string) => (
    <div className="space-y-1">
      {sectionTitle && !isCollapsed && (
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
          {sectionTitle}
        </p>
      )}
      {items.map((item) => {
        // Logic for main parent items
        const isActive =
          pathname === item.href ||
          (item.href !== "/admin" && pathname.startsWith(item.href + "/"));
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const isOpen = openMenus.includes(item.title);

        return (
          <div key={item.title}>
            <div
              className={cn(
                "flex items-center rounded-lg transition-all hover:text-primary group relative cursor-pointer",
                isCollapsed ? "justify-center px-2 py-2" : "gap-3 px-3 py-2",
                isActive && !hasSubItems
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground",
              )}
              onClick={() => {
                if (hasSubItems && !isCollapsed) {
                  toggleMenu(item.title);
                }
              }}
            >
              {!hasSubItems || isCollapsed ? (
                <Link
                  href={item.href}
                  className="contents"
                  onClick={(e) => hasSubItems && e.preventDefault()}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="text-sm font-medium whitespace-nowrap flex-1">
                        {item.title}
                      </span>
                      {hasSubItems && (
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isOpen && "rotate-180",
                          )}
                        />
                      )}
                    </>
                  )}
                </Link>
              ) : (
                <>
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="text-sm font-medium whitespace-nowrap flex-1">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isOpen && "rotate-180",
                        )}
                      />
                    </>
                  )}
                </>
              )}

              {isCollapsed && (
                <div className="absolute left-full ml-4 rounded-md bg-primary px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                  {item.title}
                </div>
              )}
            </div>

            {hasSubItems && isOpen && !isCollapsed && (
              <div className="ml-9 space-y-1 mt-1">
                {item.subItems!.map((subItem) => {
                  // Advanced logic for sub-items active state
                  let isSubActive = false;

                  // Parse the href to see if it has query params
                  const [itemPath, itemQuery] = subItem.href.split("?");

                  if (itemQuery) {
                    // It has query params (e.g., role=customer)
                    const params = new URLSearchParams(itemQuery);
                    const roleParam = params.get("role");

                    if (roleParam) {
                      // Check if current URL matches pathname AND has the same role param
                      isSubActive =
                        pathname === itemPath &&
                        searchParams.get("role") === roleParam;
                    } else {
                      // Generic matching if other params exist
                      isSubActive =
                        pathname === itemPath ||
                        pathname.startsWith(itemPath + "/");
                    }
                  } else {
                    // It has NO query params (e.g., /admin/users - "All")
                    // It should match strictly if there is NO role param in current URL
                    if (subItem.href === "/admin/users") {
                      isSubActive =
                        pathname === subItem.href && !searchParams.get("role");
                    } else if (
                      subItem.href === "/admin/vendor" ||
                      subItem.href === "/admin/rider"
                    ) {
                      // Fix: "All" should specifically match exact path
                      // to avoid highlighting when on sub-routes
                      isSubActive = pathname === subItem.href;
                    } else {
                      isSubActive =
                        pathname === subItem.href ||
                        pathname.startsWith(subItem.href + "/");
                    }
                  }

                  return (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary",
                        isSubActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                      {subItem.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="flex h-full w-full flex-col justify-between border-r bg-card py-4 overflow-y-auto hidden-scrollbar">
      <div className="space-y-6 px-3">
        <div className="py-2">
          <div
            className={cn(
              "flex items-center mb-8 h-12",
              isCollapsed ? "justify-center" : "gap-2",
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
