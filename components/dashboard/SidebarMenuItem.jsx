"use client";

import Link from "next/link";

export default function SidebarMenuItem({
  title,
  icon: Icon,
  href,
  active,
  onClick,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative flex items-center w-full py-2 rounded-lg"
    >
      {/* Active box */}
      <span
        className={`absolute inset-0 rounded-lg bg-blue-900 transition-all duration-300 ${
          active ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      />

      {/* Icon + title */}
      <div className="relative z-10 flex items-center px-3 space-x-2">
        <Icon className="w-4 h-4" />
        <span>{title}</span>
      </div>
    </Link>
  );
}
