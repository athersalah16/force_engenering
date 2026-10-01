"use client";
import BaseSection from "@/app/common/base/BaseSection";
import SupportedMarkets from "./SupportedMarkets";
import { useState } from "react";
import DisplayCertifications from "./DisplayCertifications";
import GlobalSouringNetwork from "./GlobalSouringNetwork";
import { MarketKey } from "@/company_data/market_positions/marketPositions";

function OurGlobalReachSection() {
  const [activeMarket, setActiveMarket] = useState<MarketKey | string>("");

  return (
    <BaseSection sectionID="our-global-reach" title="our global reach">
      <div className="w-full flex-col flex gap-6 px-4 py-5">
        <div className="flex flex-col  justify-center items-center gap-5">
          <h1 className="font-bold text-5xl text-blue-800">
            Built on Compliance
          </h1>
          <p className="text-gray-400 text-center text-sm max-w-md">
            Force Engenring is committed to maintaining recognized certifications and
            compliance standards that support quality, operational excellence,
            and client confidence.
          </p>
        </div>

        <DisplayCertifications />

        <div className=" leading-7 gap-4 flex flex-col justify-center text-center items-center text-gray-400">
          <p className=" text-blue-700 font-semibold text-4xl">
            Our Global Sourcing Network
          </p>
          <p className="max-w-md">
            Force Engenring maintains a growing network of manufacturers, authorized
            distributors, technology providers, and specialized suppliers across
            key international markets.
       
          </p>
        </div>

        <div className="flex w-full lg:justify-between lg:flex-row gap-4 flex-col">
          <div className="lg:hidden flex  justify-center items-center w-full max-h-96">
            <GlobalSouringNetwork activeMarket={activeMarket} />
          </div>
          <div className=" w-full lg:w-1/2">
            <SupportedMarkets setActiveMarket={setActiveMarket} />
          </div>

          <div className="lg:flex  justify-center items-center w-[50%] lg:my-12  max-h-96 hidden">
            <GlobalSouringNetwork activeMarket={activeMarket} />
          </div>
        </div>

        <p className="uppercase text-center font-bold py-5 text-blue-800">
          Certified Quality. Recognized Compliance. Trusted Performance.
        </p>
      </div>
    </BaseSection>
  );
}

export default OurGlobalReachSection;
