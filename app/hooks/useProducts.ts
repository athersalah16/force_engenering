import {  useMemo } from "react";
import { Product } from "../types/Product";

type Props = {
  selectedProducts: Product[];
  selectedCategory: string;
  searchTerm: string;
};

function useProducts({
  selectedCategory,
  selectedProducts,
  searchTerm,
}: Props) {
  const handleFilterByCategory = (existsProducts: Product[]) => {
    existsProducts = existsProducts.filter((product: Product) =>
      product.category.toLowerCase().includes(selectedCategory),
    );
    return existsProducts;
  };
  const handleSearch = (existsProducts: Product[]) => {
    existsProducts = existsProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return existsProducts;
  };

  const results = useMemo(() => {
    let existsProducts = selectedProducts;

    if (selectedCategory !== "all") {
      existsProducts = handleFilterByCategory(existsProducts);
    }
    if (searchTerm.trim()) {
      existsProducts = handleSearch(existsProducts);
    }
    //here return the results 
    return  existsProducts;
  }, [searchTerm, selectedProducts, selectedCategory]);

  return {
    results
  };
}

export default useProducts;
