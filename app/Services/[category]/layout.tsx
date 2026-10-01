import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Force Engenring | Products",
  description: "Explore Force Engenring's products",
};


function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
  
}

export default ProductsLayout;
