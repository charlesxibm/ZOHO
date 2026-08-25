"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makeGetRequest, makePostRequest } from "@/lib/apiRequest";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewUnit() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // function onSubmit(data){
  // console.log(data)
  // }
  const [units, setUnits] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [branches, setBranches] = React.useState([]);

  const onSubmit = async (data) => {
    console.log(data);
    makePostRequest("/api/units", data, "Unit", reset);
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Unit" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full max-w-3xl bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Unit Title"
            name="title"
            register={register}
            errors={errors}
            isRequired={true}
            className=" w-full"
          />
          <TextInput
            label="Unit Abbreviation"
            name="abbreviation"
            register={register}
            errors={errors}
            isRequired={true}
            className=" w-full"
          />
        </div>
        <SubmitButton title="Save" />
      </form>
    </div>
  );
}
