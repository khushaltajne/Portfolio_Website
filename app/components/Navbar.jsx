"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
      transition-all duration-300
      ${isScroll
        ? "bg-[#0b0c10]/80 backdrop-blur-lg border-b border-[#00f5a0]/15 shadow-lg shadow-black/35"
        : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.span 
        whileHover={{ rotateY: 360, scale: 1.05 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-white cursor-pointer tracking-wider block"
      >
        Khushal<span className="text-[#00f5a0]">.</span>
      </motion.span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2.5 border border-white/5 bg-[#161a22]/40 backdrop-blur-sm">
        <li>
          <a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition-colors duration-300" href="#top">
            Home
          </a>
        </li>
        <li>
          <a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition-colors duration-300" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition-colors duration-300" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition-colors duration-300" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition-colors duration-300" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition-colors duration-300" href="#contacts">
            Contact
          </a>
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Contact button */}
        <a
          href="#contacts"
          className="hidden lg:flex items-center gap-2.5 px-5 py-2 border border-[#00f5a0]/30 hover:border-[#00f5a0] rounded-full font-mono text-xs uppercase tracking-wider text-white hover:bg-[#00f5a0]/5 transition duration-300"
        >
          Get In Touch
          <span className="text-[#00f5a0]">→</span>
        </a>

        {/* Mobile menu button */}
        <button className="block md:hidden p-1.5 rounded-lg border border-white/10 bg-[#161a22]/80" onClick={openMenu}>
          <Image src={assets.menu_white} alt="menu" className="w-5" />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <ul
        ref={sideMenuRef}
        className="fixed top-0 right-[-16rem] h-screen w-64 bg-[#0b0c10] border-l border-[#00f5a0]/20 px-6 py-10 z-50
        transition-transform duration-500 flex flex-col items-start gap-6 shadow-2xl"
      >
        <div className="absolute top-6 right-6 p-1 rounded-lg border border-white/10" onClick={closeMenu}>
          <Image src={assets.close_white} alt="close" className="w-4 cursor-pointer" />
        </div>

        <div className="mb-8">
          <span className="text-xl font-bold text-white tracking-wider">
            Khushal<span className="text-[#00f5a0]">.</span>
          </span>
        </div>

        <li><a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition" onClick={closeMenu} href="#top">Home</a></li>
        <li><a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition" onClick={closeMenu} href="#about">About</a></li>
        <li><a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition" onClick={closeMenu} href="#skills">Skills</a></li>
        <li><a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition" onClick={closeMenu} href="#experience">Experience</a></li>
        <li><a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition" onClick={closeMenu} href="#projects">Projects</a></li>
        <li><a className="font-mono text-xs uppercase tracking-wider text-[#c5c6c7] hover:text-[#00f5a0] transition" onClick={closeMenu} href="#contacts">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
