import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Force Engenring | About Us",
  description: "Learn more about our company and our mission.",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
