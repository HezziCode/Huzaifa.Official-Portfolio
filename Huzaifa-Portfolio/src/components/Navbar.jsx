import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

// Smooth scroll utility function
const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
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
    setActive(navTitle);
    smoothScrollTo(navId);
    setToggle(false); // Close mobile menu
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
            className='w-[24px] h-[24px] mobile-lg:w-[26px] mobile-lg:h-[26px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer z-30'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-20 transition-opacity duration-300 ${
              toggle ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setToggle(false)}
          />

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-[280px] mobile-lg:w-[320px] glass-card-strong border-l border-white/10 shadow-2xl z-25 transform transition-transform duration-300 ease-in-out ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <img src={logo} alt='logo' className='w-8 h-8 object-contain' />
                <span className="text-white font-bold text-lg">Menu</span>
              </div>
              <img
                src={close}
                alt='close'
                className='w-6 h-6 object-contain cursor-pointer hover:scale-110 transition-transform'
                onClick={() => setToggle(false)}
              />
            </div>

            {/* Menu Items */}
            <ul className='list-none flex flex-col p-6 gap-6'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] transition-all duration-300 hover:text-gradient-primary min-h-[48px] flex items-center relative group ${
                    active === nav.title ? "text-gradient-primary" : "text-secondary"
                  }`}
                  style={{
                    animationDelay: toggle ? `${index * 0.1}s` : '0s'
                  }}
                  onClick={() => handleNavClick(nav.id, nav.title)}
                >
                  <span className="block py-3 px-4 w-full rounded-xl hover:bg-white/5 transition-all duration-300 relative">
                    {nav.title}
                    <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#00cea8] group-hover:w-[calc(100%-2rem)] transition-all duration-300"></span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Menu Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-card p-4 rounded-xl text-center">
                <p className="text-secondary text-sm">
                  Let's build something amazing together
                </p>
                <button
                  onClick={() => handleNavClick('contact', 'Contact')}
                  className="btn-primary mt-3 w-full"
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
