import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Sparkles, Film, Heart } from 'lucide-react';
import { movingMemories } from '../data/memories';

function SingleVideoCard({ video, isEven }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // IntersectionObserver to auto-play when visible, auto-pause when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
            setIsPlaying(true);
          } else {
            el.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-center gap-8 lg:gap-12 bg-gradient-to-r from-[#1C060A]/80 via-[#2D050B]/60 to-[#1C060A]/80 rounded-3xl p-6 sm:p-8 border border-[#D84B6B]/20 glass-card shadow-[0_20px_50px_rgba(0,0,0,0.8)]`}
    >
      {/* Video Container */}
      <div className="w-full lg:w-3/5 relative rounded-2xl overflow-hidden shadow-2xl group border border-[#D4AF37]/30 bg-[#0D0709] aspect-video">
        <video
          ref={videoRef}
          src={video.src}
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Video Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0709]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-[#8B0A25]/90 text-[#FFFDD0] hover:bg-[#B80D34] transition-transform active:scale-95 shadow-lg border border-[#D4AF37]/40"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            className="p-3 rounded-full bg-[#8B0A25]/90 text-[#FFFDD0] hover:bg-[#B80D34] transition-transform active:scale-95 shadow-lg border border-[#D4AF37]/40 flex items-center gap-2 text-xs font-serif"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-5 h-5 text-[#F4ACB7]" />
                <span className="hidden sm:inline">Tap to Unmute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-5 h-5 text-[#D4AF37]" />
                <span className="hidden sm:inline">Sound On</span>
              </>
            )}
          </button>
        </div>

        {/* Always visible mute toggle badge for mobile touch */}
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 lg:hidden px-3 py-1.5 rounded-full bg-[#8B0A25]/90 backdrop-blur-md text-[#FFFDD0] text-xs font-serif flex items-center gap-1.5 border border-[#D4AF37]/40 shadow-md"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#F4ACB7]" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
          <span>{isMuted ? 'Unmute' : 'Muted'}</span>
        </button>
      </div>

      {/* Text Content Container */}
      <div className="w-full lg:w-2/5 space-y-4 text-left">
        <div className="flex items-center gap-2 text-[#D4AF37] font-serif text-xs uppercase tracking-widest">
          <Film className="w-4 h-4 text-[#D84B6B]" />
          <span>Moving Memory</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FFFDD0] tracking-wide text-glow-rose">
          {video.title}
        </h3>

        <p className="text-xl font-handwriting text-[#F4ACB7] text-2xl leading-relaxed">
          “{video.quote}”
        </p>

        <p className="text-base font-serif text-[#FAF0E6]/80 leading-relaxed font-light">
          {video.text}
        </p>

        <div className="pt-2 flex items-center gap-2 text-xs font-serif text-[#D4AF37]/70 italic">
          <Heart className="w-3.5 h-3.5 text-[#D84B6B] fill-current" />
          <span>Captured forever in video</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoMemory() {
  return (
    <section id="videos" className="relative min-h-screen w-full bg-[#0D0709] py-24 px-4 sm:px-8 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#5C0D1E]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#8B0A25]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[#D84B6B]/30 text-[#D84B6B] text-xs font-serif tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>LIVE MEMORIES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl font-serif font-bold text-[#FFFDD0] tracking-wide text-glow-rose"
        >
          Some Moments Are Better When They Move
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-2xl sm:text-3xl font-handwriting text-[#F4ACB7]"
        >
          “Photos remember the moment. Videos remember the feeling.”
        </motion.p>
      </div>

      {/* Video Cards Stream */}
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20 relative z-10">
        {movingMemories.map((video, idx) => (
          <SingleVideoCard key={video.id} video={video} isEven={idx % 2 === 0} />
        ))}
      </div>
    </section>
  );
}
