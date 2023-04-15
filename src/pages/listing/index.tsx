import ProjectCard from "./components/ProjectCard";
import { projectsData } from "./data/projects.data";

const Listing = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {projectsData.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default Listing;
