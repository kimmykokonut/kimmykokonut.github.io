import { projectDataProps } from "@/app/data/projectData";
import Image from "next/image";

const ProjectCard: React.FC<projectDataProps> = ({
  title,
  websiteLink,
  description,
  tech,
  imageSrc,
  codeLink,
}) => {
  return (
    <div
      className="relative flex flex-col my-1 bg-white dark:bg-gray-700 shadow border border-slate-200 dark:border-none rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg min-w-[250px] sm:min-w-[360px]"
      style={{ height: "60vh" }}
    >
      <div className="relative h-1/3 md:h-1/2 overflow-hidden text-white rounded-t-md">
        <a href={websiteLink} className="block h-full w-full relative">
          <Image
            src={imageSrc}
            alt={`${title} project image`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </a>
      </div>

      <div className="px-2 py-1 flex-grow flex flex-col justify-between h-2/3 md:h-1/2">
        <h4 className="mb-1 text-slate-800 dark:text-white text-lg sm:text-md font-semibold">
          {title}
        </h4>
        <div className="overflow-y-auto flex flex-grow">
          <p className="text-slate-600 dark:text-white text-xs leading-normal">
            {description}
          </p>
        </div>
        <p className="text-slate-600 dark:text-white text-xs text-center font-light">
          {tech}
        </p>
        <div className="flex justify-evenly items-center px-1 pb-1 text-xs mt-1">
          {websiteLink && (
            <a
              className="button-link px-2 py-1 text-xs w-fit"
              href={websiteLink}
            >
              Website
            </a>
          )}
          {codeLink && (
            <a className="button-link px-2 py-1 text-xs w-fit" href={codeLink}>
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
