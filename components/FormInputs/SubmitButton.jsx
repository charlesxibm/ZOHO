import React from "react";

export default function SubmitButton({ title }) {
  return (
    <div className="sm:col-span-1">
      <button
        type="submit"
        className="mt-6 text-white bg-slate-700 box-border border border-slate-500 hover:bg-slate-600 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none mb-3"
      >
        {title}
      </button>
    </div>
  );
}
