"use client";
import { services } from "@/company_data/services";
import WhoWeAre from "./about/components/WhoWeAre";
import ServicesAndIndustries from "@/app/Services/components/ServicesAndIndustries";
import VissionAndMission from "./about/components/VissionAndMission";
import { useRouter } from "next/navigation";
import { majorClients } from "@/company_data/majorClients";
import MajorClients from "./Projects/components/MajorClients";
import { MajorClientsType } from "./types/MajorClients";
import HeroSection from "./common/hero/HeroSection";
import DisplayCertifications from "./OurReach/components/DisplayCertifications";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/about");
  };
  return (
    <div className="w-full flex flex-col gap-5  min-h-screen bg-white">
      <HeroSection />
      <div className="w-full flex  flex-col px-2 lg:px-8 py-5 gap-8 ">
        <div className="flex flex-col lg:justify-between lg:flex-row px-4">
          <div
            onClick={handleClick}
            className="w-full lg:w-1/2 px-4 py-5 h-full"
          >
            <WhoWeAre />
          </div>
          <div onClick={handleClick} className="h-full ">
            <VissionAndMission />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-4xl font-semibold text-blue-900">Our Services </h2>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-8 py-6  gap-4">
          {services.map((service, index) => (
            <ServicesAndIndustries
              key={index + 1}
              id={index}
              data={service}
              router={router}
            />
          ))}
        </div>
      </div>
      <div className="lg:px-8 p-1">
        <DisplayCertifications />
      </div>

      <div className="py-4 w-full flex justify-center  flex-col">
        <span className="text-blue-400  text-center uppercase text-4xl font-semibold py-5">
          Major Clients
        </span>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md lg:px-10">
          {majorClients.map(({ image, clientLink }: MajorClientsType) => (
            <MajorClients image={image} key={image} link={clientLink} />
          ))}
        </div>
      </div>
    </div>
  );
}
