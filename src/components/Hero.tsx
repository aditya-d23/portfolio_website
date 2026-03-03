import React, { useState } from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ArrowDown, FileText, Loader2 } from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';

export const Hero: React.FC = () => {
  const { name, title, summary } = resumeData.basics;
  const [isDownloading, setIsDownloading] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      const element = document.createElement('div');
      element.innerHTML = `
        <div style="padding: 40px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 800px; margin: 0 auto;">
          <h1 style="font-size: 28px; margin-bottom: 5px; color: #111;">${name}</h1>
          <p style="font-size: 14px; color: #666; margin-bottom: 20px;">
            ${title} | ${resumeData.basics.email} | ${resumeData.basics.phone} | ${resumeData.basics.location}
          </p>
          
          <h2 style="font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 20px; color: #222; text-transform: uppercase; letter-spacing: 1px;">Summary</h2>
          <p style="font-size: 12px; line-height: 1.6; color: #444;">${summary}</p>
          
          <h2 style="font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 20px; color: #222; text-transform: uppercase; letter-spacing: 1px;">Experience</h2>
          ${resumeData.experience.map(exp => `
            <div style="margin-bottom: 15px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="font-size: 14px; margin: 0; color: #111;">${exp.role} <span style="font-weight: normal; color: #666;">at ${exp.company}</span></h3>
                <span style="font-size: 12px; color: #666;">${exp.dates}</span>
              </div>
              <ul style="font-size: 12px; margin-top: 5px; padding-left: 20px; color: #444; line-height: 1.5;">
                ${exp.bullets.map(b => `<li style="margin-bottom: 4px;">${b}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
          
          <h2 style="font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 20px; color: #222; text-transform: uppercase; letter-spacing: 1px;">Projects</h2>
          ${resumeData.projects.map(proj => `
            <div style="margin-bottom: 15px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="font-size: 14px; margin: 0; color: #111;">${proj.title}</h3>
                <span style="font-size: 12px; color: #666;">${proj.dates}</span>
              </div>
              <p style="font-size: 12px; font-style: italic; margin: 2px 0; color: #666;">${proj.stack}</p>
              <ul style="font-size: 12px; margin-top: 5px; padding-left: 20px; color: #444; line-height: 1.5;">
                ${proj.bullets.map(b => `<li style="margin-bottom: 4px;">${b}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
          
          <h2 style="font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 20px; color: #222; text-transform: uppercase; letter-spacing: 1px;">Education</h2>
          ${resumeData.education.map(edu => `
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="font-size: 14px; margin: 0; color: #111;">${edu.institution}</h3>
                <span style="font-size: 12px; color: #666;">${edu.dates}</span>
              </div>
              <p style="font-size: 12px; margin: 2px 0; color: #444;">${edu.degree}</p>
            </div>
          `).join('')}

          <h2 style="font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 20px; color: #222; text-transform: uppercase; letter-spacing: 1px;">Technical Skills</h2>
          <ul style="font-size: 12px; padding-left: 20px; color: #444; line-height: 1.5; margin-top: 10px;">
            ${resumeData.skills.map(skill => `<li style="margin-bottom: 4px;"><strong>${skill.category}:</strong> ${skill.items.join(', ')}</li>`).join('')}
          </ul>
        </div>
      `;

      const opt = {
        margin:       [10, 10, 10, 10],
        filename:     'Aditya_Das_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-zinc-300 mb-8 uppercase tracking-widest"
        >
          {title}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 mb-6"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0 font-light"
        >
          {summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <button
            onClick={() => handleScroll('experience')}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide overflow-hidden hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <span className="relative z-10">View Experience</span>
            <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </button>
          
          <button
            className="group px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium tracking-wide hover:bg-white/5 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <FileText className="w-4 h-4" />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download Resume'}</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
};
