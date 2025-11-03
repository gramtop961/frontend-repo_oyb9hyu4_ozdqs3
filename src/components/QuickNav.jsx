import React from 'react';
import { Rocket, Compass, Globe, Sparkles, Star, Moon } from 'lucide-react';

const items = [
  { id: 'home', label: 'Home', icon: Rocket },
  { id: 'tracker', label: 'Star Tracker', icon: Compass },
  { id: 'learn-universe', label: 'Universe', icon: Globe },
  { id: 'learn-galaxies', label: 'Galaxies', icon: Sparkles },
  { id: 'learn-stars', label: 'Stars', icon: Star },
  { id: 'learn-planets', label: 'Planets', icon: Moon },
];

const QuickNav = () => {
  const handleClick = (targetId) => {
    const el = document.getElementById(targetId) || document.getElementById('learn');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur bg-black/40 border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold tracking-wide">Cosmic Atlas</div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {items.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-sm bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default QuickNav;
