
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="w-full bg-[#ec5714] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto flex justify-end px-4 md:px-20">
          <div className="flex gap-4">
            <a href="tel:+998500905577">+998 (50) 090-55-77</a>
            <a href="mailto:info@koruzeps.uz">info@koruzeps.uz</a>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 w-full ${scrolled ? 'bg-[#ec5714] opacity-85 shadow-md' : 'bg-transparent'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold uppercase">
              KORUZEPS
            </Link>

            <nav className="hidden md:flex flex-wrap items-center gap-6 font-semibold text-sm text-white">

              <div className="relative group">
                <div className="flex items-center uppercase cursor-pointer gap-1">
                  <Link to="/markaz" className="flex items-center gap-1">
                    Markaz
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" />
                    </svg>
                  </Link>
                </div>
                <div className="absolute z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-md text-black mt-2 w-[180px] transition-all duration-200">
                  <Link className="block px-4 py-2 hover:bg-[#ec5714] hover:text-white" to="/markazhaqida" onClick={closeMenu}>Markaz haqida</Link>
                  <Link className="block px-4 py-2 hover:bg-[#ec5714] hover:text-white" to="/markazimiztarixi" onClick={closeMenu}>Markazimiz tarixi</Link>
                  <Link className="block px-4 py-2 hover:bg-[#ec5714] hover:text-white" to="/markazimizmaqsadi" onClick={closeMenu}>Markazimiz maqsadi</Link>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center uppercase cursor-pointer gap-1">
                  <Link to="/koreystiliniorganish" className="flex items-center gap-1">
                    Koreys tilini o'rganish
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" />
                    </svg>
                  </Link>
                </div>
                <div className="absolute z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-md text-black mt-2 w-60 transition-all duration-200">
                  <Link className="block whitespace-nowrap px-4 py-2 hover:bg-[#ec5714] hover:text-white" to="/oqishhaqidaumumiymalumot" onClick={closeMenu}>O'qish haqida umumiy ma'lumot</Link>
                  <Link className="block px-4 py-2 hover:bg-[#ec5714] hover:text-white" to="/oqitishuslublari" onClick={closeMenu}>O'qitish uslublari</Link>
                  <Link className="block px-4 py-2 hover:bg-[#ec5714] hover:text-white" to="/oqitishjarayoni" onClick={closeMenu}>O'qitish jarayoni</Link>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center uppercase cursor-pointer gap-1">
                  <Link to="/oqishgaqabul" className="flex items-center gap-1">
                    O'qishga qabul
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" />
                    </svg>
                  </Link>
                </div>
                <div className="absolute z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-md text-black mt-2 w-60 transition-all duration-200">
                  <Link className="block px-4 py-2 hover:bg-[#ec5714] hover:text-white" to="/markazgaqabulbosqich" onClick={closeMenu}>Markazga qabul bosqichlari</Link>
                  <Link className="block px-4 py-2 hover:bg-[#ec5714] hover:text-white" to="/markazdaoqishningafzalliklari" onClick={closeMenu}>Markazda o'qishning afzalliklari</Link>
                  <Link className="block px-4 py-2 hover:bg-[#ec5714] hover:text-white" to="/royhatdanotish" onClick={closeMenu}>Ro'yhatdan o'tish</Link>
                </div>
              </div>

              <Link className="uppercase hover:text-[#ec5714]" to="/epstopik" onClick={closeMenu}>Eps-topik</Link>
              <Link className="uppercase hover:text-[#ec5714]" to="/yangiliklar" onClick={closeMenu}>Yangiliklar</Link>
              <Link className="uppercase hover:text-[#ec5714]" to="/savoljavob" onClick={closeMenu}>Savollar javoblar</Link>
              <Link className="uppercase hover:text-[#ec5714]" to="/aloqa" onClick={closeMenu}>Aloqalar</Link>
            </nav>


            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-40 pt-20 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col space-y-4 p-4 text-white">
          <div className="border-b border-white/20 pb-2">
            <Link to="/markaz" className="block py-2 font-semibold" onClick={closeMenu}>Markaz</Link>
            <div className="pl-4">
              <Link className="block py-1 text-sm" to="/markazhaqida" onClick={closeMenu}>Markaz haqida</Link>
              <Link className="block py-1 text-sm" to="/markazimiztarixi" onClick={closeMenu}>Markazimiz tarixi</Link>
              <Link className="block py-1 text-sm" to="/markazimizmaqsadi" onClick={closeMenu}>Markazimiz maqsadi</Link>
            </div>
          </div>

          <div className="border-b border-white/20 pb-2">
            <Link to="/koreystiliniorganish" className="block py-2 font-semibold" onClick={closeMenu}>Koreys tilini o'rganish</Link>
            <div className="pl-4">
              <Link className="block py-1 text-sm" to="/oqishhaqidaumumiymalumot" onClick={closeMenu}>O'qish haqida umumiy ma'lumot</Link>
              <Link className="block py-1 text-sm" to="/oqitishuslublari" onClick={closeMenu}>O'qitish uslublari</Link>
              <Link className="block py-1 text-sm" to="/oqitishjarayoni" onClick={closeMenu}>O'qitish jarayoni</Link>
            </div>
          </div>

          <div className="border-b border-white/20 pb-2">
            <Link to="/oqishgaqabul" className="block py-2 font-semibold" onClick={closeMenu}>O'qishga qabul</Link>
            <div className="pl-4">
              <Link className="block py-1 text-sm" to="/markazgaqabulbosqich" onClick={closeMenu}>Markazga qabul bosqichlari</Link>
              <Link className="block py-1 text-sm" to="/markazdaoqishningafzalliklari" onClick={closeMenu}>Markazda o'qishning afzalliklari</Link>
              <Link className="block py-1 text-sm" to="/royhatdanotish" onClick={closeMenu}>Ro'yhatdan o'tish</Link>
            </div>
          </div>

          <Link className="block py-2 font-semibold border-b border-white/20" to="/epstopik" onClick={closeMenu}>Eps-topik</Link>
          <Link className="block py-2 font-semibold border-b border-white/20" to="/yangiliklar" onClick={closeMenu}>Yangiliklar</Link>
          <Link className="block py-2 font-semibold border-b border-white/20" to="/savoljavob" onClick={closeMenu}>Savollar javoblar</Link>
          <Link className="block py-2 font-semibold" to="/aloqa" onClick={closeMenu}>Aloqalar</Link>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;