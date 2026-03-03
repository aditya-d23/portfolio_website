import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Trophy, Code, Award } from 'lucide-react';

export const Achievements: React.FC = () => {
  const icons = [Award, Code, Trophy];

  return (
    <section id="achievements" className="py-24 px-6 relative z-10 bg-black/20 backdrop-blur-3xl border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Top Impact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-400 to-transparent mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-zinc-400 leading-relaxed mt-auto">
                    {achievement.context}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
