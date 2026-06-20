"use client";
import { useEffect, useRef } from "react";

export default function ThreeDBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3D Point Structure
    class Point3D {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.origX = x;
        this.origY = y;
        this.origZ = z;
      }

      rotateX(angle) {
        const rad = (angle * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const y1 = this.y * cos - this.z * sin;
        const z1 = this.y * sin + this.z * cos;
        this.y = y1;
        this.z = z1;
      }

      rotateY(angle) {
        const rad = (angle * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const x1 = this.x * cos + this.z * sin;
        const z1 = -this.x * sin + this.z * cos;
        this.x = x1;
        this.z = z1;
      }

      project(width, height, fov, viewerDistance) {
        const factor = fov / (viewerDistance + this.z);
        const x2d = this.x * factor + width / 2;
        const y2d = this.y * factor + height / 2;
        return { x: x2d, y: y2d, scale: factor };
      }
    }

    // Generate a 3D Torus (Donut) mesh for technical visual appeal
    const points = [];
    const R = 180; // Major radius
    const r = 60;  // Minor radius
    const radialSegments = 24;
    const tubularSegments = 16;

    for (let i = 0; i < radialSegments; i++) {
      const u = (i / radialSegments) * Math.PI * 2;
      for (let j = 0; j < tubularSegments; j++) {
        const v = (j / tubularSegments) * Math.PI * 2;
        const x = (R + r * Math.cos(v)) * Math.cos(u);
        const y = (R + r * Math.cos(v)) * Math.sin(u);
        const z = r * Math.sin(v);
        points.push(new Point3D(x, y, z));
      }
    }

    // Floating Background Starfield Particles
    const stars = [];
    const numStars = 60;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 400 - 200,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
      });
    }

    // Track mouse coordinates
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = (e.clientX - width / 2) * 0.05;
      mouseRef.current.targetY = (e.clientY - height / 2) * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let angleX = 0.15;
    let angleY = 0.2;

    // Render Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Dark background gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, "#0f1219");
      bgGrad.addColorStop(1, "#07080c");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse follow parallax
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw background stars
      ctx.fillStyle = "rgba(0, 245, 160, 0.4)";
      stars.forEach((star) => {
        // Drift
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around boundaries
        if (Math.abs(star.x) > width) star.x = -star.x;
        if (Math.abs(star.y) > height) star.y = -star.y;

        // Apply mouse-influence parallax offsets
        const displayX = star.x - mouse.x * 0.3;
        const displayY = star.y - mouse.y * 0.3;

        // 3D projection for stars
        const fov = 400;
        const viewerDist = 300;
        const factor = fov / (viewerDist + star.z);
        const x2d = displayX * factor + width / 2;
        const y2d = displayY * factor + height / 2;

        if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
          const size = Math.max(0.5, factor * 1.5);
          ctx.beginPath();
          ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Update Torus points rotation
      // Add slight autonomous rotation + mouse tilt rotation
      angleX = 0.1 + mouse.y * 0.005;
      angleY = 0.15 + mouse.x * 0.005;

      const projectedPoints = points.map((p) => {
        // Create temporary point to apply rotations
        const temp = new Point3D(p.origX, p.origY, p.origZ);
        // Base spin
        temp.rotateX(p.spinX || 0);
        temp.rotateY(p.spinY || 0);

        // Apply mouse offsets
        temp.rotateX(mouse.y * 0.5);
        temp.rotateY(mouse.x * 0.5);

        // Project
        const fov = 450;
        const viewerDistance = 350;
        return temp.project(width, height, fov, viewerDistance);
      });

      // Update rotation variables for next frame
      points.forEach((p) => {
        p.spinX = (p.spinX || 0) + 0.12;
        p.spinY = (p.spinY || 0) + 0.18;
      });

      // Draw wireframe connection lines
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(0, 245, 160, 0.08)";

      for (let i = 0; i < radialSegments; i++) {
        for (let j = 0; j < tubularSegments; j++) {
          const currentIndex = i * tubularSegments + j;
          const nextRadialIndex = ((i + 1) % radialSegments) * tubularSegments + j;
          const nextTubularIndex = i * tubularSegments + ((j + 1) % tubularSegments);

          const p1 = projectedPoints[currentIndex];
          const p2 = projectedPoints[nextRadialIndex];
          const p3 = projectedPoints[nextTubularIndex];

          // Draw radial line
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();

          // Draw tubular line
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.stroke();
        }
      }

      // Draw mesh vertices as tiny glow points
      projectedPoints.forEach((p, idx) => {
        // Draw only half of points for clean look and performance
        if (idx % 2 === 0) {
          ctx.fillStyle = `rgba(0, 217, 245, ${Math.min(0.7, p.scale * 0.5)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(1, p.scale * 0.8), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
