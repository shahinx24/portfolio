import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}