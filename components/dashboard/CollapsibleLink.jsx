"use client";

import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function CollapsibleLink({ item }) {
  const pathname = usePathname();
  const active = pathname === item.href;

  return (
    <Link
      href={item.href}
      className="relative flex items-center justify-between pl-7 transition-all duration-300 py-2.5"
    >
      <span className="text-sm">{item.title}</span>

      <PlusCircle className="w-4 h-4" />

      {active && (
        <span className="absolute bottom-0 left-7 w-11 border-b-2 border-orange-400" />
      )}
    </Link>
  );
}
