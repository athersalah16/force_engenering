"use client";
import BaseSection from "@/app/common/base/BaseSection";
import VissionAndMission from "./VissionAndMission";

import WhoWeAre from "./WhoWeAre";
import CoreValues from "./CoreValues";

function AboutSection() {
  return (
    <BaseSection title="about us" sectionID="about-us">
      <div className="w-full flex flex-col gap-8 py-5 lg:px-8">
        <div className=" w-full flex pt-5 justify-center items-center text-blue-500 text-4xl font-bold">
          About Us
        </div>
        <div className="flex lg:flex-row flex-col ">
          <div className="w-full lg:w-1/2 px-1 py-5 h-full">
            <WhoWeAre />
          </div>
          <div className="h-full  ">
            <VissionAndMission />
          </div>
        </div>
        <div>
          <CoreValues />
        </div>
      </div>
    </BaseSection>
  );
}

export default AboutSection;
