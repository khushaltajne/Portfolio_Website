"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
      transition-colors duration-300
      ${isScroll
        ? "bg-white/70 backdrop-blur-md shadow-sm"
        : "bg-transparent"
      }`}
    >
      {/* Logo */}
     
      <span className="text-3xl font-bold text-black cursor-pointer mr-14">
                Khushal<span className="text-pink-600">.</span>
                </span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
        <li><a className="font-Ovo text-black" href="#top">Home</a></li>
        <li><a className="font-Ovo text-black" href="#about">About</a></li>
        <li><a className="font-Ovo text-black" href="#experience">Experience</a></li>
        <li><a className="font-Ovo text-black" href="#projects">Projects</a></li>
        <li><a className="font-Ovo text-black" href="#contacts">Contacts</a></li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Contact button */}
        <a
          href="#contacts"
          className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full ml-4 font-Ovo 
          text-black hover:bg-gray-100 transition"
        >
          Contact
          <Image src={assets.arrow_icon} alt="icon" className="w-3" />
        </a>

        {/* Mobile menu button */}
        <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image src={assets.menu_black} alt="menu" className="w-6" />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <ul
        ref={sideMenuRef}
        className="fixed top-0 right-[-16rem] h-screen w-64 bg-white px-6 py-10 z-50
        transition-transform duration-500 flex flex-col items-start gap-6"
      >
        <div className="absolute top-6 right-6" onClick={closeMenu}>
          <Image src={assets.close_black} alt="close" className="w-5 cursor-pointer" />
        </div>

        <li><a className="font-Ovo text-black" onClick={closeMenu} href="#top">Home</a></li>
        <li><a className="font-Ovo text-black" onClick={closeMenu} href="#about">About</a></li>
        <li><a className="font-Ovo text-black" onClick={closeMenu} href="#experience">Experience</a></li>
        <li><a className="font-Ovo text-black" onClick={closeMenu} href="#projects">Projects</a></li>
        <li><a className="font-Ovo text-black" onClick={closeMenu} href="#contacts">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
