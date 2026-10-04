import Image from "next/image";

function Logo({

  AddBackground = false,
}: {

  AddBackground?: boolean;
}) {
  return (
    <div className={`flex flex-row gap-2 items-center justify-center`}>
      <div
        className={`w-full h-16 ${AddBackground ? "bg-white rounded-lg  p-2 " : ""}  flex justify-center items-center`}
      >
        <Image
          src={"/logo.jpeg"}
          alt="Force Engenring logo"
          loading="lazy"
          width={300}
          height={20}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

export default Logo;
