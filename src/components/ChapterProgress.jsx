import React from 'react';
import { Heart } from 'lucide-react';

const CHAPTERS = [
  { id: 'envelope', label: 'Envelope', number: '01' },
  { id: 'beginning', label: 'Beginning', number: '02' },
  { id: 'story', label: 'Story', number: '03' },
  { id: 'photos', label: 'Memories', number: '04' },
  { id: 'videos', label: 'Videos', number: '05' },
  { id: 'birthday', label: 'Birthday', number: '06' },
  { id: 'heart-letter', label: 'Letter', number: '07' },
  { id: 'collage', label: 'Collage', number: '08' },
  { id: 'us', label: 'Us', number: '09' },
  { id: 'our-song', label: 'Our Song', number: '10' },
  { id: 'final-close', label: 'Forever', number: '11' }
];

export default function ChapterProgress({ activeSection, onNavigate }) {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full glass-card border border-[#D84B6B]/20 flex items-center gap-2 max-w-[92vw] overflow-x-auto no-scrollbar shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-1 pl-2 pr-2 border-r border-[#D84B6B]/30 text-[#D84B6B] text-xs font-serif font-bold tracking-widest uppercase">
        <Heart className="w-3.5 h-3.5 fill-current animate-pulse text-[#D84B6B]" />
        <span className="hidden sm:inline">LOVE STORY</span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        {CHAPTERS.map((ch) => {
          const isActive = activeSection === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => onNavigate(ch.id)}
              className={`px-2.5 py-1 rounded-full text-xs transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                isActive
                  ? 'bg-gradient-to-r from-[#8B0A25] to-[#D84B6B] text-[#FFFDD0] shadow-lg font-semibold scale-105'
                  : 'text-[#FAF0E6]/70 hover:text-[#FFFDD0] hover:bg-[#5C0D1E]/40'
              }`}
            >
              <span className="opacity-60 text-[10px] font-mono">{ch.number}</span>
              <span className="font-serif tracking-wide">{ch.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
