import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, Volume2, VolumeX, Heart, Sparkles, Star } from 'lucide-react';
import { finalSlideshowMedia } from '../data/memories';

export default function FinalMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textStep, setTextStep] = useState(0);
  const iframeRef = useRef(null);

  // Auto advance slideshow when music section is active
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % finalSlideshowMedia.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Timed text reveal sequence once playing starts
  useEffect(() => {
    if (!isPlaying) return;

    const timers = [
      setTimeout(() => setTextStep(1), 1000), // "And after all these memories…"
      setTimeout(() => setTextStep(2), 4500), // "I still choose you."
      setTimeout(() => setTextStep(3), 8000), // "Again."
      setTimeout(() => setTextStep(4), 11000), // "And again."
      setTimeout(() => setTextStep(5), 14500), // "Thank you for being my favorite person."
      setTimeout(() => setTextStep(6), 18000), // "❤️"
      setTimeout(() => setTextStep(7), 21000)  // "Some people become memories… Some people become home."
    ];

    return () => timers.forEach(clearTimeout);
  }, [isPlaying]);

  const handlePlayMusic = () => {
    setIsPlaying(true);
    // Send message to YouTube iframe if available
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
        '*'
      );
    }
  };

  return (
    <section id="our-song" className="relative min-h-screen w-full bg-[#050203] py-28 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden text-center">
      {/* Moving Starry Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: (i * 0.3) % 4
            }}
            className="absolute rounded-full bg-[#FFFDD0]"
            style={{
              top: `${(i * 13) % 95}%`,
              left: `${(i * 17) % 95}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              boxShadow: '0 0 8px rgba(255,253,208,0.8)'
            }}
          />
        ))}
      </div>

      {/* Ambient Heartbeat Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#8B0A25]/20 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      {/* Hidden YouTube Iframe Player */}
      <iframe
        ref={iframeRef}
        className="hidden"
        src={`https://www.youtube.com/embed/iJuiEeaX7wQ?enablejsapi=1&autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=iJuiEeaX7wQ`}
        title="Our Song"
        allow="autoplay"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-serif tracking-widest uppercase shadow-2xl"
        >
          <Music className="w-4 h-4 text-[#D84B6B] animate-spin" style={{ animationDuration: '8s' }} />
          <span>OUR SONG & FINAL CINEMATIC</span>
        </motion.div>

        {/* Play Music Trigger Button if not started */}
        {!isPlaying ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6 my-8"
          >
            <h2 className="text-3xl sm:text-5xl font-serif text-[#FFFDD0] font-bold text-glow-rose">
              Ready for Our Song?
            </h2>
            <p className="text-xl font-handwriting text-[#F4ACB7]">
              “Turn up your sound and press play for the final memory.”
            </p>

            <button
              onClick={handlePlayMusic}
              className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-[#8B0A25] via-[#B80D34] to-[#8B0A25] text-[#FFFDD0] font-serif font-bold text-xl tracking-wider border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(216,75,107,0.8)] hover:shadow-[0_0_70px_rgba(212,175,55,0.9)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-4"
            >
              <Play className="w-6 h-6 fill-current text-[#D4AF37]" />
              <span>Play Our Song & Story</span>
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </button>
          </motion.div>
        ) : (
          /* Movie Ending Experience */
          <div className="w-full flex flex-col items-center space-y-12 my-4">
            {/* Slideshow Player Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative max-w-2xl w-full aspect-[16/10] rounded-3xl p-3 glass-card border-2 border-[#D4AF37]/60 shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {finalSlideshowMedia[currentSlide].type === 'video' ? (
                  <motion.video
                    key={currentSlide}
                    src={finalSlideshowMedia[currentSlide].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <motion.img
                    key={currentSlide}
                    src={finalSlideshowMedia[currentSlide].src}
                    alt="Ending slideshow"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                )}
              </AnimatePresence>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0D0709]/80 backdrop-blur-md rounded-xl p-3 border border-[#D4AF37]/30 text-center">
                <p className="text-xl font-handwriting text-[#FFFDD0]">
                  “{finalSlideshowMedia[currentSlide].caption}”
                </p>
              </div>
            </motion.div>

            {/* Timed Emotional Text Sequence */}
            <div className="min-h-[160px] flex flex-col items-center justify-center space-y-4 px-4">
              <AnimatePresence mode="wait">
                {textStep >= 1 && (
                  <motion.p
                    key={`step-${textStep}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl sm:text-4xl font-serif text-[#F4ACB7] italic"
                  >
                    {textStep === 1 && "“And after all these memories…”"}
                    {textStep === 2 && "“I still choose you.”"}
                    {textStep === 3 && "“Again.”"}
                    {textStep === 4 && "“And again.”"}
                    {textStep === 5 && "“Thank you for being my favorite person.”"}
                    {textStep === 6 && "❤️"}
                    {textStep >= 7 && (
                      <span className="block space-y-2">
                        <span className="block font-serif text-2xl sm:text-3xl text-[#FAF0E6]/70">Some people become memories…</span>
                        <span className="block font-handwriting text-4xl sm:text-6xl text-[#FFFDD0] text-glow-gold font-bold pt-2">Some people become home.</span>
                      </span>
                    )}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
