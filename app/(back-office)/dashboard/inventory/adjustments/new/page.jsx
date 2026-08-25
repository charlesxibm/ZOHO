"use client";
import FormHeader from "@/components/dashboard/FormHeader";

import { Minus, Plus, X } from "lucide-react";

import React, { useState } from "react";

import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import AddInventoryForm from "@/components/dashboard/AddInventoryForm";

export default function NewAdjustments() {
  const tabs = [
    {
      title: "Add Stock",
      icon: Plus,
      form: "add",
    },
    {
      title: "Transfer Stock",
      icon: Minus,
      form: "transfer",
    },
  ];
  const [activeForm, setActiveForm] = useState("add");
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Adjustments" href="/dashboard/inventory" />
      {/* Form */}

      <div className="border-b border-default w-full max-w-3xl bg-neutral-primary-soft px-4 py-2 border border-default rounded-base shadow-xs mx-auto my-3">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-body">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <li className="me-2" key={i}>
                <button
                  onClick={() => setActiveForm(tab.form)}
                  href="#"
                  className={`${activeForm === tab.form ? "inline-flex items-center justify-center p-4 text-fg-brand border-b border-blue-800 rounded-t-base active group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-base hover:text-fg-brand hover:border-blue-800 group"}`}
                >
                  <Icon className="w-4 h-4 me-2 text-body group-hover:text-fg-brand" />
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {activeForm === "add" ? <AddInventoryForm /> : <TransferInventoryForm />}
    </div>
  );
}
