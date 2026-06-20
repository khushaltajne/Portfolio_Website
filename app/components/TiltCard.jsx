"use client";
import { useState, useRef } from "react";

export default function TiltCard({ children, className = "", maxTilt = 10, scale = 1.02 }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [transitionStyle, setTransitionStyle] = useState("all 0.5s ease-out");

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse position relative to card left
    const y = e.clientY - rect.top;  // Mouse position relative to card top

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles based on mouse distance from center
    // rotateX is based on Y offset (tilts up/down)
    // rotateY is based on X offset (tilts left/right)
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    // Set styling
    setTransitionStyle("none"); // Disable transitions during move for real-time responsiveness
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`);
  };

  const handleMouseLeave = () => {
    // Reset to flat position smoothly on exit
    setTransitionStyle("all 0.5s cubic-bezier(0.25, 1, 0.5, 1)");
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: transitionStyle,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* 3D Child container to make inner elements pop out */}
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  );
}
