import { projectDataProps } from "@/app/data/projectData";
import Image from "next/image";

const ProjectCard: React.FC<projectDataProps> = ({ title, websiteLink, description, tech, imageSrc, codeLink }) => {

  return (
    <div className="relative flex flex-col my-3 bg-white dark:bg-gray-700 shadow border border-slate-200 dark:border-none rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <a href={websiteLink} className="block h-full">
        <div className="relative h-56 xs:h-32 m-2 xs:mb-0 overflow-hidden text-white rounded-md">
          <Image
            src={imageSrc}
            alt={`${title} project image`}
            height={1598}
            width={2400}
            className="responsive"
          />
        </div>
        <div className="p-3">
          <h3 className="mb-1 text-slate-800 dark:text-white text-xl font-semibold">{title}</h3>
          <p className="text-slate-600 dark:text-white text-sm leading-normal mb-2">{description}</p>
          <p className="text-slate-600 dark:text-white text-xs text-center font-light">{tech}</p>
        </div>
      </a>
      <div className="flex justify-evenly items-center px-4 pb-3">
        {websiteLink && <a className="button-link" href={websiteLink}>Website</a>}
        {codeLink && <a className="button-link" href={codeLink}>Source Code</a>}
      </div>
    </div>
  );
};

export default ProjectCard;