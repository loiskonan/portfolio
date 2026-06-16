import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, ImageIcon, Smartphone } from "lucide-react";
import Lightbox from "./Lightbox";
import type { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = project.images ?? [];
  const hasImages = images.length > 0;

  const showPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const isMobile = project.category === "mobile";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5"
      >
        {hasImages ? (
          <div className="relative bg-slate-900/50">
            <button
              type="button"
              onClick={() => setLightboxIndex(activeImage)}
              className={`block w-full overflow-hidden cursor-zoom-in ${
                isMobile
                  ? "aspect-[9/16] max-h-[420px] mx-auto bg-slate-950"
                  : "aspect-video"
              }`}
              aria-label={`Agrandir : ${images[activeImage].caption}`}
            >
              <img
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.02] ${
                  isMobile
                    ? "object-contain object-center"
                    : "object-cover object-top"
                }`}
              />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent px-4 py-3">
              <p className="text-white text-sm font-medium">
                {images[activeImage].caption}
              </p>
              {images.length > 1 && (
                <div className="flex gap-1.5 mt-2">
                  {images.map((image, imageIndex) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(imageIndex)}
                      className={`h-1.5 rounded-full transition-all ${
                        imageIndex === activeImage
                          ? "w-6 bg-blue-400"
                          : "w-1.5 bg-slate-500 hover:bg-slate-300"
                      }`}
                      aria-label={image.caption}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="aspect-video bg-slate-900/60 border-b border-slate-700/50 flex flex-col items-center justify-center gap-2 text-slate-500">
            <ImageIcon size={28} className="text-slate-600" />
            <span className="text-xs">Illustration à venir</span>
          </div>
        )}

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
          </div>

          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          <ul className="space-y-1.5 mb-5">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="text-slate-400 text-sm flex items-start gap-2"
              >
                <span className="text-blue-400 mt-0.5">▸</span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-slate-900/60 text-slate-400 text-xs rounded border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(index) => {
          setLightboxIndex(index);
          setActiveImage(index);
        }}
      />
    </>
  );
}
