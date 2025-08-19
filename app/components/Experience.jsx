"use client";
import { experienceData } from "@/assets/assets";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full px-[12%] py-16 scroll-mt-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-Ovo text-center mb-14 text-gray-900"
      >
        Experience
      </motion.h2>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        className={`grid gap-10 ${
          experienceData.length === 1
            ? "grid-cols-1 place-items-center"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </motion.div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  const [showMore, setShowMore] = useState(false);

  const pointsToShow = showMore ? exp.description : exp.description.slice(0, 2);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      whileHover={{
        scale: 1.03,
        rotateX: 2,
        rotateY: -2,
        transition: { duration: 0.3 },
      }}
      className="relative w-full max-w-lg p-8 rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-lg"
    >
      {/* Decorative bar */}
      <motion.div
        layoutId="decorative-bar"
        className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      ></motion.div>

      {/* Role & Company */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-1">{exp.role}</h3>
      <p className="text-purple-600 font-medium mb-2">@ {exp.company}</p>

      {/* Duration */}
      <p className="text-gray-500 text-sm mb-5 italic">{exp.duration}</p>

      {/* Description */}
      <AnimatePresence>
        <motion.ul
          key={showMore ? "expanded" : "collapsed"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="list-disc list-inside text-gray-700 space-y-2 mb-4 overflow-hidden"
        >
          {pointsToShow.map((point, i) => (
            <li key={i} className="leading-relaxed">
              {point}
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      {/* Show More / Show Less button */}
      {exp.description.length > 2 && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore(!showMore)}
          className="text-purple-600 text-sm font-medium hover:underline focus:outline-none transition-colors"
        >
          {showMore ? "Show Less ▲" : "Show More ▼"}
        </motion.button>
      )}
    </motion.div>
  );
}
