import { assets } from "@/assets/assets";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="mt-24 border-t border-[#1f2833]/40 bg-[#0b0c10]/40 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#1f2833]/40 pb-8">
          <div>
            <motion.span 
              whileHover={{ rotateY: 360, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white tracking-wider block cursor-pointer"
            >
              Khushal<span className="text-[#00f5a0]">.</span>
            </motion.span>
            <p className="text-xs text-[#c5c6c7]/50 mt-1 font-mono">
              FULLSTACK.DEV
            </p>
          </div>
          
          <div className="flex items-center gap-2.5 px-4 py-2 border border-[#1f2833] rounded-lg bg-[#161920]/40 text-[#c5c6c7] font-mono text-xs">
            <FiMail className="text-[#00f5a0] text-sm" />
            <a href="mailto:khushaltajnekt@gmail.com" className="hover:text-[#00f5a0] transition">
              khushaltajnekt@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 text-xs text-[#c5c6c7]/50 font-mono gap-4">
          <p>© 2026 Khushal Tajne. All rights reserved.</p>
          
          <ul className="flex items-center gap-8">
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://github.com/khushaltajne"
                className="hover:text-[#00f5a0] transition duration-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.linkedin.com/in/khushal-tajne"
                className="hover:text-[#00f5a0] transition duration-300"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;