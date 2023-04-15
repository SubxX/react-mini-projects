import { Link } from "react-router-dom";
import { Project } from "../interfaces/project.interface";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Link to={project.url}>
      <div className="card h-full">
        <div className="flex-1">
          <p className="font-bold">{project.name}</p>
          <span className="mt-2 text-gray-400 line-clamp-3 text-sm">
            {project.description}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
