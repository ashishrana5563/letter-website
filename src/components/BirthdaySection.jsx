import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Sparkles, Cake } from 'lucide-react';
import { birthdaySectionData } from '../data/memories';

export default function BirthdaySection() {
  return (
    <section id="birthday" className="relative min-h-screen w-full bg-gradient-to-b from-[#3A0913] via-[#5C0D1E] to-[#3A0913] py-24 px-4 sm:px-8 overflow-hidden text-[#FFFDD0]">
      {/* Fairy Light Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D84B6B]/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Floating Fairy Lights / Balloons effect particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', opacity: 0.2 }}
            animate={{
              y: '-10vh',
              x: Math.sin(i) * 60,
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.8
            }}
            className="absolute rounded-full"
            style={{
              left: `${(i * 7) % 95}%`,
              width: i % 2 === 0 ? '12px' : '18px',
              height: i % 2 === 0 ? '12px' : '18px',
              background: i % 3 === 0 ? 'rgba(212,175,55,0.7)' : 'rgba(244,172,183,0.7)',
              boxShadow: '0 0 15px rgba(212,175,55,0.8)'
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card-gold text-[#D4AF37] text-xs font-serif tracking-widest uppercase mb-4 shadow-xl"
        >
          <Cake className="w-4 h-4 text-[#D4AF37]" />
          <span>SPECIAL CELEBRATION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl font-serif font-bold text-[#FFFDD0] tracking-wide text-glow-gold"
        >
          {birthdaySectionData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-xl sm:text-3xl font-handwriting text-[#F3E5AB] max-w-2xl mx-auto leading-relaxed"
        >
          “{birthdaySectionData.subtitle}”
        </motion.p>
      </div>

      {/* Media Highlight Showcase */}
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Photo Grid with Warm Glowing Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {birthdaySectionData.photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-card-gold rounded-2xl p-3 border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative group overflow-hidden"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0D0709]">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A0913] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#8B0A25] text-[#D4AF37] text-[10px] uppercase font-serif tracking-wider mb-1">
                    {photo.tag}
                  </span>
                  <p className="text-lg font-handwriting text-[#FFFDD0]">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {birthdaySectionData.videos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.8 }}
              className="glass-card-gold rounded-3xl p-4 border border-[#D4AF37]/40 shadow-2xl space-y-3"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <video
                  src={vid.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 px-3 py-1 rounded-full bg-[#0D0709]/80 backdrop-blur-md text-[#FFFDD0] text-xs font-serif flex items-center gap-1.5 border border-[#D4AF37]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{vid.caption}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
