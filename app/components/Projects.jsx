"use client";

import { projectsData } from "@/assets/assets";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 400; // adjust to match card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="w-full px-[8%] py-16 scroll-mt-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-4xl font-Ovo text-center mb-14 text-gray-900"
      >
        Projects
      </motion.h2>

      <div className="relative">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white/90 to-transparent z-10" />
        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white/90 to-transparent z-10" />

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gray-200/70 backdrop-blur-sm shadow-md rounded-full p-3 hover:bg-gray-300 transition"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gray-200/70 backdrop-blur-sm shadow-md rounded-full p-3 hover:bg-gray-300 transition"
        >
          ▶
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth px-2 scrollbar-hide snap-x snap-mandatory"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90, scale: 0.5 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }} // animates every time half of the card is visible
      transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      whileHover={{
        rotateY: 15,
        rotateX: 5,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      style={{ perspective: 1000 }}
      className="min-w-[300px] md:min-w-[380px] max-w-[380px] bg-white rounded-2xl p-6 border border-gray-200 flex-shrink-0 flex flex-col shadow-lg hover:shadow-xl hover:shadow-purple-500/40 snap-center mb-8 cursor-pointer"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-1">
        {project.name}
      </h3>

      {/* Description + Features */}
      <div className="relative flex-1 mb-4">
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 72 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 text-sm">{project.description}</p>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mt-3">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </motion.div>

        {(project.description.length > 100 || project.features.length > 3) && (
          <motion.button
            whileTap={{ scale: 0.95, rotate: 10 }}
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-purple-600 text-sm font-medium hover:underline"
          >
            {expanded ? "Show Less" : "Show More"}
          </motion.button>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-auto">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition"
          >
            <FaGithub /> Repo
          </a>
        )}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-500 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        ) : (
          <span className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg text-sm font-medium cursor-not-allowed">
            Live Not Available
          </span>
        )}
      </div>
    </motion.div>
  );
}
