"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ThreeDScrollSection({ children, className = "" }) {
  const ref = useRef(null);
  
  // Track scroll position of the section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 3D transformations as the section moves through the viewport
  // - Tilts back slightly on entry, flattens in center, and tilts forward on exit
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -12]);
  
  // - Scales up to 100% in center and down to 92% on edges
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.93, 1, 0.93]);
  
  // - Smooth fade-in/fade-out
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // - Subtle Z-depth translation (moving towards/away from camera)
  const translateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-80, 0, -80]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        scale,
        opacity,
        z: translateZ,
        transformStyle: "preserve-3d",
      }}
      className={`perspective-1000 w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
