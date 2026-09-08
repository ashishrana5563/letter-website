import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ZoomIn, Heart } from 'lucide-react';
import { photoMemories } from '../data/memories';

export default function PhotoMemory() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="photos" className="relative min-h-screen w-full bg-[#1C060A] py-24 px-4 sm:px-8 overflow-hidden film-grain">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B0A25]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Light leak effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-serif tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>FROZEN IN TIME</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl font-serif font-bold text-[#FFFDD0] tracking-wide text-glow-gold"
        >
          Photo Memory Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-xl sm:text-2xl font-handwriting text-[#F4ACB7]"
        >
          “Click any photograph to step back into the moment.”
        </motion.p>
      </div>

      {/* Polaroid Cards Grid / Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
        {photoMemories.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.8 }}
            style={{ transform: `rotate(${item.rotate})` }}
            className="polaroid-card cursor-pointer group"
            onClick={() => setSelectedPhoto(item)}
          >
            {/* Polaroid Frame Container */}
            <div className="relative aspect-[4/3] bg-[#0D0709] rounded overflow-hidden shadow-inner">
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter saturate-[1.05]"
              />

              {/* Hover Overlay Zoom Icon */}
              <div className="absolute inset-0 bg-[#3A0913]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#FFFDD0] text-[#8B0A25] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Polaroid Handwritten Caption */}
            <div className="mt-4 text-center">
              <p className="text-2xl font-handwriting text-[#3A0913] font-bold">
                {item.caption}
              </p>
              <p className="text-xs font-serif italic text-[#8B0A25]/70 mt-1">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0D0709]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-2 sm:-top-12 sm:right-0 p-3 rounded-full bg-[#8B0A25] text-[#FFFDD0] hover:bg-[#B80D34] transition-colors shadow-2xl z-20 border border-[#D4AF37]/50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Image Container */}
              <div className="relative rounded-2xl overflow-hidden glass-card p-3 border-2 border-[#D4AF37]/40 shadow-[0_25px_80px_rgba(0,0,0,0.9)] max-h-[75vh]">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl"
                />
              </div>

              {/* Caption Banner */}
              <div className="mt-6 text-center space-y-1">
                <h3 className="text-3xl sm:text-4xl font-handwriting text-[#FFFDD0] text-glow-rose font-bold">
                  “{selectedPhoto.caption}”
                </h3>
                <p className="text-base font-serif italic text-[#F4ACB7]">
                  {selectedPhoto.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
