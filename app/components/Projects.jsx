"use client";

import { projectsData } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section id="projects" className="w-full px-[8%] py-24 scroll-mt-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00f5a0]/3 blur-[140px] pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.2em] text-[#00f5a0] mb-2 font-mono"
        >
          Selected Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-[#c5c6c7]/50 max-w-md mx-auto text-xs mt-3 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          A curated selection of my most impactful projects, demonstrating my skills and passion for software development.
        </motion.p>
      </div>

      {/* 3D Coverflow Container */}
      <div className="relative w-full max-w-5xl mx-auto h-[520px] flex items-center justify-center">
        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-10 z-30 pointer-events-none">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-[#161920]/90 border border-[#1f2833] hover:border-[#00f5a0]/50 text-white flex items-center justify-center hover:bg-[#00f5a0]/10 transition cursor-pointer pointer-events-auto shadow-lg shadow-black/50"
            aria-label="Previous Project"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-[#161920]/90 border border-[#1f2833] hover:border-[#00f5a0]/50 text-white flex items-center justify-center hover:bg-[#00f5a0]/10 transition cursor-pointer pointer-events-auto shadow-lg shadow-black/50"
            aria-label="Next Project"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        {/* 3D viewport */}
        <div 
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
          className="relative w-full h-[440px] flex items-center justify-center"
        >
          {projectsData.map((project, index) => {
            // Calculate distance relative to the active index
            const distance = index - activeIndex;
            const absDistance = Math.abs(distance);
            
            // Handle loop wrap-around calculations for smooth continuous rotation
            let offset = distance;
            const halfLength = projectsData.length / 2;
            if (distance > halfLength) {
              offset = distance - projectsData.length;
            } else if (distance < -halfLength) {
              offset = distance + projectsData.length;
            }
            const absOffset = Math.abs(offset);

            // Determine if card is active (center)
            const isActive = index === activeIndex;

            // Determine 3D translations based on offset position
            // Center is main, Left tilts right, Right tilts left
            const rotateY = offset === 0 ? 0 : offset < 0 ? 25 : -25;
            const translateZ = offset === 0 ? 50 : -150 - absOffset * 10;
            // X-axis translation determines separation spread
            const translateX = offset * 290 - (offset === 0 ? 0 : offset < 0 ? -50 : 50);
            const scale = offset === 0 ? 1 : 0.85;
            const opacity = offset === 0 ? 1 : 0.35 - absOffset * 0.05;
            const zIndex = 10 - absOffset;

            return (
              <motion.div
                key={index}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: zIndex,
                }}
                animate={{
                  x: translateX,
                  scale: scale,
                  opacity: opacity,
                  rotateY: rotateY,
                  z: translateZ,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[310px] md:w-[410px] h-[420px] cursor-pointer rounded-2xl border ${
                  isActive ? "border-[#00f5a0]/50 shadow-2xl shadow-emerald-500/10" : "border-[#1f2833]"
                } bg-[#161920]/80 p-6 md:p-7 flex flex-col justify-between backdrop-blur-sm`}
              >
                {/* Tech tag */}
                <div 
                  style={{ transform: "translateZ(10px)" }}
                  className="absolute right-6 top-6 font-mono text-[9px] text-[#00f5a0]/40 tracking-widest"
                >
                  SRCE.PRJ  0{index + 1}
                </div>

                <div style={{ transformStyle: "preserve-3d" }}>
                  {/* Title */}
                  <h3 
                    style={{ transform: "translateZ(30px)" }}
                    className={`text-lg md:text-xl font-bold tracking-tight mb-3 transition-colors duration-300 line-clamp-1 pr-14 ${
                      isActive ? "text-[#00f5a0]" : "text-white"
                    }`}
                  >
                    {project.name}
                  </h3>

                  {/* Description + Features */}
                  <div style={{ transform: "translateZ(15px)" }} className="relative mb-2">
                    <div className="h-[185px] flex flex-col justify-between space-y-3 pr-1">
                      <p className="text-[#c5c6c7]/95 leading-relaxed font-light tracking-wide text-xs md:text-[13px] line-clamp-3">
                        {project.description}
                      </p>
                      
                      {project.features && project.features.length > 0 && (
                        <div className="space-y-2 mt-auto">
                          <ul className="space-y-1 text-[#c5c6c7]/75 font-mono list-none text-[10px] md:text-[11px]">
                            {project.features.slice(0, 2).map((feature, i) => (
                              <li key={i} className="flex gap-1.5 items-start">
                                <span className="text-[#00f5a0] font-bold">›</span>
                                <span className="line-clamp-1 tracking-wide">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f5a0] hover:text-[#00d9f5] transition-colors cursor-pointer border-b border-transparent hover:border-[#00d9f5] pb-0.5 mt-1"
                          >
                            View Details & Modules <span>→</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div 
                  style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
                  className="flex gap-3 pt-3 border-t border-[#1f2833]/40 mt-2"
                >
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 py-1.5 border border-[#1f2833] hover:border-[#00f5a0]/40 bg-[#161920]/40 hover:bg-[#00f5a0]/5 text-white rounded-lg text-xs font-mono transition duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Source
                    </a>
                  )}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 py-1.5 bg-[#00f5a0] hover:bg-[#00d9f5] text-[#0b0c10] rounded-lg text-xs font-mono font-semibold transition duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> Live
                    </a>
                  ) : (
                    <span 
                      className="flex items-center justify-center flex-1 py-1.5 border border-white/5 bg-[#161920]/20 text-[#c5c6c7]/30 rounded-lg text-[10px] font-mono cursor-not-allowed"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Local Only
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Page Indicators (dots) */}
      <div className="flex justify-center gap-2 mt-4 relative z-20">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-[#00f5a0] w-6" : "bg-[#1f2833] hover:bg-[#c5c6c7]/30"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Modal - Project Detail View */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-[#07080c]/85 backdrop-blur-md 
                         flex items-center justify-center px-4"
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-[#161920] border border-[#00f5a0]/30 rounded-2xl p-8 max-w-2xl w-full relative shadow-2xl shadow-emerald-500/5 max-h-[85vh] flex flex-col"
                initial={{ scale: 0.9, opacity: 0, y: 30, rotateX: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20, rotateX: -10 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-[#c5c6c7]/60 hover:text-white p-1.5 rounded-lg border border-white/5 hover:bg-white/5 transition cursor-pointer"
                >
                  ✕
                </button>

                <div className="font-mono text-[9px] text-[#00f5a0] tracking-widest mb-2">
                  PROJECT SPECIFICATIONS 
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 pr-8">
                  {selectedProject.name}
                </h3>

                {/* Action Buttons in Modal */}
                <div className="flex gap-3 mb-6">
                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-[#1f2833] hover:border-[#00f5a0]/40 bg-[#161920]/40 hover:bg-[#00f5a0]/5 text-white rounded-lg text-xs font-mono transition"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#00f5a0] hover:bg-[#00d9f5] text-[#0b0c10] rounded-lg text-xs font-mono font-semibold transition"
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                    </a>
                  )}
                </div>

                <div className="overflow-y-auto scrollbar-thin pr-2 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#00f5a0] mb-2 font-mono">
                      Overview
                    </h4>
                    <p className="text-sm text-[#c5c6c7] leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-[#00f5a0] mb-3 font-mono">
                        Modules & Core Deliverables
                      </h4>
                      <ul className="space-y-3 text-sm text-[#c5c6c7] list-none">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex gap-2.5 items-start">
                            <span className="text-[#00f5a0] font-mono mt-0.5">▸</span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
