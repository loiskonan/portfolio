import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Lightbox from "./Lightbox";
import { personalInfo } from "../data/portfolio";

export default function About() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="apropos" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title="À propos" subtitle="Qui suis-je ?" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto md:mx-0 w-fit">
              <div className="flex items-end gap-4">
                {personalInfo.photos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className={`group w-44 sm:w-52 h-60 sm:h-72 rounded-2xl overflow-hidden border-2 shadow-xl transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      index === 0
                        ? "border-slate-700/50 shadow-blue-500/10"
                        : "border-blue-500/30 shadow-cyan-500/10 -mb-2 sm:mb-0 sm:mt-10"
                    }`}
                    aria-label={`Agrandir : ${photo.alt}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${
                        index === 0 ? "object-center" : "object-top"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="absolute -bottom-4 left-8 w-44 sm:w-52 h-60 sm:h-72 border-2 border-blue-500/20 rounded-2xl -z-10 hidden sm:block" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-slate-300 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>

            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={18} className="text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Award size={18} className="text-blue-400" />
                Réalisations
              </h3>
              <ul className="space-y-2">
                {personalInfo.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="text-slate-400 flex items-start gap-2"
                  >
                    <span className="text-blue-400 mt-1.5">▸</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {personalInfo.languages.map((lang) => (
                <span
                  key={lang.name}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300"
                >
                  {lang.name} — {lang.level}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Lightbox
        images={personalInfo.photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
