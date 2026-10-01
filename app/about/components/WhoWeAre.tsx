import { Building2 } from "lucide-react";
import { whoWeAre } from "@/company_data/whoWeAre";

function WhoWeAre() {
  return (
    <div className="mt-3 h-full w-full cursor-pointer  rounded-lg shadow-lg border border-gray-200 px-4 py-6 text-gray-500 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#185582] hover:text-[#E2E8F0] lg:max-w-xl">
      <div className="flex flex-row gap-4 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
          <Building2 />
        </div>
        <h1 className="text-3xl font-bold uppercase text-blue-500">
          Who We Are
        </h1>
      </div>
      <p className="max-w-xl hover:cursor-text">{whoWeAre}</p>
    </div>
  );
}

export default WhoWeAre;
