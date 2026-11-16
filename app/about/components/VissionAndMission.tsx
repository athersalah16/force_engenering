import { Rocket, Target } from "lucide-react";
import { vissionAndMission } from "../../../company_data/whoWeAre";

function VissionAndMission() {
  return (
    <div className="flex mt-2  py-5 px-2   mx-4 lg:flex-row flex-col gap-5">
      {vissionAndMission.map((item, index) => (
        <div
          key={index}
          className={`brand-card ${item.title === 'mission'? 'mr-6':''} group flex flex-col w-full lg:max-w-md justify-center items-center border rounded-lg shadow-lg px-4 gap-5 py-6 transition-all hover:-translate-y-1.5 duration-300 cursor-pointer`}
        >
          <div className="flex flex-row text-2xl gap-2">
            <div className={` w-12 h-12 bg-transparent font-bold rounded-full flex justify-center items-center `}>
              {item.title === "vission" ? (
                <Rocket className="text-primary-foreground" />
              ) : (
                <Target className="text-primary-foreground" size={32} />
              )}
            </div>

            <h2 className="uppercase text-brand-700 font-bold group-hover:text-brand-100">
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
