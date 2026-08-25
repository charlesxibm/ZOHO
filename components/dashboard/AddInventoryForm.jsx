"use client";

import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import SelectInput from "../FormInputs/SelectInput";
import React from "react";
import { useForm } from "react-hook-form";
import { makePostRequest } from "@/lib/apiRequest";

export default function AddInventoryForm() {
  const items = [
    {
      label: "Item A",
      value: "Iaop1",
    },
    {
      label: "Item B",
      value: "Iaop2",
    },
    {
      label: "Item C",
      value: "IMop1",
    },
    {
      label: "Item D",
      value: "IMop2",
    },
  ];
  const branches = [
    {
      label: "Branch A",
      value: "aop1",
    },
    {
      label: "Branch B",
      value: "aop2",
    },
    {
      label: "Main A",
      value: "Mop1",
    },
    {
      label: "Main B",
      value: "Mop2",
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
    makePostRequest("/api/adjustments/add", data, "Add Adjustment", reset);
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="w-full max-w-3xl bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <SelectInput
          name="itemId"
          label="Select the Item to add"
          register={register}
          errors={errors}
          options={items}
          className="w-full"
        />
        <TextInput
          label="Enter qty of Stock to Add"
          name="addStockQty"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Reference Number"
          type="number"
          name="referenceNumber"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
        />

        <SelectInput
          name="warehouseId"
          label="Select the warehouse to receive stock"
          register={register}
          errors={errors}
          isRequired={true}
          options={branches}
          className="w-full"
        />

        <TextareaInput
          label="Adjustment Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={true}
        />
      </div>
      <SubmitButton title="Add Stock" />
    </form>
  );
}
