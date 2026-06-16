import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";

type Filter = "all" | "web" | "mobile";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projets" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Projets"
          subtitle="Applications que j'ai conçues et développées"
        />

        <div className="flex justify-center gap-3 mb-10">
          {(
            [
              { key: "all", label: "Tous" },
              { key: "web", label: "Web" },
              { key: "mobile", label: "Mobile" },
            ] as const
          ).map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f.key
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
