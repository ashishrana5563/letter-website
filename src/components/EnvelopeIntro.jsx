import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Mail, ArrowDown } from 'lucide-react';

export default function EnvelopeIntro({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    setTimeout(() => {
      setIsOpen(true);
      if (onOpen) onOpen();
    }, 1200);
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#0D0709] via-[#1C060A] to-[#0F0305] flex flex-col items-center justify-center p-4 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B0A25]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle romantic watermark particles */}
      <div className="absolute inset-0 bg-[radial-gradient(#D84B6B_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-20 flex flex-col items-center max-w-xl w-full text-center px-4">
        {/* Envelope Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full max-w-md aspect-[4/3] my-6"
        >
          {/* Main Envelope Body */}
          <div
            onClick={handleOpenClick}
            className="relative w-full h-full bg-[#3A0913] rounded-2xl border-2 border-[#D84B6B]/40 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden cursor-pointer group transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(216,75,107,0.4)] flex flex-col justify-between p-6 sm:p-8 text-left"
          >
            {/* Texture background inside envelope */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5C0D1E] via-[#3A0913] to-[#1C060A] opacity-90" />

            {/* Envelope Top Flap Animation */}
            <motion.div
              initial={false}
              animate={{ rotateX: isOpening ? 180 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#5C0D1E] to-[#3A0913] border-b border-[#D84B6B]/30 clip-polygon shadow-md z-20 pointer-events-none"
            />

            {/* Envelope Header Text */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37] font-serif text-xs uppercase tracking-widest">
                <Mail className="w-4 h-4 text-[#D84B6B]" />
                <span>Personal & Confidential</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#FFFDD0] font-bold tracking-wide text-glow-rose">
                “Open this when you have a moment…”
              </h2>
            </div>

            {/* Wax Seal / Heart Button Centerpiece */}
            <div className="relative z-10 my-4 flex flex-col items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B0A25] via-[#B80D34] to-[#5C0D1E] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_25px_rgba(216,75,107,0.7)] group-hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] transition-all duration-300"
              >
                <Heart className="w-8 h-8 text-[#FFFDD0] fill-current animate-pulse" />
              </motion.div>
              <span className="mt-2 text-xs font-handwriting text-[#D4AF37] text-lg">Click to unseal</span>
            </div>

            {/* Envelope Footer Text */}
            <div className="relative z-10 border-t border-[#D84B6B]/20 pt-3">
              <p className="text-sm font-handwriting text-[#F4ACB7] text-xl leading-relaxed">
                “For the person who means more than words can explain.”
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 flex flex-col items-center gap-4"
        >
          <button
            onClick={handleOpenClick}
            disabled={isOpening}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#8B0A25] via-[#B80D34] to-[#8B0A25] text-[#FFFDD0] font-serif font-semibold text-lg tracking-wider border border-[#D4AF37]/50 shadow-[0_0_30px_rgba(139,10,37,0.8)] hover:shadow-[0_0_40px_rgba(216,75,107,0.9)] hover:border-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Sparkles className="w-5 h-5 text-[#D4AF37] animate-spin" style={{ animationDuration: '6s' }} />
            <span>Open Letter</span>
            <Heart className="w-4 h-4 text-[#F4ACB7] fill-current" />
          </button>

          <p className="text-xs sm:text-sm font-serif italic text-[#FAF0E6]/60 tracking-wider">
            “Some memories deserve more than a photo… they deserve a story.”
          </p>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#F4ACB7]/40 flex flex-col items-center gap-1 text-xs"
      >
        <span>Scroll or open to begin</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
