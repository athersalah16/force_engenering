import { whyForceEngenring } from "../../../company_data/why_force_engenring";
import BaseSection from "@/app/common/base/BaseSection";
import ProcessTimeline from "@/app/common/components/ProcessTimeline";
import RFQToDelivery from "./RFQToDelivery";

function WhyForceEngenringSection() {
  return (
    <BaseSection sectionID="why-force-engenring" title="why Force Engenring">
      <div className="flex flex-col gap-5">
        <div className="px-3 py-6 flex justify-center items-center gap-3 flex-col">
          <h1 className="text-blue-600 text-4xl font-semibold ">
            One Partner. Multiple Solutions.
          </h1>
          <p className="text-gray-500  max-w-md text-center text-sm">
            Force Engenring delivers value through technical expertise, global
            sourcing strength, and a commitment to quality, reliability, and
            responsive project support.
          </p>
        </div>
        <div className=" flex w-full lg:flex-row flex-col gap-5">
          {whyForceEngenring.map((data, index) => (
            <ProcessTimeline
              key={index + 1}
              className="text-blue-600"
              data={data}
              index={index}
            />
          ))}{" "}
        </div>
        <div className="flex flex-col gap-2 w-full justify-center items-center  ">
          <h3 className="text-blue-700 font-bold text-4xl lg:text-4xl text-center ">
            From RFQ to Delivery
          </h3>

          <div className="w-full flex flex-wrap justify-center text-lg lg:text-2xl font-bold items-center gap-4 text-blue-700/85">
            <p>✓ Technical Coordination </p>
            <p> ✓ Quality & Compliance</p>
            <p>✓ End-to-End Visibility</p>
          </div>

          <div className="w-full flex justify-center items-center">
            <RFQToDelivery />
          </div>
        </div>
      </div>
    </BaseSection>
  );
}

export default WhyForceEngenringSection;