"use client";
import Image from "next/image";

type Props = { image: string; link: string };
function MajorClients({ image, link }: Props) {
  const hnadleClick = () => {
      
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      onClick={hnadleClick}
      className="cursor-pointer group flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={`/major_clients/${image}`}
        alt={image}
        width={180}
        height={100}
        className="max-h-20 w-full  max-w-40 object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export default MajorClients;
