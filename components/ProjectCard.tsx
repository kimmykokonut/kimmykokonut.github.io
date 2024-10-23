import { projectDataProps } from "@/app/data/projectData";
import Image from "next/image";

const ProjectCard: React.FC<projectDataProps> = ({ title, websiteLink, description, tech, imageSrc, codeLink }) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 p-1">
      <a href={websiteLink} className="block h-full">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-center">{title}</h2>
        <div className="h-1/3">
          <Image
            src={imageSrc}
            alt={`${title} project image`}
            height={1598}
            width={2400}
            layout="responsive"
          />
        </div>
        <div className="p-2 flex-grow h-2/3">
          <p className="text-sm md:text-lg text-center">{description}</p>
          <p className="text-xs md:text-md text-gray-600 dark:text-gray-400 text-center">{tech}</p>
        </div>
      </a>
      <div className="p-2 flex justify-around items-center">
        {websiteLink && <a href={websiteLink} className="button-link">Website</a>}
        {codeLink && <a href={codeLink} className="button-link">Source Code</a>}
      </div>
    </div>
  );
};

export default ProjectCard;