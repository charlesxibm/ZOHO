"use client";
import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  Files,
  Home,
  HomeIcon,
  LucideHome,
  Network,
  PlusCircle,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CollapsibleLink from "./CollapsibleLink";
import SidebarDropdownLink from "./SidebarDropdownLink";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const inventoryLinks = [
    {
      title: "Items",
      href: "/dashboard/inventory/items/new",
    },
    {
      title: "Categories",
      href: "/dashboard/inventory/categories/new",
    },
    {
      title: "Brands",
      href: "/dashboard/inventory/brands/new",
    },
    {
      title: "Units",
      href: "/dashboard/inventory/units/new",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory/warehouse/new",
    },
    {
      title: "Inventory Adjustments",
      href: "/dashboard/inventory/adjustments/new",
    },
    {
      title: "Supplier",
      href: "/dashboard/inventory/supplier/new",
    },
  ];
  const salesLinks = [
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Sales Orders",
      href: "#",
    },
    {
      title: "Packages",
      href: "",
    },
    {
      title: "Shipments",
      href: "#",
    },
    {
      title: "Invoices",
      href: "#",
    },
    {
      title: "Sales Receipt",
      href: "",
    },
    {
      title: "Payment received",
      href: "#",
    },
    {
      title: "Sales Returns",
      href: "#",
    },
    {
      title: "Credit Notes",
      href: "",
    },
  ];
  return (
    <div
      className="w-60 min-h-screen
    bg-slate-800 text-slate-50"
    >
      {/* Top part */}
      <div className="flex flex-col">
        {/* Logo */}

        <Link
          href=""
          className="bg-slate-900  flex space-x-2 items-center  py-4 px-2"
        >
          <ShoppingCart />
          <span className="text-xl font-semibold">Inventory</span>
        </Link>
      </div>

      {/* Links */}
      <nav className="flex flex-col gap-8 px-3 py-6">
        <SidebarMenuItem
          title="Home"
          icon={LucideHome}
          href="/dashboard/home/overview"
          active={activeMenu === "Home"}
          onClick={() => setActiveMenu("Home")}
        />

        <SidebarDropdownLink
          items={inventoryLinks}
          title="Inventory"
          icon={BaggageClaim}
          href="/dashboard/inventory"
          active={activeMenu === "Inventory"}
          onClick={() => setActiveMenu("Inventory")}
        />
        <SidebarDropdownLink
          items={salesLinks}
          title="Sales"
          icon={ShoppingBasket}
          href="/dashboard/inventory"
          active={activeMenu === "Sales"}
          onClick={() => setActiveMenu("Sales")}
        />

        <SidebarMenuItem
          title="Purchases"
          icon={ShoppingBag}
          href="/dashboard/inventory"
          active={activeMenu === "Purchases"}
          onClick={() => setActiveMenu("Purchases")}
        />

        <SidebarMenuItem
          title="Integrations"
          icon={Cable}
          href="/dashboard/inventory"
          active={activeMenu === "Integrations"}
          onClick={() => setActiveMenu("Integrations")}
        />
        <SidebarMenuItem
          title="Reports"
          icon={BarChart4}
          href="/dashboard/inventory"
          active={activeMenu === "Reports"}
          onClick={() => setActiveMenu("Reports")}
        />
        <SidebarMenuItem
          title="Documents"
          icon={Files}
          href="/dashboard/inventory"
          active={activeMenu === "Documents"}
          onClick={() => setActiveMenu("Documents")}
        />
      </nav>
      <SubscriptionCard />
      {/* Bottom */}
      <div className="flex flex-col">
        <button
          className="bg-slate-900  py-4 px-24 
            flex space-x-2 items-center jistify-center"
        >
          <ChevronLeft />
        </button>
      </div>
      {/* Subscription card */}
      {/* Footer Icon */}
    </div>
  );
}
