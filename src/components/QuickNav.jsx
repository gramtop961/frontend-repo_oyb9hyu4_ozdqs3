import React from 'react';
import { Home, Star, BookOpen } from 'lucide-react';

export default function QuickNav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
          <Home className="h-5 w-5" />
          <span className="font-semibold">Astro Lite</span>
        </a>
        <div className="flex items-center gap-4 text-slate-300">
          <a href="#track" className="flex items-center gap-2 hover:text-white transition-colors">
            <Star className="h-5 w-5" />
            <span>Stars</span>
          </a>
          <a href="#learn" className="flex items-center gap-2 hover:text-white transition-colors">
            <BookOpen className="h-5 w-5" />
            <span>Learn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
