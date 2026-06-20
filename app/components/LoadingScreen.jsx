"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeLog, setActiveLog] = useState("");

  const logs = [
    { threshold: 0, text: "INIT.SYSTEM_BOOT // READY" },
    { threshold: 15, text: "ALLOC.MEMORY_SYSTEM // OK" },
    { threshold: 30, text: "COMPILING.3D_WIREFRAMES // OK" },
    { threshold: 50, text: "LOAD.ASSETS_VECTOR_ICONS // OK" },
    { threshold: 70, text: "CACHING.INTERFACE_PANELS // OK" },
    { threshold: 85, text: "PORTFOLIO.CORE // STARTING" },
    { threshold: 100, text: "SYSTEM_ONLINE // WELCOME" }
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 4; // increment by 4 to 12
      current = Math.min(current + increment, 100);
      setProgress(current);

      const matchedLog = [...logs]
        .reverse()
        .find((log) => current >= log.threshold);
      if (matchedLog) {
        setActiveLog(matchedLog.text);
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 800);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -50,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[99999] bg-[#0b0c10] flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-[0.25] pointer-events-none" />

      {/* Cybernetic ambient glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#00f5a0]/5 blur-[100px] pointer-events-none" />

      {/* Loader Container */}
      <div className="w-full max-w-sm flex flex-col items-center text-center space-y-8 relative z-10">
        
        {/* Pulsing Logo */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-3xl font-bold text-white tracking-wider"
        >
          Khushal<span className="text-[#00f5a0]">.</span>
        </motion.div>

        {/* Diagnostic Logs Screen */}
        <div className="w-full bg-[#161920]/60 border border-[#1f2833] rounded-xl p-4 font-mono text-left space-y-2.5 min-h-[92px] shadow-lg shadow-black/40">
          <div className="flex items-center justify-between text-[9px] text-[#c5c6c7]/40 border-b border-[#1f2833]/50 pb-1.5 mb-1.5">
            <span>SYS_LOG // DIAGNOSTIC_SYS</span>
            <span className="text-[#00f5a0] animate-pulse">● RUNNING</span>
          </div>
          <div className="text-[10px] text-[#c5c6c7]/50">
            {progress > 15 && <p>› MEMORY_ALLOC: OK</p>}
            {progress > 40 && <p>› OpenGL_RENDERER: INITIALIZED</p>}
            {progress > 70 && <p>› INTERFACE_GLOWS: CACHED</p>}
          </div>
          <p className="text-xs text-[#00f5a0] font-medium flex items-center gap-2">
            <span className="animate-pulse">▶</span> {activeLog}
          </p>
        </div>

        {/* Progress Metric & Bar */}
        <div className="w-full space-y-3">
          <div className="flex justify-between items-end font-mono text-xs">
            <span className="text-[#c5c6c7]/40 tracking-wider">BOOT_SEQUENCE</span>
            <span className="text-[#00f5a0] font-semibold">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-[#161920] rounded-full overflow-hidden border border-[#1f2833] p-[1px]">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
