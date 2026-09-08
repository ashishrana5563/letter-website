import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Quote } from 'lucide-react';
import { storyChapters } from '../data/memories';

export default function StorySection() {
  return (
    <section id="story" className="relative min-h-screen w-full bg-[#0D0709] py-24 px-4 sm:px-8 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#5C0D1E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#8B0A25]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[#D84B6B]/30 text-[#D84B6B] text-xs font-serif tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>CHAPTER BY CHAPTER</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl font-serif font-bold text-[#FFFDD0] tracking-wide text-glow-rose"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-lg sm:text-xl font-handwriting text-[#F4ACB7] max-w-xl mx-auto"
        >
          “Every great love story starts with a simple hello… but ours is my absolute favorite.”
        </motion.p>
      </div>

      {/* Chapters Timeline Stack */}
      <div className="max-w-5xl mx-auto space-y-28 sm:space-y-36 relative">
        {/* Timeline connecting line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#8B0A25]/10 via-[#D84B6B]/40 to-[#8B0A25]/10 hidden md:block" />

        {storyChapters.map((chapter, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className={`flex flex-col ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12 relative`}
            >
              {/* Center Heart Node on Timeline */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 rounded-full bg-[#1C060A] border-2 border-[#D84B6B] items-center justify-center shadow-[0_0_20px_rgba(216,75,107,0.6)] z-20">
                <Heart className="w-4 h-4 text-[#D84B6B] fill-current" />
              </div>

              {/* Media Card Column */}
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden glass-card p-3 sm:p-4 group shadow-[0_15px_40px_rgba(0,0,0,0.8)] border border-[#D84B6B]/20"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1C060A]">
                    {chapter.mediaType === 'video' ? (
                      <video
                        src={chapter.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <img
                        src={chapter.src}
                        alt={chapter.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0709] via-transparent to-transparent opacity-60" />

                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#8B0A25]/80 backdrop-blur-md text-[#FFFDD0] text-xs font-handwriting text-base">
                        {chapter.caption}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Text Content Column */}
              <div className="w-full md:w-1/2 text-left space-y-4 px-2 sm:px-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-serif text-[#D4AF37] font-bold">
                    0{chapter.id}
                  </span>
                  <span className="w-8 h-0.5 bg-[#D4AF37]/40" />
                  <span className="text-xs uppercase tracking-widest text-[#F4ACB7]">
                    CHAPTER
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#FFFDD0] tracking-wide">
                  {chapter.title}
                </h3>

                <p className="text-lg font-handwriting text-[#F4ACB7] text-2xl">
                  {chapter.subtitle}
                </p>

                <p className="text-base sm:text-lg font-serif text-[#FAF0E6]/80 leading-relaxed font-light">
                  {chapter.text}
                </p>

                <div className="pt-2 border-t border-[#D84B6B]/20 flex items-start gap-3 italic text-sm text-[#D4AF37]/90 font-serif">
                  <Quote className="w-4 h-4 text-[#D84B6B] shrink-0 mt-0.5" />
                  <span>{chapter.quote}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
