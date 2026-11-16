import Image from "next/image";
import { ProjectType } from "../../types/projectType";

function Project({ project }: { project: ProjectType }) {
  const { name, id } = project;
  return (
    <div className="grid min-h-28 w-full grid-cols-1 lg:grid-cols-[72px_1fr_72px] items-center gap-3 rounded-md border border-border px-4 py-5 transition-transform duration-300 hover:-translate-y-1 hover:cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-brand-900/10">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-900 font-bold text-primary-foreground">
          {id}
        </div>

      <p className="max-w-lg text-center font-semibold text-brand-700 hover:cursor-text">
        {name}
      </p>

      <div className="flex items-center justify-end">
        <a href="https://www.adnoc.ae/" rel="noopener noreffer" target="_blank"> <Image
          src="/major_clients/adnoc.png"
          alt="ADNOC client logo"
          width={50}
          height={50}
          className="object-contain"
        /></a>
       
      </div>
    </div>
  );
}

export default Project;
