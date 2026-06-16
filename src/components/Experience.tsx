import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experiences" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Expériences"
          subtitle="Mon parcours professionnel"
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700/50 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 mt-8 ring-4 ring-slate-950 hidden md:block" />

                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Briefcase size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-400 mb-4 text-sm">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.missions.map((mission) => (
                        <li
                          key={mission}
                          className="text-slate-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-blue-400 mt-1 shrink-0">
                            ▸
                          </span>
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
