import React from "react";
type Props = {
  children: React.ReactNode;
  sectionID: string;
  className?: string;
  title?: string;
 
  
};
function BaseSection({ children, sectionID, className ,title}: Props) {

  return (
    <section
      id={sectionID}
      className={`w-full min-h-screen px-3  ${className || ""}`}
    >
      <pre className="uppercase text-blue-900 py-3 font-semibold leading-5 ">{title}</pre>
    {children}
    </section>
  );
}

export default BaseSection;
