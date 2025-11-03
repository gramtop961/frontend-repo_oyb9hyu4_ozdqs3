import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import QuickNav from './components/QuickNav.jsx';
import StarTracker from './components/StarTracker.jsx';
import KnowledgeSections from './components/KnowledgeSections.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">
      <QuickNav />
      <main className="space-y-16">
        <section id="home">
          <HeroSection />
        </section>

        <section id="track" className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Live Star Field (Simple)</h2>
            <p className="text-slate-300 mb-6">A lightweight twinkling star background you can move with your cursor.</p>
            <StarTracker />
          </div>
        </section>

        <section id="learn" className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <KnowledgeSections />
          </div>
        </section>
      </main>

      <footer className="mt-20 py-8 text-center text-slate-400">
        <p>Made with curiosity about the cosmos.</p>
      </footer>
    </div>
  );
}
