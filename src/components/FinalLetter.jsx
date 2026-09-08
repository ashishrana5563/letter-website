import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Heart, Sparkles } from 'lucide-react';

export default function FinalLetter({ onReplay }) {
  return (
    <section id="final-close" className="relative min-h-screen w-full bg-gradient-to-b from-[#050203] via-[#1C060A] to-[#0D0709] py-24 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B0A25]/25 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-2xl w-full parchment-paper rounded-3xl p-8 sm:p-14 border-2 border-[#D4AF37]/50 shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-[#2D050B] z-10"
      >
        {/* Heart Icon Header */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B0A25] to-[#3A0913] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg">
            <Heart className="w-7 h-7 text-[#FFFDD0] fill-current" />
          </div>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-handwriting text-[#8B0A25] font-bold mb-6 border-b border-[#8B0A25]/20 pb-3"
        >
          Dear you,
        </motion.h3>

        <div className="space-y-4 text-lg sm:text-xl font-serif leading-relaxed text-[#3A0913]">
          <p className="italic">
            If you ever wonder how much you mean to me, come back here.
          </p>

          <p className="font-semibold text-[#8B0A25]">
            Look at these memories.
          </p>

          <p className="font-semibold text-[#8B0A25]">
            Look at us.
          </p>

          <p className="pt-2">
            And remember that somewhere between all these little moments,
            you became one of the most beautiful parts of my life.
          </p>

          <div className="pt-6 text-right">
            <p className="text-2xl font-handwriting font-bold text-[#8B0A25]">
              With all my heart,
            </p>
            <p className="text-3xl font-handwriting font-bold text-[#8B0A25] pt-1">
              Always ❤️
            </p>
          </div>
        </div>

        {/* Replay button */}
        <div className="mt-12 pt-6 border-t border-[#8B0A25]/20 flex justify-center">
          <button
            onClick={onReplay}
            className="group px-8 py-3.5 rounded-full bg-[#8B0A25] hover:bg-[#B80D34] text-[#FFFDD0] font-serif font-semibold text-base tracking-wider shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 border border-[#D4AF37]/50"
          >
            <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
            <span>Replay Our Story ↻</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
