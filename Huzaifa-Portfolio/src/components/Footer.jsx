import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 sm:py-8 bg-black-100/55 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="flex justify-center gap-6 sm:gap-8 mb-4 sm:mb-6">
          <a
            href="https://www.instagram.com/huzaifa_dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:text-[#915EFF] hover:glow-purple transition-all duration-300"
          >
            <FaInstagram size={18} className="sm:text-xl" />
          </a>
          <a
            href="https://x.com/@Huzaifa20008"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:text-[#915EFF] hover:glow-purple transition-all duration-300"
          >
            <FaXTwitter size={18} className="sm:text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-huzaifa-9102282b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:text-[#915EFF] hover:glow-purple transition-all duration-300"
          >
            <FaLinkedin size={18} className="sm:text-xl" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-secondary text-xs sm:text-sm mb-2">© 2024 Muhammed Huzaifa. All rights reserved.</p>
          <p className="text-secondary/60 text-xs">Built with Next.js, React & AI ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;