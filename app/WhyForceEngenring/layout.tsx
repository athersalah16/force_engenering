import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Force Engenring | Why Force Engenring",
  description: "Discover the advantages of partnering with Force Engenring.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}