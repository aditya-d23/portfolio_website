import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ExternalLink, Github, Folder } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-400 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 rounded-2xl bg-white/5 text-zinc-300 group-hover:text-white transition-colors">
                  <Folder className="w-8 h-8" />
                </div>
                <div className="flex gap-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      {link.name.toLowerCase() === 'github' ? (
                        <Github className="w-5 h-5" />
                      ) : (
                        <ExternalLink className="w-5 h-5" />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-zinc-100 mb-2 tracking-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
              
              <div className="text-xs font-mono text-zinc-500 mb-6 uppercase tracking-wider">
                {project.stack}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
