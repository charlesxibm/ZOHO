"use client";

import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import CollapsibleLink from "./CollapsibleLink";

export default function SidebarDropdownLink({
  title,
  items,
  icon: Icon,
  active,
  onClick,
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger
        onClick={onClick}
        className="relative flex items-center justify-between w-full py-2 rounded-lg px-3"
      >
        {/* Active box */}
        <span
          className={`absolute inset-0 rounded-lg bg-blue-900 transition-all duration-300 ${
            active ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />

        {/* Icon + title */}
        <div className="relative z-10 flex items-center space-x-2">
          <Icon className="w-4 h-4" />
          <span>{title}</span>
        </div>

        {/* Arrow */}
        <ChevronRight className="relative z-10 w-4 h-4" />
      </CollapsibleTrigger>

      {/* Secondary links */}
      <CollapsibleContent>
        {items.map((item, i) => (
          <CollapsibleLink href={item.href} key={i} item={item} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
