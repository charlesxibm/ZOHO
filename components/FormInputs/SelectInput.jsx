import React from "react";
import { useForm } from "react-hook-form";

export default function SelectInput({
  label,
  name,
  register,
  errors,
  isRequired,
  type = "text",
  className = "sm:col-span-2",
  options = [],
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-700"
      >
        {label}
      </label>
      <select
        {...register(`${name}`, { required: isRequired })}
        id={name}
        autoComplete={name}
        className="bg-white border border-gray-300 text-gray-900 text-sm
        rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full
        p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-primary-500
        dark:focus:border-primary-500"
        placeholder="Type product category title"
      >
        {options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {errors[name] && (
        <span className="text-sm text-red-600">{label} is required</span>
      )}
    </div>
  );
}
