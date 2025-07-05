import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

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
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="relative">
                {nav.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#00cea8] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[24px] h-[24px] mobile-lg:w-[26px] mobile-lg:h-[26px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 mobile-lg:p-5 sm:p-6 glass-card-strong absolute top-16 mobile-lg:top-18 sm:top-20 right-0 mx-2 mobile-lg:mx-3 sm:mx-4 my-2 min-w-[120px] mobile-lg:min-w-[140px] z-10 rounded-xl mobile-lg:rounded-2xl border border-white/10 shadow-2xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-3 mobile-lg:gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[14px] mobile-lg:text-[15px] sm:text-[16px] transition-all duration-300 hover:text-gradient-primary min-h-[44px] flex items-center ${
                    active === nav.title ? "text-gradient-primary" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="block py-2 px-1 w-full">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
