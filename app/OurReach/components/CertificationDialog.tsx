"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Certification } from "../../types/Certification";
import { certifications } from "@/company_data/certifications";
type Props = {
  certificationDir: string;
  setCertificationDir: React.Dispatch<React.SetStateAction<string>>;
};

function CertificationDialog({ certificationDir, setCertificationDir }: Props) {
  const selectedCertificate: Certification = certifications.find(
    (cert) => cert.certificateDir === certificationDir,
  )!;
  const { title } = selectedCertificate;
  const handleOnChange = () => {
    if (!certificationDir.trim()) return;
    setCertificationDir("");
  };
  return (
    <Dialog
      open={certificationDir ? true : false}
      onOpenChange={handleOnChange}
    >
      <DialogTrigger />
      <DialogContent className={``}>
        <div className="w-full h-full flex flex-col justify-center items-center px-2 gap-3  py-4">
          <p className="text-blue-600 font-bold text-lg text-center">{title} Certified</p>
          <Image
            alt={certificationDir?.replace("/", "")}
            src={certificationDir}
            width={200}
            height={300}
            className="rounded-md"
          />
        </div>
      </DialogContent>
      <DialogClose
        className={"outline-none shadow-none hover:cursor-pointer"}
      />
    </Dialog>
  );
}

export default CertificationDialog;
