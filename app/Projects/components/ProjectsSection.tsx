import Image from "next/image";
import BaseSection from "@/app/common/base/BaseSection";
import MajorClients from "./MajorClients";
import { projects } from "../../../company_data/projectsExperience";
import Project from "./Project";
import { MajorClientsType } from "@/app/types/MajorClients";
import { majorClients } from "@/company_data/majorClients";

function ProjectsSection() {
  return (
    <BaseSection title="projects" sectionID="projects">
      <div className="w-full flex pt-5 flex-col gap-7 px-5">
        {/* Major Clients  */}
        <div className="text-center flex justify-center items-center flex-col gap-5 w-full">
          <h1 className="text-blue-900 text-5xl font-bold ">
            Major Clients and
            <br />
            Project Experience
          </h1>
          <p className="text-sm text-center max-w-md text-gray-500 ">
            We are proud to work with leading companies and deliver solutions
            that power critical projects across the regoin{" "}
          </p>
        </div>

        <span className="text-blue-400  text-center uppercase text-4xl font-semibold py-5">
          Major Clients{" "}
        </span>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md lg:px-10">
          {majorClients.map(({ image, clientLink }: MajorClientsType) => (
            <MajorClients image={image} key={image} link={clientLink} />
          ))}
        </div>

        <div className="w-full border-b border-b-blue-300   py-6" />

        {/* Display projects  */}

        <div className="flex flex-col items-center justify-center  w-full min-h-full">
          <span className="uppercase text-center text-blue-400 text-4xl font-semibold py-5">
            {" "}
            Project Experience
          </span>
          <div className="w-full h-full  lg:px-3 gap-4 flex lg:flex-row flex-col lg:justify-between ">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-md p-4  lg:mt-14 ">
              {projects.map((project, index) => (
                <Project project={project} key={index} />
              ))}
            </div>

            <div className=" lg:mt-17 flex justify-center  items-center min-h-full w-full lg:w-[50%]  rounded-md">
              <Image
                src={"/projects.png"}
                width={250}
                height={300}
                alt="Projects Photo"
                className="rounded-md w-full h-full lg:max-h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}

export default ProjectsSection;
