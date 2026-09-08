import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, ZoomIn, Film, X } from 'lucide-react';
import { allCollageMedia } from '../data/memories';

export default function MemoryCollage() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="collage" className="relative min-h-screen w-full bg-[#0D0709] py-24 px-4 sm:px-8 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8B0A25]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#5C0D1E]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[#D84B6B]/30 text-[#D84B6B] text-xs font-serif tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>EVERY SINGLE MOMENT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl font-serif font-bold text-[#FFFDD0] tracking-wide text-glow-rose"
        >
          Our Favorite Moments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-xl sm:text-2xl font-handwriting text-[#F4ACB7]"
        >
          “A mosaic of every smile, every video, and every memory we share.”
        </motion.p>
      </div>

      {/* Mobile Swipe Carousel View */}
      <div className="block md:hidden w-full overflow-x-auto no-scrollbar py-4 px-2 flex gap-4 snap-x snap-mandatory z-10">
        {allCollageMedia.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="shrink-0 w-[82vw] aspect-[4/5] rounded-2xl glass-card p-3 border border-[#D84B6B]/30 shadow-xl snap-center relative overflow-hidden group"
          >
            <div className="w-full h-full rounded-xl overflow-hidden bg-[#1C060A] relative">
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0709] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-base font-handwriting text-[#FFFDD0] font-bold">
                  {item.caption}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Masonry Collage Grid */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto relative z-10">
        {allCollageMedia.map((item, idx) => {
          const colSpan = item.size === 'large' ? 'col-span-2 row-span-2' : item.size === 'medium' ? 'col-span-2' : 'col-span-1';
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ scale: 1.03, zIndex: 20 }}
              onClick={() => setActiveItem(item)}
              className={`relative rounded-2xl overflow-hidden glass-card p-2 border border-[#D84B6B]/20 cursor-pointer group shadow-lg ${colSpan}`}
            >
              <div className="w-full h-full aspect-square rounded-xl overflow-hidden bg-[#1C060A] relative">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}

                {/* Hover overlay with caption & zoom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0709]/90 via-[#3A0913]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-[#FFFDD0]">
                    <span className="font-handwriting text-xl font-bold">
                      {item.caption}
                    </span>
                    <ZoomIn className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0D0709]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute -top-12 right-0 p-3 rounded-full bg-[#8B0A25] text-[#FFFDD0] hover:bg-[#B80D34] transition-colors border border-[#D4AF37]/40 shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative rounded-2xl overflow-hidden glass-card p-3 border border-[#D4AF37]/50 shadow-2xl max-h-[80vh] w-full">
                {activeItem.type === 'video' ? (
                  <video
                    src={activeItem.src}
                    controls
                    autoPlay
                    className="w-full max-h-[70vh] object-contain rounded-xl"
                  />
                ) : (
                  <img
                    src={activeItem.src}
                    alt={activeItem.caption}
                    className="w-full max-h-[70vh] object-contain rounded-xl"
                  />
                )}
              </div>

              <div className="mt-4 text-center">
                <p className="text-3xl font-handwriting text-[#FFFDD0] text-glow-rose font-bold">
                  “{activeItem.caption}”
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
