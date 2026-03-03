import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data/resume';
import { ChevronDown, Briefcase, MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-400 to-transparent" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all hover:bg-white/[0.04]"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-zinc-100">
                        {exp.role}
                      </h3>
                      <span className="hidden md:inline text-zinc-600">•</span>
                      <span className="text-zinc-400 font-mono text-sm">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500 mt-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.dates}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-white/5">
                        <ul className="space-y-4 mt-6">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
