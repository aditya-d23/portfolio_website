/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-transparent text-zinc-100 font-sans selection:bg-white/20 selection:text-white">
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <AnimatedBackground />
          <Navigation />
          <main className="relative z-10">
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
          </main>
          
          <footer className="py-12 px-6 border-t border-white/5 bg-black/40 backdrop-blur-xl relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-zinc-500 text-sm font-mono tracking-wider">
                © {new Date().getFullYear()} Aditya Das. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://linkedin.com/in/aditya-das-50479614a" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">LinkedIn</a>
                <a href="https://github.com/aditya-d23" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">GitHub</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
