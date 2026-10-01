import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Force Engenring | Services",
  description: "Explore Force Engenring's supply and technical services.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}