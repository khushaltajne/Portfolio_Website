"use client";
import { infoList, toolsData } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import TiltCard from "./TiltCard";
import { FiCode, FiCpu, FiDatabase, FiTerminal, FiLayers, FiExternalLink, FiShield, FiCloud } from "react-icons/fi";
import { FaJava } from "react-icons/fa";

function About() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeSkill]);

  // Helper to render beautiful crisp vector icons based on index
  const getSkillIcon = (index) => {
    const icons = [
      <FiCode className="text-2xl text-[#00f5a0]" />,
      <FiCpu className="text-2xl text-[#00f5a0]" />,
      <FiShield className="text-2xl text-[#00f5a0]" />,
      <FiDatabase className="text-2xl text-[#00f5a0]" />,
      <FaJava className="text-2xl text-[#00f5a0]" />,
      <FiCloud className="text-2xl text-[#00f5a0]" />,
      <FiTerminal className="text-2xl text-[#00f5a0]" />,
      <FiLayers className="text-2xl text-[#00f5a0]" />
    ];
    return icons[index] || <FiCode className="text-2xl text-[#00f5a0]" />;
  };

  // Skill progress ratings for technical visual appeal
  const getSkillProgress = (index) => {
    const ratings = [85, 80, 85, 85, 90, 80, 80, 85];
    return ratings[index] || 80;
  };

  // Custom tool colors on hover
  const getToolColor = (name) => {
    const colors = {
      "Vs Code": "#007ACC",
      "Oracle": "#F80000",
      "Eclipse IDE": "#8A6BB1",
      "GitHub": "#A370F7",
      "Git": "#F05032",
      "MongoDB": "#47A248",
      "Postman": "#FF6C37",
      "Docker": "#2496ED",
      "Insomnia": "#5849BE"
    };
    return colors[name] || "#00f5a0";
  };

  const getToolGlow = (name) => {
    const glows = {
      "Vs Code": "rgba(0, 122, 204, 0.25)",
      "Oracle": "rgba(248, 0, 0, 0.25)",
      "Eclipse IDE": "rgba(138, 107, 177, 0.25)",
      "GitHub": "rgba(163, 112, 247, 0.25)",
      "Git": "rgba(240, 80, 50, 0.25)",
      "MongoDB": "rgba(71, 162, 72, 0.25)",
      "Postman": "rgba(255, 108, 55, 0.25)",
      "Docker": "rgba(36, 150, 237, 0.25)",
      "Insomnia": "rgba(88, 73, 190, 0.25)"
    };
    return glows[name] || "rgba(0, 245, 160, 0.2)";
  };

  return (
    <section id="skills" className="w-full px-[8%] py-24 bg-gradient-to-b from-transparent to-[#161920]/20 scroll-mt-20 relative">
      <div className="absolute right-10 bottom-1/4 w-72 h-72 rounded-full bg-[#00f5a0]/5 blur-[120px] pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.2em] text-[#00f5a0] mb-2 font-mono"
        >
          My Capabilities
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Skills & Tools
        </motion.h2>
        <motion.p
          className="text-[#c5c6c7]/60 max-w-xl mx-auto text-sm mt-4 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          A detailed look at my technical expertise, tools, and developmental focus.
        </motion.p>
      </div>

      {/* Skills 3D Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
        {infoList.map((item, index) => {
          const progress = getSkillProgress(index);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <TiltCard maxTilt={10} scale={1.03} className="h-full">
                <div 
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative h-full bg-[#161920]/40 border border-[#1f2833] rounded-2xl p-6 hover:border-[#00f5a0]/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between"
                >
                  
                  {/* Tech styling node */}
                  <div 
                    style={{ transform: "translateZ(15px)" }}
                    className="absolute right-4 top-4 font-mono text-[9px] text-[#00f5a0]/30 tracking-widest"
                  >
                    0{index + 1} // {item.title.toUpperCase()} 
                  </div>

                  <div style={{ transformStyle: "preserve-3d" }}>
                    {/* Vector Icon Wrapper */}
                    <div 
                      style={{ transform: "translateZ(35px)" }}
                      className="w-12 h-12 bg-[#1f2833]/85 rounded-xl border border-white/5 flex items-center justify-center mb-5 shadow-lg shadow-black/20"
                    >
                      {getSkillIcon(index)}
                    </div>

                    {/* Title */}
                    <h3 
                      style={{ transform: "translateZ(25px)" }}
                      className="text-lg font-semibold mb-2 text-white"
                    >
                      {item.title}
                    </h3>

                    {/* Description / Subtext */}
                    <p 
                      style={{ transform: "translateZ(15px)" }}
                      className="text-xs text-[#00f5a0] mb-4 font-mono"
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* 3D Animated Progress Meter */}
                  <div 
                    style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} 
                    className="mt-2 space-y-2 border-t border-[#1f2833]/40 pt-4"
                  >
                    <div className="flex justify-between font-mono text-[9px] text-[#c5c6c7]/50">
                      <span>SYS_LOAD </span>
                      <span className="text-[#00f5a0]">{progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#1f2833]/60 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Explore detail action */}
                  {item.details && (
                    <button
                      onClick={() => setActiveSkill(item)}
                      style={{ transform: "translateZ(18px)" }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono 
                                text-[#00f5a0] hover:text-[#00d9f5] transition-colors mt-4 self-start cursor-pointer border-b border-transparent hover:border-[#00d9f5] pb-0.5"
                    >
                      View Modules <FiExternalLink className="text-[10px]" />
                    </button>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {/* Tools Section (Fully 3D Upgraded) */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-2">Technologies & IDEs Used</h3>
          <p className="text-xs text-[#c5c6c7]/60 font-mono">
            Environment setup and daily software utilities that power my development workflow.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {toolsData.map((tool, index) => {
            const isHovered = hoveredTool === index;
            const borderCol = isHovered ? getToolColor(tool.name) : "rgba(31, 40, 51, 0.4)";
            const glowShadow = isHovered ? `0 10px 25px -5px ${getToolGlow(tool.name)}` : "none";

            return (
              <motion.div
                key={index}
                className="w-full flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <TiltCard maxTilt={15} scale={1.08} className="w-full max-w-[140px]">
                  <div
                    onMouseEnter={() => setHoveredTool(index)}
                    onMouseLeave={() => setHoveredTool(null)}
                    style={{
                      transformStyle: "preserve-3d",
                      borderColor: borderCol,
                      boxShadow: glowShadow,
                    }}
                    className="relative w-full aspect-square bg-[#161920]/40 border rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 p-4"
                  >
                    {/* Tech grid layer inside tool card */}
                    {isHovered && (
                      <div className="absolute inset-0 tech-grid opacity-15 rounded-2xl pointer-events-none" />
                    )}

                    {/* Logo Image with 3D Pop Out */}
                    <div 
                      style={{ transform: "translateZ(30px)" }}
                      className="w-12 h-12 flex items-center justify-center transition-all duration-300"
                    >
                      <Image 
                        src={tool.icon} 
                        alt={tool.name} 
                        width={36} 
                        height={36} 
                        className={`transition-all duration-300 ${
                          isHovered ? "filter-none scale-105" : "filter grayscale opacity-70"
                        }`}
                      />
                    </div>

                    {/* Text tag (tilts slightly lower) */}
                    <p 
                      style={{ transform: "translateZ(15px)" }}
                      className={`text-[10px] font-mono transition-colors duration-300 ${
                        isHovered ? "text-white" : "text-[#c5c6c7]/60"
                      }`}
                    >
                      {tool.name}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal - Tech Detail View */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-[#07080c]/85 backdrop-blur-md 
                         flex items-center justify-center px-4"
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSkill(null)}
            >
              <motion.div
                className="bg-[#161920] border border-[#00f5a0]/30 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl shadow-emerald-500/5 max-h-[85vh] flex flex-col"
                initial={{ scale: 0.9, opacity: 0, y: 30, rotateX: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20, rotateX: -10 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveSkill(null)}
                  className="absolute top-4 right-4 text-[#c5c6c7]/60 hover:text-white p-1 rounded-lg border border-white/5 hover:bg-white/5 transition cursor-pointer"
                >
                  ✕
                </button>

                <div className="font-mono text-[9px] text-[#00f5a0] tracking-widest mb-2">
                  MODULES DETAILS
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {activeSkill.title}
                </h3>

                <p className="text-xs text-[#c5c6c7]/60 mb-6 font-mono">
                  {activeSkill.description}
                </p>

                {/* Detailed Points */}
                <div className="space-y-4 overflow-y-auto scrollbar-thin pr-2">
                  {Array.isArray(activeSkill.details) ? (
                    <ul className="space-y-2 text-sm text-[#c5c6c7] list-none">
                      {activeSkill.details.map((point, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <span className="text-[#00f5a0] font-mono mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-sm text-[#c5c6c7]/90 leading-relaxed flex gap-2.5 items-start">
                      <span className="text-[#00f5a0] font-mono mt-1">▸</span>
                      <span>{activeSkill.details}</span>
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

export default About;
