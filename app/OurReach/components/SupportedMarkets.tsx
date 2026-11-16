import { MarketKey } from "@/company_data/market_positions/marketPositions";
import React, { useState } from "react";

type Props = {
  setActiveMarket: React.Dispatch<React.SetStateAction<MarketKey  | string>>;
};

function SupportedMarkets({  setActiveMarket }: Props) {
  const supportedMarkets = [
    "North America",
    "South America",
    "Europe",
    "Middle East & North Africa",
    "Africa",
    "Asia",
    "Australia",
  ];

  const [selectedMarket, setSelectedMarket] = useState<MarketKey  | string>('');

  const handleHover = (country: string) => {
    setActiveMarket(country);
  };

  const handleLeave = () => {
    setActiveMarket(selectedMarket);
  };

  const handleClick = (country: string) => {
    setSelectedMarket(country);
    setActiveMarket(country);
  };

  return (
    <div className="mt-4">
      <p className="text-xl font-semibold text-brand-700">Supported Markets</p>
      <div className="py-6 flex flex-col gap-2">
        {supportedMarkets.map((country, index) => (
          <button
            type="button"
            onMouseEnter={() => handleHover(country)}
            onMouseLeave={handleLeave}
            onClick={() => handleClick(country)}
            className={`${
              selectedMarket === country ? "bg-primary text-primary-foreground" : ""
            } px-3 py-2 flex flex-row gap-4 rounded-md hover:shadow-lg hover:shadow-brand-900/10 hover:border-none hover:-translate-y-1.5 hover:bg-primary hover:text-primary-foreground duration-300 cursor-pointer border border-border text-primary text-left`}
            key={country}
          >
            <div className="border-none flex justify-center hover:border hover:text-primary-foreground bg-brand-800 items-center rounded-full w-8 h-8">
              0{index + 1}
            </div>
            {country}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SupportedMarkets;
