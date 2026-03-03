import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-400 to-transparent" />
        </motion.div>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/10 group-hover:bg-white/20 transition-colors" />
              <div className="hidden md:block absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-zinc-500 group-hover:bg-white transition-colors" />
              
              <div className="md:ml-8 p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 text-zinc-300 group-hover:text-white transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.dates}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-zinc-100 mb-2 tracking-tight group-hover:text-white transition-colors">
                  {edu.institution}
                </h3>
                
                <div className="text-lg text-zinc-400 mb-4 font-light">
                  {edu.degree}
                </div>

                {edu.location && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Extra */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-zinc-400" />
              <h3 className="text-xl font-bold text-zinc-100 tracking-tight">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {resumeData.certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-zinc-400" />
              <h3 className="text-xl font-bold text-zinc-100 tracking-tight">Additional</h3>
            </div>
            <ul className="space-y-4">
              {resumeData.extra.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
