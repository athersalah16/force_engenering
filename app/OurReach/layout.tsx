import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Force Engenring | Our Global Reach",
  description: "Explore Force Engenring's regional reach and global sourcing network.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}