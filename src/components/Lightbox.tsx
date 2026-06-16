import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const isOpen = index !== null && images.length > 0;
  const currentIndex = index ?? 0;
  const current = images[currentIndex];
  const hasMultiple = images.length > 1;

  const goTo = useCallback(
    (nextIndex: number) => {
      const wrapped =
        ((nextIndex % images.length) + images.length) % images.length;
      onIndexChange?.(wrapped);
    },
    [images.length, onIndexChange]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple) goTo(currentIndex - 1);
      if (e.key === "ArrowRight" && hasMultiple) goTo(currentIndex + 1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, hasMultiple, onClose, goTo]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image en plein écran"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 z-10"
            aria-label="Fermer"
          >
            <X size={28} />
          </button>

          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goTo(currentIndex - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors z-10"
              aria-label="Image précédente"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            {(current.caption || hasMultiple) && (
              <div className="mt-4 text-center">
                {current.caption && (
                  <p className="text-white text-sm font-medium">
                    {current.caption}
                  </p>
                )}
                {hasMultiple && (
                  <p className="text-slate-400 text-xs mt-1">
                    {currentIndex + 1} / {images.length}
                  </p>
                )}
              </div>
            )}
          </motion.div>

          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goTo(currentIndex + 1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors z-10"
              aria-label="Image suivante"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
