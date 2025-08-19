import { assets } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';


function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      >
        <Image src={assets.user_profile} alt="Profile" className="rounded-full w-32 shadow-lg" />
      </motion.div>

      {/* Intro Line */}
      <motion.h3
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Khushal Tajne
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
        >
          <Image src={assets.hand_icon} alt="wave" className="w-6" />
        </motion.div>
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        A Full Stack Developer.
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="italic text-gray-500 mb-4 font-bold"
      >
        "Turning ideas into impactful software"
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        <a
          href="#contacts"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>

        <a
          href="/JavaFullstackDeveloperKhushal.pdf"
          download={true}
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
        >
          My Resume
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>
      </motion.div>
    </div>
  );
}

export default Header;
