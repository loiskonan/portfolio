import { motion } from "framer-motion";
import { ArrowDown, Code2, Mail, User } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-medium mb-4 tracking-wide uppercase text-sm">
            {personalInfo.subtitle}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {personalInfo.name.split(" ").map((word, i) => (
              <span key={i}>
                {i === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {word}{" "}
                  </span>
                ) : (
                  <>{word} </>
                )}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
            {personalInfo.title}
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {personalInfo.bio.slice(0, 180)}...
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projets"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-lg transition-all"
            >
              Me contacter
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="#projets"
              className="p-3 text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Projets"
            >
              <Code2 size={22} />
            </a>
            <a
              href="#apropos"
              className="p-3 text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="À propos"
            >
              <User size={22} />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#apropos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
