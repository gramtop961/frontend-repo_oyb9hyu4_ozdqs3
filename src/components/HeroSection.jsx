import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
        >
          Explore the Cosmos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-white/85"
        >
          A beautifully animated astronomy hub to track the night sky and dive into the Universe, 
          Galaxies, Stars, and Planets.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-8 flex items-center gap-4"
        >
          <a href="#tracker" className="inline-flex items-center px-5 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors text-white font-semibold shadow-lg shadow-indigo-900/40">
            Start Star Tracking
          </a>
          <a href="#learn" className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold border border-white/20">
            Learn the Universe
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
