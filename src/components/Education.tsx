import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { education, certifications } from "../data/portfolio";

export default function Education() {
  return (
    <section id="formation" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Formation"
          subtitle="Parcours académique et certifications"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <GraduationCap size={22} className="text-blue-400" />
              Éducation
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-slate-700 hover:border-blue-500 transition-colors"
                >
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-white font-medium">{edu.degree}</p>
                  <p className="text-slate-400 text-sm">{edu.school}</p>
                  <p className="text-slate-500 text-xs mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Award size={22} className="text-blue-400" />
              Certifications & Formations
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5"
                >
                  <p className="text-white font-medium">{cert.name}</p>
                  <p className="text-blue-400 text-sm">{cert.issuer}</p>
                  {cert.period && (
                    <p className="text-slate-500 text-xs mt-1">{cert.period}</p>
                  )}
                  {cert.topics && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {cert.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 bg-slate-900/60 text-slate-400 text-xs rounded border border-slate-700/50"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
