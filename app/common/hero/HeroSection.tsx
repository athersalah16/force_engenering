import BaseSection from "@/app/common/base/BaseSection";
import { sendGAEvent } from "@next/third-parties/google";
import { Download } from "lucide-react";
import { toast } from "sonner";

function HeroSection() {
  const handleClick = () => {
    toast.success("Company Profile downloded Sucessfully");
  };
  return (
    <BaseSection sectionID="/" className="relative mt-16 overflow-hidden">
      {/* Ken Burns Background */}
      <div
        className="
          absolute inset-0
          bg-[url('/background.png')]
          bg-cover
          bg-center
          bg-no-repeat
          ken-burns
        "
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10   flex  min-h-screen items-center gap-4 p-4">
        <div className="mx-auto leading-7 w-full max-w-7xl px-6">
          <p className="text-sm text-blue-400 font-semibold tracking-widest uppercase">
            Engineering · Procurement · Industrial Solutions
          </p>
          <div className="text-5xl  leading-10 font-bold py-4 text-white">
            <p className="text-6xl">Reliable supply</p>
            Technical <br />
            <p className="text-6xl">expertise</p>
            <p className="text-5xl font-bold text-blue-500">Project support </p>
          </div>
          <div className="w-full flex  flex-col gap-4 lg:flex-row">
            <a
              href="/company_profile.pdf"
              download
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex flex-row items-center gap-2 w-fit"
            >
              <Download /> Company Profile
            </a>
            <a
              href="/Services"
              className=" bg-transparent border border-gray-300 hover:bg-blue-600 hover:border-none text-white duration-300 font-bold py-2 px-4 rounded flex flex-row items-center gap-2 w-fit"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}

export default HeroSection;
