import { projectDataProps } from "@/app/data/projectData";
import Image from "next/image";

// interface ProjectCardProps {
//   active: boolean;
//   selectTab: () => void;
//   children: ReactNode;
// }

const ProjectCard: React.FC<projectDataProps> = ({ title, websiteLink, description, tech, imageSrc, codeLink }) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 p-1">

      <a href={websiteLink} className="block h-full text-center">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">{title}</h2>

        <Image
          className="rounded-t-lg"
          src={imageSrc}
          alt={`${title} project image`}
          width={300}
          height={300}
        />

        <div className="p-2">
          <p className="text-md text-center">{description}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center">{tech}</p>
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