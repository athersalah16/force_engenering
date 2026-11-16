import ProcessTimeline from "@/app/components/common/components/ProcessTimeline";
import { coreValues } from "@/company_data/coreValues";
import React from "react";

function CoreValues() {
  return (
    <div className=" flex w-full justify-center items-center flex-col gap-5">
      <h2 className="text-brand-600 text-4xl font-bold"> Core Values</h2>
      <div className="flex lg:flex-row flex-col">
        {coreValues.map((data, index) => (
          <ProcessTimeline
            key={index + 1}
            className="text-brand-700"
            data={data}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CoreValues;
