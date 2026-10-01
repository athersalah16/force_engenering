import { industries } from "../../company_data/services";
import BaseSection from "@/app/common/base/BaseSection";
import ServicesAndIndustrialTitle from "@/app/Services/components/ServicesAndIndustrialTitle";
import ServicesAndIndustries from "@/app/Services/components/ServicesAndIndustries";

function IndustrialSection() {
  const industriesDescritpion = ` Force Engenring supports clients across major industrial and infrastructure sectors through reliable supply, technical expertise, and project support services.`;
  return (
    <BaseSection sectionID="industries">
      <div className="w-full gap-5 flex flex-col">
        <ServicesAndIndustrialTitle
          firstTitle="Industries we serve."
          description={industriesDescritpion}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-4 py-6  gap-4">
          {industries.map((service, index) => (
            <ServicesAndIndustries key={index + 1} id={index} data={service} />
          ))}
        </div>
      </div>
    </BaseSection>
  );
}

export default IndustrialSection;
