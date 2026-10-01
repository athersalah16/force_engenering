import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Force Engenring | Projects",
  description: "Explore Force Engenring's project experience and clients.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}