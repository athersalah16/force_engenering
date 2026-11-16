import { Building2 } from "lucide-react";
import { whoWeAre } from "@/company_data/whoWeAre";

function WhoWeAre() {
  return (
    <div className="brand-card group mt-3 h-full w-full cursor-pointer rounded-lg shadow-lg border px-4 py-6 transition-all ease-in-out duration-300 hover:-translate-y-1.5 lg:max-w-xl">
      <div className="flex flex-row gap-4 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
          <Building2 />
        </div>
        <h1 className="text-3xl font-bold uppercase text-brand-600 group-hover:text-brand-100">
          Who We Are
        </h1>
      </div>
      <p className="max-w-xl hover:cursor-text">{whoWeAre}</p>
    </div>
  );
}

export default WhoWeAre;
