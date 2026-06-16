import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Trophy } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Lightbox from "./Lightbox";
import { ambitions } from "../data/portfolio";

const goalIcons = [Rocket, Target, Trophy];

export default function Ambitions() {
  const [showCover, setShowCover] = useState(false);

  return (
    <section id="ambitions" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <SectionTitle
          title={ambitions.title}
          subtitle={ambitions.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              {ambitions.vision}
            </p>

            <div className="space-y-4">
              {ambitions.goals.map((goal, index) => {
                const Icon = goalIcons[index] ?? Rocket;
                return (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-amber-500/30 transition-colors"
                  >
                    <div className="p-3 bg-amber-500/10 rounded-lg h-fit">
                      <Icon size={22} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {goal.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="space-y-4 pt-2">
              {ambitions.quotes.map((quote) => (
                <blockquote
                  key={quote.author}
                  className="border-l-2 border-amber-500/50 pl-4"
                >
                  <p className="text-slate-400 text-sm italic leading-relaxed">
                    « {quote.text} »
                  </p>
                  <cite className="text-amber-400/80 text-xs not-italic mt-1 block">
                    — {quote.author}
                  </cite>
                </blockquote>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">
              Illustration de mon objectif — {ambitions.targetYear}
            </p>
            <button
              type="button"
              onClick={() => setShowCover(true)}
              className="group relative max-w-sm w-full rounded-xl overflow-hidden border-2 border-slate-700/50 shadow-2xl shadow-amber-500/10 hover:border-amber-500/40 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Agrandir la couverture Forbes 2035"
            >
              <img
                src={ambitions.coverImage.src}
                alt={ambitions.coverImage.alt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <span className="text-white text-sm font-medium">
                  Cliquer pour agrandir
                </span>
              </div>
            </button>
            <p className="text-slate-600 text-xs mt-4 text-center max-w-sm">
              Ma vision : figurer en couverture de Forbes Afrique comme
              entrepreneur tech ivoirien de l'année {ambitions.targetYear}.
            </p>
          </motion.div>
        </div>
      </div>

      <Lightbox
        src={showCover ? ambitions.coverImage.src : null}
        alt={ambitions.coverImage.alt}
        onClose={() => setShowCover(false)}
      />
    </section>
  );
}
