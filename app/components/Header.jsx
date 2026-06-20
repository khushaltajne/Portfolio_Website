"use client";

import { assets } from '@/assets/assets';
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from 'next/image';
import { useRef } from 'react';
import { FiArrowRight, FiDownload, FiTerminal, FiDatabase, FiLayout, FiCpu } from "react-icons/fi";
import { FaJava } from "react-icons/fa";

function Header() {
  const containerRef = useRef(null);
  
  // Motion values for mouse movement tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map coordinates to degrees of rotation for 3D parallax layers
  const rotateX = useTransform(mouseY, [-300, 300], [12, -12]);
  const rotateY = useTransform(mouseX, [-300, 300], [-12, 12]);

  // Deep pop-out layers for text and sphere
  const textTranslateZ = 30;
  const sphereTranslateZ = 60;

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden px-[8%] py-20"
      id="top"
    >
      {/* Tech Grid Backdrop */}
      <div className="absolute inset-0 tech-grid opacity-[0.35] pointer-events-none" />

      {/* Radial soft background ambient glows */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#00f5a0]/5 blur-[120px] left-[15%] top-[20%] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#00d9f5]/5 blur-[120px] right-[15%] bottom-[20%] pointer-events-none" />

      {/* Main 3D Parallax Split Grid */}
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10"
      >
        
        {/* Left Side: 3D Parallax Text Content */}
        <div 
          style={{ transform: `translateZ(${textTranslateZ}px)`, transformStyle: "preserve-3d" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-lg border border-[#00f5a0]/25 bg-[#161920]/60 backdrop-blur-sm flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#c5c6c7]">
              Available for Opportunities 
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <h3 className="text-[#00f5a0] font-mono text-xs md:text-sm tracking-[0.25em] uppercase">
              Hi, I'm Khushal Tajne
            </h3>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-none">
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]">Developer</span>
            </h1>
          </div>

          {/* Intro description */}
          <p className="text-[#c5c6c7]/75 text-sm sm:text-base max-w-xl leading-relaxed">
            Eager to build high-performance, scalable software solutions. Specializing in modern Java ecosystems, RESTful microservices, and interactive frontend applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <a
              href="#contacts"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#00f5a0] hover:bg-[#00d9f5] text-[#0b0c10] font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10 hover:shadow-cyan-500/20 hover:scale-[1.03] transition-all duration-300"
            >
              Contact Me <FiArrowRight className="text-sm" />
            </a>

            <a
              href="/JavaFullstackDeveloper.pdf"
              download={true}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-[#1f2833] hover:border-[#00f5a0] bg-[#161a22]/50 hover:bg-[#00f5a0]/5 text-white font-medium text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.03] transition-all duration-300"
            >
              My Resume <FiDownload className="text-sm text-[#00f5a0]" />
            </a>
          </div>
        </div>

        {/* Right Side: 3D Holographic Coding Sphere */}
        <div 
          style={{ transform: `translateZ(${sphereTranslateZ}px)`, transformStyle: "preserve-3d" }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Central Profile Image wrapped in a 3D hologram ring */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
          >
            {/* Holographic light ring */}
            <div className="absolute inset-0 rounded-full border border-[#00f5a0]/15 bg-gradient-to-tr from-[#00f5a0]/3 to-[#00d9f5]/3" />
            
            {/* Dotted orbits */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-dashed border-[#00f5a0]/25"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-14 rounded-full border border-dotted border-[#00d9f5]/30"
            />

            {/* Profile Avatar center node */}
            <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-[#00f5a0] shadow-2xl shadow-emerald-500/10 z-10">
              <Image
                src={assets.user_profile}
                alt="Khushal Tajne"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Floating orbiting 3D tech icons */}
            {/* Java */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-3 left-12 p-2 bg-[#161920] border border-[#00f5a0]/40 rounded-xl shadow-lg z-20 text-[#00f5a0] flex items-center justify-center w-9 h-9"
            >
              <FaJava className="text-lg" />
            </motion.div>

            {/* Spring / Backend */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -right-2 p-2 bg-[#161920] border border-[#00d9f5]/40 rounded-xl shadow-lg z-20 text-[#00d9f5] flex items-center justify-center w-9 h-9"
            >
              <FiCpu className="text-base" />
            </motion.div>

            {/* React / UI */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-6 left-2 p-2 bg-[#161920] border border-[#00f5a0]/40 rounded-xl shadow-lg z-20 text-[#00f5a0] flex items-center justify-center w-9 h-9"
            >
              <FiLayout className="text-base" />
            </motion.div>

            {/* PostgreSQL / Databases */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-3 right-16 p-2 bg-[#161920] border border-[#00d9f5]/40 rounded-xl shadow-lg z-20 text-[#00d9f5] flex items-center justify-center w-9 h-9"
            >
              <FiDatabase className="text-base" />
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}

export default Header;
