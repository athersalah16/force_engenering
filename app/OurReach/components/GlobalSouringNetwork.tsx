import Image from "next/image";
import {marketPositions} from "@/company_data/market_positions/marketPositions";
import { MapPin } from "lucide-react";

type Props = {
  activeMarket: string;
};

function GlobalSouringNetwork({ activeMarket }: Props) {
  const position = activeMarket
    ? marketPositions[activeMarket as keyof typeof marketPositions]
    : null;

  return (
    <div className="relative my-8 w-full h-full">
      <Image
        src="/global_source.png"
        alt="Global Sourcing Network"
        width={200}
        height={200}
        className="w-full h-full rounded-md  "
      />

      {position && (
        <div
          className="absolute z-10 transition-all  -translate-x-1/2 -translate-y-full duration-300"
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          <div className="relative flex items-center gap-2">
            <MapPin className="h-6 w-6 text-blue-600 drop-shadow-blue-200 scale-110 animate-pulse" />
            <span className="rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-blue-700 shadow-sm">
              {activeMarket}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default GlobalSouringNetwork;
