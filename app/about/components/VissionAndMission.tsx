import { Rocket, Target } from "lucide-react";
import { vissionAndMission } from "../../../company_data/whoWeAre";

function VissionAndMission() {
  return (
    <div className="flex mt-2  py-5 px-2   mx-4 lg:flex-row flex-col gap-5">
      {vissionAndMission.map((item, index) => (
        <div
          key={index}
          className={`${item.title === 'mission'? 'mr-6':''} flex flex-col w-full  lg:max-w-md  justify-center items-center border-gray-200 border rounded-lg shadow-lg px-4 gap-5 py-6 hover:bg-[#185582] hover:text-[#E2E8F0]  transition-all  hover:-translate-y-1.5 duration-300 cursor-pointer text-gray-400`}
        >
          <div className="flex flex-row text-2xl gap-2">
            <div className={` w-12 h-12 bg-blue-600 font-bold rounded-full flex justify-center items-center `}>
              {item.title === "vission" ? (
                <Rocket className="text-white" />
              ) : (
                <Target className="text-white" size={32} />
              )}
            </div>

            <h2 className="uppercase text-blue-600 font-bold ">
              our {item.title}
            </h2>
          </div>
          <div className="w-full lg:w-1/2 hover:cursor-text text-sm">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

export default VissionAndMission;
