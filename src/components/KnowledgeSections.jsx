import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
      {children}
    </div>
  </section>
);

const Timeline = () => {
  const items = [
    { t: '13.8 GA', title: 'Big Bang', desc: 'Birth of space, time, and energy; rapid expansion.' },
    { t: '380 KA', title: 'Recombination', desc: 'Atoms form; cosmic microwave background released.' },
    { t: '200 MA', title: 'First Stars', desc: 'The first luminous objects ignite.' },
    { t: '1 GA', title: 'Galaxies Grow', desc: 'Galactic structures form and evolve.' },
    { t: '9 GA', title: 'Solar System', desc: 'Our Sun and planets form from a nebular cloud.' },
    { t: '13.8 GA', title: 'Today', desc: 'Accelerating expansion driven by dark energy.' },
  ];
  return (
    <div className="relative">
      <div className="absolute left-1 md:left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-400 via-fuchsia-400 to-cyan-400" />
      <ul className="space-y-6 pl-6 md:pl-10">
        {items.map((it, idx) => (
          <motion.li
            key={it.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="relative"
          >
            <div className="absolute -left-6 md:-left-9 top-1 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_4px_rgba(99,102,241,0.6)]" />
            <div className="text-xs uppercase tracking-wider text-white/60">{it.t}</div>
            <div className="text-lg font-semibold">{it.title}</div>
            <div className="text-white/80">{it.desc}</div>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mt-6 h-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"
        aria-label="Universe expansion infographic"
      />
      <p className="text-sm text-white/70 mt-2">Illustration: The universe expands over time.</p>
    </div>
  );
};

const GalaxyGallery = () => {
  const galaxies = [
    { name: 'Milky Way', type: 'Spiral', img: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1280&auto=format&fit=crop' },
    { name: 'Andromeda', type: 'Spiral', img: 'https://images.unsplash.com/photo-1447430617419-95715602278e?q=80&w=1280&auto=format&fit=crop' },
    { name: 'Sombrero', type: 'Spiral', img: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=1280&auto=format&fit=crop' },
    { name: 'Large Magellanic Cloud', type: 'Irregular', img: 'https://images.unsplash.com/photo-1447433909565-04bfc496fe4b?q=80&w=1280&auto=format&fit=crop' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {galaxies.map((g) => (
        <motion.div
          key={g.name}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img src={g.img} alt={g.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="p-4">
            <div className="text-lg font-bold">{g.name}</div>
            <div className="text-white/70">{g.type} Galaxy</div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </div>
  );
};

const StarLifecycle = () => {
  const stages = [
    { name: 'Nebula', color: 'from-purple-500 to-pink-500' },
    { name: 'Protostar', color: 'from-orange-400 to-amber-500' },
    { name: 'Main Sequence', color: 'from-indigo-500 to-blue-500' },
    { name: 'Red Giant', color: 'from-red-500 to-rose-500' },
    { name: 'Supernova', color: 'from-fuchsia-500 to-purple-600' },
    { name: 'Neutron Star / Black Hole / White Dwarf', color: 'from-slate-500 to-slate-700' },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {stages.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className={`rounded-xl p-4 border border-white/10 bg-gradient-to-br ${s.color} text-white shadow-lg`}
        >
          <div className="font-semibold">{s.name}</div>
          <div className="mt-1 text-sm text-white/90">Animated progression of stellar evolution.</div>
        </motion.div>
      ))}
    </div>
  );
};

const PlanetsShowcase = () => {
  const planets = [
    { name: 'Mercury', color: 'bg-gradient-to-br from-zinc-400 to-zinc-700' },
    { name: 'Venus', color: 'bg-gradient-to-br from-amber-300 to-amber-600' },
    { name: 'Earth', color: 'bg-gradient-to-br from-blue-500 to-emerald-500' },
    { name: 'Mars', color: 'bg-gradient-to-br from-red-400 to-orange-600' },
    { name: 'Jupiter', color: 'bg-gradient-to-br from-amber-200 to-amber-500' },
    { name: 'Saturn', color: 'bg-gradient-to-br from-yellow-200 to-amber-400' },
    { name: 'Uranus', color: 'bg-gradient-to-br from-cyan-300 to-cyan-500' },
    { name: 'Neptune', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {planets.map((p, idx) => (
        <motion.div
          key={p.name}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center"
        >
          <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full ${p.color} shadow-[0_0_50px_rgba(99,102,241,0.5)] relative overflow-visible`}></div>
          <div className="mt-2 font-semibold">{p.name}</div>
        </motion.div>
      ))}
    </div>
  );
};

const KnowledgeSections = () => {
  const [tab, setTab] = useState('universe');

  const tabs = useMemo(
    () => [
      { id: 'universe', label: 'Universe', target: 'learn-universe' },
      { id: 'galaxies', label: 'Galaxies', target: 'learn-galaxies' },
      { id: 'stars', label: 'Stars', target: 'learn-stars' },
      { id: 'planets', label: 'Planets', target: 'learn-planets' },
    ],
    []
  );

  return (
    <section id="learn" className="bg-gradient-to-b from-black via-slate-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-full border ${
                tab === t.id
                  ? 'bg-white/15 border-white/30'
                  : 'bg-white/5 hover:bg-white/10 border-white/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          <div id="learn-universe">
            {tab === 'universe' && (
              <SectionContainer id="learn-universe" title="The Universe: From Big Bang to Today">
                <p className="text-white/80 mb-4">
                  The universe began 13.8 billion years ago in a hot, dense state and has been expanding ever since.
                  Dark matter shapes large-scale structure, while dark energy drives the accelerating expansion.
                </p>
                <Timeline />
              </SectionContainer>
            )}
          </div>

          <div id="learn-galaxies">
            {tab === 'galaxies' && (
              <SectionContainer id="learn-galaxies" title="Galaxies: Islands of Stars">
                <p className="text-white/80 mb-4">
                  Galaxies come in many shapes and sizes—spiral, elliptical, and irregular—each telling a story of cosmic evolution.
                </p>
                <GalaxyGallery />
              </SectionContainer>
            )}
          </div>

          <div id="learn-stars">
            {tab === 'stars' && (
              <SectionContainer id="learn-stars" title="Stars: Life and Death">
                <p className="text-white/80 mb-4">
                  Stars form from collapsing clouds of gas. Their mass determines their lifetime and fate—from white dwarfs to black holes.
                </p>
                <StarLifecycle />
                <div className="mt-6">
                  <input
                    type="text"
                    placeholder="Search constellations & famous stars..."
                    className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10"
                  />
                  <p className="text-sm text-white/70 mt-2">Tip: Try Sirius, Betelgeuse, or Polaris.</p>
                </div>
              </SectionContainer>
            )}
          </div>

          <div id="learn-planets">
            {tab === 'planets' && (
              <SectionContainer id="learn-planets" title="Planets: Our Solar System">
                <p className="text-white/80 mb-4">
                  Explore the eight major planets of our Solar System. Select a world to learn about its history and atmosphere.
                </p>
                <PlanetsShowcase />
              </SectionContainer>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSections;
