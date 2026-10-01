'use client'
import BaseSection from "@/app/common/base/BaseSection";
import { services } from "../../../company_data/services";
import ServicesAndIndustries from "@/app/Services/components/ServicesAndIndustries";
import ServicesAndIndustrialTitle from "@/app/Services/components/ServicesAndIndustrialTitle";
import IndustrialSection from "@/app/Industries/IndustrialSection";
import { useRouter } from "next/navigation";

function ServicesSection() {
  const router = useRouter();
  const industrialDescription = ` 
Comprehensive sourcing and supply solutions tailored to the technical,
   commercial, and delivery requirements of industrial and EPC projects.
   `;

  return (
    <BaseSection title="services" sectionID="services">
      <div className="w-full gap-5  py-5 flex flex-col">
        <ServicesAndIndustrialTitle
          firstTitle="Integrated Supply."
          secondTitle="Technical Expertise."
          description={industrialDescription}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-8 py-6  gap-4">
          {services.map((service, index) => (
            <ServicesAndIndustries
              router={router}
              key={index + 1}
              id={index}
              data={service}
            />
          ))}
        </div>
      </div>
      <IndustrialSection />
      <div className="mt-10 flex justify-center flex-col gap-6 border-t border-white/45 pt-8 sm:flex-row sm:items-center">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-slate-400">
          One Partner. Multiple Categories. Reliable Project Supply.
        </p>
      </div>
    </BaseSection>
  );
}

export default ServicesSection;
