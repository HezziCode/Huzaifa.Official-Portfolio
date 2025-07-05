import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

// Simple direct scroll function as backup
const directScrollTo = (elementId) => {
  console.log(`🎯 Direct scroll to: ${elementId}`);
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = -100; // Navbar height offset
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    console.log(`✅ Direct scroll executed to position: ${y}`);
  } else {
    console.error(`❌ Direct scroll failed - element ${elementId} not found`);
  }
};

// Enhanced smooth scroll utility function
const smoothScrollTo = (elementId) => {
  console.log(`🔍 Attempting to scroll to: ${elementId}`); // Debug log

  // Multiple attempts to find element (sometimes DOM isn't ready)
  let attempts = 0;
  const maxAttempts = 5;

  const tryScroll = () => {
    attempts++;
    const element = document.getElementById(elementId);
    console.log(`📍 Attempt ${attempts}: Element found:`, element); // Debug log

    if (element) {
      const rect = element.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - 100; // Better calculation
      console.log(`🚀 Scrolling to offset: ${offsetTop}`); // Debug log

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      // Verify scroll happened
      setTimeout(() => {
        console.log(`✅ Current scroll position: ${window.pageYOffset}`);
      }, 1000);

    } else if (attempts < maxAttempts) {
      console.log(`⏳ Element not found, retrying in ${attempts * 100}ms...`);
      setTimeout(tryScroll, attempts * 100);
    } else {
      console.error(`❌ Element with ID '${elementId}' not found after ${maxAttempts} attempts`);
      // List all available IDs for debugging
      const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
      console.log(`📋 Available IDs:`, allIds);
    }
  };

  // Start trying immediately
  tryScroll();
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click with smooth scroll
  const handleNavClick = (navId, navTitle) => {
    console.log(`🎯 Navigation clicked: ${navTitle} -> ${navId}`); // Debug log
    setActive(navTitle);
    setToggle(false); // Close mobile menu first

    // Use direct scroll method (more reliable)
    setTimeout(() => {
      directScrollTo(navId);
    }, 100);

    // Also try the enhanced smooth scroll as backup
    setTimeout(() => {
      smoothScrollTo(navId);
    }, 200);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 mobile-lg:py-4 sm:py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-1.5 mobile-lg:gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-7 h-7 mobile-lg:w-8 mobile-lg:h-8 sm:w-9 sm:h-9 object-contain' />
          <p className='text-white text-[14px] mobile-lg:text-[16px] sm:text-[18px] font-bold cursor-pointer flex'>
            Huzaifa &nbsp;
            <span className='mobile-lg:block hidden'> | Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-gradient-primary" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-all duration-300 relative group`}
              onClick={() => handleNavClick(nav.id, nav.title)}
            >
              <span className="relative">
                {nav.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#00cea8] group-hover:w-full transition-all duration-300"></span>
              </span>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center relative'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[24px] h-[24px] mobile-lg:w-[26px] mobile-lg:h-[26px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer relative z-50'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              toggle ? "opacity-100 z-40" : "opacity-0 pointer-events-none -z-10"
            }`}
            onClick={() => setToggle(false)}
          />

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-[280px] mobile-lg:w-[320px] bg-primary/95 backdrop-blur-xl border-l border-white/20 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              toggle ? "translate-x-0 z-50" : "translate-x-full -z-10"
            }`}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20 bg-black/20">
              <div className="flex items-center gap-2">
                <img src={logo} alt='logo' className='w-8 h-8 object-contain' />
                <span className="text-white font-bold text-lg">Navigation</span>
              </div>
              <img
                src={close}
                alt='close'
                className='w-6 h-6 object-contain cursor-pointer hover:scale-110 transition-transform text-white'
                onClick={() => setToggle(false)}
              />
            </div>

            {/* Menu Items */}
            <ul className='list-none flex flex-col p-6 gap-4 bg-black/10'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[18px] transition-all duration-300 hover:text-white min-h-[56px] flex items-center relative group border border-white/10 rounded-xl ${
                    active === nav.title ? "text-white bg-gradient-to-r from-[#915EFF]/20 to-[#00cea8]/20 border-[#915EFF]/50" : "text-white/80 hover:bg-white/10"
                  }`}
                  onClick={() => handleNavClick(nav.id, nav.title)}
                >
                  <span className="block py-4 px-6 w-full rounded-xl transition-all duration-300 relative font-semibold">
                    {nav.title}
                    <span className="absolute bottom-1 left-6 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#00cea8] group-hover:w-[calc(100%-3rem)] transition-all duration-300"></span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Menu Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/30 border border-white/20 p-4 rounded-xl text-center backdrop-blur-sm">
                <p className="text-white/80 text-sm mb-3">
                  Let's build something amazing together
                </p>
                <button
                  onClick={() => handleNavClick('contact', 'Contact')}
                  className="bg-gradient-to-r from-[#915EFF] to-[#00cea8] text-white font-semibold py-3 px-6 rounded-lg w-full hover:scale-105 transition-transform duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
