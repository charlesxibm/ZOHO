"use client";
import FixedHeader from "@/components/dashboard/FixedHeader";
import {
  Boxes,
  Component,
  ComponentIcon,
  LayoutGrid,
  Ratio,
  Ribbon,
  ScrollText,
  Warehouse,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import OptionCard from "@/components/dashboard/OptionCard";
export default function Inventory() {
  //const {title,description,link,linkTitle,enabled}= optionData;
  const optionCards = [
    {
      title: "Items",
      description:
        "create Standalone items and services that you can buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: LayoutGrid,
    },
    {
      title: "Categories",
      description:
        "create Standalone items and services that you can buy and sell",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New category",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Brands",
      description:
        "create Standalone items and services that you can buy and sell",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Brands",
      enabled: true,
      icon: ScrollText,
    },
    {
      title: "Warehouse",
      description:
        "create Standalone items and services that you can buy and sell",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New warehouse",
      enabled: true,
      icon: Warehouse,
    },
    {
      title: "Units",
      description:
        "create Standalone items and services that you can buy and sell",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New unit",
      enabled: true,
      icon: ComponentIcon,
    },
    {
      title: "Suppliers",
      description:
        "create Standalone items and services that you can buy and sell",
      link: "/dashboard/inventory/supplier/new",
      linkTitle: "New Supplier",
      enabled: true,
      icon: Ribbon,
    },
    {
      title: "Inventory Adjustment",
      description: "Transfer Stock from the Main Warehouse",
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: "New Adjustments",
      enabled: true,
      icon: Ratio,
    },
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
        {optionCards.map((card, i) => {
          return <OptionCard key={i} optionData={card} />;
        })}
      </div>
      <h2>Inventory</h2>
    </div>
  );
}
