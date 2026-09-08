import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Quote } from 'lucide-react';

export default function HeartLetter() {
  const paragraphs = [
    "If I could sit down and tell you everything, I'd probably start with how grateful I am for the day you entered my life.",
    "Sometimes life gets so busy and loud that we forget to pause and say what matters most. But every single memory we've built—every laugh, every quiet evening, every birthday candle—has become a part of who I am.",
    "I notice the little things. The way your eyes light up when you smile, the gentle warmth of your hand in mine, and how effortless it feels to be around you.",
    "You have this rare, incredible gift of making ordinary days feel like something truly special. With you, even the simplest walk or a shared joke turns into a memory I end up keeping close to my heart.",
    "I don't just love the big celebration days. I love the quiet between-moments. I love knowing that no matter what comes next in life, I get to share this path with you.",
    "Thank you for being my anchor, my constant smile, and my absolute favorite person in this entire universe."
  ];

  return (
    <section id="heart-letter" className="relative min-h-screen w-full bg-gradient-to-b from-[#1C060A] via-[#2D050B] to-[#0D0709] py-24 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8B0A25]/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Parchment Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-3xl w-full parchment-paper rounded-3xl p-8 sm:p-14 md:p-16 border-2 border-[#D4AF37]/50 shadow-[0_25px_80px_rgba(0,0,0,0.9)] text-[#2D050B] z-10"
      >
        {/* Decorative Wax Seal Header */}
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B0A25] to-[#3A0913] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg">
            <Heart className="w-7 h-7 text-[#FFFDD0] fill-current" />
          </div>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-handwriting text-[#8B0A25] text-center font-bold mb-10 border-b border-[#8B0A25]/20 pb-4"
        >
          If I could tell you everything…
        </motion.h2>

        {/* Letter Paragraphs */}
        <div className="space-y-6 text-lg sm:text-xl font-serif leading-relaxed text-[#3A0913]">
          {paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.1 * idx, duration: 0.8 }}
              className="first-letter:text-3xl first-letter:font-handwriting first-letter:text-[#8B0A25]"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Heartfelt Closing Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-14 pt-8 border-t-2 border-dashed border-[#8B0A25]/25 text-center space-y-4"
        >
          <p className="text-xl sm:text-2xl font-serif italic text-[#8B0A25]">
            “Some feelings are too big for a message…”
          </p>

          <p className="text-3xl sm:text-4xl font-handwriting font-bold text-[#8B0A25] tracking-wide text-glow-rose pt-2">
            “So I made you a whole little world instead.”
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
