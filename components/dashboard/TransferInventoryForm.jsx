"use client";

import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import SelectInput from "../FormInputs/SelectInput";
import React from "react";
import { useForm } from "react-hook-form";
import { makeGetRequest, makePostRequest } from "@/lib/apiRequest";
export default function TransferInventoryForm() {
  const [items, setItems] = React.useState([]);
  const [branches, setBranches] = React.useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // function onSubmit(data){
  // console.log(data)
  // }

  React.useEffect(() => {
    async function fetchData() {
      const itemsData = await makeGetRequest("/api/items");
      const warehousesData = await makeGetRequest("/api/warehouses");

      setItems(
        itemsData.map((item) => ({
          label: item.title,
          value: item.id,
        })),
      );

      setBranches(
        warehousesData.map((warehouse) => ({
          label: warehouse.title,
          value: warehouse.id,
        })),
      );
    }

    fetchData();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    makePostRequest(
      "/api/adjustments/transfer",
      data,
      "Transfer Adjustment",
      reset,
    );
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
        <TextInput
          label="Enter qty of Stock to Transfer"
          name="transferStockQty"
          register={register}
          errors={errors}
          isRequired={true}
          type="number"
          className="w-full"
        />
        <SelectInput
          name="itemId"
          label="Select the Item to transfer"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
          options={items}
        />
        <SelectInput
          name="warehouseId"
          label="Select the Branch to Transfer stock"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
          options={branches}
        />
        <SelectInput
          name="receivingBranchId"
          label="Select the Branch to receive stock"
          register={register}
          errors={errors}
          isRequired={true}
          className="w-full"
          options={branches}
        />

        <TextareaInput
          label="Adjustment Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={true}
        />
      </div>
      <SubmitButton title="Save Adjustments" />
    </form>
  );
}
