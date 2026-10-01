"use client";
import BaseSection from "@/app/common/base/BaseSection";
import { Product } from "@/app/types/Product";
import { ProductCategory, products } from "@/company_data/products";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import DiplayProduct from "./components/DiplayProduct";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { allCategories } from "@/company_data/categories";
import DisplayCategoriesSelectors from "./components/DisplayCategoriesSelector";
import DisplayCategories from "./components/DisplayCategories";
import { switchToTitle } from "@/app/utils/switchToTitle";
import DisplayProductsCatalog from "../components/DisplayProductsCatalog";
import useProducts from "@/app/hooks/useProducts";

function page() {
  const params = useParams<{ category: string }>();
  const section = params.category ?? "";
  const selectedProducts = products[section as ProductCategory] ?? [];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();
  const categoris = [
    "All",
    ...(allCategories[section as ProductCategory] ?? []),
  ];

  const { results: filteredResults } = useProducts({
    searchTerm,
    selectedCategory,
    selectedProducts,
  });

  const message =
    filteredResults.length === 0 && selectedProducts.length > 0
      ? "No Results Found"
      : "";

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleBack = () => router.back();

  const handleSelectedCategoryChange = (category: string) => {
    setSelectedCategory(category.toLowerCase());
  };

  if (filteredResults.length === 0 && !message)
    return (
      <BaseSection sectionID="products" className="mt-8">
        <div className="mt-8 text-center items-center min-h-screen p-10">
          <p className=" text-2xl lg:text-4xl font-bold text-blue-600">
            No products available in this category.{" "}
          </p>
        </div>
      </BaseSection>
    );
  return (
    <BaseSection sectionID="products" className="mt-8">
      <div className="flex flex-col mt-5 gap-8   px-4 py-5">
        <div
          onClick={handleBack}
          className="relative rounded-full flex w-24 flex-row justify-center items-center gap-2 hover:cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300 border border-gray-200"
        >
          <ArrowLeft size={16} strokeWidth={1.5} /> Back
        </div>

        <div className="w-full flex gap-4  flex-col  ">
          <h1 className="text-center text-4xl  text-blue-600">
            {switchToTitle(section)} Products
          </h1>
          <div className="flex w-full lg:max-w-5xl gap-4 flex-col py-3 lg:flex-row">
            <div className="w-full lg:max-w-2xl">
              <Input
                placeholder="Search in products"
                className="focus-visible:ring-0 border focus-visible:border-blue-200 text-lg p-4"
                value={searchTerm}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="w-full lg:w-60">
              <DisplayCategoriesSelectors
                selectedCategory={selectedCategory}
                handleSelectedCategoryChange={handleSelectedCategoryChange}
                data={categoris}
              />
            </div>
          </div>
           <div className="md:hidden block">
            <DisplayProductsCatalog sectionName={section} />
          </div>
        </div>

        <div className="flex flex-col  lg:flex-row lg:justify-between gap-2 px-3 py-3">
          <p className="text-blue-900 font-extralight">
            Showing Products: {filteredResults.length}
          </p>
          <div className="hidden md:block">
            <DisplayProductsCatalog sectionName={section} />
          </div>
        </div>

        {message && <p className="text-blue-600 text-2xl px-4">{message}</p>}
        {searchTerm && !message &&<p className="text-blue-600 text-2xl px-4">Search Results:</p>}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
          {filteredResults.map((product: Product, index) => (
            <DiplayProduct key={index} data={product} />
          ))}
        </div>
      </div>
    </BaseSection>
  );
}

export default page;
