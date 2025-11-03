import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden rounded-xl border border-slate-800/50 bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8d0v2o1R1b2G4E7T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">A Simpler View of Space</h1>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Explore a calm 3D scene, a minimal star field, and a few quick facts about the Universe.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#track" className="inline-flex items-center rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium hover:bg-indigo-400 transition-colors">
              See Stars
            </a>
            <a href="#learn" className="inline-flex items-center rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-700/50 transition-colors">
              Learn Basics
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
