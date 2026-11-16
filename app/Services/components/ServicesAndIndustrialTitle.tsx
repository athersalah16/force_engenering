import React from "react";
type Props = {
  firstTitle: string;
  secondTitle?: string;
  description: string;
};
function ServicesAndIndustrialTitle({
  firstTitle,
  secondTitle,
  description,
}: Props) {
  return (
    <div className="w-full pt-5 flex justify-center items-center flex-col">
      <h2
        className={`text-4xl ${secondTitle ? "text-brand-600 " : "text-brand-800 "} font-bold leading-tight  sm:text-4xl lg:text-5xl`}
      >
        {firstTitle}
        <br />
        <span className="text-brand-800">{secondTitle}</span>
      </h2>
      <p className="mt-6 max-w-lg text-base leading-7 text-center text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default ServicesAndIndustrialTitle;
