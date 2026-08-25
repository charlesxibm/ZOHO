"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makeGetRequest, makePostRequest } from "@/lib/apiRequest";
import React from "react";
import { useForm } from "react-hook-form";

export default function NewCategory() {
  const [categories, setCategories] = React.useState([]);
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
    makePostRequest("/api/categories", data, "Category", reset);
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Category" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full max-w-3xl bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton title="save" />
      </form>
    </div>
  );
}
