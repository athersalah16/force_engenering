import { Product } from "@/app/types/Product";
import { constructions } from "./products/constructions";
import { electric } from "./products/electric";
import { mechanical } from "./products/mechanical";
import { safety } from "./products/safety";
import { PVF } from "./products/PVF";

export type ProductCategory =
  | "mechanical"
  | "constructions"
  | "safety"
  | "PVF"
  | "electric";

type ProductsCategory = Record<ProductCategory, Product[]>;

export const products: ProductsCategory = {
  mechanical: mechanical,
  constructions: constructions,
  safety: safety,
  PVF: PVF,
  electric: electric,
};
