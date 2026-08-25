"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import { Pencil, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import ImageInput from "@/components/FormInputs/ImageInput";
import { makeGetRequest, makePostRequest } from "@/lib/apiRequest";

export default function NewItem() {
  const [imageUrl, SetImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // function onSubmit(data){
  // console.log(data)
  // }

  const [categories, setCategories] = React.useState([]);
  const [warehouses, setWarehouses] = React.useState([]);
  const [units, setUnits] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [suppliers, setSuppliers] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const categoriesData = await makeGetRequest("/api/categories");
      const warehousesData = await makeGetRequest("/api/warehouse");
      const unitsData = await makeGetRequest("/api/units");
      const brandsData = await makeGetRequest("/api/brands");
      const suppliersData = await makeGetRequest("/api/supplier");

      setCategories(
        categoriesData.map((category) => ({
          label: category.title,
          value: category.id,
        })),
      );

      setWarehouses(
        warehousesData.map((warehouse) => ({
          label: warehouse.title,
          value: warehouse.id,
        })),
      );

      setUnits(
        unitsData.map((unit) => ({
          label: unit.title,
          value: unit.id,
        })),
      );

      setBrands(
        brandsData.map((brand) => ({
          label: brand.title,
          value: brand.id,
        })),
      );

      setSuppliers(
        suppliersData.map((supplier) => ({
          label: supplier.name,
          value: supplier.id,
        })),
      );
    }

    fetchData();
  }, []);
  const onSubmit = async (data) => {
    const formData = {
      ...data,
      imageUrl: imageUrl,
    };
    console.log(formData);
    makePostRequest("/api/items", data, "Item", reset);
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full max-w-3xl bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Item Title"
            name="title"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <SelectInput
            name="categoryId"
            label="Select the Item Category"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
            options={categories}
          />

          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <SelectInput
            name="unitId"
            label="Select the Item Unit"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
            options={units}
          />
          <SelectInput
            name="brandId"
            label="Select the Item Brand"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
            options={brands}
          />
          <TextInput
            label="Buying Price"
            name="buyingPrice"
            type="number"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="SellingPrice"
            name="sellingPrice"
            type="number"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <SelectInput
            name="supplierId"
            label="Select the Item Supplier"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
            options={suppliers}
          />
          <TextInput
            label="Re-Order Point"
            name="reOrderPoint"
            type="number"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <SelectInput
            name="warehouseId"
            label="Select the Item warehouse"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
            options={warehouses}
          />
          <TextInput
            label="Item Weight in Kgs"
            name="weight"
            type="number"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="Item Dimension in cm (20 x 30 x100)"
            name="dimensions"
            register={register}
            errors={errors}
            isRequired={true}
            className="w-full"
          />
          <TextInput
            label="Item Tax Rate in %"
            name="taxRate"
            type="number"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextareaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextareaInput
            label="Item Notes"
            name="itemNotes"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <ImageInput
            label="item Image"
            imageUrl={imageUrl}
            SetImageUrl={SetImageUrl}
            endpoint="imageUploader"
          />
        </div>
        <SubmitButton title="Save" />
      </form>
    </div>
  );
}
