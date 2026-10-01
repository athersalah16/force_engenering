import { Product } from "@/app/types/Product";
import { switchToTitle } from "@/app/utils/switchToTitle";
import Image from "next/image";

type Props = {
  data: Product;
};

function DiplayProduct({ data }: Props) {
  const { image, title } = data;
 return (
    <div className=" h-full w-full lg:max-w-md overflow-hidden rounded-md border border-blue-200 hover:cursor-pointer transition-transform hover:scale-105 hover:-translate-y-1.5 duration-300">
      <div className="relative h-[80%] w-full border-b border-b-blue-200">
        <Image
          loading="lazy"
          src={image}
          width={100}
          height={100}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <p
        className={`p-2  font-semibold text-center ${title.length > 8 ? "text-lg " : "text-2xl"} text-blue-900 hover:cursor-text`}
      >
        {switchToTitle(title)}
        <span>{}</span>
      </p>
    </div>
  );
}

export default DiplayProduct;
