import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projects";

export default function ProjectsSection() {
  const featured = projectsData.find((p) => p.featured && p.category === "design");
  const grid = projectsData.filter((p) => p.id !== featured?.id && p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950 border-t border-zinc-800/50">
      <div className="mx-auto max-w-6xl flex flex-col gap-10">
        <div>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">Projects</span>
          <h2 className="text-4xl font-bold text-white mt-2">What I've Built</h2>
          <p className="text-zinc-400 mt-2">Problem → Solution → Results.</p>
        </div>

        {featured && <ProjectCard project={featured} variant="featured" />}

        <div className="grid md:grid-cols-2 gap-5">
          {grid.map((p) => (
            <ProjectCard key={p.id} project={p} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
