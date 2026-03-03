import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // Small delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Monogram */}
          <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-zinc-800 border-t-zinc-400"
            />
            <span className="text-4xl font-light tracking-widest text-zinc-100 font-serif">AD</span>
          </div>

          {/* Loading Bar */}
          <div className="w-48 h-px bg-zinc-800 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-zinc-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 text-xs tracking-[0.2em] text-zinc-500 uppercase font-mono">
            Initializing
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
