"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import React from "react";
import { useForm } from "react-hook-form";
import { makeGetRequest, makePostRequest } from "@/lib/apiRequest";

export default function NewSupplier() {
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
    makePostRequest("/api/supplier", data, "Supplier", reset);
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Supplier" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full max-w-3xl bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Suppliers Name"
            name="name"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="Suppliers Phone"
            name="phone"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="Suppliers Email"
            name="email"
            register={register}
            errors={errors}
            isRequired={true}
            type="email"
            className="w-full"
          />
          <TextInput
            label="Suppliers Address"
            name="address"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="Suppliers Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="Supplier Code"
            name="supplierCode"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />

          <TextInput
            label="Supplier TIN"
            name="taxID"
            register={register}
            errors={errors}
            isRequired={true}
          />

          <TextareaInput
            label="Supplier Payment Terms"
            name="paymentTerms"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextareaInput
            label="Notes"
            name="notes"
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
