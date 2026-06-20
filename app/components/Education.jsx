"use client";
import { certificationsData, educationData } from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";
import { FiAward, FiBookOpen, FiBook, FiFileText } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.7 },
  },
};

function Education() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true });

  const getEduIcon = (index) => {
    const icons = [
      <FiBookOpen className="text-lg text-[#00f5a0]" />,
      <FiBook className="text-lg text-[#00f5a0]" />,
      <FiFileText className="text-lg text-[#00f5a0]" />
    ];
    return icons[index] || <FiBookOpen className="text-lg text-[#00f5a0]" />;
  };

  return (
    <section
      id="education"
      className="w-full px-[8%] py-24 bg-gradient-to-b from-transparent to-[#161920]/10 scroll-mt-20 relative overflow-hidden"
      aria-label="Education and Certifications"
    >
      {/* Background soft lighting */}
      <div className="absolute left-1/4 top-1/3 w-80 h-80 rounded-full bg-[#00d9f5]/3 blur-[120px] pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.2em] text-[#00f5a0] mb-2 font-mono"
        >
          Academic Journey
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Education
        </motion.h2>
        <motion.p
          className="text-[#c5c6c7]/50 max-w-md mx-auto text-xs mt-3 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          A concise overview of my academic background, showcasing the institutions I've attended and the qualifications I've earned.
        </motion.p>
      </div>

      {/* ================= 3D ALTERNATING TIMELINE ================= */}
      <div className="relative max-w-5xl mx-auto z-10 px-4">
        {/* Center line (only visible on md screens and up) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-[#1f2833] hidden md:block" />
        
        {/* Mobile left line (only visible below md) */}
        <div className="absolute left-6 top-4 bottom-4 w-[1px] bg-[#1f2833] block md:hidden" />

        <motion.div
          ref={timelineRef}
          className="space-y-12 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full"
              >
                {/* Timeline Node (Center on desktop, Left on mobile) */}
                <div className="absolute left-3.5 md:left-1/2 -translate-x-1/2 top-1 md:top-auto z-20">
                  <div className="w-6 h-6 rounded-full bg-[#0b0c10] border border-[#00f5a0] flex items-center justify-center shadow-lg shadow-emerald-500/10 ring-4 ring-[#00f5a0]/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00f5a0]" />
                  </div>
                </div>

                {/* Left side space holder (desktop only) */}
                <div className="hidden md:block w-[45%] pointer-events-none" />

                {/* Main Card (Alternates left/right on desktop, fits right of line on mobile) */}
                <motion.div 
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                    isEven ? "md:order-first md:text-right" : "md:order-last md:text-left"
                  }`}
                  style={{
                    perspective: 1000,
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotateY: 0,
                      scale: 1.02,
                      borderColor: "rgba(0, 245, 160, 0.4)",
                      boxShadow: "0 10px 30px -10px rgba(0, 245, 160, 0.15)",
                    }}
                    style={{
                      // 3D fold tilt based on even/odd index
                      // Even turns inward from left, Odd turns inward from right
                      rotateY: isEven ? 10 : -10,
                      transformOrigin: isEven ? "right center" : "left center",
                      transformStyle: "preserve-3d",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                    }}
                    className="bg-[#161920]/80 rounded-2xl border border-[#1f2833] p-6 md:p-8 backdrop-blur-sm text-left relative"
                  >
                    {/* Node icon inside card */}
                    <div className="absolute right-6 top-6 w-9 h-9 rounded-xl bg-[#1f2833] border border-white/5 flex items-center justify-center">
                      {getEduIcon(index)}
                    </div>

                    <div className="font-mono text-[9px] text-[#00f5a0]/40 mb-2">
                      SYS.EDU {index + 1}
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {edu.title}
                    </h3>

                    <p className="text-xs font-mono text-[#00d9f5] mb-4">
                      {edu.description}
                    </p>

                    {Array.isArray(edu.details) ? (
                      <ul className="space-y-2 text-xs text-[#c5c6c7]/80">
                        {edu.details.map((point, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-[#00f5a0] font-mono mt-0.5">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-[#c5c6c7]/80 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ================= CERTIFICATIONS ================= */}
      {certificationsData && certificationsData.length > 0 && (
        <>
          <div className="max-w-xl mx-auto my-20 h-[1px] bg-gradient-to-r from-transparent via-[#1f2833] to-transparent" />

          <motion.div
            className="max-w-4xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white text-center mb-12">
              Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[...certificationsData]
                .sort((a, b) => b.year - a.year)
                .map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <TiltCard maxTilt={8} scale={1.02}>
                      <div className="bg-[#161920]/40 border border-[#1f2833] rounded-2xl p-5
                                     hover:border-[#00f5a0]/40 transition-all flex gap-4">
                        {/* Badge icon */}
                        <div className="w-10 h-10 rounded-xl bg-[#1f2833] border border-white/5
                                        flex items-center justify-center text-[#00f5a0]">
                          <FiAward className="text-xl" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-[#c5c6c7]/60 mb-2 font-mono">
                            {cert.org}
                          </p>

                          <div className="flex items-center gap-3 text-[10px] font-mono">
                            <span className="px-2 py-0.5 rounded bg-[#1f2833] text-[#c5c6c7]">
                              {cert.year}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-[#00f5a0]/10 text-[#00f5a0]">
                              {cert.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
}

export default Education;
