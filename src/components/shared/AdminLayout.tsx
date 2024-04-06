import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
  BellIcon,
  FlameIcon,
  LayoutDashboardIcon,
  MenuIcon,
  PackageIcon,
  ReceiptTextIcon,
  ScrollTextIcon,
  Settings2Icon,
  ShieldCheckIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Command, CommandGroup, CommandItem } from "../ui/command";
import Link from "next/link";

const menuList = [
  {
    group: "General",
    options: [
      {
        link: "/admin/dashboard",
        title: "Dashboard",
        icon: <LayoutDashboardIcon className="h-5 w-5" />,
      },
      {
        link: "/admin/products",
        title: "Products",
        icon: <PackageIcon className="h-5 w-5" />,
      },
      {
        link: "/admin/orders",
        title: "Orders",
        icon: <ShoppingCartIcon className="h-5 w-5" />,
      },
      {
        link: "/admin/billings",
        title: "Billings",
        icon: <ReceiptTextIcon className="h-5 w-5" />,
      },
    ],
  },
  {
    group: "Settings",
    options: [
      {
        link: "/admin/general-settings",
        title: "General Settings",
        icon: <Settings2Icon className="h-5 w-5" />,
      },
      {
        link: "/admin/logs",
        title: "Logs",
        icon: <ScrollTextIcon className="h-5 w-5" />,
      },
      {
        link: "/admin/notifications",
        title: "Notifications",
        icon: <BellIcon className="h-5 w-5" />,
      },
    ],
  },
];

type MenuList = typeof menuList;

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 h-screen flex items-start">
      <div className="w-[250px] h-[calc(100vh-60px)] border-r">
        <p className="bg-blue-100 uppercase font-bold text-blue-800 flex p-4">
          <span>
            <ShieldCheckIcon className="h-5 w-5 text-blue-700" />
          </span>{" "}
          Admin Kai
        </p>
        <Command>
          {menuList.map((menu, key) => (
            <CommandGroup key={key} heading={menu.group}>
              {menu.options.map((option, optionKey) => (
                <Link
                  href={option.link}
                  className="text-sm px-4 hover:bg-slate-300 py-1 cursor-pointer flex gap-2"
                  key={optionKey}
                >
                  {option.icon}
                  {option.title}
                </Link>
              ))}
            </CommandGroup>
          ))}
        </Command>
      </div>
      <div>{children}</div>
    </div>
  );
}
