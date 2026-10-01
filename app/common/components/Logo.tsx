import Image from "next/image";

function Logo({
  className = "",
  AddBackground = false,
}: {
  className?: string;
  AddBackground?: boolean;
}) {
  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      <div
        className={`w-24 h-12 ${AddBackground ? "bg-white rounded-lg  p-1 " : ""}  flex justify-center items-center`}
      >
        <Image
          src={"/logo.png"}
          alt="Force Engenring logo"
          loading="lazy"
          width={50}
          height={50}
          className="w-full h-full  object-cover"
        />
      </div>

      <div>
        <h1
          className={`text-${className.includes("text-white") ? "white" : "blue-900"} text-xl font-bold `}
        >
          Force Engenring
        </h1>
        <p
          className={`text-sm text-${className.includes("text-blue-500") ? "blue-500" : "gray-400"}`}
        >
          Your Key to Successful Trading
        </p>
      </div>
    </div>
  );
}

export default Logo;
