"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { makePostRequest } from "@/lib/apiRequest";

export default function NewWarehouse() {
  const SelectOptions = [
    {
      label: "Main",
      value: "main",
    },
    {
      label: "Branch",
      value: "Branch",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // function onSubmit(data){
  // console.log(data)
  // }

  const onSubmit = async (data) => {
    console.log(data);
    makePostRequest("/api/warehouse", data, "Warehouse", reset);
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Warehouse" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full max-w-3xl bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <SelectInput
            name="type"
            label="Select the Warehouse Type"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
            options={SelectOptions}
          />
          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="Warehouse Location"
            name="location"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextareaInput
            label="Warehouse Description"
            name="description"
            register={register}
            errors={errors}
            isRequired={true}
          />
        </div>
        <SubmitButton title="save" />
      </form>
    </div>
  );
}
