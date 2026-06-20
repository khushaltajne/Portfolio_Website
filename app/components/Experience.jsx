"use client";
import { experienceData } from "@/assets/assets";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import TiltCard from "./TiltCard";
import { FiCpu, FiTerminal, FiDatabase, FiLayout } from "react-icons/fi";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full px-[8%] py-24 scroll-mt-20 relative overflow-hidden">
      <div className="absolute right-1/4 top-1/4 w-80 h-80 rounded-full bg-[#00f5a0]/3 blur-[120px] pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.2em] text-[#00f5a0] mb-2 font-mono"
        >
          Professional Record
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
        >
          Experience
        </motion.h2>
      </div>

      {/* Split layout: Interactive 3D holographic tree diagram + 3D Tilt Card */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: 3D Holographic Tree SVG */}
        <motion.div 
          className="lg:col-span-5 flex justify-center order-last lg:order-first"
          style={{ perspective: 1000 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{
              // holographic angle
              rotateX: 25,
              rotateY: -20,
              transformStyle: "preserve-3d",
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-72 h-72 flex items-center justify-center bg-[#161920]/20 rounded-full border border-[#00f5a0]/10 shadow-inner"
          >
            {/* Holographic light glow base */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00f5a0]/5 to-[#00d9f5]/5 blur-md" />

            {/* Spinning dotted circle outer */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-[#00f5a0]/25"
            />

            {/* Spinning dotted circle inner */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 rounded-full border border-dotted border-[#00d9f5]/30"
            />

            {/* Central pulsing core */}
            <div className="absolute w-20 h-20 rounded-full bg-[#161920] border border-[#00f5a0]/50 flex flex-col items-center justify-center shadow-lg shadow-[#00f5a0]/10 z-10">
              <FiCpu className="text-xl text-[#00f5a0] animate-pulse" />
              <span className="font-mono text-[7px] text-[#c5c6c7]/60 tracking-wider mt-1">SYS.INTERN</span>
            </div>

            {/* Floating nodes representing keys */}
            {/* Node 1: Web Dev */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 p-2 bg-[#161920] border border-[#00f5a0]/40 rounded-lg flex items-center gap-1.5 shadow-md"
            >
              <FiLayout className="text-xs text-[#00f5a0]" />
              <span className="font-mono text-[8px] text-white">WEB_DEV</span>
            </motion.div>

            {/* Node 2: APIs */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 p-2 bg-[#161920] border border-[#00d9f5]/40 rounded-lg flex items-center gap-1.5 shadow-md"
            >
              <FiTerminal className="text-xs text-[#00d9f5]" />
              <span className="font-mono text-[8px] text-white">APIs</span>
            </motion.div>

            {/* Node 3: UI/UX */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 p-2 bg-[#161920] border border-[#00f5a0]/40 rounded-lg flex items-center gap-1.5 shadow-md"
            >
              <FiDatabase className="text-xs text-[#00f5a0]" />
              <span className="font-mono text-[8px] text-white">UI_UX</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Tilt Card */}
        <div className="lg:col-span-7 flex justify-center order-first lg:order-last w-full">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl"
            >
              <TiltCard maxTilt={8} scale={1.02} className="w-full">
                <ExperienceCard exp={exp} index={index} />
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }) {
  const [showMore, setShowMore] = useState(false);
  const pointsToShow = showMore ? exp.description : exp.description.slice(0, 2);

  return (
    <div 
      style={{ transformStyle: "preserve-3d" }}
      className="relative w-full p-6 md:p-8 rounded-2xl border border-[#1f2833] bg-[#161920]/80 backdrop-blur-md hover:border-[#00f5a0]/40 transition-all duration-300"
    >
      {/* Tech node indicator */}
      <div 
        style={{ transform: "translateZ(10px)" }}
        className="absolute right-6 top-6 font-mono text-[9px] text-[#00f5a0]/30 tracking-widest"
      >
        SYS.EXP {index + 1}
      </div>

      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] rounded-t-2xl bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]" />

      {/* Role & Company */}
      <h3 
        style={{ transform: "translateZ(30px)" }}
        className="text-xl md:text-2xl font-semibold text-white mb-1"
      >
        {exp.role}
      </h3>
      
      <p 
        style={{ transform: "translateZ(25px)" }}
        className="text-[#00f5a0] font-mono text-sm mb-2"
      >
        @ {exp.company}
      </p>

      {/* Duration */}
      <p 
        style={{ transform: "translateZ(15px)" }}
        className="text-[#c5c6c7]/50 text-xs font-mono mb-5"
      >
        {exp.duration}
      </p>

      {/* Description points */}
      <AnimatePresence mode="wait">
        <motion.ul
          key={showMore ? "expanded" : "collapsed"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ transform: "translateZ(20px)" }}
          className="text-sm text-[#c5c6c7]/80 space-y-2.5 mb-4 list-none"
        >
          {pointsToShow.map((point, i) => (
            <li key={i} className="flex gap-2.5 items-start">
              <span className="text-[#00f5a0] font-mono mt-0.5">▸</span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      {/* Show More / Show Less button */}
      {exp.description.length > 2 && (
        <button
          onClick={() => setShowMore(!showMore)}
          style={{ transform: "translateZ(15px)" }}
          className="text-[#00d9f5] hover:text-[#00f5a0] font-mono text-xs hover:underline focus:outline-none transition-colors cursor-pointer"
        >
          {showMore ? "Show Less [-]" : "Show More [+]"}
        </button>
      )}
    </div>
  );
}
