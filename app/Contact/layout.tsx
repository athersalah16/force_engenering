import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Force Engenring | Contact",
  description: "Contact Force Engenring for project support and quotations.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children
}
