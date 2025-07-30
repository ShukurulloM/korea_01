import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#252424] text-white pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16'>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          
          <div className="flex flex-col">
            <h2 className='text-lg md:text-xl font-semibold uppercase mb-4 md:mb-5'>Navigatsiya</h2>
            <nav className='flex flex-col gap-2 md:gap-3 text-sm md:text-[15px] text-white/80'>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/">Bosh sahifa</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/markazmaqsadi">Markazimiz maqsadi</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/yangiliklar">Yangiliklar</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/fotogalareya">Fotogalareya</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/savoljavob">Savollar va javoblar</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/aloqa">Aloqalar</Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h2 className='text-lg md:text-xl font-semibold uppercase mb-4 md:mb-5'>O'qishga qabul qilish</h2>
            <nav className='flex flex-col gap-2 md:gap-3 text-sm md:text-[15px] text-white/80'>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/">O'qishga kirish bosqichlari</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/markazdaoqishningafzalliklari">Markazimizda o'qishning afzalliklari</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/royhatdanotish">Ro'yhatdan o'tish</Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h2 className='text-lg md:text-xl font-semibold uppercase mb-4 md:mb-5'>Koreys tilini o'rganish</h2>
            <nav className='flex flex-col gap-2 md:gap-3 text-sm md:text-[15px] text-white/80'>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/oqishhaqidaumumiymalumot">O'qish haqida umumiy ma'lumot</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/oqitishuslublari">O'qish uslublari va o'quv qo'lanmalar</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/oqitishjarayoni">O'qish xonalar va jarayonlar</Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h2 className='text-lg md:text-xl font-semibold uppercase mb-4 md:mb-5'>Qidiruv</h2>
            <div className='relative mb-5'>
              <input 
                className='w-full py-2 pl-10 pr-4 rounded text-black focus:outline-none focus:ring-2 focus:ring-[#ec5714]' 
                type="search" 
                placeholder='Qidiruv...' 
              />
              <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
            </div>
            
            <div className='flex flex-col gap-2 text-sm md:text-[15px] text-white/80'>
              <div className='flex items-center gap-2'>
                <FaPhone className='text-[#ec5714]' />
                <p>+998 (71) 278-82-65</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaPhone className='text-[#ec5714] opacity-0' />
                <p>+998 (71) 273-17-48</p>
              </div>
              <div className='flex items-center gap-2 mb-3'>
                <FaPhone className='text-[#ec5714] opacity-0' />
                <p>+998 (99) 845-88-30</p>
              </div>
              
              <div className='flex items-center gap-2 mb-3'>
                <FaEnvelope className='text-[#ec5714]' />
                <address className='not-italic'>info@koruzeps.uz</address>
              </div>
              
              <div className='flex items-start gap-2'>
                <FaMapMarkerAlt className='text-[#ec5714] mt-1' />
                <p>Toshkent shahar, Chilonzor tumani, Lutfiy ko'chasi, 47-uy</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 md:mt-16 pt-6 border-t border-white/10'>
          <p className="text-xs md:text-sm text-center text-gray-400">
            Copyright © 2025 JV LLC Korean Uzbek Korean Language Center. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;