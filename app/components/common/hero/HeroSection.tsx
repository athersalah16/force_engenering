
import { Download } from "lucide-react";
import { toast } from "sonner";
import BaseSection from "../base/BaseSection";

function HeroSection() {
  const handleClick = () => {
    toast.success("Company Profile downloaded Successfully");
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
      <div className="absolute inset-0 bg-brand-950/45" />

      <div className="relative z-10   flex  min-h-screen items-center gap-4 p-4">
        <div className="mx-auto leading-7 w-full max-w-7xl px-6">
          <p className="text-sm text-footer-foreground font-semibold tracking-widest uppercase">
            Engineering · Procurement · Industrial Solutions
          </p>
          <div className="text-5xl  leading-10 font-bold py-4 text-primary-foreground">
            <p className="text-6xl">ENGINEERED <br/> TO DELIVER. </p>
            <p className="text-5xl font-bold text-sand-500">BUILT TO PERFORM. </p>
          </div>
          <div className="w-full flex  flex-col gap-4 lg:flex-row">
            <a
              href="/force_company_profile.pdf"
              download
              onClick={handleClick}
              className="bg-primary hover:bg-brand-800 text-primary-foreground font-bold py-2 px-4 rounded flex flex-row items-center gap-2 w-fit"
            >
              <Download /> Company Profile
            </a>
            <a
              href="/Services"
              className="bg-transparent border border-sand-300/60 hover:bg-brand-navy  hover:border-brand-navy text-primary-foreground transition-colors duration-300 font-bold py-2 px-4 rounded flex flex-row items-center gap-2 w-fit"
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
