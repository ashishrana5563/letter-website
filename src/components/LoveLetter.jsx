import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function LoveLetter({ onContinue }) {
  const lines = [
    "Maybe I never say everything I feel.",
    "Maybe some things are easier to keep inside.",
    "But today, I wanted to turn all those little feelings,",
    "memories, smiles and moments into something you can keep."
  ];

  return (
    <section id="beginning" className="relative min-h-screen w-full bg-gradient-to-b from-[#0F0305] via-[#1C060A] to-[#2D050B] py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#5C0D1E]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B0A25]/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-2xl w-full parchment-paper rounded-2xl p-8 sm:p-12 md:p-16 border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-[#2D050B]"
      >
        {/* Subtle decorative stamp / heart watermark */}
        <div className="absolute top-6 right-6 opacity-20 pointer-events-none">
          <Heart className="w-16 h-16 text-[#8B0A25] fill-current" />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-handwriting text-[#8B0A25] mb-8 border-b border-[#8B0A25]/20 pb-4"
        >
          Dear You…
        </motion.h2>

        {/* Line by line typewriter reveal */}
        <div className="space-y-6 text-xl sm:text-2xl font-serif leading-relaxed text-[#3A0913]">
          {lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.4, duration: 0.8 }}
              className="italic font-serif"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Highlight Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-10 pt-6 border-t-2 border-dashed border-[#8B0A25]/20 text-center"
        >
          <p className="text-2xl sm:text-3xl font-handwriting font-bold text-[#8B0A25] tracking-wide">
            “This isn't just a website. It's a little piece of us.”
          </p>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={onContinue}
            className="group px-8 py-3.5 rounded-full bg-[#8B0A25] hover:bg-[#B80D34] text-[#FFFDD0] font-serif font-semibold text-base tracking-wider shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 border border-[#D4AF37]/40"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
