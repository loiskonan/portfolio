import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolio";

const categories = [
  { key: "frontend" as const, label: "Frontend", color: "from-blue-500 to-blue-600" },
  { key: "backend" as const, label: "Backend", color: "from-cyan-500 to-cyan-600" },
  { key: "database" as const, label: "Bases de données", color: "from-purple-500 to-purple-600" },
  { key: "tools" as const, label: "Outils", color: "from-orange-500 to-orange-600" },
  { key: "other" as const, label: "Autres", color: "from-green-500 to-green-600" },
];

export default function Skills() {
  return (
    <section id="competences" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Compétences"
          subtitle="Technologies et outils que je maîtrise"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-2 h-8 rounded-full bg-gradient-to-b ${cat.color}`}
                />
                <h3 className="text-lg font-semibold text-white">
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-900/60 text-slate-300 text-sm rounded-md border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
