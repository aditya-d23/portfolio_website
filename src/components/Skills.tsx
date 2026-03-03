import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Terminal, Code2, Database, Cloud, Wrench, Star } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'languages': return <Code2 className="w-5 h-5" />;
      case 'frontend': return <Terminal className="w-5 h-5" />;
      case 'backend & frameworks': return <Database className="w-5 h-5" />;
      case 'cloud & devops': return <Cloud className="w-5 h-5" />;
      case 'tools': return <Wrench className="w-5 h-5" />;
      case 'top skills': return <Star className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative z-10 bg-black/20 backdrop-blur-3xl border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-400 to-transparent mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-white/10 text-zinc-300">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-zinc-300 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
