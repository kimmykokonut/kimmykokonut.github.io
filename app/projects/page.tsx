import Carousel from "@/components/Carousel";

const Projects = () => {
  return (
    <section
      id="projects"
      role="region"
      aria-labelledby="projects-heading"
      className="text-[#121212] dark:text-white"
    >
      <div
        className="center-card border-slate-500 py-8 px-4 sm:py-16 lg:px-6 max-w-4xl mx-auto"
        id="projects-card"
      >
        <h2 id="projects-heading" className="text-4xl font-bold mb-4">
          Projects
        </h2>
        <Carousel />
      </div>
    </section>
  );
};
export default Projects;
