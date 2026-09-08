import React, { useState, useEffect } from 'react';
import RosePetalsCanvas from './components/RosePetalsCanvas';
import ChapterProgress from './components/ChapterProgress';
import EnvelopeIntro from './components/EnvelopeIntro';
import LoveLetter from './components/LoveLetter';
import StorySection from './components/StorySection';
import PhotoMemory from './components/PhotoMemory';
import VideoMemory from './components/VideoMemory';
import BirthdaySection from './components/BirthdaySection';
import HeartLetter from './components/HeartLetter';
import MemoryCollage from './components/MemoryCollage';
import UsSection from './components/UsSection';
import FinalMusic from './components/FinalMusic';
import FinalLetter from './components/FinalLetter';

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [activeSection, setActiveSection] = useState('envelope');

  // Track active section via IntersectionObserver for navbar
  useEffect(() => {
    const sections = [
      'envelope',
      'beginning',
      'story',
      'photos',
      'videos',
      'birthday',
      'heart-letter',
      'collage',
      'us',
      'our-song',
      'final-close'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpened(true);
    setTimeout(() => {
      handleNavigate('beginning');
    }, 600);
  };

  const handleReplayStory = () => {
    setIsEnvelopeOpened(false);
    setActiveSection('envelope');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0D0709] text-[#FFFDD0] selection:bg-[#8B0A25] selection:text-[#FFFDD0] overflow-x-hidden font-sans">
      {/* Floating Rose Petals & Particle Background */}
      <RosePetalsCanvas active={true} density="medium" />

      {/* Floating Chapter Progress Indicator */}
      <ChapterProgress
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Experience Flow */}
      <main className="relative z-10">
        {/* Section 1: Opening / Envelope */}
        <div id="envelope">
          <EnvelopeIntro onOpen={handleEnvelopeOpen} />
        </div>

        {/* Section 2: The Beginning */}
        <div id="beginning">
          <LoveLetter onContinue={() => handleNavigate('story')} />
        </div>

        {/* Section 3: Our Story */}
        <div id="story">
          <StorySection />
        </div>

        {/* Section 4: Photo Memory Experience */}
        <div id="photos">
          <PhotoMemory />
        </div>

        {/* Section 5: The Videos (Moving Memories) */}
        <div id="videos">
          <VideoMemory />
        </div>

        {/* Section 6: The Birthday Memory */}
        <div id="birthday">
          <BirthdaySection />
        </div>

        {/* Section 7: A Letter From The Heart */}
        <div id="heart-letter">
          <HeartLetter />
        </div>

        {/* Section 8: Our Favorite Moments (Collage) */}
        <div id="collage">
          <MemoryCollage />
        </div>

        {/* Section 9: "Us" Section */}
        <div id="us">
          <UsSection />
        </div>

        {/* Section 10: Final Video / Music Experience (OUR SONG) */}
        <div id="our-song">
          <FinalMusic />
        </div>

        {/* Section 11: Final Letter Close */}
        <div id="final-close">
          <FinalLetter onReplay={handleReplayStory} />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#070304] border-t border-[#8B0A25]/20 text-center text-xs font-serif text-[#FAF0E6]/40 tracking-widest">
        <p>MADE WITH ALL MY LOVE FOR YOU ❤️</p>
      </footer>
    </div>
  );
}
