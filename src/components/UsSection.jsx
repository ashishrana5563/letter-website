import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { MEDIA_PATH } from '../data/memories';

const usPhotos = [
  `${MEDIA_PATH}/1.jpeg`,
  `${MEDIA_PATH}/3.jpeg`,
  `${MEDIA_PATH}/5.jpeg`,
  `${MEDIA_PATH}/8.jpeg`,
  `${MEDIA_PATH}/WhatsApp Image 2026-09-08 at 10.42.07 AM.jpeg`
];

export default function UsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % usPhotos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="us" className="relative min-h-screen w-full bg-[#070304] py-28 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient background photo slideshow with blur fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={usPhotos[currentIndex]}
            alt="Just us"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover filter blur-md"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070304] via-[#070304]/80 to-[#070304]" />
      </div>

      {/* Main Focus Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-12 h-12 rounded-full bg-[#8B0A25]/60 border border-[#D4AF37]/50 flex items-center justify-center shadow-[0_0_25px_rgba(216,75,107,0.5)]">
            <Heart className="w-6 h-6 text-[#FFFDD0] fill-current animate-pulse" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-5xl font-serif text-[#F4ACB7] font-light italic"
        >
          “Maybe this is what I like the most…”
        </motion.h2>

        <div className="space-y-3 font-serif text-xl sm:text-2xl text-[#FAF0E6]/70 font-light">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Not the perfect pictures.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Not the decorations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Not the flowers.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Not the cake.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.9, duration: 1 }}
          className="pt-6"
        >
          <p className="text-5xl sm:text-7xl font-handwriting font-bold text-[#FFFDD0] text-glow-rose tracking-wider">
            Just us. ❤️
          </p>
        </motion.div>

        {/* Central Photo Showcase Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-8 relative max-w-md mx-auto aspect-[4/3] rounded-2xl p-2 glass-card border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={usPhotos[currentIndex]}
              alt="Just us moment"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover rounded-xl"
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
