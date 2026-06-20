"use client";
import { assets, profileSummary } from "@/assets/assets";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function ProfileSummary() {
  const cardRef = useRef(null);

  // Motion values for double-layer mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about"
      className="w-full px-[8%] py-24 scroll-mt-20 relative overflow-hidden"
      aria-label="Profile Summary"
    >
      {/* Background ambient light */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-[#00d9f5]/5 blur-[120px] pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.2em] text-[#00f5a0] mb-2 font-mono"
        >
          Introduction
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          About Me
        </motion.h2>
      </div>

      {/* Layout Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: 3D Dual-Layer Parallax Photo Frame */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="w-64 h-80 sm:w-72 sm:h-96 relative flex items-center justify-center cursor-pointer"
          >
            {/* Background Layer: Tech outline frame (tilts slightly slower) */}
            <motion.div
              style={{
                rotateX: useTransform(y, [-200, 200], [5, -5]),
                rotateY: useTransform(x, [-200, 200], [-5, 5]),
                z: -50,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
              className="absolute inset-0 border border-[#00d9f5]/20 bg-[#161920]/25 rounded-2xl -translate-x-4 -translate-y-4 rotate-2 pointer-events-none"
            >
              {/* Decorative grid */}
              <div className="absolute inset-2 tech-grid opacity-30 rounded-xl" />
            </motion.div>

            {/* Foreground Layer: Main Profile Image Card (tilts faster) */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                z: 30,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
              className="absolute inset-0 bg-[#161920]/80 border border-[#00f5a0]/30 rounded-2xl p-2.5 shadow-2xl flex flex-col justify-between"
            >
              <div 
                style={{ transform: "translateZ(40px)" }}
                className="relative w-full h-[90%] rounded-xl overflow-hidden aspect-[4/5]"
              >
                <Image
                  src={assets.profile_img}
                  alt="Khushal Tajne"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Holographic label */}
              <div 
                style={{ transform: "translateZ(20px)" }}
                className="flex justify-between items-center px-2 py-1 font-mono text-[8px] text-[#00f5a0]/50 tracking-widest mt-1"
              >
                <span>ID.KHUSHAL // 992-B</span>
                <span>ONLINE</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Text Dashboard */}
        <motion.div
          className="lg:col-span-7 text-center lg:text-left space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Description */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Designing scalable solutions with clean code.
            </h3>
            <p
              className="text-base md:text-lg text-[#c5c6c7]/80 leading-relaxed max-w-2xl font-light"
              dangerouslySetInnerHTML={{ __html: profileSummary.summary }}
            />
          </div>

          {/* Targeted Roles */}
          <div className="pt-4 border-t border-[#1f2833]/40">
            <p className="text-xs uppercase tracking-widest text-[#00f5a0] mb-4 font-mono">
              Targeted Career Paths
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              {profileSummary.role.map((role, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-xs font-mono
                             border border-[#1f2833] rounded-lg
                             text-[#c5c6c7] bg-[#161920]/40 hover:border-[#00f5a0]/40 hover:text-white transition duration-300"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ProfileSummary;
