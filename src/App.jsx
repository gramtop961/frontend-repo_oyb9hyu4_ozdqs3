import React from 'react';
import HeroSection from './components/HeroSection';
import QuickNav from './components/QuickNav';
import StarTracker from './components/StarTracker';
import KnowledgeSections from './components/KnowledgeSections';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <HeroSection />
      <QuickNav />
      <StarTracker />
      <KnowledgeSections />
      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        Built for curious minds • Optimized for desktop and mobile • Enjoy your journey through space
      </footer>
    </div>
  );
};

export default App;
