"use client";
import { Shirt } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function OptionCard({ optionData }) {
  const {
    title,
    description,
    link,
    linkTitle,
    enabled,
    icon: Icon,
  } = optionData;

  return (
    <div className="rounded shadow-xl bg-slate-400 flex flex-col items-center justify-center gap-4 p-6">
      <h2 className=" text-xl font-semibold">{title}</h2>
      <div className="">
        <Icon strokeWidth={1.5} className="w-32 h-32" />
      </div>
      <p className="line-clamp-1">{optionData.description}</p>

      {enabled ? (
        <Link
          href={optionData.link}
          className="p-1 bg-blue-500 rounded-sm items-center py-2 inline-flex"
        >
          {optionData.linkTitle}
        </Link>
      ) : (
        <button className="p-1 bg-blue-600 rounded-sm inline-flex items-center py-2">
          Enable
        </button>
      )}
    </div>
  );
}
