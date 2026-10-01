'use client'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { IconName, Service } from "@/app/types/serviceType";
import {
  Cable,
  Cog,
  Construction,
  Factory,
  Lightbulb,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { GiValve } from "react-icons/gi";
type Props = {
  data: Service;
  id: number;
  router?: AppRouterInstance;
};
function ServicesAndIndustries({ data, id, router }: Props) {
  const { icon, text, description, category } = data;
  const handleClick = () => {
    router?.push(`/Services/${category}`);
  };

  const iconMap: Record<IconName, typeof GiValve> = {
    GiValve,
    Cable,
    Cog,
    Construction,
    ShieldCheck,
    Factory,
    Zap,
    Lightbulb,
  };
  const Icon = iconMap[icon];

  return (
    <div
      key={id}
      onClick={handleClick}
      className="transition-all hover:-translate-y-1.5 ease-in-out  bg-transparent text-gray-600 cursor-pointer  transform hover:scale-105  border border-gray-200  rounded-md hover:bg-blue-900 px-4 py-5 hover:text-white"
    >
      <div className="flex py-3  gap-4 flex-row">
        <div className="w-12 h-12 bg-blue-800 rounded-full px-3 py-3 text-white text-2xl">
          {" "}
          <Icon />
        </div>
        <h3 className="font-bold">{text}</h3>
      </div>
      <div className="max-w-sm ">{description}</div>
    </div>
  );
}

export default ServicesAndIndustries;
