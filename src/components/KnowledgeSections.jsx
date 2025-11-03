import React, { useState } from 'react';

const tabs = [
  { key: 'universe', label: 'Universe' },
  { key: 'galaxies', label: 'Galaxies' },
  { key: 'planets', label: 'Planets' },
];

export default function KnowledgeSections() {
  const [active, setActive] = useState('universe');

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Quick Knowledge</h2>
      <div className="flex gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-lg px-4 py-2 text-sm border transition-colors ${
              active === t.key
                ? 'bg-indigo-500 border-indigo-500 text-white'
                : 'border-slate-700 text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-slate-800/50 bg-black p-5">
        {active === 'universe' && <UniverseBasics />}
        {active === 'galaxies' && <GalaxyBasics />}
        {active === 'planets' && <PlanetBasics />}
      </div>
    </div>
  );
}

function Item({ title, desc }) {
  return (
    <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
      <p className="font-medium">{title}</p>
      <p className="text-slate-300 text-sm mt-1">{desc}</p>
    </div>
  );
}

function UniverseBasics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Item title="Age ≈ 13.8 billion years" desc="The Universe began with the Big Bang and has been expanding since." />
      <Item title="Cosmic Microwave Background" desc="A faint afterglow of the early Universe, a key piece of evidence for the Big Bang." />
      <Item title="Dark Matter & Energy" desc="Most of the cosmos is invisible: dark matter and dark energy dominate its content." />
      <Item title="Observable vs Total" desc="We can only see a portion of the whole Universe due to the finite speed of light." />
    </div>
  );
}

function GalaxyBasics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Item title="Milky Way" desc="Our barred spiral galaxy, home to hundreds of billions of stars." />
      <Item title="Andromeda" desc="The nearest large galaxy; on a slow-motion collision course with the Milky Way." />
      <Item title="Elliptical Galaxies" desc="Smooth, featureless shapes with older stars and less gas for new star formation." />
      <Item title="Spiral Arms" desc="Waves of star formation tracing beautiful patterns of dust and newborn stars." />
    </div>
  );
}

function PlanetBasics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Item title="Terrestrial" desc="Small, rocky worlds like Mercury, Venus, Earth, and Mars." />
      <Item title="Gas Giants" desc="Massive planets like Jupiter and Saturn with thick atmospheres." />
      <Item title="Ice Giants" desc="Uranus and Neptune: colder, with water, ammonia, and methane ices." />
      <Item title="Exoplanets" desc="Thousands found around other stars, from hot Jupiters to super-Earths." />
    </div>
  );
}
