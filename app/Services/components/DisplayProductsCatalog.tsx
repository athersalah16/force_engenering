import { switchToTitle } from "@/app/utils/switchToTitle";
import { Download } from "lucide-react";
import { toast } from "sonner";

type Props = { sectionName: string };

function DisplayProductsCatalog({ sectionName }: Props) {
  const handleClick = () => {
   
    toast.success(
      `${switchToTitle(sectionName)} Catalog downloaded Successfully`,
    );
  };
  return (
    <a
      className="bg-blue-600 text-center   text-sm lg:text-lg text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors  flex flex-row justify-center items-center gap-4 duration-300"
      download
      onClick={handleClick}
      href={`/products_and_brands/${sectionName}_products_and_brands.pdf`}
    >
      <Download /> {switchToTitle(sectionName)} Products Catalog
    </a>
  );
}

export default DisplayProductsCatalog;
