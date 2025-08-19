"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function About() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Heading */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Profile + Description Row */}
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 w-full lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={assets.profile_img}
              alt="User profile"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </motion.div>

        {/* Description + Info Cards */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-Ovo">
            <motion.p
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              I’m <strong>Khushal V. Tajne</strong>, a recent B.Tech. graduate
              in Information Technology, passionate about crafting scalable,
              efficient software. I’m ready to bring my skills to a
              forward-thinking team, contribute to meaningful projects, and keep
              learning every day.
            </motion.p>

            <motion.p
              className="font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              🔹 Roles I’m Targeting: Backend Developer | Java Developer | Full
              Stack Developer
            </motion.p>

            {/* Info List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {infoList.map((item, index) => (
                <motion.li
                  key={index}
                  onClick={() => setSelectedCard(item)}
                  className="group relative border border-gray-300/50 rounded-2xl p-6 bg-white/40 
                            backdrop-blur-lg transition-all duration-500 ease-out cursor-pointer
                            hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-300/40 
                            hover:border-purple-400/60"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="flex items-center justify-center w-14 h-14 rounded-full 
                                  bg-purple-100 mb-4 shadow-sm group-hover:scale-110 
                                  transition-transform duration-500 ease-out"
                    whileHover={{ rotate: 10 }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={28}
                      height={28}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hint */}
                  <span className="block mt-2 text-xs text-purple-500 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    Click for details →
                  </span>

                  {/* Decorative hover line */}
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-purple-500 
                                  group-hover:w-full transition-all duration-500 ease-out rounded-bl-2xl rounded-br-2xl"></span>
                </motion.li>
              ))}
            </ul>

            {/* Tools Section */}
            <h4 className="my-6 text-gray-700 font-Ovo">Tools I Use</h4>
            <ul className="grid grid-cols-4 sm:grid-cols-6 gap-4 mt-6">
              {toolsData.map((tool, index) => (
                <motion.li
                  key={index}
                  className="flex flex-col items-center justify-center cursor-pointer hover:translate-y-1 duration-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Icon */}
                  <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] border border-gray-400 rounded-lg flex items-center justify-center bg-white shadow">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>

                  {/* Tool Name */}
                  <p className="mt-2 text-xs sm:text-sm text-gray-700 text-center">
                    {tool.name}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedCard(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-md w-[90%] shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4 shadow">
              <Image
                src={selectedCard.icon}
                alt={selectedCard.title}
                width={32}
                height={32}
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {selectedCard.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-3">{selectedCard.description}</p>

            {/* Details */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {selectedCard.details || "More details coming soon..."}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default About;
