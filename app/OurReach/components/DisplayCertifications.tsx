"use client";
import Image from "next/image";
import { useState } from "react";
import CertificationDialog from "./CertificationDialog";
import { certifications } from "@/company_data/certifications";
function DisplayCertifications() {
  const [certificationDir, setCertificationDir] = useState("");
  const handleClick = (dir: string) => {
    setCertificationDir(dir);
  };
  return (
    <div>
      <div className="text-4xl text-center font-semibold text-blue-700">
        Certifications
      </div>
      <div className="w-full flex lg:justify-center lg:flex-row flex-col py-5 px-4 gap-4">
        {certifications.map(({ src, title, certificateDir }, index) => (
          <div
            onClick={() => handleClick(certificateDir)}
            key={index}
            className="w-full min-h-70 duration-300 cursor-pointer  rounded-lg border border-blue-200 flex items-center justify-center py-4 transition-transform hover:scale-105 hover:-translate-y-1.5 hover:shadow-blue-100 hover:shadow-xl gap-4"
          >
            <div
              style={{ height: title === "ICV" ? 280 : 150 }}
              className="relative w-50 "
            >
              <Image
                src={src}
                alt={`${title} Certififed`}
                fill
                className="rounded-md object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      {certificationDir && (
        <CertificationDialog
          certificationDir={certificationDir}
          setCertificationDir={setCertificationDir}
        />
      )}
    </div>
  );
}

export default DisplayCertifications;
