import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
      {/* Top contact info - Mobile optimized */}
      <div className="w-full bg-[#ec5714] text-white py-2 md:py-1">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end px-3 md:px-6 lg:px-20">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-xs">
            <a href="tel:+998500905577" className="flex items-center gap-1 whitespace-nowrap">
              <FaPhoneAlt className="text-[10px] md:text-xs" />
              <span>+998 (50) 090-55-77</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="https://www.google.com/maps/place/Tashkent,+Uzbekistan/@41.282597,69.279367,15z/data=!4m6!3m5!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734!16zL20vMGZsbXk?hl=en&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" 
               className="flex items-center gap-1 text-[10px] md:text-xs whitespace-nowrap overflow-hidden">
              <FaEnvelope className="text-[10px] md:text-xs" />
              <span className="truncate max-w-[140px] md:max-w-none">info@koruzeps.uz</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`transition-all duration-300 w-full ${scrolled ? 'bg-[#ec5714] opacity-95 shadow-md' : 'bg-transparent'}`}>
        <div className="w-full max-w-7xl mx-auto px-3 md:px-6 pt-3 pb-2 md:pb-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-white text-xl md:text-2xl font-bold uppercase whitespace-nowrap">
              KORUZEPS
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-wrap items-center gap-4 lg:gap-6 font-semibold text-sm text-white">
              {/* Markaz dropdown */}
              <div className="relative group">
                <div className="flex items-center uppercase cursor-pointer gap-1">
                  <Link to="/markaz" className="flex items-center gap-1 text-xs lg:text-sm">
                    Markaz
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" />
                    </svg>
                  </Link>
                </div>
                <div className="absolute z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg text-black mt-2 w-[160px] lg:w-[180px] transition-all duration-200 rounded-md overflow-hidden">
                  <Link className="block px-3 py-2 hover:bg-[#ec5714] hover:text-white text-sm" to="/markazhaqida" onClick={closeMenu}>Markaz haqida</Link>
                  <Link className="block px-3 py-2 hover:bg-[#ec5714] hover:text-white text-sm" to="/markazimiztarixi" onClick={closeMenu}>Markazimiz tarixi</Link>
                  <Link className="block px-3 py-2 hover:bg-[#ec5714] hover:text-white text-sm" to="/markazimizmaqsadi" onClick={closeMenu}>Markazimiz maqsadi</Link>
                </div>
              </div>

              {/* Koreys tilini o'rganish dropdown */}
              <div className="relative group">
                <div className="flex items-center uppercase cursor-pointer gap-1">
                  <Link to="/koreystiliniorganish" className="flex items-center gap-1 text-xs lg:text-sm">
                    Koreys tili
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" />
                    </svg>
                  </Link>
                </div>
                <div className="absolute z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg text-black mt-2 w-48 lg:w-60 transition-all duration-200 rounded-md overflow-hidden">
                  <Link className="block px-3 py-2 hover:bg-[#ec5714] hover:text-white text-sm" to="/oqishhaqidaumumiymalumot" onClick={closeMenu}>O'qish haqida ma'lumot</Link>
                  <Link className="block px-3 py-2 hover:bg-[#ec5714] hover:text-white text-sm" to="/oqitishuslublari" onClick={closeMenu}>O'qitish uslublari</Link>
                  <Link className="block px-3 py-2 hover:bg-[#ec5714] hover:text-white text-sm" to="/oqitishjarayoni" onClick={closeMenu}>O'qitish jarayoni</Link>
                </div>
              </div>

              {/* O'qishga qabul dropdown */}
              <div className="relative group">
                <div className="flex items-center uppercase cursor-pointer gap-1">
                  <Link to="/oqishgaqabul" className="flex items-center gap-1 text-xs lg:text-sm">
                    Qabul
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" />
                    </svg>
                  </Link>
                </div>
                <div className="absolute z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg text-black mt-2 w-48 lg:w-60 transition-all duration-200 rounded-md overflow-hidden">
                  <Link className="block px-3 py-2 hover:bg-[#ec5714] hover:text-white text-sm" to="/markazgaqabulbosqich" onClick={closeMenu}>Qabul bosqichlari</Link>
                  <Link className="block px-3 py-2 hover:bg-[#ec5714] hover:text-white text-sm" to="/markazdaoqishningafzalliklari" onClick={closeMenu}>O'qish afzalliklari</Link>
                  <Link className="block px-3 py-2 hover:bg-[#ec5714] hover:text-white text-sm" to="/royhatdanotish" onClick={closeMenu}>Ro'yhatdan o'tish</Link>
                </div>
              </div>

              {/* Other links */}
              <Link className="uppercase hover:text-orange-200 text-xs lg:text-sm whitespace-nowrap" to="/epstopik" onClick={closeMenu}>Eps-topik</Link>
              <Link className="uppercase hover:text-orange-200 text-xs lg:text-sm whitespace-nowrap" to="/yangiliklar" onClick={closeMenu}>Yangiliklar</Link>
              <Link className="uppercase hover:text-orange-200 text-xs lg:text-sm whitespace-nowrap" to="/savoljavob" onClick={closeMenu}>Savol-javob</Link>
              <Link className="uppercase hover:text-orange-200 text-xs lg:text-sm whitespace-nowrap" to="/aloqa" onClick={closeMenu}>Aloqa</Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white focus:outline-none p-1 bg-orange-600 rounded-md"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 w-4/5 max-w-sm h-full bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-40 pt-24 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col space-y-1 p-4 text-white h-full overflow-y-auto">
          {/* Close button for mobile */}
          <button 
            className="absolute top-4 right-4 text-white p-1"
            onClick={closeMenu}
            aria-label="Yopish"
          >
            <FaTimes size={24} />
          </button>

          {/* Mobile menu items */}
          <div className="border-b border-white/20 pb-3">
            <Link to="/markaz" className="block py-3 font-semibold text-lg" onClick={closeMenu}>Markaz</Link>
            <div className="pl-4">
              <Link className="block py-2 text-base border-l-2 border-orange-500 pl-3 my-1" to="/markazhaqida" onClick={closeMenu}>Markaz haqida</Link>
              <Link className="block py-2 text-base border-l-2 border-orange-500 pl-3 my-1" to="/markazimiztarixi" onClick={closeMenu}>Markazimiz tarixi</Link>
              <Link className="block py-2 text-base border-l-2 border-orange-500 pl-3 my-1" to="/markazimizmaqsadi" onClick={closeMenu}>Markazimiz maqsadi</Link>
            </div>
          </div>

          <div className="border-b border-white/20 pb-3">
            <Link to="/koreystiliniorganish" className="block py-3 font-semibold text-lg" onClick={closeMenu}>Koreys tilini o'rganish</Link>
            <div className="pl-4">
              <Link className="block py-2 text-base border-l-2 border-orange-500 pl-3 my-1" to="/oqishhaqidaumumiymalumot" onClick={closeMenu}>O'qish haqida ma'lumot</Link>
              <Link className="block py-2 text-base border-l-2 border-orange-500 pl-3 my-1" to="/oqitishuslublari" onClick={closeMenu}>O'qitish uslublari</Link>
              <Link className="block py-2 text-base border-l-2 border-orange-500 pl-3 my-1" to="/oqitishjarayoni" onClick={closeMenu}>O'qitish jarayoni</Link>
            </div>
          </div>

          <div className="border-b border-white/20 pb-3">
            <Link to="/oqishgaqabul" className="block py-3 font-semibold text-lg" onClick={closeMenu}>O'qishga qabul</Link>
            <div className="pl-4">
              <Link className="block py-2 text-base border-l-2 border-orange-500 pl-3 my-1" to="/markazgaqabulbosqich" onClick={closeMenu}>Qabul bosqichlari</Link>
              <Link className="block py-2 text-base border-l-2 border-orange-500 pl-3 my-1" to="/markazdaoqishningafzalliklari" onClick={closeMenu}>O'qish afzalliklari</Link>
              <Link className="block py-2 text-base border-l-2 border-orange-500 pl-3 my-1" to="/royhatdanotish" onClick={closeMenu}>Ro'yhatdan o'tish</Link>
            </div>
          </div>

          <Link className="block py-3 font-semibold text-lg border-b border-white/20" to="/epstopik" onClick={closeMenu}>Eps-topik</Link>
          <Link className="block py-3 font-semibold text-lg border-b border-white/20" to="/yangiliklar" onClick={closeMenu}>Yangiliklar</Link>
          <Link className="block py-3 font-semibold text-lg border-b border-white/20" to="/savoljavob" onClick={closeMenu}>Savol-javob</Link>
          <Link className="block py-3 font-semibold text-lg" to="/aloqa" onClick={closeMenu}>Aloqa</Link>

          {/* Contact info in mobile menu */}
          <div className="mt-6 p-4 bg-orange-600 rounded-lg">
            <div className="flex flex-col gap-3">
              <a href="tel:+998500905577" className="flex items-center gap-3 text-white">
                <FaPhoneAlt />
                <span className="font-semibold">+998 (50) 090-55-77</span>
              </a>
              <a href="https://www.google.com/maps/place/Tashkent,+Uzbekistan/@41.282597,69.279367,15z/data=!4m6!3m5!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734!16zL20vMGZsbXk?hl=en&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" 
                 className="flex items-center gap-3 text-white">
                <FaEnvelope />
                <span className="font-semibold">info@koruzeps.uz</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
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