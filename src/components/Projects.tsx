import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Smartphone } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolio";

type Filter = "all" | "web" | "mobile";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

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
            <motion.article
              key={`${project.title}-${project.subtitle}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {project.category === "web" ? (
                        <Globe size={16} className="text-blue-400" />
                      ) : (
                        <Smartphone size={16} className="text-cyan-400" />
                      )}
                      <span className="text-xs text-slate-500 uppercase tracking-wider">
                        {project.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm">{project.subtitle}</p>
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-slate-600 group-hover:text-blue-400 transition-colors shrink-0"
                  />
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-slate-400 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-slate-900/60 text-slate-400 text-xs rounded border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
