import {
  FileText,
  ClipboardCheck,
  SearchCheck,
  ShoppingCart,
  ShieldCheck,
  Truck,
  PackageCheck,
  Headset,
} from "lucide-react";
import EndToEnd from "@/app/types/endToEndType";

export const endToEndCoordination:EndToEnd[] = [
  {
    id: 1,
    icon: FileText,
    title: "RFQ Receipt",
    description:
      "We receive and review your project requirements to understand scope and expectations.",
  },
  {
    id: 2,
    icon: ClipboardCheck,
    title: "Technical Review",
    description:
      "We review specifications and technical requirements to identify the right solution.",
  },
  {
    id: 3,
    icon: SearchCheck,
    title: "Sourcing & Quotation",
    description:
      "We identify reliable sources and provide competitive solutions aligned with your needs.",
  },
  {
    id: 4,
    icon: ShoppingCart,
    title: "Procurement & Ordering",
    description:
      "We coordinate purchasing and supplier activities to keep the process moving efficiently.",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Inspection & Quality Check",
    description:
      "We verify quality, documentation, and compliance before shipment.",
  },
  {
    id: 6,
    icon: Truck,
    title: "Logistics & Shipping",
    description:
      "We coordinate transportation and logistics to support reliable and timely delivery.",
  },
  {
    id: 7,
    icon: PackageCheck,
    title: "Delivery & Handover",
    description:
      "We ensure materials reach the required destination with the necessary documentation.",
  },
  {
    id: 8,
    icon: Headset,
    title: "After-Sales Support",
    description:
      "We remain available for technical clarifications, replacements, and ongoing support.",
  },
];